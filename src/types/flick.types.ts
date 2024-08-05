interface FlickrBaseSearchParams {
  api_key: string;
  method: 'flickr.profile.getProfile' | 'flickr.photos.search';
  format: 'json';
  nojsoncallback: '1';
}

export type FlickrPhotosSearchParams = FlickrBaseSearchParams & {
  text: string;
  per_page: number;
  page: number;
};

export type ControlledFlickrPhotosSearchParams = Pick<FlickrPhotosSearchParams, 'page' | 'text'>;

export type FlickrUserProfileSearchParams = FlickrBaseSearchParams & {
  user_id: string;
};

export type ControlledFlickrUserProfileSearchParams = Pick<
  FlickrUserProfileSearchParams,
  'user_id'
>;

export interface FlickrPhotoParams {
  serverId: string;
  id: string;
  secret: string;
  sizeSuffix?: string;
}

export interface PhotosData {
  photos: Photos;
  stat: string;
}

export interface Photos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Photo[];
}

export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}
