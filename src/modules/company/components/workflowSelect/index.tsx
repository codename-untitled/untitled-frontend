/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  setSelectId: Dispatch<SetStateAction<number>>;
};

export default function WorkflowSelect({ setSelectId }: Props) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const location = useLocation();
  const [labelIndex, setLabelIndex] = useState(0);

  const onOptionClick = (index: number, id: number) => {
    setDropDownOpen(false);
    setLabelIndex(index);
    setSelectId(id);
  };

  const defaultOptions = [
    {
      id: 1,
      name: 'Checklist',
      icon: require('assets/checklisticon.svg').default,
    },
    {
      id: 2,
      name: 'Upload',
      icon: require('assets/document-upload-purp.svg').default,
    },
  ];

  const signatureOptions = [
    {
      id: 1,
      name: 'Checklist',
      icon: require('assets/checklisticon.svg').default,
    },
    {
      id: 2,
      name: 'Upload',
      icon: require('assets/document-upload-purp.svg').default,
    },
    {
      id: 3,
      name: 'Signature',
      icon: require('assets/signicon.svg').default,
    },
  ];

  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    if (location.pathname !== '/company/workflow/create') {
      setOptions(signatureOptions);
    }
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        className="relative rounded-md bg-white h-[32px] w-[138px] border-solid border-[0.5px] border-black text-[14px] flex items-center justify-center"
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        <img
          src={options[labelIndex].icon}
          alt="icon"
          className="absolute left-4"
        />
        {options[labelIndex].name}

        {dropDownOpen ? (
          <img
            src={require('assets/arrow-up.svg').default}
            alt="icon"
            className="absolute right-4"
          />
        ) : (
          <img
            src={require('assets/arrow-downn.svg').default}
            alt="icon"
            className="absolute right-4"
          />
        )}
      </button>
      {dropDownOpen && (
        <div className="absolute mt-2 pb-2 shadow-[1px_1px_0px_0px_#000] w-[140px] border-solid border-[0.5px] rounded-md border-black bg-white">
          <ul className="text-[14px] flex flex-col gap-2 mt-2">
            {options.map((option, index) => (
              <li
                className="hover:bg-gray-100 cursor-pointer pl-5"
                onClick={() => onOptionClick(index, option.id)}
                key={option.id}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
