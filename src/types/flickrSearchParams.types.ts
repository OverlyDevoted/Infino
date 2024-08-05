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
