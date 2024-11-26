import React from 'react';

interface BlackButtonProps {
  width: string;
  height: string;
  text: string;
}

const BlackButton: React.FC<BlackButtonProps> = ({ width, height, text }) => {
  return <button className={`w-full h-full ${width} ${height} bg-black rounded-[5px] text-white`}>{text}</button>;
};
export default BlackButton;
