import { create } from 'zustand';
import jwt_decode from 'jwt-decode';
import { RoleType } from './types';
import { devtools, persist } from 'zustand/middleware';

type State = { token: string };
type Action = { updateToken: (token: State['token']) => void };

export const useTokenStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        updateToken: (tokenUpdated) => set(() => ({ token: tokenUpdated })),
      }),
      { name: 'tokenStore' }
    )
  )
);

type ProfileBaseType = {
  username: string | null;
  role: RoleType | null;
};

type ClaimsType = {
  role: RoleType;
  sub: string;
  iat: number;
  exp: number;
};

export const useProfileBase = (): ProfileBaseType => {
  const { token } = useTokenStore();

  if (token.length === 0) {
    return { username: null, role: null };
  } else {
    const { sub, role } = jwt_decode<ClaimsType>(token);
    return { username: sub, role };
  }
};
