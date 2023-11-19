import { WorkflowTypes } from 'modules/company/store/workflow';
import { checklistSchema, signatureSchema, uploadSchema } from '../validation';

const uploadValues = {
  title: '',
  overview: '',
  documents: [
    {
      name: '',
    },
  ],
};

const checklistValues = {
  title: '',
  overview: '',
  items: [
    {
      label: '',
    },
  ],
};

const signatureValues = {
  title: '',
  overview: '',
  docs: null,
};

export const getInitialValue = (id: string) => {
  switch (id) {
    case WorkflowTypes.CHECKLIST:
      return checklistValues;
    case WorkflowTypes.UPLOAD_DOCUMENT:
      return uploadValues;
    default:
      return signatureValues;
  }
};

export const getSchema = (id: string) => {
  switch (id) {
    case WorkflowTypes.CHECKLIST:
      return checklistSchema;
    case WorkflowTypes.UPLOAD_DOCUMENT:
      return uploadSchema;
    default:
      return signatureSchema;
  }
};
