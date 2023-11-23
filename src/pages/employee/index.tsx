/* eslint-disable no-underscore-dangle */

import Footer from 'modules/general/components/footer';
import NoWorkflow from 'modules/employee/components/noWorkflow';
import Welcome from 'modules/employee/components/welcome';
import { useGetEmployeeDetails } from 'modules/employee/store';
import Logo from 'modules/general/components/logo';

const Employee = () => {
  const { data: employee, isLoading } = useGetEmployeeDetails();

  return (
    <div className="min-h-screen bg-offWhite">
      <h1 className="px-[5%] py-4 border-b-[0.5px] border-black border-solid text-[30px] font-extrabold text-[#353535] text-center">
        <Logo color="black" />
      </h1>
      <div className="px-[10%] py-[6.5%]">
        {employee?.assignedWorkflow?.length === 0 && !isLoading ? (
          <NoWorkflow />
        ) : (
          <Welcome
            firstName={employee.firstName}
            workflowAssigned={employee.assignedWorkflow}
            isLoading={isLoading}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Employee;
