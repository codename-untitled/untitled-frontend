/* eslint-disable @typescript-eslint/no-explicit-any */

export type FnCallback = (data: any, key: string, config?: any) => any;

export type MutationOptions<Extra> = {
  onSuccess: FnCallback;
  onError?: FnCallback;
  extra?: Extra;
};
