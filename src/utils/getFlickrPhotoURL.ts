import { FLICKR_PHOTO_URL } from '@/constants/flickr.constants';
import { FlickrPhotoParams } from '@/types/flickr.types';

export const getFlickrPhotoURL = (params: FlickrPhotoParams) => {
  const photoParams = new URLSearchParams({ ...params });
  return `${FLICKR_PHOTO_URL}${photoParams.get('serverId')}/${photoParams.get(
    'id'
  )}_${photoParams.get('secret')}.jpg`;
};
