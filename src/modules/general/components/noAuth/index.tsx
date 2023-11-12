import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const NoAuth = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('companyToken');

  useEffect(() => {
    if (token) {
      navigate('/company');
    }
  }, [token]);

  return <Outlet />;
};

export default NoAuth;
