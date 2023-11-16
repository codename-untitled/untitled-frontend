import React from 'react';

type A = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends A {
  label?: string;
  errors?: string;
  touched?: boolean;
  className?: string;
  inputSize?: 'sm' | 'md';
}
function FormField({
  label,
  className,
  errors,
  touched,
  inputSize = 'md',
  ...rest
}: Props) {
  return (
    <div className="flex flex-col gap-[2px]">
      <label className="text-[14px] font-light" htmlFor={label}>
        {label}
      </label>
      <input
        {...rest}
        className={`shadow-[1px_1px_0px_0px_#000]  border-solid border-[0.5px] border-black bg-white rounded-md pl-2 text-[14px]
        ${inputSize === 'sm' && 'h-[32px]'}
        ${inputSize === 'md' && 'h-[50px]'}
        ${className}`}
      />
      {touched && errors && (
        <p className="text-[12px] text-red-600 ml-2">{errors}</p>
      )}
    </div>
  );
}

export default FormField;
