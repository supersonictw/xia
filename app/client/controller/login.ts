import utf8 from 'utf8';
import crypto from 'node-bignumber';
import {sha256} from 'js-sha256';
import ky from 'ky';
import Constant from '../data/const';
import lineType from '../protocol/line_types.js';

export class LoginController {
  public user: any = {};
  public status: string = '';
  public clients: any;

  constructor(clients: any) {
    this.clients = clients;
  }

  update(user: any): void {
    this.user = user;
  }

  async action(): Promise<boolean | undefined> {
    try {
      const loginRequest = await this.getCredential();
      const loginResponse = await this.clients.login
          .loginZ(loginRequest)
          .catch((error: any) => {
            this.setStatus(error.reason || error.message || 'Login failed');
            return error;
          });

      if (loginResponse && loginResponse !== this.status) {
        try {
          return await this.verifyPinCode(loginResponse);
        } catch (e) {
          console.error('Verify pin code failed:', e);
          return false;
        }
      }
    } catch (e: any) {
      console.error('Login action error:', e);
      this.setStatus(e.message || 'Authentication error');
      return false;
    }
  }

  getCredentialMessage(sessionKey: string): string {
    const getChar = (text: string) => String.fromCharCode(text.length);
    const sessionKeyMessage = getChar(sessionKey) + sessionKey;
    const identityMessage = getChar(this.user.identity) + this.user.identity;
    const passwordMessage = getChar(this.user.password) + this.user.password;
    const message = sessionKeyMessage + identityMessage + passwordMessage;
    return utf8.encode(message);
  }

  async getCredential(): Promise<any> {
    const rsaKey = await this.clients.auth.getRSAKeyInfo(
        lineType.IdentityProvider.LINE,
    );
    const message = this.getCredentialMessage(
        rsaKey.sessionKey,
    );
    const rsa = new crypto.Key();
    rsa.setPublic(rsaKey.nvalue, rsaKey.evalue);
    const encryptedMessage = rsa.encrypt(message).toString();
    const prefix = Constant.LOCAL_STORAGE.ACCESS_CERTIFICATE_PREFIX;
    const certificateCookie = `${prefix}_${sha256(this.user.identity)}`;

    let certificate = null;
    if (typeof window !== 'undefined') {
      certificate = window.localStorage.getItem(certificateCookie);
    }

    return new lineType.LoginRequest({
      type: lineType.LoginType.ID_CREDENTIAL,
      identityProvider: lineType.IdentityProvider.LINE,
      identifier: rsaKey.keynm,
      password: encryptedMessage,
      keepLoggedIn: true,
      accessLocation: this.user.ip_addr,
      systemName: Constant.NAME,
      e2eeVersion: 0,
      certificate,
    });
  }

  async verifyPinCode(loginResult: any): Promise<boolean> {
    this.setStatus(
        `Confirm your PinCode with ${loginResult.pinCode} in 2 minutes.`,
    );

    switch (loginResult.type) {
      case lineType.LoginResultType.REQUIRE_DEVICE_CONFIRM: {
        const targetUrl = Constant.httpUrlWrapper(
            Constant.LINE.HOST,
            Constant.LINE.PATH.CERTIFICATE,
        );

        const headers = {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
          'X-Line-Access': loginResult.verifier,
          'X-Line-Application': Constant.LINE.APPLICATION_IDENTITY,
        };

        const accessKey: any = await ky.get(targetUrl, {headers}).json();
        const verifyRequest = new lineType.LoginRequest({
          type: lineType.LoginType.QRCODE,
          identityProvider: lineType.IdentityProvider.LINE,
          verifier: accessKey.result.verifier,
          keepLoggedIn: true,
          accessLocation: this.user.ip_addr,
          systemName: Constant.NAME,
          e2eeVersion: 0,
        });

        const verifyResult = await this.clients.login.loginZ(verifyRequest);
        if (verifyResult.type === lineType.LoginResultType.SUCCESS) {
          this.setStatus('Successful');
          this.setAuthToken(verifyResult.authToken);
          this.setAccessCertificate(verifyResult.certificate);
          return true;
        }
        this.setStatus('Unknown Error');
        return false;
      }
      case lineType.LoginResultType.REQUIRE_QRCODE:
        this.setStatus(
            'Login with QR Code required, but there should be nothing to do.',
        );
        return false;
      case lineType.LoginResultType.SUCCESS:
        this.setStatus('Successful');
        this.setAuthToken(loginResult.authToken);
        return true;
      default:
        this.setStatus('Unknown result type');
        return false;
    }
  }

  setStatus(message: string): void {
    this.status = message;
  }

  setAuthToken(authToken: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(Constant.LOCAL_STORAGE.ACCESS_KEY, authToken);
    }
  }

  setAccessCertificate(certificate: string): void {
    if (typeof window !== 'undefined') {
      const prefix = Constant.LOCAL_STORAGE.ACCESS_CERTIFICATE_PREFIX;
      const cookieName = `${prefix}_${sha256(this.user.identity)}`;
      window.localStorage.setItem(cookieName, certificate);
    }
  }
}

export default LoginController;
