import {
  FAVORITE_PHOTOS_LOCAL_STORAGE_KEY,
  FAVORITE_PHOTOS_LOCAL_STORAGE_UPDATE,
} from '@/constants/event.constants';
import { FavoritePhotoAction, FavoritePhotoContext } from '@/types/favorite.types';
import { getFavorites } from '@/utils/getFavorites';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

const modifyFavoritePhotos = (payload: FavoritePhotoAction) => {
  const storageFavoritePhotos = getFavorites();
  const { photo, type } = payload;
  switch (type) {
    case 'add': {
      if (storageFavoritePhotos.some((storedPhoto) => storedPhoto.id === photo.id)) break;
      storageFavoritePhotos.push(photo);
      localStorage.setItem(
        FAVORITE_PHOTOS_LOCAL_STORAGE_KEY,
        JSON.stringify(storageFavoritePhotos)
      );
      window.dispatchEvent(new Event(FAVORITE_PHOTOS_LOCAL_STORAGE_UPDATE));
      break;
    }
    case 'remove': {
      const filteredState = storageFavoritePhotos.filter(
        (storedPhoto) => storedPhoto.id !== photo.id
      );
      localStorage.setItem(FAVORITE_PHOTOS_LOCAL_STORAGE_UPDATE, JSON.stringify(filteredState));
      window.dispatchEvent(new Event(FAVORITE_PHOTOS_LOCAL_STORAGE_UPDATE));
      break;
    }
    default:
      throw new Error('Unknown error');
  }
};

export const FavoritePhotosContext = createContext<FavoritePhotoContext | null>(null);

interface FavoritePhotosProps {
  children: ReactNode;
}

export const FavoritePhotosProvider = ({ children }: FavoritePhotosProps) => {
  const [favoritePhotos, setFavoritePhotos] = useState(getFavorites());

  useEffect(() => {
    const onFavoritePhotosLocalStorageUpdate = () => {
      setFavoritePhotos(getFavorites());
    };
    window.addEventListener(
      FAVORITE_PHOTOS_LOCAL_STORAGE_UPDATE,
      onFavoritePhotosLocalStorageUpdate
    );
    return () => {
      window.removeEventListener(
        FAVORITE_PHOTOS_LOCAL_STORAGE_UPDATE,
        onFavoritePhotosLocalStorageUpdate
      );
    };
  });

  const favoritePhotosInterface = useMemo(() => {
    return { favoritePhotos, modifyFavoritePhotos };
  }, [favoritePhotos]);

  return (
    <FavoritePhotosContext.Provider value={favoritePhotosInterface}>
      {children}
    </FavoritePhotosContext.Provider>
  );
};
