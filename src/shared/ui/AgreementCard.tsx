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
  <div className="flex items-center justify-between p-4 mb-2 border border-gray-300 rounded-lg">
    <div>
      <strong className={required ? 'text-red-500' : 'text-gray-500'}>{required ? '[필수] ' : '[선택] '}</strong>
      {title}
    </div>
    <Checkbox checked={checked} onChange={onChange} label="" />
  </div>
);

export default AgreementCard;
