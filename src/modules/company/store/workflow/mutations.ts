import { useMutation } from 'hooks/useMutation';
import { api } from 'lib/api';
import { MutationOptions } from 'modules/general/store/types';
import {
  ChecklistOrUploadPayload,
  SignaturePayload,
  StepToWorkflowPayload,
  WorkflowPayload,
} from './types';

export const useCreateChecklistOrUploadMutation = (
  options: MutationOptions<undefined>
) =>
  useMutation<ChecklistOrUploadPayload, undefined>(
    'onboarding-step',
    api.post,
    {
      onSuccess: options.onSuccess,
      onError: options.onError,
    }
  );

export const useCreateSignatureMutation = (
  options: MutationOptions<undefined>
) =>
  useMutation<any, undefined>('onboarding-step/sign', api.postFile, {
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

export const useCreateWorkflowMutation = (
  options: MutationOptions<undefined>
) =>
  useMutation<WorkflowPayload, undefined>('onboarding-workflow', api.post, {
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

export const useUpdateStepMutation = (
  stepId: string,
  options: MutationOptions<undefined>
) =>
  useMutation<any, undefined>(`onboarding-step/${stepId}`, api.put, {
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

export const useAddStepToWorkflowMutation = (
  workflowId: string,
  options: MutationOptions<undefined>
) =>
  useMutation<StepToWorkflowPayload, undefined>(
    `onboarding-workflow/add-step/${workflowId}`,
    api.post,
    {
      onSuccess: options.onSuccess,
      onError: options.onError,
    }
  );
