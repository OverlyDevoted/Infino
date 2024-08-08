import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@styles/index.scss';
import { FavoritePhotosProvider } from './utils/FavoritePhotosProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoritePhotosProvider>
      <App />
    </FavoritePhotosProvider>
  </React.StrictMode>
);
