import React from 'react';

type Props = {
  name: string;
  onClick?: () => void;
};

const AddButton = ({ name, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='rounded-md shadow-[1px_1px_0px_0px_#000] border-solid bg-chartPurple w-[163px] h-[38px] text-white font-light'
    >
      + {name}
    </button>
  );
};

export default AddButton;
