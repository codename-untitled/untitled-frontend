/* eslint-disable no-underscore-dangle */
import { Formik } from 'formik';
import { FormikStateContextError } from 'helpers/context-error';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';
import { ChangePasswordPayload } from 'modules/general/store/auth';
import { useChangePasswordMutation } from 'modules/general/store/auth/mutations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Footer from 'modules/general/components/footer';
import { useMediaQuery } from 'react-responsive';
import { schema } from './validation';

const ResetPassword = () => {
  const navigate = useNavigate();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const mutation = useChangePasswordMutation({
    onSuccess: () => {
      toast.success('Success');
      navigate('/employee');
    },
  });

  const onSubmit = (data: ChangePasswordPayload) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen h-[100%] flex bg-offWhite max-lg:bg-purp max-lg:bg-cover max-[376px]:h-fit">
      <div className="basis-[100%] relative max-lg:basis-[100%]">
        <div className="flex justify-between items-center px-[5%] py-4 border-b-[0.5px] border-black border-solid">
          <h1 className="text-[30px] font-extrabold text-[#353535] max-lg:text-white max-sm:text-[20px]">
            ONBOARDER
          </h1>
          <div className="flex gap-5">
            <Button
              label="Login"
              onClick={() => navigate('/signin')}
              color={isDesktopOrLaptop ? 'purple' : 'white'}
              className="!w-[141px] !h-[48px]"
            />
          </div>
        </div>

        <div className="max-w-[510px] block mx-auto mt-[10vh] z-30 relative max-sm:px-10 max-sm:mt-[15%]">
          <div className="px-[10%] shadow-[1px_1px_0px_0px_#000] pb-10 w-[510px] border-solid border-[0.5px] border-black bg-white rounded-md z-30 max-sm:h-full max-sm:w-full max-sm:pb-6">
            <p className="text-center text-[24px] font-bold mt-[30px]">
              Change Password
            </p>
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
                <form className="mt-[35px]" onSubmit={handleSubmit}>
                  <div className="flex flex-col w-[100%] gap-[30px] mt-[20px]">
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
                  <div className="flex justify-center items-center flex-col mt-[30px]">
                    <Button
                      label="Change Password"
                      className="h-[42px] w-full"
                      type="submit"
                      isLoading={isSubmitting}
                    />
                  </div>
                  <FormikStateContextError
                    mutation={mutation}
                    toasterId="reset-password-toast"
                  />
                </form>
              )}
            </Formik>
          </div>
          <img
            src={require('assets/purple star.svg').default}
            alt="purple star"
            className="absolute -z-[1] -right-[20px] -top-8 max-sm:left-[20px]"
          />
          <img
            src={require('assets/orange star.svg').default}
            alt="orange star"
            className="absolute -left-10 top-[110px] max-sm:hidden"
          />
        </div>
        <div className="absolute bottom-0 border-t-[0.5px] border-solid border-black w-full max-lg:bg-white max-[375px]:relative max-[375px]:mt-[85%]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
