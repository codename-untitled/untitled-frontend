import { api } from 'lib/api';
import { useEffect } from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const EmployeeAuth = () => {
  const location = useLocation();

  const token = sessionStorage.getItem('employeeToken');

  useEffect(() => {
    api.authorize(token);
  }, [token]);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/employee/signin" state={{ from: location }} replace />
  );
};

export default EmployeeAuth;
