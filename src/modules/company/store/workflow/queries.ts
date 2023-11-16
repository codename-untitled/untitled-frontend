import { useQuery } from 'hooks/useQuery';
import { api } from 'lib/api';
import { WorkflowResponse } from './types';

export function useGetWorkflows() {
  const workflows = useQuery<WorkflowResponse>('onboarding-workflow', api.get);

  return workflows;
}
