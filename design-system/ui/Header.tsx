// shared/ui/Header.tsx
import React from 'react';

interface HeaderProps {
  title: string; // 헤더 제목
  onBack?: () => void; // 뒤로 가기 버튼 클릭 핸들러
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
      {/* 뒤로 가기 버튼 (필요한 경우 표시) */}
      {onBack ? (
        <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={onBack}>
          ←
        </button>
      ) : (
        <div className="w-4" /> // 버튼 자리에 빈 공간 확보
      )}

      {/* 제목 */}
      <h1 className="flex-grow text-lg font-semibold text-center text-gray-800">{title}</h1>

      {/* 오른쪽 공간 (뒤로가기 버튼 없을 때 공간 확보) */}
      <div className="w-4" />
    </header>
  );
};

export default Header;
