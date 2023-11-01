import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { EmployeeList } from 'modules/company/store/employee';


const EmployeeTable = ({employees}: EmployeeList) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>First name</TableCell>
            <TableCell align='center'>Last name</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Role</TableCell>
            <TableCell align='center'>Department</TableCell>
            <TableCell align='center'>Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell align='center'>{employee.firstName}</TableCell>
              <TableCell align='center'>{employee.lastName}</TableCell>
              <TableCell align='center'>{employee.email}</TableCell>
              <TableCell align='center'>{employee.role}</TableCell>
              <TableCell align='center'>{employee.department}</TableCell>
              <TableCell align='center'>{employee.progress}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
