import { FavoritePhotosContext } from '@/utils/FavoritePhotosProvider';
import { useContext } from 'react';

export const useFavoritePhotoContext = () => {
  const context = useContext(FavoritePhotosContext);
  if (!context) throw new Error('Context must be used inside the provider');
  return context;
};
