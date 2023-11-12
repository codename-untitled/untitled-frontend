import Spinner from '../spinner';

/* eslint-disable react/button-has-type */
type ButtonProps = {
  label: string;
  onClick?: () => void;
  icon?: string;
  color?: 'purple' | 'white';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  className?: string;
  isLoading?: boolean;
};

function Button({
  label,
  onClick,
  isLoading,
  icon,
  color = 'purple',
  size = 'sm',
  type = 'button',
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md shadow-[1px_1px_0px_0px_#000] border-solid border border-black ${
        color === 'purple' && 'bg-chartPurple text-white'
      } 
      ${color === 'white' && 'bg-white text-black'}
      ${size === 'sm' && ' w-[92px]'}
      ${size === 'md' && ' w-[163px]'}
      ${size === 'lg' && ' w-[440px]'} 
      h-[38px] font-light flex gap-2 justify-center items-center ${className}`}
      type={type}
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
