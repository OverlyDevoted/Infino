import { getFlickrPhotoURL } from '@/utils/getFlickrPhotoURL';
import { getFlickrProfileDataURL } from '@/utils/getFlickrProfileDataURL';
import styles from './FlickrImage.module.scss';

interface FlickrImageProps {
  photoId: string;
  secret: string;
  server: string;
  userId: string;
  title: string;
}

const FlickrImage = ({ photoId, secret, server, userId, title }: FlickrImageProps) => {
  console.log(getFlickrProfileDataURL({ user_id: userId }));

  return (
    <div className={styles['img-container']}>
      <img
        className={styles['img-container__img']}
        loading="lazy"
        src={getFlickrPhotoURL({ id: photoId, secret: secret, serverId: server })}
        alt={title}
      />
    </div>
  );
};

export default FlickrImage;
