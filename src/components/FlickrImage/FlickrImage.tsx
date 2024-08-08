import { getFlickrPhotoURL } from '@/utils/getFlickrPhotoURL';
import { getFlickrProfileDataURL } from '@/utils/getFlickrProfileDataURL';
import './FlickrImage.scss';
import { useFetchData } from '@/hooks/useFetchData';
import { UserData } from '@/types/user.types';
import Button from '../Button/Button';
import { useEffect, useRef, useState } from 'react';

interface FlickrImageProps {
  photoId: string;
  secret: string;
  server: string;
  userId: string;
  title: string;
}

const FlickrImage = ({ photoId, secret, server, userId, title }: FlickrImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { data: userData } = useFetchData<UserData>(getFlickrProfileDataURL({ user_id: userId }));

  const userIdentificationText = userData ? userData.person.username._content : 'Loading';

  useEffect(() => {
    imgRef.current?.addEventListener('load', () => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className={`img-container${isLoaded ? ' img-container--loaded' : ''}`}>
      <img
        loading="lazy"
        ref={imgRef}
        className="img-container__img"
        src={getFlickrPhotoURL({ id: photoId, secret: secret, serverId: server })}
        alt={title}
      />
      <div className="img-container__info-container">
        <h2 className="img-container__author">{`${userIdentificationText}`}</h2>
        <div className="img-container__divider" />
        <p className="img-container__title">{title}</p>
        <div className="img-container__fav-btn">
          <Button
            onClick={() => {
              console.log('add to favorites');
            }}
            title="Favorite"
          />
        </div>
      </div>
    </div>
  );
};

export default FlickrImage;
