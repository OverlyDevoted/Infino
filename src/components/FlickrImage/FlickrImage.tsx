import { getFlickrPhotoURL } from '@/utils/getFlickrPhotoURL';
import { getFlickrProfileDataURL } from '@/utils/getFlickrProfileDataURL';
import './FlickrImage.scss';
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

  const userIdentificationText = userData ? userData.person.username._content : 'Loading';

  return (
    <div className="img-container">
      <img
        loading="lazy"
        className="img-container__img"
        src={getFlickrPhotoURL({ id: photoId, secret: secret, serverId: server })}
        alt={title}
      />
      <div className="img-container__info-container">
        <h2 className="img-container__author">{`${userIdentificationText}`}</h2>
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
