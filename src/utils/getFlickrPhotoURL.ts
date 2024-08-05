import { FLICK_PHOTO_URL } from '@/constants/flickr.constants';
import { FlickrPhotoParams } from '@/types/flickPhotos.types';

export const getFlickrPhotoURL = (params: FlickrPhotoParams) => {
  const photoParams = new URLSearchParams({ ...params });
  return `${FLICK_PHOTO_URL}${photoParams.get('serverId')}/${photoParams.get(
    'id'
  )}_${photoParams.get('secret')}.jpg`;
};
