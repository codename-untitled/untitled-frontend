import { useAtom } from 'jotai';
import { EmployeeSessionAtom } from 'modules/general/store/auth';
import { api } from 'lib/api';

export const useEmployeeSession = () => {
  const [data, setData] = useAtom(EmployeeSessionAtom);

  const authorize = (token: string) => {
    api.authorize(token);
    localStorage.setItem('employeeToken', token);
  };

  const destroy = () => {
    api.authorize('');
    localStorage.removeItem('employeeToken');
    setData(null);
  };

  return {
    destroy,
    setData,
    data,
    authorize,
  };
};
