'use client';

import { useState, useEffect } from 'react';
import { SearchHeader } from '../../components';
import { UseDarkMode } from '../../hooks';
import { getAllResults, getImageResults, getVideoResults, getNewsResults } from '../../data/searchResults';

interface SearchResult {
  url: string;
  title: string;
  description: string;
  relatedLinks?: string[];
}

export default function SearchPage() {
  const { isDarkMode, toggleDarkMode } = UseDarkMode();
  const [query, setQuery] = useState('all');
  const [searchTime, setSearchTime] = useState('0.00');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); 
      setQuery(hash || 'all');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const time = `0.${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 9)}`;
    setSearchTime(time);
  }, []);

  const getSearchResults = () => {
    switch (query) {
      case 'images':
        return getImageResults();
      case 'videos':
        return getVideoResults();
      case 'news':
        return getNewsResults();
      case 'all':
      default:
        return getAllResults();
    }
  };

  // Helper function to extract YouTube video ID from URL (only for embeddable videos)
  const getYouTubeVideoId = (url: string): string | null => {
    // Only extract video ID if it's a watchable video (has watch?v= or youtu.be/)
    // Exclude channel URLs (@username) and other non-video URLs
    if (url.includes('/@') || url.includes('/channel/') || url.includes('/user/')) {
      return null; // This is a channel URL, not a video
    }
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Helper function to check if URL is a YouTube channel
  const isYouTubeChannel = (url: string): boolean => {
    return url.includes('/@') || url.includes('/channel/') || url.includes('/user/');
  };

  const searchResults = getSearchResults();
  const resultCount = searchResults.length;
  const searchTerm = `Allen Royston ${query === 'all' ? 'Full Stack Developer' : query}`;

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-[#202124] text-[#e8eaed]' 
        : 'bg-white text-[#3c4043]'
    }`}>
      <SearchHeader 
        isDarkMode={isDarkMode} 
        searchTerm={searchTerm} 
        toggleDarkMode={toggleDarkMode} 
        query={query} 
      />

      <main className={`px-6 py-6 ${query === 'images' ? 'max-w-none' : 'max-w-4xl'}`}>
        <div className={`text-sm mb-4 ${
          isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'
        }`}>
          About {resultCount} results ({searchTime} seconds)
        </div>

        {/* Images Layout */}
        {query === 'images' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {searchResults.map((result, index) => (
              <div key={index} className="group cursor-pointer">
                <a 
                  href={result.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Placeholder image */}
                  <div className={`aspect-square rounded-lg overflow-hidden mb-2 ${
                    isDarkMode ? 'bg-[#303134]' : 'bg-[#f1f3f4]'
                  } hover:shadow-lg transition-shadow duration-200`}>
                    <img 
                      src={result.url}
                      alt={result.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Image info */}
                  <div className="space-y-1">
                    <h3 className={`text-sm font-medium line-clamp-2 group-hover:underline ${
                      isDarkMode ? 'text-[#e8eaed]' : 'text-[#3c4043]'
                    }`}>
                      {result.title}
                    </h3>
                    <p className={`text-xs truncate ${
                      isDarkMode ? 'text-[#9aa0a6]' : 'text-[#70757a]'
                    }`}>
                      {result.url.replace('https://', '').replace('http://', '')}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : query === 'videos' ? (
          /* Videos Layout with YouTube Embeds */
          <div className="space-y-6">
            {searchResults.map((result, index) => {
              const videoId = getYouTubeVideoId(result.url);
              const isChannel = isYouTubeChannel(result.url);
              return (
                <div key={index} className="group">
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Video Preview */}
                    <div className="flex-shrink-0">
                      {videoId ? (
                        <div className="relative">
                          <iframe
                            width="360"
                            height="202"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={result.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        </div>
                      ) : (
                        <a 
                          href={result.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className={`w-[360px] h-[202px] rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 ${
                            isDarkMode ? 'bg-[#303134]' : 'bg-[#f1f3f4]'
                          }`}>
                            {isChannel ? (
                              <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-2">
                                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                  </svg>
                                </div>
                                <span className={`text-sm ${
                                  isDarkMode ? 'text-[#9aa0a6]' : 'text-[#70757a]'
                                }`}>
                                  YouTube Channel
                                </span>
                              </div>
                            ) : (
                              <span className={`text-sm ${
                                isDarkMode ? 'text-[#9aa0a6]' : 'text-[#70757a]'
                              }`}>
                                Video Preview
                              </span>
                            )}
                          </div>
                        </a>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="w-4 h-4 rounded-full bg-red-600 mr-3 flex-shrink-0" />
                        <div className={`text-sm truncate ${
                          isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'
                        }`}>
                          {result.url.includes('youtube.com') ? 'YouTube' : result.url}
                        </div>
                      </div>
                      
                      <h3 className="mb-2">
                        <a 
                          href={result.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-xl hover:underline ${
                            isDarkMode ? 'text-[#8ab4f8]' : 'text-[#1a0dab]'
                          }`}
                        >
                          {result.title}
                        </a>
                      </h3>
                      
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-[#bdc1c6]' : 'text-[#4d5156]'
                      }`}>
                        {result.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Regular List Layout */
          <div className="space-y-6">
            {searchResults.map((result, index) => (
              <div key={index} className="group">
                <div className="flex items-center mb-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300 mr-3 flex-shrink-0" />
                  <div className={`text-sm truncate ${
                    isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'
                  }`}>
                    {result.url}
                  </div>
                </div>
                
                <h3 className="mb-1">
                  <a 
                    href={result.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-xl hover:underline ${
                      isDarkMode ? 'text-[#8ab4f8]' : 'text-[#1a0dab]'
                    }`}
                  >
                    {result.title}
                  </a>
                </h3>
                
                <p className={`text-sm leading-relaxed mb-2 ${
                  isDarkMode ? 'text-[#bdc1c6]' : 'text-[#4d5156]'
                }`}>
                  {result.description}
                </p>

                {/* RELATED LINKS */}
                {query === 'news' && result.relatedLinks && (
                  <div className={`text-xs mt-2 ${
                    isDarkMode ? 'text-[#8ab4f8]' : 'text-[#1a0dab]'
                  }`}>
                    <span className={`${isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'}`}>
                      Related: 
                    </span>
                    {result.relatedLinks?.map((link: string, linkIndex: number) => (
                      <span key={linkIndex}>
                        <a href={link} className="hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                          {link.replace('/news/', '').replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                        </a>
                        {linkIndex < (result.relatedLinks?.length || 0) - 1 && ' · '}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}