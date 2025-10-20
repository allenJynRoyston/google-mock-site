export default function MainCTA({isDarkMode}: {isDarkMode: boolean}) {
  return (
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => window.open('/allen_royston_cv_2025.pdf', '_blank')}
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
  );
} 