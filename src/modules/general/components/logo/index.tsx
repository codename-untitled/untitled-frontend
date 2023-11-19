/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
interface LogoProps {
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Logo = ({ color = 'white', onClick, className }: LogoProps) => (
  <button onClick={onClick} type="button">
    <img
      src={
        color === 'white'
          ? require('assets/white-logo.svg').default
          : require('assets/black-logo.svg').default
      }
      alt="logo"
      className={`cursor-pointer ${className}`}
    />
  </button>
);

export default Logo;
