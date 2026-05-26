import {jwtDecode} from "jwt-decode";

interface JwtPayload {
  exp: number;
  user: UserProfile;
}

export interface UserProfile {
  nickname: string;
  avatar_hash: string;
  [key: string]: unknown;
}

export const useProfile = (): UserProfile | null => {
  if (!import.meta.client) {
    return null;
  }

  const {
    public: publicConfig
  } = useRuntimeConfig();

  const {
    saraTokenName,
  } = publicConfig;

  const saraToken = localStorage.getItem(saraTokenName);
  if (!saraToken) {
    return null;
  }

  try {
    const data = jwtDecode<JwtPayload>(saraToken);
    if (Date.now() >= data.exp * 1000) {
      throw new Error("sara token expired");
    }
    return data?.user;
  } catch (e) {
    console.warn(e);
    localStorage.removeItem(saraTokenName);
    location.reload();
    return null;
  }
};
