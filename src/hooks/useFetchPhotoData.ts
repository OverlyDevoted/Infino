import { ControlledFlickrPhotosSearchParams, PhotosData } from '@/types/flickPhotos.types';
import { getFlickrPhotoDataURL } from '@/utils/getFlickrPhotoDataURL';
import { useEffect, useRef, useState } from 'react';

export const useFetchPhotoData = ({ page, text }: ControlledFlickrPhotosSearchParams) => {
  const [photoData, setPhotoData] = useState<PhotosData>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState<unknown>();

  const abortControllerRef = useRef<AbortController | null>();

  useEffect(() => {
    const fetchPhotoData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);
      try {
        const url = getFlickrPhotoDataURL({ page, text });
        const response = await fetch(url, { signal: abortControllerRef.current?.signal });
        if (response.ok) {
          const data = await response.json();
          setPhotoData(data as PhotosData);
        }
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotoData();
  }, [page, text]);

  return { photoData, isLoading, error };
};
