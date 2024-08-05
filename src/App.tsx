import './App.css';
import FlickrImage from './components/FlickrImage/FlickrImage';
import { useFetchData } from './hooks/useFetchData';
import { PhotosData } from './types/photo.types';
import { getFlickrPhotoDataURL } from './utils/getFlickrPhotoDataURL';

function App() {
  const { data: photoData, isLoading } = useFetchData<PhotosData>(
    getFlickrPhotoDataURL({ page: 1, text: 'nature and animals' })
  );
  if (isLoading) return <>Waiting on data</>;
  return (
    <>
      {photoData?.photos.photo.map((photo) => {
        return (
          <FlickrImage
            key={photo.id}
            photoId={photo.id}
            secret={photo.secret}
            server={photo.server}
            userId={photo.owner}
            title={photo.title}
          />
        );
      })}
    </>
  );
}

export default App;
