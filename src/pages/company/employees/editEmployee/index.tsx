import { Formik } from 'formik';
import { FormikStateContextError } from 'helpers/context-error';
import ModalBase from 'modules/company/components/modals/modalBase';
import { ModalProps } from 'modules/company/components/modals/types';
import {
  EditEmployeePayload,
  useEditEmployeeMutation,
} from 'modules/company/store/employees';
import { useGetEmployee } from 'modules/company/store/employees/queries';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';
import SpinnerLoader from 'modules/general/components/spinner/spinnerLoader';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { schema } from './validation';

interface EditEmployeeProps extends ModalProps {
  mutate: () => void;
}

const EditEmployee = ({ show, setShow, mutate }: EditEmployeeProps) => {
  const [searchParams] = useSearchParams();
  const employeeId = searchParams.get('employeeId');

  const { data: employees, isLoading } = useGetEmployee(employeeId as string);

  const mutation = useEditEmployeeMutation(employeeId as string, {
    onSuccess: () => {
      toast.success('Created successfully.');
      setShow(false);
      mutate(); // Calls a refresh to fetch new employee list
    },
  });

  const onSubmit = (data: EditEmployeePayload) => {
    mutation.mutate(data);
  };

  return (
    <ModalBase modalLabel="Employee Details" show={show} setShow={setShow}>
      {isLoading ? (
        <div className="flex justify-center my-[25%]">
          <SpinnerLoader />
        </div>
      ) : (
        <div>
          <Formik
            initialValues={{
              firstName: employees.firstName,
              lastName: employees.lastName,
              email: employees.email,
              address: employees.address,
              phoneNumber: employees.phoneNumber,
              role: employees.role,
              department: employees.department,
              jobTitle: employees.jobTitle,
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
                      label="Company email"
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
                  <div className="basis-[48%]">
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
                </div>
                <div className="w-[100%] mt-[40px]">
                  <Button label="Save" type="submit" isLoading={isSubmitting} />
                </div>
                <FormikStateContextError
                  mutation={mutation}
                  toasterId="edit-employee-toast"
                />
              </form>
            )}
          </Formik>
        </div>
      )}
    </ModalBase>
  );
};

export default EditEmployee;
