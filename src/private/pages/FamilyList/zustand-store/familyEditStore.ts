import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

type FamilyEditStateType = {
  familyId: number;
  familyName: string;
};

type FamilyEditActionsType = {
  changeValue: (newValue: FamilyEditStateType) => void;
  reset: () => void;
};

const initialFamilyEditState: FamilyEditStateType = {
  familyId: 0,
  familyName: '',
};

export const useFamilyEditStore = create<FamilyEditStateType & FamilyEditActionsType>()(
  devtools((set) => ({
    ...initialFamilyEditState,
    changeValue: (newValue) => {
      set(newValue);
    },
    reset: () => {
      set(initialFamilyEditState);
    },
  }))
);
