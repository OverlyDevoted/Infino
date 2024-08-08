import './App.scss';
import Loader from './components/Loader/Loader';
import { useFetchData } from './hooks/useFetchData';
import { Photo, PhotosData } from './types/photo.types';
import { getFlickrPhotoDataURL } from './utils/getFlickrPhotoDataURL';
import { useScrollBottom } from './hooks/useScrollBottom';
import { useCallback, useEffect, useState } from 'react';
import FlickrImage from './components/FlickrImage/FlickrImage';

function App() {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { data: currentPagePhotos, isLoading } = useFetchData<PhotosData>(
    getFlickrPhotoDataURL({ page, text: 'nature and animals' })
  );

  const handleReachBottom = useCallback(() => {
    if (currentPagePhotos) setPage((prev) => prev + 1);
  }, [currentPagePhotos]);

  useScrollBottom(handleReachBottom);

  useEffect(() => {
    if (currentPagePhotos) setPhotos((prev) => [...prev, ...currentPagePhotos.photos.photo]);
  }, [currentPagePhotos]);

  return (
    <main className="main">
      <div className="main__image-container">
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
