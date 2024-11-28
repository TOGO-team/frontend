import React from 'react';
import Header from '../../../design-system/ui/Header';
import Button from '../../../design-system/ui/Button';
import AgreementList from '../../features/join/ui/AgreementList';
import { useAgreementStore } from '../../features/join/model/agreementStore';
import { useNavigate } from 'react-router-dom';

const AgreementPage: React.FC = () => {
  const { isAllRequiredAgreed } = useAgreementStore();
  const navigate = useNavigate();

  console.log('isAllRequiredAgreed:', isAllRequiredAgreed());

  return (
    <div className="flex flex-col h-screen w-[440px] border relative">
      <Header title="이용약관" onBack={() => navigate(-1)} />
      <div className="m-12">
        <div className="mb-10">
          <p className="text-xl font-bold">서비스 이용을 위해</p>
          <p className="text-xl font-bold">약관에 동의해 주세요.</p>
        </div>
        <AgreementList />
      </div>

      <Button
        className="absolute h-14 w-[344px] bottom-16 left-0 right-0 mx-auto rounded-[150px]"
        label="다음"
        onClick={() => navigate('/join/info-input')}
        disabled={!isAllRequiredAgreed()}
      />
    </div>
  );
};

export default AgreementPage;
