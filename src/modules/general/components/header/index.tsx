import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Logo from '../logo';
import Button from '../buttons/button';

const Header = () => {
  const navigate = useNavigate();

  const isSmallDevice = useMediaQuery({
    query: '(max-width: 576px)',
  });

  return (
    <div className="flex justify-between items-center px-[5%] py-4 border-b-[0.5px] border-black border-solid">
      <Logo color="black" />
      <div className="flex gap-5">
        <Button
          label="Login"
          onClick={() => navigate('/signin')}
          color="white"
          className={`${isSmallDevice ? '!w-[92px]' : '!w-[141px] !h-[48px]'}`}
        />
        <Button
          label="Sign up"
          onClick={() => navigate('/signup')}
          className={`${isSmallDevice ? '!w-[92px]' : '!w-[141px] !h-[48px]'}`}
        />
      </div>
    </div>
  );
};

export default Header;
