import React from 'react';
import Header from '../../design-system/ui/Header';
import Button from '../../design-system/ui/Button';
import AgreementList from '../features/join/ui/AgreementList';
import { useAgreementStore } from '../features/join/model/agreementStore';
import { useNavigate } from 'react-router-dom';

const AgreementPage: React.FC = () => {
  const { isAllRequiredAgreed } = useAgreementStore();
  const navigate = useNavigate();

  console.log('isAllRequiredAgreed:', isAllRequiredAgreed());

  return (
    <div>
      <Header title="이용약관" onBack={() => navigate(-1)} />
      <div className="p-4">
        <p>서비스 이용을 위해 약관에 동의해 주세요.</p>
        <AgreementList />
        <Button label="다음" onClick={() => navigate('/join/info-input')} disabled={!isAllRequiredAgreed()} />
      </div>
    </div>
  );
};

export default AgreementPage;
