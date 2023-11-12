import { useAtom } from 'jotai';
import { EmployeeSessionAtom } from 'modules/general/store/auth';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const EmployeeAuth = () => {
  const [auth] = useAtom(EmployeeSessionAtom);
  const location = useLocation();

  return auth?.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default EmployeeAuth;
