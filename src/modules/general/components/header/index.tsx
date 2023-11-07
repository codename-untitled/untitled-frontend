import { useNavigate } from 'react-router-dom';
import Button from '../buttons/button';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-[5%] py-4 border-b-[0.5px] border-black border-solid">
      <h1 className="text-[30px] font-extrabold text-[#353535]">ONBOARDER</h1>
      <div className="flex gap-5">
        <Button
          label="Login"
          onClick={() => navigate('/login')}
          color="white"
          className="w-[140px] h-[48px]"
        />
        <Button
          label="Sign up"
          onClick={() => navigate('/signup')}
          className="w-[140px] h-[48px]"
        />
      </div>
    </div>
  );
};

export default Header;
