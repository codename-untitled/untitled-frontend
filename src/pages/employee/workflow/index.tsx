/* eslint-disable no-underscore-dangle */
import Sign from 'modules/employee/components/sign';
import Upload from 'modules/employee/components/upload';
import Checklist from 'modules/employee/components/checklist';
import { Fragment, useState } from 'react';
import Footer from 'modules/general/components/footer';
import { useAssignedGetWorkflowDetails } from 'modules/employee/store';
import { useParams } from 'react-router-dom';
import SpinnerLoader from 'modules/general/components/spinner/spinnerLoader';
import { WorkflowTypes } from 'modules/company/store/workflow';
import Logo from 'modules/general/components/logo';

const EmployeeWorkflow = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const params = useParams();

  const changeActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const { data: workflow, isLoading } = useAssignedGetWorkflowDetails(
    params.id as string
  );

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-center mt-[15%]">
          <SpinnerLoader />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offWhite grid grid-rows-[max-content,1fr,max-content]">
      <div className="px-[5%] py-4 border-b-[0.5px] border-black border-solid text-[30px] font-extrabold text-[#353535] text-center">
        <Logo color="black" />
      </div>
      <div className="px-[10%] py-[5%]">
        <div className="mb-14 flex gap-x-1.5 items-center justify-center">
          {workflow.steps.map((step, index) => (
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
              {index !== workflow.steps.length - 1 && (
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
          {workflow.steps.map((step, index) => {
            const { type } = step.step;

            if (index !== activeStep) {
              return null;
            }

            const hasProceedButton = true;
            const hasBackButton = index !== 0;
            const hasCompleteButton = workflow.steps.length - 1 === index;

            switch (type) {
              case WorkflowTypes.CHECKLIST:
                return (
                  <Checklist
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    hasProceedButton={hasProceedButton}
                    hasBackButton={hasBackButton}
                    hasCompleteButton={hasCompleteButton}
                    key={step._id}
                    data={step.step}
                  />
                );
              case WorkflowTypes.UPLOAD_DOCUMENT:
                return (
                  <Upload
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    hasProceedButton={hasProceedButton}
                    hasBackButton={hasBackButton}
                    hasCompleteButton={hasCompleteButton}
                    key={step._id}
                    data={step.step}
                  />
                );
              case WorkflowTypes.SIGN_DOCUMENT:
                return (
                  <Sign
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    hasProceedButton={hasProceedButton}
                    hasCompleteButton={hasCompleteButton}
                    hasBackButton={hasBackButton}
                    key={step._id}
                    data={step.step}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeWorkflow;
