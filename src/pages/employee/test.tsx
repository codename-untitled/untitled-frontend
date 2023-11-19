/* eslint-disable no-underscore-dangle */
import StepFour from 'modules/employee/components/stepFour';
import StepsComplete from 'modules/employee/components/stepsComplete';
import StepThree from 'modules/employee/components/stepThree';
import StepTwo from 'modules/employee/components/stepTwo';
import { Fragment, useState } from 'react';
import { steps } from './mock';

const EmployeeTest = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const changeActiveStep = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="min-h-screen bg-offWhite grid grid-rows-[max-content,1fr,max-content]">
      <h1 className="px-[5%] py-4 border-b-[0.5px] border-black border-solid text-[30px] font-extrabold text-[#353535] text-center">
        ONBOARDER
      </h1>
      <div className="px-[10%] py-[5%]">
        <div className="mb-14 flex gap-x-1.5 items-center justify-center">
          {steps.steps.map((step, index) => (
            <Fragment key={step._id}>
              <p
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  index <= activeStep
                    ? 'bg-chartPurple text-white'
                    : 'bg-grey/30 text-black'
                }`}
              >
                {index + 1}
              </p>
              {index !== steps.steps.length - 1 && (
                <div
                  className={`w-[75px] h-1 rounded-3xl ${
                    index <= activeStep ? 'bg-chartPurple' : 'bg-grey'
                  }`}
                />
              )}
            </Fragment>
          ))}
        </div>
        <div>
          {steps.steps.map((step, index) => {
            const { type, data } = step.step;

            if (index !== activeStep) {
              return null;
            }

            const hasProceedButton = steps.steps.length - 1 !== index;
            const hasBackButton = index !== 0;

            switch (type) {
              case 'CheckList':
                return (
                  <StepTwo
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    hasProceedButton={hasProceedButton}
                    hasBackButton={hasBackButton}
                    key={step._id}
                  />
                );
              case 'UploadDocument':
                return (
                  <StepThree
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    hasProceedButton={hasProceedButton}
                    hasBackButton={hasBackButton}
                    key={step._id}
                  />
                );
              case 'SignDocuments':
                return (
                  <StepFour
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    key={step._id}
                  />
                );
              default:
                return <StepsComplete key={step._id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTest;
