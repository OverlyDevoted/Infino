import './App.css';
import { useFetchPhotoData } from './hooks/useFetchPhotoData';
import { getFlickrPhotoURL } from './utils/getFlickrPhotoURL';

function App() {
  const { photoData, isLoading } = useFetchPhotoData({ page: 1, text: 'programming apps' });
  if (isLoading) return <>Waiting on data</>;
  return (
    <>
      {photoData?.photos.photo.map((photo) => {
        console.log({ id: photo.id, secret: photo.secret, serverId: photo.server });
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
