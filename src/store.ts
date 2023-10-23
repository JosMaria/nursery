import { create } from 'zustand';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { RoleType } from './types';

type TokenStateType = {
  token: string;
};

type TokenActionType = {
  changeToken: (token: string) => void;
};

export const useToken = create<TokenStateType & TokenActionType>((set) => ({
  token: '',
  changeToken: (token) => set(() => ({ token })),
}));

export const useUserRole = (): RoleType => {
  const { token } = useToken();
  
  if (token.length === 0) {
    return 'USER';
  
  } else {
    const { role } = jwt_decode<JwtPayload & { role: RoleType }>(token);
    return role;
  }
};
