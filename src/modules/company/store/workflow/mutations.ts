import { useMutation } from 'hooks/useMutation';
import { api } from 'lib/api';
import { MutationOptions } from 'modules/general/store/types';
import {
  ChecklistOrUploadPayload,
  SignaturePayload,
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
