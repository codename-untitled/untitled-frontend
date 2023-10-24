import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

type NavbarLink = {
  name: string;
  route: string;
  activeIcon: string;
  inactiveIcon: string;
};

const Company = () => {
  let location = useLocation();
  const routeSegments = location.pathname.split('/').filter(Boolean);
  const [navbarCollapsed, setmnavbarCollapsed] = useState(false);

  const navbarLinks: NavbarLink[] = [
    {
      name: 'Analytics',
      route: '/company/',
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
    <div className='flex w-full h-screen'>
      <div className='basis-2/12 bg-black'>
        <div className='flex flex-col items-center mt-5 gap-36 relative'>
          <img
            src={require('assets/Untitled team logo 2.svg').default}
            alt=''
            className='h-10 w-16'
          />
          <div>
            <img
              src={require('assets/collpaseleft.svg').default}
              alt=''
              className='absolute right-0 -mt-14'
            />
          </div>
          <div className='flex flex-col gap-16'>
            {navbarLinks.map(
              ({ name, route, activeIcon, inactiveIcon }, index) => (
                <NavLink to={route} key={index}>
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
                          className='absolute -ml-10'
                        />
                      ) : (
                        <img
                          src={inactiveIcon}
                          alt='inactive icon'
                          className='absolute -ml-10'
                        />
                      )}{' '}
                      {name}
                    </span>
                  )}
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
      <div className='basis-10/12 bg-orange'>
        <div className='border-b border-black h-20 border-solid'>
          <div className='flex justify-between items-center px-10 h-full'>
            <p className='capitalize font-semibold text-2xl'>
              {routeSegments[1] ?? 'Analytics'}
            </p>
            <p>Somethings here</p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Company;
