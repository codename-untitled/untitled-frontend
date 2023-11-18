interface LogoProps {
  color?: string;
  className?: string;
}

const Logo = ({ color = 'white', className }: LogoProps) => (
  <img
    src={
      color === 'white'
        ? require('assets/white-logo.svg').default
        : require('assets/black-logo.svg').default
    }
    alt="logo"
    className={`w-[221px] ${className}`}
  />
);

export default Logo;
