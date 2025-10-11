'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { UseDarkMode } from '../../../hooks';
import { Header } from '../../../components';

export default function ArticlePage() {
  const { isDarkMode, toggleDarkMode } = UseDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-[#202124] text-[#e8eaed]' 
        : 'bg-white text-[#3c4043]'
    }`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-md">
          {/* 404 Number */}
          <div className={`text-9xl font-bold mb-6 ${
            isDarkMode ? 'text-[#8ab4f8]' : 'text-[#1a0dab]'
          }`}>
            404
          </div>
          
          {/* Error Message */}
          <h1 className={`text-2xl font-medium mb-4 ${
            isDarkMode ? 'text-[#e8eaed]' : 'text-[#3c4043]'
          }`}>
            Obviously This Page Doesn't Exist
          </h1>
          
          <p className={`text-base mb-8 leading-relaxed ${
            isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'
          }`}>
            Come on, did you really think I wrote actual articles for every fake news link? 
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              href="/"
              className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-90 ${
                isDarkMode 
                  ? 'bg-[#8ab4f8] text-[#202124] hover:bg-[#93baf9]' 
                  : 'bg-[#1a73e8] text-white hover:bg-[#1557b0]'
              }`}
            >
              Go to Homepage
            </Link>
            
            <div className="block">
              <Link 
                href="/search#news"
                className={`inline-block px-6 py-3 rounded-lg font-medium border transition-colors hover:opacity-90 ${
                  isDarkMode 
                    ? 'border-[#5f6368] text-[#e8eaed] hover:bg-[#303134]' 
                    : 'border-[#dadce0] text-[#3c4043] hover:bg-[#f8f9fa]'
              }`}
              >
                Browse News Articles
              </Link>
            </div>
          </div>
          
          {/* Fun Error Message */}
          <div className={`mt-12 text-sm italic ${
            isDarkMode ? 'text-[#9aa0a6]' : 'text-[#70757a]'
          }`}>
            "Plot twist: The real article was the 404 page we found along the way"
          </div>
        </div>
      </main>
    </div>
  );
}