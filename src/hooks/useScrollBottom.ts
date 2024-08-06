import { useEffect } from 'react';

export const useScrollBottom = (callback: () => void) => {
  useEffect(() => {
    const onScrollBottom = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;
      if (isReachBottom) callback();
    };
    window.addEventListener('scroll', onScrollBottom);
    return () => {
      window.removeEventListener('scroll', onScrollBottom);
    };
  }, [callback]);
};
