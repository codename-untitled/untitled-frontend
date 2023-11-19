import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const NoAuthCompany = () => {
  const navigate = useNavigate();

  const companyToken = sessionStorage.getItem('companyToken');

  useEffect(() => {
    if (companyToken) {
      navigate('/company');
    }
  }, [companyToken]);

  return <Outlet />;
};

export default NoAuthCompany;
