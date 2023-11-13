import { useQuery } from 'hooks/useQuery';
import { api } from 'lib/api';
import { Employee } from './types';

export function useGetEmployees() {
  const employees = useQuery<Employee[]>('employees/all', api.get);

  return employees;
}

export function useGetEmployee(employeeId: string | null) {
  const employee = useQuery<Employee>(`employees/${employeeId}`, api.get);

  return employee;
}
