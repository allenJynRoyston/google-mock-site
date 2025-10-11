'use client';

import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isLoaded) {      
      const lsDarkMode = localStorage.getItem('darkMode');
      if (lsDarkMode) {
        setIsDarkMode(JSON.parse(lsDarkMode));
      } else {        
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
      setIsLoaded(true);
    }
  }, []);



  const toggleDarkMode = () => {
    if (isLoaded) {      
      localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
    }

    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode, isLoaded };
}