import { useMutation } from 'hooks/useMutation';
import { api } from 'lib/api';
import { MutationOptions } from '../types';
import { CompanySignUpPayload, SignInPayload } from './types';

export const useCompanySignupMutation = (options: MutationOptions<undefined>) =>
  useMutation<CompanySignUpPayload, undefined>('companies/register', api.post, {
    onSuccess: (data, key: string, config) =>
      options.onSuccess(data, key, config),
    onError: options.onError,
    extra: options.extra,
  });

export const useCompanySignInMutation = (options: MutationOptions<undefined>) =>
  useMutation<SignInPayload, undefined>('companies/login', api.post, {
    onSuccess: (response, key) => options.onSuccess(response, key),
    onError: options.onError,
    extra: options.extra,
  });

export const useEmployeeSignInMutation = (
  options: MutationOptions<undefined>
) =>
  useMutation<SignInPayload, undefined>('employees/login', api.post, {
    onSuccess: (response, key) => options.onSuccess(response, key),
    onError: options.onError,
    extra: options.extra,
  });
