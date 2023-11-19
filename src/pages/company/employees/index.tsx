import { useState } from 'react';
import EmptyState from 'modules/company/components/emptyState';
import EmployeeTable from 'modules/company/components/employeeTable';
import Button from 'modules/general/components/buttons/button';
import { useGetEmployees } from 'modules/company/store/employees';
import SpinnerLoader from 'modules/general/components/spinner/spinnerLoader';
import AddEmployee from './addEmployee';
import EditEmployee from './editEmployee';

const CompanyEmployees = () => {
  const [openAddEmployeeModal, setOpenAddEmployeeModal] = useState(false);
  const [openEditEmployeeModal, setOpenEditEmployeeModal] = useState(false);

  const { data: employees, isLoading, mutate } = useGetEmployees();

  if (isLoading) {
    return (
      <div className="mx-[5%] mt-[60px] rounded-md bg-white h-[600px] shadow-[1px_1px_0px_0px_#000] border-solid border">
        <div className="flex justify-center mt-[15%]">
          <SpinnerLoader />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-[5%]">
      <AddEmployee
        show={openAddEmployeeModal}
        setShow={setOpenAddEmployeeModal}
        mutate={mutate}
      />
      <EditEmployee
        show={openEditEmployeeModal}
        setShow={setOpenEditEmployeeModal}
        mutate={mutate}
      />
      <div className="flex justify-between mt-[30px]">
        <Button
          label="Filter"
          icon={require('assets/sort.svg').default}
          color="white"
        />
        <Button
          label="+ Add Employee"
          size="md"
          onClick={() => setOpenAddEmployeeModal(true)}
        />
      </div>
      <div className="mt-[30px] rounded-md bg-white h-[600px] shadow-[1px_1px_0px_0px_#000] border-solid border">
        {!isLoading && !employees.length ? (
          <EmptyState placeholder="No employee found" />
        ) : (
          <EmployeeTable
            employees={employees}
            openEditEmployeeModal={setOpenEditEmployeeModal}
          />
        )}
      </div>
    </div>
  );
};

export default CompanyEmployees;
