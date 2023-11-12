import { Formik } from 'formik';
import { FormikStateContextError } from 'helpers/context-error';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formField';
import { CompanySignUpPayload } from 'modules/general/store/auth';
import { useCompanySignupMutation } from 'modules/general/store/auth/mutations';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { schema } from './validation';

const SignUp = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const mutation = useCompanySignupMutation({
    onSuccess: () => {
      toast.success('Success');
      navigate('/signin');
    },
  });

  const onSubmit = (data: CompanySignUpPayload) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen h-[100%] flex max-sm:min-h-full bg-offWhite max-lg:bg-purp">
      <div className="basis-[55%] relative max-lg:basis-[100%]">
        <h1 className="text-[30px] font-extrabold ml-[10%] pt-5 max-lg:ml-0 max-lg:text-center max-lg:text-white">
          ONBOARDER
        </h1>
        <div className="max-w-[510px] block mx-auto mt-[10vh] z-30 relative max-sm:px-5 max-sm:mt-[15%]">
          <div className="px-[3%] shadow-[1px_1px_0px_0px_#000] pb-4 w-[510px] border-solid border-[0.5px] border-black bg-white rounded-md z-30 max-sm:h-full max-sm:w-full max-sm:pb-6">
            <p className="text-center text-[24px] font-bold mt-[30px]">
              Sign up
            </p>
            <p className="text-center text-[14px] mt-[5px]">
              Enter your details below and let us get started
            </p>
            <Formik
              initialValues={{
                name: '',
                address: '',
                industry: '',
                email: '',
                taxId: '',
                password: '',
                confirmPassword: '',
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
                setFieldTouched,
                handleSubmit,
              }) => (
                <form className="mt-[35px]" onSubmit={handleSubmit}>
                  <div className="flex w-[100%] gap-[30px] mt-[20px] max-sm:flex-col">
                    <div className="basis-[50%]">
                      <FormField
                        label="Company name*"
                        name="name"
                        className="!h-[32px]"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('name')}
                        errors={errors.name}
                        touched={touched.name}
                      />
                    </div>
                    <div className="basis-[50%]">
                      <FormField
                        label="Company email*"
                        name="email"
                        className="!h-[32px]"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('email')}
                        errors={errors.email}
                        touched={touched.email}
                      />
                    </div>
                  </div>
                  <div className="w-[100%] mt-[20px]">
                    <FormField
                      label="Company address*"
                      className="!h-[32px]"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={() => setFieldTouched('address')}
                      errors={errors.address}
                      touched={touched.address}
                    />
                  </div>
                  <div className="flex w-[100%] gap-[30px] mt-[20px] max-sm:flex-col">
                    <div className="basis-[50%]">
                      <FormField
                        label="Industry*"
                        className="!h-[32px]"
                        name="industry"
                        value={values.industry}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('industry')}
                        errors={errors.industry}
                        touched={touched.industry}
                      />
                    </div>
                    <div className="basis-[50%]">
                      <FormField
                        label="Tax ID*"
                        className="!h-[32px]"
                        name="taxId"
                        value={values.taxId}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('taxId')}
                        errors={errors.taxId}
                        touched={touched.taxId}
                      />
                    </div>
                  </div>
                  <div className="flex w-[100%] gap-[30px] mt-[20px] max-sm:flex-col">
                    <div className="basis-[50%]">
                      <FormField
                        label="Password*"
                        className="!h-[32px]"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('password')}
                        errors={errors.password}
                        touched={touched.password}
                      />
                    </div>
                    <div className="basis-[50%]">
                      <FormField
                        label="Confirm Password*"
                        className="!h-[32px]"
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('confirmPassword')}
                        errors={errors.confirmPassword}
                        touched={touched.confirmPassword}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col mt-[30px]">
                    <Button
                      label="Sign up"
                      className="h-[42px] w-full"
                      type="submit"
                      isLoading={isSubmitting}
                    />
                    <p className="text-[12px] mt-4">
                      Already have an account?{' '}
                      <Link
                        className="text-chartPurple cursor-pointer"
                        to="/signin"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                  <FormikStateContextError
                    mutation={mutation}
                    toasterId="sign-up-toast"
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
        <div className="absolute bottom-0 border-t-[0.5px] border-solid border-black w-full max-lg:bg-white max-sm:relative max-sm:mt-20">
          <p className="text-[16px] py-3 text-center">©onboarder {year}</p>
        </div>
      </div>
      <div className="basis-[45%] bg-purp bg-cover max-lg:hidden" />
    </div>
  );
};

export default SignUp;
