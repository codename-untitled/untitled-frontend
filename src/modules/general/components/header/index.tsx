import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/button';

const Header = () => {
  const navigate = useNavigate();

  const isSmallDevice = useMediaQuery({
    query: '(max-width: 576px)',
  });

  return (
    <div className="flex justify-between items-center px-[5%] py-4 border-b-[0.5px] border-black border-solid">
      <h1 className="text-[30px] font-extrabold text-[#353535]">ONBOARDER</h1>
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
