// src/design-system/ui/Input.tsx
import { forwardRef } from 'react';

interface InputProps {
  label: string; // 필드 라벨
  type?: string; // input type (text, email 등)
  placeholder?: string; // placeholder 텍스트
  error?: string; // 에러 메시지
  className?: string; // 추가 스타일
}

// React.forwardRef를 사용하여 ref 전달
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', placeholder = '', error, className = '', ...rest }, ref) => {
    return (
      <div className={`space-y-1 ${className}`}>
        {/* 라벨 */}
        <label className="block text-sm font-medium text-gray-700">{label}</label>

        {/* 인풋 필드 */}
        <input
          type={type}
          ref={ref} // ref 전달
          placeholder={placeholder}
          {...rest} // 나머지 props 전달 (React Hook Form의 register 포함)
          className={`w-full border-b-2 p-2 text-gray-800 focus:outline-none ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />

        {/* 에러 메시지 */}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input'; // React DevTools에서 컴포넌트 이름 표시

export default Input;
