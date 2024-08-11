import './App.scss';
import Loader from './components/Loader/Loader';
import { useFetchData } from './hooks/useFetchData';
import { Photo, PhotosData } from './types/photo.types';
import { getFlickrPhotoDataURL } from './utils/getFlickrPhotoDataURL';
import { useScrollBottom } from './hooks/useScrollBottom';
import { useCallback, useEffect, useState } from 'react';
import FlickrImage from './components/FlickrImage/FlickrImage';
import { getFavorites } from './utils/getFavorites';

function App() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [favoritePhotos, setFavoritePhotos] = useState<Photo[]>([]);

  const { data: currentPagePhotos, isLoading } = useFetchData<PhotosData>(
    getFlickrPhotoDataURL({ page, text: 'nature and animals' })
  );

  const handleReachBottom = useCallback(() => {
    if (currentPagePhotos) setPage((prev) => prev + 1);
  }, [currentPagePhotos]);

  useScrollBottom(handleReachBottom);

  useEffect(() => {
    const favoritePhotos = getFavorites();
    const photos: Photo[] = favoritePhotos.map((photo) => {
      return { ...photo } as Photo;
    });
    setFavoritePhotos(photos);
  }, []);

  useEffect(() => {
    if (!currentPagePhotos) return;

    const unfilteredPhotos = currentPagePhotos.photos.photo;
    const photosFilteredByFavorites = unfilteredPhotos.filter((photo) => {
      return !favoritePhotos.some((favPhoto) => favPhoto.id === photo.id);
    });

    if (!photosFilteredByFavorites.length) {
      setPage((prev) => prev + 1);
      return;
    }
    setPhotos((prev) => {
      const lastImages = prev.slice(Math.max(-prev.length - 1, -12));
      const photosFilteredByLast = photosFilteredByFavorites.filter((photo) => {
        return !lastImages.some((lastImage) => lastImage.id === photo.id);
      });
      return [...prev, ...photosFilteredByLast];
    });
  }, [currentPagePhotos, favoritePhotos]);

  return (
    <main className="main">
      <div className="main__image-container">
        {favoritePhotos.map((photo) => {
          return (
            <FlickrImage
              photoId={photo.id}
              secret={photo.secret}
              server={photo.server}
              title={photo.title}
              userId={photo.owner}
              key={photo.id}
            />
          );
        })}
        {photos.map((photo) => {
          return (
            <FlickrImage
              photoId={photo.id}
              secret={photo.secret}
              server={photo.server}
              title={photo.title}
              userId={photo.owner}
              key={photo.id}
            />
          );
        })}
      </div>
      <div className="main__loader">{<Loader disabled={isLoading} />}</div>
    </main>
  );
}

export default App;
