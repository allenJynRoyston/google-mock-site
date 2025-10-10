export interface ISearchResult { 
  isDarkMode: boolean; 
  searchTerm: string; 
  toggleDarkMode: () => void; 
  query: string;  
}

export interface ILink {
  href: string;
  label: string;
}

export interface IHeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface ILogoProps {
  isDarkMode: boolean;
}

export interface ISearchBarProps {
  isDarkMode: boolean;
}