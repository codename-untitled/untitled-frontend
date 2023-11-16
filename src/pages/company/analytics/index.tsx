import Card from 'modules/company/components/card';
import { useGetEmployees } from 'modules/company/store/employees/queries';
import Button from 'modules/general/components/buttons/button';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const { data: employees } = useGetEmployees();
  const navigate = useNavigate();

  return (
    <div className="py-5 px-5 grid grid-cols-4 gap-x-10 gap-y-10 max-xl:grid-cols-3 max-[868px]:grid-cols-2 max-sm:grid-cols-1">
      <Card
        number={employees.length}
        name="Total Employees"
        imageSrc={require('assets/totalemployees.svg').default}
      />
      <Card
        number={0}
        name="New Employees"
        imageSrc={require('assets/newemployees.svg').default}
      />
      <Card
        number={0}
        name="Pending Onboarding"
        imageSrc={require('assets/pendingemployees.svg').default}
      />
      <div className="rounded-md bg-white h-[170px] w-[270px] shadow-[1px_1px_0px_0px_#000] border-solid border">
        <div className="flex flex-col gap-3 mx-3 pt-3 pl-4 ">
          <p> Create Onboarding </p>
          <p className="text-[14px] font-light">
            Create a seamless process to welcome new staff
          </p>
        </div>
        <div className="flex flex-row gap-2 mx-3 pl-4 pt-2">
          <Button
            label="Create +"
            size="md"
            className="my-2"
            onClick={() => navigate('/company/workflow/create')}
          />
          <div>
            <img
              src={require('assets/icon.svg').default}
              alt=""
              className="block ml-auto mr-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
