/* eslint-disable no-underscore-dangle */
import Sign from 'modules/employee/components/sign';
import StepsComplete from 'modules/employee/components/stepsComplete';
import Upload from 'modules/employee/components/upload';
import Checklist from 'modules/employee/components/checklist';
import { Fragment, useState } from 'react';
import Footer from 'modules/general/components/footer';
import {
  CheckListType,
  SignDocumentType,
  UploadDocumentType,
  useAssignedGetWorkflowDetails,
} from 'modules/employee/store';
import { useParams } from 'react-router-dom';
import { steps } from '../mock';

const EmployeeWorkflow = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const params = useParams();

  const changeActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const { data: workflow } = useAssignedGetWorkflowDetails(params.id as string);

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
                  <Checklist
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    hasProceedButton={hasProceedButton}
                    hasBackButton={hasBackButton}
                    key={step._id}
                    data={data as CheckListType}
                  />
                );
              case 'UploadDocument':
                return (
                  <Upload
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    hasProceedButton={hasProceedButton}
                    hasBackButton={hasBackButton}
                    key={step._id}
                    data={data as UploadDocumentType}
                  />
                );
              case 'SignDocuments':
                return (
                  <Sign
                    onBackClick={() => changeActiveStep(activeStep - 1)}
                    onProceedClick={() => changeActiveStep(activeStep + 1)}
                    key={step._id}
                    data={data as SignDocumentType}
                  />
                );
              default:
                return <StepsComplete key={step._id} />;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeWorkflow;
