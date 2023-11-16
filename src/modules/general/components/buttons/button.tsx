import Spinner from '../spinner';

/* eslint-disable react/button-has-type */
type ButtonProps = {
  label: string;
  onClick?: () => void;
  icon?: string;
  color?: 'purple' | 'white' | 'black' | 'green';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

function Button({
  label,
  onClick,
  isLoading,
  icon,
  color = 'purple',
  size = 'sm',
  type = 'button',
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md shadow-[1px_1px_0px_0px_#000] border-solid border border-black ${
        color === 'purple' && 'bg-chartPurple text-white'
      } 
      ${color === 'black' && 'bg-black text-white'}
      ${color === 'green' && 'bg-green text-white'}
      ${color === 'white' && 'bg-white text-black'}
      ${disabled && 'bg-gray-200 cursor-not-allowed'}
      ${size === 'sm' && ' w-[92px]'}
      ${size === 'md' && ' w-[163px]'}
      ${size === 'lg' && ' w-[440px]'} 
      h-[38px] font-light flex gap-2 justify-center items-center ${className}`}
      type={type}
      disabled={disabled}
    >
      {isLoading ? (
        <Spinner size="small" color={color} />
      ) : (
        <>
          {icon && <img src={icon} alt="icon" />}
          {label}
        </>
      )}
    </button>
  );
}

export default Button;
