export interface FavoritePhoto {
  photoId: string;
  secret: string;
  server: string;
  userId: string;
  title: string;
}

export type FavoritePhotos = FavoritePhoto[];

export type FavoritePhotoAction = {
  type: 'add' | 'remove';
  photo: FavoritePhoto;
};

export type FavoritePhotoContext = {
  modifyFavoritePhotos: (payload: FavoritePhotoAction) => void;
  favoritePhotos: FavoritePhotos;
};
