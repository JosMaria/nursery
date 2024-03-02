import { useItemsContext } from '../context/ItemsContext';

export const useRepertoryItems = () => {
  const {
    pageContent: { empty, content },
  } = useItemsContext();

  return { empty, content };
};
