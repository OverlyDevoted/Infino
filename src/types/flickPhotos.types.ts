export interface FlickrPhotosSearchParams {
  api_key: string;
  method: string;
  nojsoncallback: number;
  format: string;
  text: string;
  per_page: number;
  page: number;
}

export type ControlledFlickrPhotosSearchParams = Pick<FlickrPhotosSearchParams, 'page' | 'text'>;

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
