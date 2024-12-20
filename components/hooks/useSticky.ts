import { useEffect, useState, useRef, useCallback } from 'react';

const useSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = useCallback(() => {
    if (element.current) {
      // @ts-ignore
      window.scrollY > element.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false);
    }
  }, []);

  //TODO This function handles the scroll performance issue
  const debounce = useCallback((func: any, wait = 20, immediate = true) => {
    let timeOut: any;
    return () => {
      let context = this,
        args = 'arguments';
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky, element };
};

export default useSticky;
