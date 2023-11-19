import { useNavigate } from 'react-router-dom';
import { useCompanySession } from 'hooks/useCompanySession';

interface ProfileDropdownProps {
  className?: string;
}

const ProfileDropdown = ({ className }: ProfileDropdownProps) => {
  const navigate = useNavigate();
  const session = useCompanySession();

  const logout = () => {
    session.destroy();
    navigate('/signin');
  };

  return (
    <div
      className={`border border-solid border-black p-5 rounded-md shadow-[0_0_4px_0_rgba(0,0,0,0.10)] bg-white flex flex-col gap-y-5 ${className}`}
    >
      <button
        className="flex items-center gap-x-[5px]"
        type="button"
        onClick={() => navigate('/company/profile')}
      >
        <img src={require('assets/profile.svg').default} alt="profile icon" />
        <p className="text-xs font-normal text-black">Profile</p>
      </button>
      <button
        className="flex items-center gap-x-[5px]"
        type="button"
        onClick={() => logout()}
      >
        <img src={require('assets/logout.svg').default} alt="logout icon" />
        <p className="text-xs font-normal text-black">Log out</p>
      </button>
    </div>
  );
};

export default ProfileDropdown;
