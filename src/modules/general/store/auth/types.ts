export type CompanySession = {
  id: string;
  name: string;
  address: string;
  industry: string;
  email: string;
  taxId: string;
  token: string;
  isAuthenticated: boolean;
};

export type EmployeeSession = {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  jobTitle: string;
  role: string;
  email: string;
  phoneNumber: string;
  address: string;
  hasChangedPassword: boolean;
  token: string;
  isAuthenticated: boolean;
};

export type CompanyResponse = {
  company: CompanySession;
  token: string;
};

export type EmployeeResponse = {
  employee: EmployeeSession;
  token: string;
};

export type CompanySignUpPayload = {
  name: string;
  address: string;
  industry: string;
  email: string;
  taxId: string;
  password: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type ChangePasswordPayload = {
  oldPassword: string;
  newPassword: string;
};
