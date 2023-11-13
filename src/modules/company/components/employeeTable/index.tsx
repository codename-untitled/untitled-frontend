import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { useMediaQuery } from 'react-responsive';
import TableRow from '@mui/material/TableRow';
import { Employee } from 'modules/company/store/employees';
import { useSearchParams } from 'react-router-dom';

type Props = {
  employees: Employee[];
  openEditEmployeeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function EmployeeTable({ employees, openEditEmployeeModal }: Props) {
  const [, setSearchParams] = useSearchParams();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const onEmployeeClick = (id: string) => {
    openEditEmployeeModal(true);
    setSearchParams({ employeeId: id });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">First name</TableCell>
            <TableCell align="center">Last name</TableCell>
            {isDesktopOrLaptop && <TableCell align="center">Email</TableCell>}
            {isDesktopOrLaptop && <TableCell align="center">Role</TableCell>}
            {isDesktopOrLaptop && (
              <TableCell align="center">Department</TableCell>
            )}
            <TableCell align="center">Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => onEmployeeClick(employee.id)}
            >
              <TableCell align="center">{employee.firstName}</TableCell>
              <TableCell align="center">{employee.lastName}</TableCell>
              {isDesktopOrLaptop && (
                <TableCell align="center">{employee.email}</TableCell>
              )}
              {isDesktopOrLaptop && (
                <TableCell align="center">{employee.role}</TableCell>
              )}
              {isDesktopOrLaptop && (
                <TableCell align="center">{employee.department}</TableCell>
              )}
              <TableCell align="center">{employee.progress}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeTable;
