export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  progress: string;
};

export type EmployeeList = {
  employees: Employee[];
};
