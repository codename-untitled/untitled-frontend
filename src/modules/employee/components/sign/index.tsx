/* eslint-disable no-underscore-dangle */
import { SignDocumentType } from 'modules/employee/store';
import { useState } from 'react';
import Button from 'modules/general/components/buttons/button';
import { useNavigate } from 'react-router-dom';
import Step from '../step';
import FileInput from '../fileInput';

interface SignProps {
  onBackClick?: () => void;
  onProceedClick?: () => void;
  hasCompleteButton?: boolean;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
  data: SignDocumentType;
}
const Sign = ({
  onBackClick,
  onProceedClick,
  hasProceedButton,
  hasCompleteButton,
  hasBackButton,
  data,
}: SignProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  return (
    <Step>
      <h1 className="mb-7 text-black text-[40px] font-bold">
        {data.data.title}
      </h1>
      <p className="px-9 pb-5 border-b border-solid border-grey text-sm font-normal text-center max-w-2xl">
        {data.data.overview}
      </p>
      <div className="mt-9 mb-12 flex flex-col gap-y-7">
        <div className="px-7 py-5 border border-solid border-black shadow-[1px_1px_0_0_#000] rounded-md bg-white flex items-center justify-between w-[400px] ">
          <div className="flex gap-x-2 items-center">
            <img
              src={require('assets/document.svg').default}
              alt="document icon"
            />
            <p className="text-sm font-normal w-[200px] line-clamp-1">
              {data.data.documents[0].name}
            </p>
          </div>
          <a
            href={data.data.documents[0].url}
            download
            className="text-xs font-normal underline text-chartPurple"
          >
            Download
          </a>
        </div>
      </div>
      <FileInput
        name={data.data.documents[0].name}
        stepId={data._id}
        setIsDisabled={setIsDisabled}
      />
      {(hasBackButton || hasProceedButton || hasCompleteButton) && (
        <div className="mt-12 flex gap-x-3.5">
          {hasBackButton && (
            <Button
              label="Back"
              className="py-4 h-max !w-[140px]"
              color="white"
              onClick={onBackClick}
            />
          )}
          {hasProceedButton && (
            <Button
              label={hasCompleteButton ? 'Complete' : 'Proceed'}
              className="py-4 h-max !w-[140px]"
              icon={
                hasCompleteButton
                  ? ''
                  : require('assets/arrow-right.svg').default
              }
              iconPosition="right"
              onClick={
                hasCompleteButton
                  ? () => navigate('/employee/complete')
                  : onProceedClick
              }
              disabled={isDisabled}
            />
          )}
        </div>
      )}
    </Step>
  );
};

export default Sign;
