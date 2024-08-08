import { FAVORITE_PHOTOS_LOCAL_STORAGE_KEY } from '@/constants/event.constants';
import { FavoritePhotos } from '@/types/favorite.types';

export const getFavorites = () => {
  return (
    (JSON.parse(
      localStorage.getItem(FAVORITE_PHOTOS_LOCAL_STORAGE_KEY) as string
    ) as FavoritePhotos) ?? []
  );
};
