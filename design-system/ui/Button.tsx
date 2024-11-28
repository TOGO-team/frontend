// shared/ui/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string; // 버튼 텍스트
  onClick: () => void; // 클릭 핸들러
  disabled?: boolean; // 비활성화 여부
  className?: string; // 추가 스타일링 클래스
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition 
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} 
        ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
