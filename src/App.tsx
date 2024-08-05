import './App.css';
import { useFetchPhotoData } from './hooks/useFetchPhotoData';

function App() {
  const { photoData, isLoading } = useFetchPhotoData({ page: 1, text: 'garden' });
  if (isLoading) return <>Waiting on data</>;
  return <>{photoData}</>;
}

export default App;
