export type CompanyProfile = {
  name: string;
  address: string;
  industry: string;
  email: string;
  taxId: string;
};

export type ResetCompanyProfile = {
  oldPassword: string;
  newPassword: string;
};
