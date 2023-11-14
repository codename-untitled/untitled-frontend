import { Fragment } from 'react';
import Welcome from 'modules/employee/components/welcome';
import Footer from 'modules/general/components/footer';

const activeStep = 0;
const steps = [
  {
    position: 'one',
    component: <Welcome />,
  },
];

const Employee = () => (
  <div className="min-h-screen bg-offWhite grid grid-rows-[max-content,1fr,max-content]">
    <h1 className="px-[5%] py-4 border-b-[0.5px] border-black border-solid text-[30px] font-extrabold text-[#353535] text-center">
      ONBOARDER
    </h1>
    <div className="px-[10%] py-[5%]">
      <div className="mb-14 flex gap-x-1.5 items-center justify-center">
        {steps.map((step, index) => (
          <Fragment key={step.position}>
            <p
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                index === activeStep
                  ? 'bg-chartPurple text-white'
                  : 'bg-grey/30 text-black'
              }`}
            >
              {index + 1}
            </p>
            {index !== steps.length - 1 && (
              <div
                className={`w-[75px] h-1 rounded-3xl ${
                  index === activeStep ? 'bg-chartPurple' : 'bg-grey'
                }`}
              />
            )}
          </Fragment>
        ))}
      </div>
      {steps[activeStep].component}
    </div>
    <Footer />
  </div>
);

export default Employee;
