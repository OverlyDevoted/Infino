import { FLICKR_API_KEY, FLICKR_REST_URL } from '@/constants/flickr.constants';
import {
  ControlledFlickrUserProfileSearchParams,
  FlickrUserProfileSearchParams,
} from '@/types/flickr.types';

export const getFlickrProfileDataURL = (params: ControlledFlickrUserProfileSearchParams) => {
  const fullParams: FlickrUserProfileSearchParams = {
    user_id: params['user_id'],
    api_key: FLICKR_API_KEY,
    format: 'json',
    method: 'flickr.people.getInfo',
    nojsoncallback: '1',
  };
  const urlParams = new URLSearchParams({ ...fullParams });

  return `${FLICKR_REST_URL}?${urlParams.toString()}`;
};
