import axios from 'axios';

export const createSignature = (body: FormData) => {
  const token = localStorage.getItem('companyToken');

  const response = axios.post(
    'https://untitled-backend-jx9d.onrender.com/onboarding-step/sign',
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        credentials: 'include',
      },
    }
  );

  return response;
};
