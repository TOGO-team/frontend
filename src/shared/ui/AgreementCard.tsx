// shared/ui/AgreementCard.tsx
import React from 'react';
import Checkbox from '../../../design-system/ui/Checkbox';

interface AgreementCardProps {
  title: string;
  required: boolean;
  checked: boolean;
  onChange: () => void;
}

const AgreementCard: React.FC<AgreementCardProps> = ({ title, required, checked, onChange }) => (
  <div className="flex items-center justify-between h-6 border-gray-300 rounded-lg">
    <div className="flex">
      <Checkbox checked={checked} onChange={onChange} label="" />
      <div className="text-sm">
        {required ? '[필수] ' : '[선택] '}
        {title}
      </div>
    </div>
    <button>&gt;</button>
  </div>
);

export default AgreementCard;
