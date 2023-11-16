import { Formik, useFormikContext } from 'formik';
import {
  useCreateChecklistOrUploadMutation,
  useCreateSignatureMutation,
  WorkflowTypes,
} from 'modules/company/store/workflow';
import FormField from 'modules/general/components/formComponents/formField';
import { useState } from 'react';
import toast from 'react-hot-toast';
import WorkflowSelect from '../workflowSelect';
import Checklist from './checklist';
import Signature from './signature';
import { getInitialValue, getSchema } from './store';
import Upload from './upload';

type Props = {
  index: number;
};

const WorkflowField = ({ index }: Props) => {
  const [selectId, setSelectId] = useState(1);

  const { setFieldValue } = useFormikContext();

  const mutation = useCreateChecklistOrUploadMutation({
    onSuccess: (response) => {
      toast.success('Saved');
      // eslint-disable-next-line no-underscore-dangle
      setFieldValue(`steps.${index}.step`, response._id);
      setFieldValue(`steps.${index}.order`, index + 1);
    },
  });

  const signatureMutation = useCreateSignatureMutation({
    onSuccess: (response) => {
      toast.success('Saved');
      // eslint-disable-next-line no-underscore-dangle
      setFieldValue(`steps.${index}.step`, response._id);
      setFieldValue(`steps.${index}.order`, index + 1);
    },
  });

  const getStepById = (id: number) => {
    switch (id) {
      case 1:
        return <Checklist />;
      case 2:
        return <Upload />;
      default:
        return <Signature />;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    if (selectId === 1) {
      const payload = {
        type: WorkflowTypes.CHECKLIST,
        data,
      };
      mutation.mutate(payload);
    }

    if (selectId === 2) {
      const payload = {
        type: WorkflowTypes.UPLOAD_DOCUMENT,
        data,
      };
      mutation.mutate(payload);
    }

    if (selectId === 3) {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('overview', data.overview);
      formData.append('docs', data.docs);
      signatureMutation.mutate(formData);
    }
  };

  return (
    <div>
      <p>Step {index + 1}</p>
      <div className="mt-4">
        <Formik
          initialValues={getInitialValue(selectId)}
          validationSchema={getSchema(selectId)}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="px-[5%] pb-5 pt-2 rounded-md bg-white min-h-[350px] shadow-[1px_1px_0px_0px_#000] border-solid border">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-4 w-[60%]">
                    <FormField
                      label="Title"
                      inputSize="sm"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors.title}
                      touched={touched.title}
                    />
                    <FormField
                      label="Overview"
                      name="overview"
                      value={values.overview}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors.overview}
                      touched={touched.overview}
                    />
                  </div>
                  <div className="mt-[23px]">
                    <WorkflowSelect setSelectId={setSelectId} />
                  </div>
                </div>
                <hr className="my-10" />
                <div className="w-full">{getStepById(selectId)}</div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default WorkflowField;
