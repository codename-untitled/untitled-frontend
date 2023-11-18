import { atom } from 'jotai';
import { CompanySession, EmployeeSession } from './types';

export const companySessionAtom = atom<CompanySession | null>({
  id: '',
  name: '',
  address: '',
  industry: '',
  email: '',
  taxId: '',
  token: '',
  isAuthenticated: false,
});

export const EmployeeSessionAtom = atom<EmployeeSession | null>({
  id: '',
  firstName: '',
  lastName: '',
  department: '',
  jobTitle: '',
  role: '',
  email: '',
  phoneNumber: '',
  address: '',
  hasChangedPassword: false,
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
  token: '',
  isAuthenticated: false,
});

export const PasswordSessionAtom = atom({
  id: '',
  oldPassword: '',
  newPassword: '',
  token: '',
  isAuthenticated: false,
});
