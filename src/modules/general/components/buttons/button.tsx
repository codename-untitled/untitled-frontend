/* eslint-disable react/button-has-type */
type ButtonProps = {
  label: string;
  onClick?: () => void;
  icon?: string;
  color?: 'purple' | 'white';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  className?: string;
};

function Button({
  label,
  onClick,
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
      h-[38px] font-light flex gap-2 justify-center items-center ${className}`}
      type={type}
    >
      {icon && <img src={icon} alt="icon" />}
      {label}
    </button>
  );
}

export default Button;
