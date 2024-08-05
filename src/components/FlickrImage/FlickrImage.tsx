import { getFlickrPhotoURL } from '@/utils/getFlickrPhotoURL';

interface FlickrImageProps {
  photoId: string;
  secret: string;
  server: string;
}

const FlickrImage = ({ photoId, secret, server }: FlickrImageProps) => {
  return (
    <>
      <img src={getFlickrPhotoURL({ id: photoId, secret: secret, serverId: server })} />
    </>
  );
};

export default FlickrImage;
