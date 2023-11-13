import { APIError } from 'helpers/api.error';
import useSWR, { SWRConfiguration } from 'swr';

type UseQueryResponse<T> = {
  isValidating: boolean;
  isLoading: boolean;
  data: T;
  error: APIError;
  mutate: () => void;
};

export function useQuery<T>(
  url: string,
  fetcher: (url: string) => Promise<Response>,
  config?: SWRConfiguration
): UseQueryResponse<T> {
  const { error, data, isLoading, isValidating, mutate } = useSWR<Response>(
    url,
    fetcher,
    {
      ...(config ?? {}),
      revalidateOnMount: config?.revalidateOnMount ?? true,
    }
  );

  return {
    error,
    data: (data ?? {}) as T,
    isLoading,
    isValidating,
    mutate,
  };
}
