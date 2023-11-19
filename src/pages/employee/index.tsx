import { Fragment, useState } from 'react';
import Logo from 'modules/general/components/logo';
import Welcome from 'modules/employee/components/welcome';
import StepTwo from 'modules/employee/components/stepTwo';
import StepThree from 'modules/employee/components/stepThree';
import StepFour from 'modules/employee/components/stepFour';
import StepsComplete from 'modules/employee/components/stepsComplete';
import Footer from 'modules/general/components/footer';

const Employee = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const changeActiveStep = (step: number) => {
    setActiveStep(step);
  };
  const steps = [
    {
      position: 'one',
      component: <Welcome onProceedClick={() => changeActiveStep(1)} />,
    },
    {
      position: 'two',
      component: (
        <StepTwo
          onBackClick={() => changeActiveStep(0)}
          onProceedClick={() => changeActiveStep(2)}
        />
      ),
    },
    {
      position: 'three',
      component: (
        <StepThree
          onBackClick={() => changeActiveStep(1)}
          onProceedClick={() => changeActiveStep(3)}
        />
      ),
    },
    {
      position: 'four',
      component: (
        <StepFour
          onBackClick={() => changeActiveStep(2)}
          onCompleteClick={() => setIsComplete(true)}
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-offWhite grid grid-rows-[max-content,1fr,max-content]">
      <div className="border-b border-solid border-black flex justify-center">
        <Logo color="black" className="mx-auto my-5 w-[221px]" />
      </div>
      <div className="px-[10%] py-[5%]">
        {!isComplete ? (
          <>
            <div className="mb-14 flex gap-x-1.5 items-center justify-center">
              {steps.map((step, index) => (
                <Fragment key={step.position}>
                  <p
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      index <= activeStep
                        ? 'bg-chartPurple text-white'
                        : 'bg-grey/30 text-black'
                    }`}
                  >
                    {index + 1}
                  </p>
                  {index !== steps.length - 1 && (
                    <div
                      className={`w-[75px] h-1 rounded-3xl ${
                        index <= activeStep ? 'bg-chartPurple' : 'bg-grey'
                      }`}
                    />
                  )}
                </Fragment>
              ))}
            </div>
            {steps[activeStep].component}
          </>
        ) : (
          <StepsComplete />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Employee;
