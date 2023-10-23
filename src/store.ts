import { create } from 'zustand';

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
