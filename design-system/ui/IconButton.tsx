import React from 'react';

interface IconButtonProps {
  size?: 'small' | 'medium' | 'large';
  iconPath: string; // 아이콘 이미지 경로
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ size = 'medium', iconPath, onClick }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-14 h-14',
  };

  return (
    <button className={`inline-flex items-center justify-center ${sizeClasses[size]}`} onClick={onClick}>
      <img src={iconPath} alt="icon" className="w-1/2 h-1/2" />
    </button>
  );
};

export default IconButton;
