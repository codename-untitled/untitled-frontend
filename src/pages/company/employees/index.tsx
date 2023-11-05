import { useState } from 'react';
import employees from 'mockdata/employees';
import EmptyState from 'modules/company/components/emptyState';
import EmployeeTable from 'modules/company/components/employeeTable';
import AddEmployeeModal from 'modules/company/components/modals/addEmployeeModal';
import Button from 'modules/company/components/buttons/button';

const CompanyEmployees = () => {
  const [openAddEmployeeModal, setOpenAddEmployeeModal] = useState(false);
  return (
    <div className="mx-[5%]">
      <AddEmployeeModal
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
          size="lg"
          onClick={() => setOpenAddEmployeeModal(true)}
        />
      </div>
      <div className="mt-[30px] rounded-md bg-white h-[100%] min-h-[550px] shadow-[1px_1px_0px_0px_#000] border-solid border">
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
