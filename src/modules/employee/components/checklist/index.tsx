/* eslint-disable no-underscore-dangle */
import { CheckListType } from 'modules/employee/store';
import { saveWorkflowStep } from 'modules/employee/store/customMutation';
import Button from 'modules/general/components/buttons/button';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Step from '../step';

interface ChecklistProps {
  onBackClick?: () => void;
  onProceedClick?: () => void;
  hasBackButton?: boolean;
  hasCompleteButton?: boolean;
  hasProceedButton?: boolean;
  data: CheckListType;
}

const Checklist = ({
  onBackClick,
  onProceedClick,
  hasBackButton,
  hasProceedButton,
  hasCompleteButton,
  data,
}: ChecklistProps) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isDisabled, setIsDisabled] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  const handleCheckboxChange = (label: string) => {
    setIsDisabled(false);
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = { ...prevCheckedItems };
      updatedCheckedItems[label] = !updatedCheckedItems[label];

      if (updatedCheckedItems[label]) {
        toast.loading('Please wait while we update HR', {
          id: 'upload',
        });
        const formData = new FormData();
        formData.append('name', label);

        saveWorkflowStep(formData, params.id as string, data._id)
          .then((response) => {
            if (response) {
              toast.success('Noted 😊', {
                id: 'upload',
              });
            }
          })
          .catch((err) => {
            toast.error(err.response.data.error, {
              id: 'upload',
            });
          });
      }

      return updatedCheckedItems;
    });
  };

  return (
    <Step>
      <h1 className="mb-7 text-black text-[40px] font-bold">
        {data.data.title}
      </h1>
      <p className="px-9 pb-5 border-b border-solid border-grey text-sm font-normal text-center max-w-2xl">
        {data.data.overview}
      </p>
      {data.data.items.map((item) => (
        <div key={item._id}>
          <form className="flex gap-x-2.5 items-center">
            <p className="text-sm font-normal">{item.label}</p>
            <input
              type="checkbox"
              className="appearance-none w-[15px] h-[15px] border border-solid border-black shadow-[1px_1px_0_0_#000] checked:bg-chartPurple checked:border-chartPurple"
              checked={item.completed ?? checkedItems[item.label] ?? false}
              onChange={() => handleCheckboxChange(item.label)}
            />
          </form>
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

export default Checklist;
