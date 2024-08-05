import './App.css';
import { useFetchData } from './hooks/useFetchData';
import { PhotosData } from './types/flick.types';
import { getFlickrPhotoDataURL } from './utils/getFlickrPhotoDataURL';
import { getFlickrPhotoURL } from './utils/getFlickrPhotoURL';

function App() {
  const { data: photoData, isLoading } = useFetchData<PhotosData>(
    getFlickrPhotoDataURL({ page: 1, text: 'nature and animals' })
  );
  if (isLoading) return <>Waiting on data</>;
  return (
    <>
      {photoData?.photos.photo.map((photo) => {
        return (
          <img
            src={getFlickrPhotoURL({ id: photo.id, secret: photo.secret, serverId: photo.server })}
          />
        );
      })}
    </>
  );
}

export default App;
