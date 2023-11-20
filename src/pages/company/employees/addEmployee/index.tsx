import { Formik } from 'formik';
import { FormikStateContextError } from 'helpers/context-error';
import ModalBase from 'modules/company/components/modals/modalBase';
import { ModalProps } from 'modules/company/components/modals/types';
import {
  AddEmployeePayload,
  useAddEmployeeMutation,
} from 'modules/company/store/employees';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';
import toast from 'react-hot-toast';
import { schema } from './validation';

interface AddEmployeeProps extends ModalProps {
  mutate: () => void;
}

const AddEmployee = ({ show, setShow, mutate }: AddEmployeeProps) => {
  const mutation = useAddEmployeeMutation({
    onSuccess: () => {
      toast.success('Created successfully.');
      setShow(false);
      mutate(); // Calls a refresh to fetch new employee list
    },
  });

  const onSubmit = (data: AddEmployeePayload) => {
    mutation.mutate(data);
  };

  return (
    <ModalBase
      modalLabel="Add Employee"
      show={show}
      setShow={setShow}
      className="max-sm:h-[100vh] max-sm:mx-[0] max-sm:overflow-x-auto max-sm:pb-5"
    >
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          phoneNumber: '',
          role: '',
          department: '',
          jobTitle: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          touched,
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className="mx-[3%]" onSubmit={handleSubmit}>
            <div className="flex w-[100%] gap-[30px] mt-[20px] max-md:flex-col">
              <div className="basis-[50%]">
                <FormField
                  label="First name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
              </div>
              <div className="basis-[50%]">
                <FormField
                  label="Last name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.lastName}
                  touched={touched.lastName}
                />
              </div>
            </div>
            <div className="flex w-[100%] gap-[30px] mt-[20px] max-md:flex-col">
              <div className="basis-[50%]">
                <FormField
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.email}
                  touched={touched.email}
                />
              </div>
              <div className="basis-[50%]">
                <FormField
                  label="Phone no"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.phoneNumber}
                  touched={touched.phoneNumber}
                />
              </div>
            </div>
            <div className="w-[100%] mt-[20px]">
              <FormField
                label="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.address}
                touched={touched.address}
              />
            </div>
            <div className="flex w-[100%] gap-[30px] mt-[20px] max-md:flex-col">
              <div className="basis-[50%]">
                <FormField
                  label="Department"
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.department}
                  touched={touched.department}
                />
              </div>
              <div className="basis-[50%]">
                <FormField
                  label="Role"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.role}
                  touched={touched.role}
                />
              </div>
            </div>
            <div className="flex w-[100%] gap-[30px] mt-[20px] max-md:flex-col">
              <div className="basis-[50%]">
                <FormField
                  label="Job title"
                  name="jobTitle"
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.jobTitle}
                  touched={touched.jobTitle}
                />
              </div>
              <div className="basis-[50%]">
                <FormField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="default password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.password}
                  touched={touched.password}
                />
              </div>
            </div>
            <div className="w-[100%] mt-[40px]">
              <Button label="Save" type="submit" isLoading={isSubmitting} />
            </div>
            <FormikStateContextError
              mutation={mutation}
              toasterId="add-employee-toast"
            />
          </form>
        )}
      </Formik>
    </ModalBase>
  );
};

export default AddEmployee;
