import { MutationOptions } from 'modules/company/store/types';
import useSWRMutation from 'swr/mutation';

type ErrorObject = Record<string, string[]>;

type MutationError = {
  statusCode: number;
  message: string | ErrorObject;
};

export type MutationResult<Data> = {
  isMutating: boolean;
  error: MutationError;
  mutate: (data: Data) => void;
  reset: () => void;
};

export function useMutation<Data, Extra>(
  url: string,
  callback: (url: string, body: Data & Extra) => unknown,
  options: MutationOptions<Extra>
): MutationResult<Data> {
  const { isMutating, error, reset, trigger } = useSWRMutation(
    url,
    (key: string, { arg }: { arg: any }) =>
      callback(url, {
        ...(options.extra ?? ({} as Extra)),
        ...(arg ?? ({} as Data)),
      }),
    options
  );

  const mutate = (d: Data) => trigger(d);

  return { error, isMutating, mutate, reset };
}
