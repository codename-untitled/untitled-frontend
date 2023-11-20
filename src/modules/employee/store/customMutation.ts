import axios from 'axios';

export const saveWorkflowStep = (
  body: FormData,
  workflowId: string,
  stepId: string
) => {
  const token = sessionStorage.getItem('employeeToken');

  const response = axios.post(
    `https://untitled-backend-jx9d.onrender.com/onboarding-workflow/submit-step/${workflowId}/${stepId}`,
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
