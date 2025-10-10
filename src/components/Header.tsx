import {IHeaderProps} from '../types/';

export default function Header({ isDarkMode, toggleDarkMode }:IHeaderProps) {
  const handleToggle = () => {
    console.log('Button clicked, toggleDarkMode:', toggleDarkMode);
    toggleDarkMode();
  };

  return( 
    <header className="flex justify-end items-center p-4 gap-4 z-10">

      <a href="mailto:allen.royston.uk@gmail.com" className={`text-sm ${
        isDarkMode ? 'text-[#e8eaed]' : 'text-[#3c4043]'
      }`}>
        Gmail
      </a>
      <button 
        onClick={handleToggle}
        className={`text-sm ${
          isDarkMode ? 'text-[#e8eaed]' : 'text-[#3c4043]'
        }`}
      >
      <div className="profile-avatar w-8 h-8 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-medium text-sm cursor-pointer">
        AR
      </div>
      </button>
    </header>
  )
}