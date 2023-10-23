import React from 'react';
import { Outlet } from 'react-router-dom';

const Company = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='basis-2/12 bg-black'>ss</div>
      <div className='basis-10/12 bg-orange'>
        <div className='border-b border-black h-20 border-solid'>
          <div className='flex justify-between items-center px-10 h-full'>
            <p>Analytics</p>
            <p>Somethings here</p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Company;
