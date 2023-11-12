import { useAtom } from 'jotai';
import { companySessionAtom } from 'modules/general/store/auth';
import { api } from 'lib/api';

export const useCompanySession = () => {
  const [data, setData] = useAtom(companySessionAtom);

  const authorize = (token: string) => {
    api.authorize(token);
    localStorage.setItem('companyToken', token);
  };

  const destroy = () => {
    api.authorize('');
    localStorage.removeItem('companyToken');
    setData(null);
  };

  return {
    destroy,
    setData,
    data,
    authorize,
  };
};
