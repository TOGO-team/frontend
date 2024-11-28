import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Header from '../../../design-system/ui/Header';
import Button from '../../../design-system/ui/Button';
import Input from '../../../design-system/ui/Input';

interface FormInputs {
  name: string;
  phone: string;
  email: string;
}

const existingNames = ['김원영']; // 중복 이름 예시
const existingPhones = ['01012345678']; // 중복 연락처 예시
const existingEmails = ['example@example.com']; // 중복 이메일 예시

const InfoInputPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const nameValue = watch('name');
  const phoneValue = watch('phone');
  const emailValue = watch('email');

  // 버튼 활성화 조건
  const isButtonEnabled = nameValue && phoneValue && emailValue && isValid;

  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log('제출 데이터:', data);
    alert('정보 입력 완료!');
  };

  // 디버깅 추가
  console.log('name:', nameValue, errors.name?.message);
  console.log('phone:', phoneValue, errors.phone?.message);
  console.log('email:', emailValue, errors.email?.message);
  console.log('isValid:', isValid);
  console.log('isButtonEnabled:', isButtonEnabled);

  return (
    <div>
      <Header title="정보입력" onBack={() => window.history.back()} />
      <div className="p-4 space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* 이름 필드 */}
          <Input
            label="이름"
            placeholder="이름 입력"
            error={errors.name?.message}
            {...register('name', {
              required: '이름을 입력해 주세요.',
              minLength: {
                value: 2,
                message: '이름은 최소 두 글자 이상이어야 합니다.',
              },
              validate: {
                notDuplicate: value => !existingNames.includes(value) || '이미 존재하는 이름입니다.',
              },
            })}
          />

          {/* 연락처 필드 */}
          <Input
            label="연락처"
            placeholder="숫자 입력"
            error={errors.phone?.message}
            {...register('phone', {
              required: '연락처를 입력해 주세요.',
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: '연락처는 10~11자리 숫자여야 합니다.',
              },
              validate: {
                notDuplicate: value => !existingPhones.includes(value) || '이미 존재하는 연락처입니다.',
              },
            })}
          />

          {/* 이메일 필드 */}
          <Input
            label="이메일"
            placeholder="이메일 입력"
            type="email"
            error={errors.email?.message}
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: '올바른 이메일 형식이어야 합니다.',
              },
              validate: {
                notDuplicate: value => !existingEmails.includes(value) || '이미 존재하는 이메일입니다.',
              },
            })}
          />

          {/* 제출 버튼 */}
          <div className="pt-4">
            <Button
              label="시작하기"
              onClick={handleSubmit(onSubmit)}
              disabled={!isButtonEnabled}
              className={`${isButtonEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoInputPage;
