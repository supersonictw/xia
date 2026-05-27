import thrift from 'thrift';
import {EventEmitter} from 'events';
import {Constant} from './data/const';
import * as talkService from './protocol/TalkService.js';

export class FetchConnection extends EventEmitter {
  public options: any;
  public wpos: number;
  public rpos: number;
  public useCORS: boolean;
  public send_buf: string | ArrayBuffer;
  public recv_buf: any;
  public transport: any;
  public protocol: any;
  public headers: Record<string, string>;
  public url: string;
  public seqId2Service: Record<string, string>;
  public client: any;
  private recv_buf_sz: number = 0;

  constructor(host: string, port: number | string | undefined, options: any) {
    super();
    this.options = options || {};
    this.wpos = 0;
    this.rpos = 0;
    this.useCORS = options && options.useCORS;
    this.send_buf = '';
    this.recv_buf = '';
    this.transport = options.transport || thrift.TBufferedTransport;
    this.protocol = options.protocol || thrift.TCompactProtocol;
    this.headers = options.headers || {};

    const prefix = options.https ? 'https://' : 'http://';
    const path = options.path || '/';

    if (port === '') {
      port = undefined;
    }

    if (!port || port === 80 || port === '80' || port === 443 || port === '443') {
      this.url = prefix + host + path;
    } else {
      this.url = prefix + host + ':' + port + path;
    }

    this.seqId2Service = {};
  }

  public isOpen(): boolean {
    return true;
  }

  public open(): void {}

  public close(): void {}

  public async flush(): Promise<any> {
    if (this.url === undefined || this.url === '') {
      return this.send_buf;
    }

    try {
      let body: any = this.send_buf;

      // If we are passing string, convert to Uint8Array/Buffer if needed
      if (typeof body === 'string') {
        const encoder = new TextEncoder();
        body = encoder.encode(body);
      }

      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          ...this.headers,
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      this.setRecvBuffer(arrayBuffer);
    } catch (error) {
      this.emit('error', error);
    }
  }

  public setRecvBuffer(buf: any): void {
    this.recv_buf = buf;
    this.recv_buf_sz = this.recv_buf.byteLength || this.recv_buf.length || 0;
    this.wpos = this.recv_buf_sz;
    this.rpos = 0;

    let data;
    if (Object.prototype.toString.call(buf) === '[object ArrayBuffer]') {
      data = new Uint8Array(buf);
    } else {
      data = buf;
    }

    // Use Buffer from global or polyfill
    const thing = typeof Buffer !== 'undefined' ? Buffer.from(data) : data;

    this.transport.receiver(this.__decodeCallback.bind(this))(thing);
  }

  private __decodeCallback(transport_with_data: any): void {
    const proto = new this.protocol(transport_with_data);
    try {
      while (true) {
        const header = proto.readMessageBegin();
        const dummy_seqid = header.rseqid * -1;
        let client = this.client;
        const service_name = this.seqId2Service[header.rseqid];
        if (service_name) {
          client = this.client[service_name];
          delete this.seqId2Service[header.rseqid];
        }

        client._reqs[dummy_seqid] = (err: any, success: any) => {
          transport_with_data.commitPosition();
          const clientCallback = client._reqs[header.rseqid];
          delete client._reqs[header.rseqid];
          if (clientCallback) {
            clientCallback(err, success);
          }
        };

        if (client['recv_' + header.fname]) {
          client['recv_' + header.fname](proto, header.mtype, dummy_seqid);
        } else {
          delete client._reqs[dummy_seqid];
          this.emit(
              'error',
              new thrift.TApplicationException(
                  thrift.TApplicationExceptionType.WRONG_METHOD_NAME,
                  'Received a response to an unknown RPC function',
              ),
          );
        }
      }
    } catch (e: any) {
      if (e instanceof thrift.InputBufferUnderrunError) {
        transport_with_data.rollbackPosition();
      } else {
        throw e;
      }
    }
  }

  public read(len: number): string {
    const avail = this.wpos - this.rpos;
    if (avail === 0) {
      return '';
    }
    let give = len;
    if (avail < len) {
      give = avail;
    }
    const ret = this.recv_buf.substr(this.rpos, give);
    this.rpos += give;
    return ret;
  }

  public readAll(): any {
    return this.recv_buf;
  }

  public write(buf: string | ArrayBuffer): void {
    this.send_buf = buf;
    this.flush();
  }

  public getSendBuffer(): string | ArrayBuffer {
    return this.send_buf;
  }
}

export const createFetchClient = (ServiceClient: any, connection: any): any => {
  if (ServiceClient.Client) {
    ServiceClient = ServiceClient.Client;
  }
  const writeCb = (buf: any, seqid: any) => {
    connection.write(buf, seqid);
  };
  const transport = new connection.transport(undefined, writeCb);
  const client = new ServiceClient(transport, connection.protocol);
  transport.client = client;
  connection.client = client;
  return client;
};

export const lineClient = (path: string, authToken: string | null = null): any => {
  const header: Record<string, string> = {
    'X-Line-Application': Constant.LINE.APPLICATION_IDENTITY,
  };

  if (authToken !== null) {
    header['X-Line-Access'] = authToken;
  }

  const host = Constant.httpUrlWrapper(Constant.LINE.HOST, null, true);
  const port = Constant.USE_HTTPS ? 443 : 80;
  const opts = {
    transport: thrift.TBufferedTransport,
    protocol: thrift.TCompactProtocol,
    headers: header,
    https: Constant.USE_HTTPS,
    path: path,
    useCORS: true,
  };

  const connection = new FetchConnection(host, port, opts);
  const client = createFetchClient(talkService, connection);

  connection.on('error', (err: any) => {
    console.error('FetchConnection error:', err);
  });

  return client;
};

export default lineClient;
