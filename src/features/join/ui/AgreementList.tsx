import AgreementCard from '../../../shared/ui/AgreementCard';
import { useAgreementStore } from '../model/agreementStore';

const AgreementList = () => {
  const { agreements, toggleAgreement } = useAgreementStore();

  return (
    <div className="flex flex-col gap-5">
      <AgreementCard
        title="서비스 이용 약관"
        required={true}
        checked={agreements.terms}
        onChange={() => toggleAgreement('terms')}
      />
      <AgreementCard
        title="개인정보처리 방침"
        required={true}
        checked={agreements.privacy}
        onChange={() => toggleAgreement('privacy')}
      />
      <AgreementCard
        title="개인정보 수집·이용 동의"
        required={true}
        checked={agreements.dataUsage}
        onChange={() => toggleAgreement('dataUsage')}
      />
      <AgreementCard
        title="마케팅 및 광고성 정보 수신 동의"
        required={false}
        checked={agreements.marketing}
        onChange={() => toggleAgreement('marketing')}
      />
    </div>
  );
};

export default AgreementList;
