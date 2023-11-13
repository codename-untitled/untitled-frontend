export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  jobTitle: string;
  phoneNumber: string;
  role: string;
  department: string;
  progress: string;
};

export type AddEmployeePayload = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  address: string;
  phoneNumber: string;
  jobTitle: string;
  password: string;
};

export type EditEmployeePayload = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  jobTitle: string;
  phoneNumber: string;
  role: string;
  department: string;
};

export type GetEmployees = {
  data: Employee[];
};

export type EmployeeList = {
  employees: Employee[];
};
