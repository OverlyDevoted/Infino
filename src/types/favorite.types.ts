export interface FavoritePhoto {
  id: string;
  secret: string;
  server: string;
  owner: string;
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
