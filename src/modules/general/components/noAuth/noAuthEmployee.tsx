import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const NoAuthEmployee = () => {
  const navigate = useNavigate();

  const employeeToken = sessionStorage.getItem('employeeToken');

  useEffect(() => {
    if (employeeToken) {
      navigate('/employee');
    }
  }, [employeeToken]);

  return <Outlet />;
};

export default NoAuthEmployee;
