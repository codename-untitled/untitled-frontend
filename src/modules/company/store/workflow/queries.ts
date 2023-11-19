import { useQuery } from 'hooks/useQuery';
import { api } from 'lib/api';
import { WorkflowResponse, WorkflowSchema } from './types';

export function useGetWorkflows() {
  const workflows = useQuery<WorkflowResponse>('onboarding-workflow', api.get);

  return workflows;
}

export function useGetWorkflowDetails(workflowId: string) {
  const workflows = useQuery<WorkflowSchema>(
    `onboarding-workflow/${workflowId}`,
    api.get
  );

  return workflows;
}

export function useAssignedGetWorkflowDetails(workflowId: string) {
  const workflows = useQuery<WorkflowSchema>(
    `onboarding-workflow/assign/${workflowId}`,
    api.get
  );

  return workflows;
}
