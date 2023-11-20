/* eslint-disable no-underscore-dangle */

import StepsComplete from 'modules/employee/components/stepsComplete';
import Footer from 'modules/general/components/footer';
import Logo from 'modules/general/components/logo';

const EmployeeWorkflowComplete = () => (
  <div className="min-h-screen bg-offWhite">
    <h1 className="px-[5%] py-4 border-b-[0.5px] border-black border-solid text-[30px] font-extrabold text-[#353535] text-center">
      <Logo color="black" />
    </h1>
    <div className="px-[10%] py-[6.5%]">
      <StepsComplete />
    </div>
    <Footer />
  </div>
);

export default EmployeeWorkflowComplete;
