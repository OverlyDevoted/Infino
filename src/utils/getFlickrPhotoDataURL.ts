import {
  FLICKR_REST_URL,
  FLICKR_API_KEY,
  FLICKR_PHOTO_DATA_FETCH_PER_PAGE,
} from '@/constants/flickr.constants';
import { ControlledFlickrPhotosSearchParams, FlickrPhotosSearchParams } from '@/types/flickr.types';
const getFlickrPhotoDataURLParams = (params: FlickrPhotosSearchParams) => {
  const stringParams = {
    ...params,
    nojsoncallback: params.nojsoncallback.toString(),
    page: params.page.toString(),
    per_page: params.per_page.toString(),
  };
  return new URLSearchParams(stringParams);
};

export const getFlickrPhotoDataURL = (params: ControlledFlickrPhotosSearchParams) => {
  const { text, page } = params;
  if (!text || !page) {
    throw new Error(
      "Wrong parameters for Flickr photo data URL. 'text' should not be empty and 'page' should not be 0"
    );
  }
  const urlParams = new URLSearchParams(
    getFlickrPhotoDataURLParams({
      api_key: FLICKR_API_KEY,
      format: 'json',
      method: 'flickr.photos.search',
      per_page: FLICKR_PHOTO_DATA_FETCH_PER_PAGE,
      text: params.text.trim(),
      page: Math.abs(params.page),
      nojsoncallback: '1',
    })
  );
  return `${FLICKR_REST_URL}?${urlParams.toString()}`;
};
