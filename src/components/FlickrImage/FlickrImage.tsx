import { getFlickrPhotoURL } from '@/utils/getFlickrPhotoURL';
import { getFlickrProfileDataURL } from '@/utils/getFlickrProfileDataURL';
import styles from './FlickrImage.module.scss';
import { useFetchData } from '@/hooks/useFetchData';
import { UserData } from '@/types/user.types';
import Button from '../Button/Button';

interface FlickrImageProps {
  photoId: string;
  secret: string;
  server: string;
  userId: string;
  title: string;
}

const FlickrImage = ({ photoId, secret, server, userId, title }: FlickrImageProps) => {
  const { data: userData } = useFetchData<UserData>(getFlickrProfileDataURL({ user_id: userId }));

  return (
    <div className={styles['img-container']}>
      <img
        className={styles['img-container__img']}
        loading="lazy"
        src={getFlickrPhotoURL({ id: photoId, secret: secret, serverId: server })}
        alt={title}
      />
      <div className={styles['img-container__info-container']}>
        <h2
          className={styles['img-container__author']}>{`${userData?.person.realname._content}`}</h2>
        <p>{title}</p>
        <Button
          onClick={() => {
            console.log('add to favorites');
          }}
          title="Favorite"
        />
      </div>
    </div>
  );
};

export default FlickrImage;
