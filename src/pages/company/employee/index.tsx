import AddButton from 'modules/company/components/buttons/addButton';
import FilterButton from 'modules/company/components/buttons/filterButton';
import EmployeeTable from 'components/company/employeeTable';
import EmptyState from 'components/company/emptyState';
import { employees } from 'mockdata/employees';

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
