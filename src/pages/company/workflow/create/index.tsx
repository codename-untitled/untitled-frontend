/* eslint-disable react/no-array-index-key */
/* eslint-disable no-empty-pattern */
import WorkflowField from 'modules/company/components/workflowField/createWorkflow';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';
import { FieldArray, Formik } from 'formik';
import { flushSync } from 'react-dom';
import { useRef } from 'react';
import {
  useCreateWorkflowMutation,
  WorkflowPayload,
} from 'modules/company/store/workflow';
import toast from 'react-hot-toast';
import { FormikStateContextError } from 'helpers/context-error';
import { useNavigate } from 'react-router-dom';
import { schema } from './validation';

const CreateWorkflow = () => {
  const navigate = useNavigate();
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const workflowValues = {
    step: '',
    order: '',
  };

  const addItems = (push: (obj: object) => void) => {
    flushSync(() => {
      push(workflowValues);
    });

    stepsRef.current?.lastElementChild?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const mutation = useCreateWorkflowMutation({
    onSuccess: () => {
      toast.success('Workflow Created');
      navigate('/company/workflow');
    },
  });

  const onSubmit = (data: WorkflowPayload) => {
    mutation.mutate(data);
  };

  return (
    <div className="mx-[5%]">
      <div className="mt-[30px] rounded-md bg-white pb-10 h-[80vh] shadow-[1px_1px_0px_0px_#000] border-solid border max-sm:h-full overflow-y-auto">
        <div className="mt-5 ml-5">
          <Button label="Back" color="black" onClick={() => navigate(-1)} />
        </div>
        <h1 className="text-center text-[24px] font-semibold mt-3">
          New Onboarding Workflow
        </h1>
        <p className="text-center text-[14px]">
          Create steps and assign to specific employee
        </p>
        <Formik
          initialValues={{
            title: '',
            overview: '',
            steps: [workflowValues],
          }}
          validationSchema={schema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            isSubmitting,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              className="px-[25%] mt-10 max-md:px-[10%]"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4">
                <FormField
                  placeholder="Workflow name"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.title}
                  touched={touched.title}
                />
                <FormField
                  placeholder="Overview"
                  name="overview"
                  value={values.overview}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.overview}
                  touched={touched.overview}
                />
              </div>
              <FieldArray name="steps">
                {({ push }) => (
                  <div className="flex flex-col gap-10 mt-10" ref={stepsRef}>
                    {values.steps.map((_, index) => (
                      <WorkflowField key={index} index={index} />
                    ))}
                    <div className="flex gap-2">
                      <Button
                        label="+ Add step"
                        size="md"
                        onClick={() => addItems(push)}
                        color="green"
                        type="button"
                      />
                      <Button
                        label="Submit"
                        size="md"
                        color="purple"
                        onClick={handleSubmit}
                        isLoading={isSubmitting}
                      />
                    </div>
                  </div>
                )}
              </FieldArray>
              <FormikStateContextError
                mutation={mutation}
                toasterId="create-worlflow-toast"
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateWorkflow;
