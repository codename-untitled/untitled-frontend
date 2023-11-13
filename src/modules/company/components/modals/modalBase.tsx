import React from 'react';

type BaseProps = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  modalLabel: string;
  show?: boolean;
  setShow: (show: boolean) => void;
  className?: string;
};

const ModalBase = ({
  children,
  modalLabel,
  show,
  setShow,
  className,
}: BaseProps) => (
  <div
    className={`m-0 p-0 w-screen h-full min-h-screen bg-offBlack fixed top-0 left-0 flex justify-center items-center z-50 ${
      !show && 'hidden'
    }`}
  >
    <div
      className={`w-[728px] pb-10 shadow-[1px_1px_0px_0px_#000] border-solid border bg-white rounded-md mx-[5%] ${className}`}
    >
      <div className="flex justify-between px-[3%] py-[20px] border-b-[1px] border-black border-solid pb-2">
        <h1 className="text-[24px]">{modalLabel}</h1>
        <button onClick={() => setShow(false)} type="button">
          <img src={require('assets/x-cancel.svg').default} alt="cancel" />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default ModalBase;
