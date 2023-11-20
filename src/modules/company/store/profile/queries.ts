import { useQuery } from 'hooks/useQuery';
import { api } from 'lib/api';
import { CompanyProfile } from './types';

export function useGetCompanyDetails() {
  const company = useQuery<CompanyProfile>('companies/details', api.get);

  return company;
}
