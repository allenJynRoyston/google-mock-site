import {type ISearchBarProps} from '../types/';


export default function SearchBar({ isDarkMode }: ISearchBarProps) {
  return (
    <div className={`w-full max-w-2xl mb-8 border rounded-3xl p-4 transition-all duration-200 ${
      isDarkMode 
        ? 'bg-[#303134] border-[#5f6368] shadow-lg' 
        : 'bg-white border-[#dfe1e5] shadow-md hover:shadow-lg'
    }`}>
      <div className="flex items-center gap-4">
        <svg className={`w-5 h-5 transition-colors duration-200 ${
          isDarkMode ? 'text-[#9aa0a6]' : 'text-[#9aa0a6]'
        }`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
        <div className={`flex-1 text-lg transition-colors duration-200 ${
          isDarkMode ? 'text-[#e8eaed]' : 'text-[#3c4043]'
        }`}>
          About me
        </div>
      </div>
    </div>
  )
}