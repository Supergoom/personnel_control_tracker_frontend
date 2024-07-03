import { useEffect } from "react";


export const useClickOutside = (ref: any, callback: () => void) => {

    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    
    useEffect(() => {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);

      return () => {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      };
    });
  };
  