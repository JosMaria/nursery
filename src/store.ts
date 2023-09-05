import { create } from 'zustand';

type TokenStoreType = {
  token: string;
  changeToken: (newToken: string) => void;
  removeToken: () => void;
};

export const useToken = create<TokenStoreType>((set) => ({
  token: '',
  changeToken: (newToken) => set(() => ({ token: newToken })),
  removeToken: () => set({ token: '' }),
}));
