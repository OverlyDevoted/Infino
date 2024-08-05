interface FlickrBaseSearchParams {
  api_key: string;
  method: 'flickr.people.getInfo' | 'flickr.photos.search';
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
