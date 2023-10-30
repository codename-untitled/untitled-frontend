import { NavbarLink } from 'pages/company';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

type MobileNavbarProps = {
  navbarLinks: NavbarLink[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNavbar = ({ navbarLinks, setIsOpen }: MobileNavbarProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (container.current && !container.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className='m-0 p-0 w-screen h-full min-h-screen bg-offBlack fixed top-0 left-0'>
      <div
        className='m-0 p-0 bg-black w-56 fixed left-0 top-0 h-full min-h-screen z-50'
        ref={container}
      >
        <div className='flex flex-col items-center mt-5 gap-36 relative'>
          <img
            src={require('assets/Untitled team logo 2.svg').default}
            alt=''
            className='h-10 w-16'
          />
          <div className='flex flex-col gap-16'>
            {navbarLinks.map(
              ({ name, route, activeIcon, inactiveIcon }, index) => (
                <NavLink
                  to={route}
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? 'text-white flex gap-2 relative'
                          : 'text-grey flex gap-2 relative'
                      }
                    >
                      {isActive ? (
                        <img
                          src={activeIcon}
                          alt='active icon'
                          className={'absolute -ml-10'}
                        />
                      ) : (
                        <img
                          src={inactiveIcon}
                          alt='inactive icon'
                          className={'absolute -ml-10'}
                        />
                      )}{' '}
                      <span>{name}</span>
                    </span>
                  )}
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;