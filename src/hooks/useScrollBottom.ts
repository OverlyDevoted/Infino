import { useEffect } from 'react';

export const useScrollBottom = (onReachBottom: () => void) => {
  useEffect(() => {
    const onScrollBottom = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;
      if (isReachBottom) onReachBottom();
    };
    window.addEventListener('scroll', onScrollBottom);
    return () => {
      window.removeEventListener('scroll', onScrollBottom);
    };
  }, [onReachBottom]);
};
