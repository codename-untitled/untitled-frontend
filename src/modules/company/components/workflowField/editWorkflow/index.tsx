/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
import { Formik, useFormikContext } from 'formik';
import {
  StepSchema,
  useAddStepToWorkflowMutation,
  useCreateChecklistOrUploadMutation,
  useUpdateStepMutation,
  WorkflowTypes,
} from 'modules/company/store/workflow';
import { createSignature } from 'modules/company/store/workflow/customMutation';
import FormField from 'modules/general/components/formComponents/formField';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import WorkflowSelect from '../../workflowSelect';
import Checklist from '../checklist';
import Signature from '../signature';
import Upload from '../upload';
import { getInitialValue, getNewInitialValue, getSchema } from './store';

type Props = {
  index: number;
  workflowSchema: StepSchema;
};

const EditWorkflowField = ({ index, workflowSchema }: Props) => {
  const [selectId, setSelectId] = useState(
    workflowSchema?.type ?? WorkflowTypes.CHECKLIST
  );
  const params = useParams();
  const { setFieldValue } = useFormikContext();

  const getStepById = (id: string) => {
    switch (id) {
      case WorkflowTypes.CHECKLIST:
        return <Checklist />;
      case WorkflowTypes.UPLOAD_DOCUMENT:
        return <Upload />;
      default:
        return <Signature workflowSchema={workflowSchema} />;
    }
  };

  const addStepToWorkflowMutation = useAddStepToWorkflowMutation(
    `${params.id}`,
    {
      onSuccess: () => {
        toast.success('Added to Workflow');
      },
    }
  );

  const createChecklistorUplpoadMutation = useCreateChecklistOrUploadMutation({
    onSuccess: (response) => {
      toast.success('Saved');
      setFieldValue(`steps.${index}.step`, response._id);
      setFieldValue(`steps.${index}.order`, index + 1);
      if (!workflowSchema) {
        const payload = {
          stepId: response._id,
          order: `${index + 1}`,
        };
        addStepToWorkflowMutation.mutate(payload);
      }
    },
  });

  const updateStepMutation = useUpdateStepMutation(`${workflowSchema?._id}`, {
    onSuccess: () => {
      toast.success('Saved');
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    if (selectId === WorkflowTypes.CHECKLIST) {
      const payload = {
        type: WorkflowTypes.CHECKLIST,
        data,
      };

      if (workflowSchema) {
        updateStepMutation.mutate(payload);
      } else {
        createChecklistorUplpoadMutation.mutate(payload);
      }
    }

    if (selectId === WorkflowTypes.UPLOAD_DOCUMENT) {
      const payload = {
        type: WorkflowTypes.UPLOAD_DOCUMENT,
        data,
      };

      if (workflowSchema) {
        updateStepMutation.mutate(payload);
      } else {
        createChecklistorUplpoadMutation.mutate(payload);
      }
    }

    if (selectId === WorkflowTypes.SIGN_DOCUMENT) {
      const formData = new FormData();
      formData.append('title', data.title || '');
      formData.append('overview', data.overview || '');
      formData.append('docs', data.docs);

      createSignature(formData)
        .then((response) => {
          if (response) {
            toast.success('Success');
            setFieldValue(`steps.${index}.step`, response.data._id);
            setFieldValue(`steps.${index}.order`, index + 1);
          }
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <p>Step {index + 1}</p>
      </div>
      <div className="mt-4">
        <Formik
          initialValues={
            workflowSchema?.type
              ? getInitialValue(workflowSchema.type, workflowSchema?.data)
              : getNewInitialValue(selectId)
          }
          validationSchema={
            workflowSchema?.type
              ? getSchema(workflowSchema.type)
              : getSchema(selectId)
          }
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
                <div className="flex justify-between max-lg:flex-col">
                  <div className="flex flex-col gap-4 w-[60%] max-lg:w-[100%]">
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
                    <WorkflowSelect
                      setSelectId={setSelectId}
                      workflowType={workflowSchema?.type}
                      allowStepChange={!workflowSchema}
                    />
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

export default EditWorkflowField;
