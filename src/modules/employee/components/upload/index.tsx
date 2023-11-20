/* eslint-disable no-underscore-dangle */
import { UploadDocumentType } from 'modules/employee/store';
import Button from 'modules/general/components/buttons/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step from '../step';
import FileInput from '../fileInput';

interface UploadProps {
  onBackClick?: () => void;
  onProceedClick?: () => void;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
  hasCompleteButton?: boolean;
  data: UploadDocumentType;
}
const Upload = ({
  onBackClick,
  onProceedClick,
  hasBackButton,
  hasProceedButton,
  hasCompleteButton,
  data,
}: UploadProps) => {
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
      {data.data.documents.map((document) => (
        <div key={document._id}>
          <FileInput
            className="mt-9 mb-28"
            label={document.name}
            name={document.name}
            stepId={data._id}
            setIsDisabled={setIsDisabled}
          />
        </div>
      ))}
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

export default Upload;
