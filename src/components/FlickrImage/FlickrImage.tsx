import { getFlickrPhotoURL } from '@/utils/getFlickrPhotoURL';
import { getFlickrProfileDataURL } from '@/utils/getFlickrProfileDataURL';
import './FlickrImage.scss';
import { useFetchData } from '@/hooks/useFetchData';
import { UserData } from '@/types/user.types';
import Button from '../Button/Button';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlickrImageProps } from './FlickrImage.types';
import { useFavoritePhotoContext } from '@/hooks/useFavoritePhotoContext';

const FlickrImage = ({ photoId, secret, server, userId, title }: FlickrImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { favoritePhotos, modifyFavoritePhotos } = useFavoritePhotoContext();
  const imgRef = useRef<HTMLImageElement>(null);
  const { data: userData } = useFetchData<UserData>(getFlickrProfileDataURL({ user_id: userId }));

  useEffect(() => {
    imgRef.current?.addEventListener('load', () => {
      setIsLoaded(true);
    });
  }, []);

  const authorName = useMemo(() => {
    if (!userData) return 'Loading';
    if (userData.person.realname) return userData.person.realname._content;
    return userData.person.username._content;
  }, [userData]);

  const isFavored = useMemo(() => {
    return favoritePhotos.some((photo) => photo.photoId === photoId);
  }, [favoritePhotos, photoId]);

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
        <h2 className="img-container__title">{title}</h2>
        <div className="img-container__divider" />
        <p className="img-container__author">{`${authorName}`}</p>
        <div className="img-container__fav-btn">
          <Button
            onClick={() => {
              modifyFavoritePhotos({
                type: isFavored ? 'remove' : 'add',
                photo: { photoId, secret, server, title, userId },
              });
            }}
            title="Favorite"
            isActive={isFavored}
          />
        </div>
      </div>
    </div>
  );
};

export default FlickrImage;
