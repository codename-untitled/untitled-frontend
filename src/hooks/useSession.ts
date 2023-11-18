import { useAtom } from 'jotai';
import { PasswordSessionAtom } from 'modules/general/store/auth';
import { api } from 'lib/api';

export const useSession = () => {
  const [data, setData] = useAtom(PasswordSessionAtom);

  const authorize = (token: string) => {
    api.authorize(token);
    localStorage.setItem('employeeToken', token);
  };

  const destroy = () => {
    api.authorize('');
    localStorage.removeItem('employeeToken');
  };

  return {
    destroy,
    setData,
    data,
    authorize,
  };
};
