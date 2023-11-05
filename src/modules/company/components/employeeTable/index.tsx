import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import TableRow from '@mui/material/TableRow';
import { EmployeeList } from 'modules/company/store/employees';

function EmployeeTable({ employees }: EmployeeList) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

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
            <TableRow key={employee.email}>
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
