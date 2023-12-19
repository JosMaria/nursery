import { createContext, useContext } from 'react';
import { RepertoryPageType } from '../types/repertoryTypes';

type ItemsContextType = {
  pageContent: RepertoryPageType;
};

export const ItemsContext = createContext<ItemsContextType | null>(null);

export const useItemsContext = (): ItemsContextType => {
  const itemsContext = useContext(ItemsContext);

  if (!itemsContext) {
    throw new Error('useItemsContext should be used inside The ItemsContextProvider');
  }

  return itemsContext;
};
