import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import Avatar from '@mui/material/Avatar';
import MobileNavbar from 'modules/company/components/mobileNavbar';

export type NavbarLink = {
  name: string;
  route: string;
  activeIcon: string;
  inactiveIcon: string;
};

const Company = () => {
  const location = useLocation();
  const routeSegments = location.pathname.split('/').filter(Boolean); // Used to get all routes after the slash as an array
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navbarLinks: NavbarLink[] = [
    {
      name: 'Analytics',
      route: '/company',
      activeIcon: require('assets/analyticsicon.svg').default,
      inactiveIcon: require('assets/inactiveanalytic.svg').default,
    },
    {
      name: 'Employee',
      route: '/company/employee',
      activeIcon: require('assets/employeeactive.svg').default,
      inactiveIcon: require('assets/employeeiconinactive.svg').default,
    },
    {
      name: 'Workflow',
      route: '/company/workflow',
      activeIcon: require('assets/workflowactive.svg').default,
      inactiveIcon: require('assets/workflowiconinactive.svg').default,
    },
    {
      name: 'Repository',
      route: '/company/repository',
      activeIcon: require('assets/repositoryactive.svg').default,
      inactiveIcon: require('assets/repositoryinactiveicon.svg').default,
    },
  ];

  return (
    <div className="flex w-full h-screen">
      <div
        className={`bg-black ${
          isNavbarCollapsed ? 'basis-1/12' : 'basis-2/12'
        } max-lg:hidden`}
      >
        <div className="flex flex-col items-center mt-5 gap-36 relative">
          <img
            src={require('assets/Untitled team logo 2.svg').default}
            alt=""
            className="h-10 w-16"
          />
          <button
            className="absolute right-0 mt-20 cursor-pointer"
            onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
            type="button"
          >
            {isNavbarCollapsed ? (
              <img
                src={require('assets/uncollapse.svg').default}
                alt=""
                className="h-10 w-10"
              />
            ) : (
              <img
                src={require('assets/collpaseleft.svg').default}
                alt=""
                className="h-10 w-10"
              />
            )}
          </button>
          <div className="flex flex-col gap-16">
            {navbarLinks.map(({ name, route, activeIcon, inactiveIcon }) => (
              <NavLink to={route} key={name} end={route === '/company'}>
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
                        alt="active icon"
                        className={`${!isNavbarCollapsed && 'absolute -ml-10'}`}
                      />
                    ) : (
                      <img
                        src={inactiveIcon}
                        alt="inactive icon"
                        className={`${!isNavbarCollapsed && 'absolute -ml-10'}`}
                      />
                    )}{' '}
                    <span>{!isNavbarCollapsed && name}</span>
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`bg-orange ${
          isNavbarCollapsed ? 'basis-11/12' : 'basis-10/12'
        } max-lg:basis-full`}
      >
        <div className="border-b border-black h-20 border-solid">
          <div className="flex justify-between items-center px-[5%] h-full max-lg:px-0 max-lg:pr-[5%] max-lg:items-stretch max-md:pr-[5%]">
            <div className="flex items-center gap-4">
              <div className="h-full bg-black flex items-center pl-4 w-20 cursor-pointer lg:hidden">
                <Hamburger
                  color="#ffff"
                  size={28}
                  toggled={isOpen}
                  toggle={setIsOpen}
                />
              </div>
              <p className="capitalize font-semibold text-2xl max-sm:text-base">
                {routeSegments[1] ?? 'Analytics'}
              </p>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <Avatar />
              <p className="text-sm max-sm:hidden">Untitled Company</p>
              <img
                src={require('assets/arrow-down.svg').default}
                alt="arrow-down-icon"
              />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <MobileNavbar
        navbarLinks={navbarLinks}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </div>
  );
};

export default Company;
