import { useState } from 'react';
import employees from 'mockdata/employees';
import EmptyState from 'modules/company/components/emptyState';
import EmployeeTable from 'modules/company/components/employeeTable';
import Button from 'modules/general/components/buttons/button';
import AddEmployee from './addEmployee';

const CompanyEmployees = () => {
  const [openAddEmployeeModal, setOpenAddEmployeeModal] = useState(false);
  return (
    <div className="mx-[5%]">
      <AddEmployee
        show={openAddEmployeeModal}
        setShow={setOpenAddEmployeeModal}
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
        {employees.length === 0 ? (
          <EmptyState placeholder="No employee found" />
        ) : (
          <EmployeeTable employees={employees} />
        )}
      </div>
    </div>
  );
};

export default CompanyEmployees;
