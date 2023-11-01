import React from 'react';

const FilterButton = () => {
  return (
    <button className='w-[94px] h-[38px] flex gap-2 justify-center items-center rounded-md border shadow-[1px_1px_0px_0px_#000] border-solid bg-white cursor-pointer'>
      <img src={require('assets/sort.svg').default} alt='sort icon' />
      <span>Filter</span>
    </button>
  );
};

export default FilterButton;
