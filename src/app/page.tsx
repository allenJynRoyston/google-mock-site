'use client';

import {Header, SearchBar, Logo, Skills, Footer} from '../components';
import { UseDarkMode } from '../hooks';


export default function Home() {
  const { isDarkMode, toggleDarkMode, isLoaded } = UseDarkMode();

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className={`min-h-screen flex flex-col ${
      isDarkMode 
        ? 'bg-[#202124] text-[#e8eaed]' 
        : 'bg-white text-[#3c4043]'
    }`}>
      {/* Header - Google style */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main content - centered like Google */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 -mt-16">
        {/* Logo area - name instead of Google logo */}
        <Logo isDarkMode={isDarkMode} />

        {/* Search bar style CV info */}
        <SearchBar isDarkMode={isDarkMode} />

        {/* Google-style buttons */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => window.open('/CV AUG 2025 v3.pdf', '_blank')}
            className={`google-btn ${
              isDarkMode 
                ? 'bg-[#303134] border-[#303134] text-[#bdc1c6] hover:bg-[#3c4043] hover:border-[#5f6368] hover:shadow-md' 
                : 'bg-[#f8f9fa] border-[#f8f9fa] text-[#3c4043] hover:bg-[#f1f3f4] hover:border-[#dadce0]'
            }`}
          >
            View Resume
          </button>
          <button 
            onClick={() => window.location.href = '/search?q=all'}
            className={`google-btn ${
              isDarkMode 
                ? 'bg-[#303134] border-[#303134] text-[#bdc1c6] hover:bg-[#3c4043] hover:border-[#5f6368] hover:shadow-md' 
                : 'bg-[#f8f9fa] border-[#f8f9fa] text-[#3c4043] hover:bg-[#f1f3f4] hover:border-[#dadce0]'
            }`}
          >
            I'm Feeling Lucky
          </button>
        </div>

        {/* Skills - Google doodle style */}
        <Skills isDarkMode={isDarkMode} />
      </main>

      {/* Footer - Google style */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
