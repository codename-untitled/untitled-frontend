import { api } from 'lib/api';
import { useEffect } from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const CompanyAuth = () => {
  const location = useLocation();

  const token = localStorage.getItem('companyToken');

  useEffect(() => {
    api.authorize(token);
  }, [token]);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default CompanyAuth;
