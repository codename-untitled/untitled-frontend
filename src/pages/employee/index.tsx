/* eslint-disable no-underscore-dangle */

import Footer from 'modules/general/components/footer';
import Welcome from 'modules/employee/components/welcome';
import { useGetEmployeeDetails } from 'modules/employee/store';

const Employee = () => {
  const { data: employee } = useGetEmployeeDetails();

  return (
    <div className="min-h-screen bg-offWhite">
      <h1 className="px-[5%] py-4 border-b-[0.5px] border-black border-solid text-[30px] font-extrabold text-[#353535] text-center">
        ONBOARDER
      </h1>
      <div className="px-[10%] py-[6.5%]">
        <Welcome
          firstName={employee.firstName}
          workflowAssigned={employee.assignedWorkflow}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Employee;
