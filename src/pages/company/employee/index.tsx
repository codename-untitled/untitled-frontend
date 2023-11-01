import AddButton from 'modules/company/components/buttons/addButton';
import FilterButton from 'modules/company/components/buttons/filterButton';
import { employees } from 'mockdata/employees';
import EmptyState from 'modules/company/components/emptyState';
import EmployeeTable from 'modules/company/components/employeeTable';

const CompanyEmployee = () => {
  return (
    <div className='mx-[5%]'>
      <div className='flex justify-between mt-[30px]'>
        <FilterButton />
        <AddButton name='Add Employee' />
      </div>
      <div className='mt-[30px] rounded-md bg-white h-[100%] min-h-[550px] shadow-[1px_1px_0px_0px_#000] border-solid border'>
        {employees.length === 0 ? (
          <EmptyState placeholder='No employee found' />
        ) : (
          <EmployeeTable employees={employees} />
        )}
      </div>
    </div>
  );
};

export default CompanyEmployee;
