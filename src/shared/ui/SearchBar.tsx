import React from 'react';
import SearchIcon from './assets/Search.svg';

interface SearchBarProps {
  width: string;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ width, placeholder }) => {
  return (
    <div className={`relative ${width}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-8 md:h-9 pl-4 pr-10 text-sm bg-white border border-placeholderText rounded-[3px] focus:outline-none"
      />
      <div className="absolute w-5 h-5 right-[14px] top-6 -translate-y-1/2">
        <img src={SearchIcon} alt="Search" />
      </div>
    </div>
  );
};
export default SearchBar;
