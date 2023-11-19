import FormField from 'modules/general/components/formComponents/formField';
import Button from 'modules/general/components/buttons/button';
import { Avatar } from '@mui/material';
import {
  ResetCompanyProfile,
  useEditEmployeeMutation,
  useGetCompanyDetails,
} from 'modules/company/store/profile';
import SpinnerLoader from 'modules/general/components/spinner/spinnerLoader';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { schema } from './validation';

const Profile = () => {
  const { data: company, isLoading } = useGetCompanyDetails();

  const mutation = useEditEmployeeMutation({
    onSuccess: () => {
      toast.success('Password Changed');
    },
  });

  if (isLoading) {
    return (
      <div className="mx-[5%] mt-[60px] rounded-md bg-white h-[600px] shadow-[1px_1px_0px_0px_#000] border-solid border">
        <div className="flex justify-center mt-[15%]">
          <SpinnerLoader />
        </div>
      </div>
    );
  }

  const onSubmit = (formData: ResetCompanyProfile) => {
    mutation.mutate(formData);
  };

  return (
    <div className="border border-solid border-black shadow-[1px_1px_0_0_#000] bg-white px-[12%] py-10 mx-10 my-8 h-[80vh] overflow-y-auto">
      <div className="mb-6 border border-solid border-black shadow-[1px_1px_0_0_#000] px-[12%] py-8">
        <p className="mb-12 text-xl font-semibold text-black text-center">
          Company Information
        </p>
        <div className="flex justify-center mb-5">
          <Avatar sx={{ width: '100px', height: '100px' }} />
        </div>
        <p className="text-base font-semibold text-center">{company.name}</p>
        <div className="mt-14 mb-10 grid md:grid-cols-2 gap-x-5 gap-y-8">
          <FormField
            label="Company name"
            name="name"
            placeholder={company.name}
            disabled
            className=" disabled:bg-gray-200 disabled:placeholder:text-black disabled:cursor-not-allowed"
          />
          <FormField
            label="Company email"
            name="email"
            placeholder={company.email}
            disabled
            className="disabled:bg-gray-200 disabled:placeholder:text-black disabled:cursor-not-allowed"
          />
          <div className="md:col-start-1 md:col-end-3">
            <FormField
              label="Company address"
              name="address"
              placeholder={company.address}
              disabled
              className="disabled:bg-gray-200 disabled:placeholder:text-black disabled:cursor-not-allowed"
            />
          </div>
          <FormField
            label="Industry"
            name="industry"
            placeholder={company.industry}
            disabled
            className="disabled:bg-gray-200 disabled:placeholder:text-black disabled:cursor-not-allowed"
          />
          <FormField
            label="Tax ID"
            name="tax-id"
            placeholder={company.taxId}
            disabled
            className="disabled:bg-gray-200 disabled:placeholder:text-black disabled:cursor-not-allowed"
          />
        </div>
      </div>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          touched,
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="border border-solid border-black shadow-[1px_1px_0_0_#000] px-[12%] py-8"
            onSubmit={handleSubmit}
          >
            <p className="mb-14 text-xl font-semibold text-black text-center">
              Change Password
            </p>
            <div className="flex flex-col gap-y-8">
              <FormField
                label="Current Password"
                type="password"
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.oldPassword}
                touched={touched.oldPassword}
              />
              <FormField
                label="New Password"
                type="password"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.newPassword}
                touched={touched.newPassword}
              />
              <FormField
                label="Confirm New Password"
                type="password"
                name="confirmNewPassword"
                value={values.confirmNewPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.confirmNewPassword}
                touched={touched.confirmNewPassword}
              />
            </div>
            <Button
              label="Change Password"
              className="mt-10 px-8 py-[14px] w-max h-max"
              type="submit"
              isLoading={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
