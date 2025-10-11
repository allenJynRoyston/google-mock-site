'use client';

import { useEffect } from 'react';
import {Header, SearchBar, Logo, MainCTA, Skills, Footer} from '../components';
import { UseDarkMode } from '../hooks';


export default function Home() {
  const { isDarkMode, toggleDarkMode, isLoaded } = UseDarkMode();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        window.location.href = '/search?q=all';
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className={`min-h-screen flex flex-col ${
      isDarkMode 
        ? 'bg-[#202124] text-[#e8eaed]' 
        : 'bg-white text-[#3c4043]'
    }`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-1 flex flex-col justify-center items-center px-4 -mt-16">
        <Logo isDarkMode={isDarkMode} />
        <SearchBar isDarkMode={isDarkMode} />
        <MainCTA isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
