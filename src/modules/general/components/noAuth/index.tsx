import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const NoAuth = () => {
  const navigate = useNavigate();

  const companyToken = sessionStorage.getItem('companyToken');

  const employeeToken = sessionStorage.getItem('employeeToken');

  useEffect(() => {
    if (companyToken) {
      navigate('/company');
    }
  }, [companyToken]);

  useEffect(() => {
    if (employeeToken) {
      navigate('/employee');
    }
  }, [employeeToken]);

  return <Outlet />;
};

export default NoAuth;
