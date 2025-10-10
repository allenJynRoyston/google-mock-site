'use client';

import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Check if user has a preference stored
      const stored = localStorage.getItem('darkMode');
      if (stored) {
        setIsDarkMode(JSON.parse(stored));
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Only update DOM and localStorage after component is loaded on client
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode, isLoaded]);

  const toggleDarkMode = () => {
    console.log('Toggle called, current isDarkMode:', isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode, isLoaded };
}