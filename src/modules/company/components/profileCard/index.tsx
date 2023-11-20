import { Avatar } from '@mui/material';
import { useGetCompanyDetails } from 'modules/company/store/profile';
import { useState } from 'react';
import ProfileDropdown from './profileDropdown';

const ProfileCard = () => {
  const [profileDropdownIsOpen, setProfileDropdown] = useState<boolean>(false);

  const { data: company } = useGetCompanyDetails();

  return (
    <button
      className="mt-2 flex gap-2 items-center relative"
      type="button"
      onClick={() => setProfileDropdown(!profileDropdownIsOpen)}
    >
      <Avatar />
      <p className="text-sm max-sm:hidden">{company.name}</p>
      {profileDropdownIsOpen ? (
        <img src={require('assets/ar-up.svg').default} alt="arrow-down-icon" />
      ) : (
        <img
          src={require('assets/arrow-down.svg').default}
          alt="arrow-down-icon"
        />
      )}
      {profileDropdownIsOpen && (
        <ProfileDropdown className="absolute top-[100%] right-0" />
      )}
    </button>
  );
};

export default ProfileCard;
