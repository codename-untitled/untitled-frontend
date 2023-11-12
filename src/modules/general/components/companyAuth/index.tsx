import { useLocation, Outlet, Navigate } from 'react-router-dom';

const CompanyAuth = () => {
  const location = useLocation();

  const token = localStorage.getItem('companyToken');

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default CompanyAuth;
