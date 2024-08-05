import { useEffect, useRef, useState } from 'react';

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState<unknown>();

  const abortControllerRef = useRef<AbortController | null>();

  useEffect(() => {
    const fetchPhotoData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal: abortControllerRef.current?.signal });
        if (response.ok) {
          const data = await response.json();
          setData(data as T);
        }
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotoData();
  }, [url]);

  return { data, isLoading, error };
};
