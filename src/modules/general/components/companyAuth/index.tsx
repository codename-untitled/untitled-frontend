import { useAtom } from 'jotai';
import { companySessionAtom } from 'modules/general/store/auth';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const CompanyAuth = () => {
  const [auth] = useAtom(companySessionAtom);
  const location = useLocation();

  return auth?.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default CompanyAuth;
