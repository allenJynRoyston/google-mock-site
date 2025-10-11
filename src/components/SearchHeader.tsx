import {type ISearchResult} from '../types/';

export default function SearchHeader({
  isDarkMode, searchTerm, toggleDarkMode, query
}: ISearchResult) {
  return (
      <header className={`border-b ${
        isDarkMode ? 'border-[#5f6368]' : 'border-[#e8eaed]'
      }`}>
        <div className="flex items-center pl-6 pr-0 py-4">
          <a href="/" className="text-2xl font-light mr-2 flex-shrink-0">
            <span className="text-[#4285f4]">A</span>
            <span className="text-[#ea4335]">l</span>
            <span className="text-[#fbbc05]">l</span>
            <span className="text-[#4285f4]">e</span>
            <span className="text-[#34a853]">n</span>
          </a>
          
          {/* Search bar */}
          <div className={`flex-1 max-w-[600px] min-w-0 mx-2 md:mx-8 border rounded-full px-4 py-2 ${
            isDarkMode 
              ? 'bg-[#303134] border-[#5f6368]' 
              : 'bg-white border-[#dfe1e5]'
          }`}>
            <span className={`block truncate ${isDarkMode ? 'text-[#e8eaed]' : 'text-[#3c4043]'}`}>
              {searchTerm}
            </span>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4 flex-shrink-0 ml-auto pr-4">
            <button 
              onClick={toggleDarkMode}
              className={`text-sm hover:underline ${
                isDarkMode ? 'text-[#e8eaed]' : 'text-[#3c4043]'
              }`}
            >
            <div className="w-8 h-8 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-medium text-sm cursor-pointer">
              AR
            </div>
            </button>
          </div>
        </div>

        {/* Search navigation */}
        <div className="px-6 pb-3">
          <div className="flex gap-6 text-sm">
            <a 
              href="#all" 
              className={`pb-3 ${
                query === 'all' 
                  ? `border-b-2 border-[#4285f4] ${isDarkMode ? 'text-[#8ab4f8]' : 'text-[#4285f4]'}`
                  : `hover:underline ${isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'}`
              }`}
            >
              All
            </a>
            <a 
              href="#images" 
              className={`pb-3 ${
                query === 'images' 
                  ? `border-b-2 border-[#4285f4] ${isDarkMode ? 'text-[#8ab4f8]' : 'text-[#4285f4]'}`
                  : `hover:underline ${isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'}`
              }`}
            >
              Images
            </a>
            <a 
              href="#videos" 
              className={`pb-3 ${
                query === 'videos' 
                  ? `border-b-2 border-[#4285f4] ${isDarkMode ? 'text-[#8ab4f8]' : 'text-[#4285f4]'}`
                  : `hover:underline ${isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'}`
              }`}
            >
              Videos
            </a>
            <a 
              href="#news" 
              className={`pb-3 ${
                query === 'news' 
                  ? `border-b-2 border-[#4285f4] ${isDarkMode ? 'text-[#8ab4f8]' : 'text-[#4285f4]'}`
                  : `hover:underline ${isDarkMode ? 'text-[#bdc1c6]' : 'text-[#70757a]'}`
              }`}
            >
              News
            </a>
          </div>
        </div>
      </header>
  );
}