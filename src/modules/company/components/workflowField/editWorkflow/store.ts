import { WorkflowTypes } from 'modules/company/store/workflow';
import { checklistSchema, signatureSchema, uploadSchema } from './validation';

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

type UploadDocument = {
  title: string;
  overview: string;
  documents: { name: string }[];
};

type ChecklistValues = {
  title: string;
  overview: string;
  items: { label: string }[];
};

type SignatureValues = {
  title: string;
  overview: string;
  docs: string | File;
};

const uploadValues = (workflowSchema: UploadDocument) => ({
  title: workflowSchema.title,
  overview: workflowSchema.overview,
  documents: workflowSchema.documents.map((doc: { name: string }) => ({
    name: doc.name,
  })),
});

const checklistValues = (workflowSchema: ChecklistValues) => ({
  title: workflowSchema.title,
  overview: workflowSchema.overview,
  items: workflowSchema.items.map((item: { label: string }) => ({
    label: item.label,
  })),
});

const signatureValues = (workflowSchema: SignatureValues) => ({
  title: workflowSchema.title,
  overview: workflowSchema.overview,
  docs: workflowSchema.docs,
});

export const getInitialValue = (workflowType: string, workflowSchema: any) => {
  switch (workflowType) {
    case WorkflowTypes.CHECKLIST:
      return checklistValues(workflowSchema);
    case WorkflowTypes.UPLOAD_DOCUMENT:
      return uploadValues(workflowSchema);
    default:
      return signatureValues(workflowSchema);
  }
};
const newUploadValues = {
  title: '',
  overview: '',
  documents: [
    {
      name: '',
    },
  ],
};

const newChecklistValues = {
  title: '',
  overview: '',
  items: [
    {
      label: '',
    },
  ],
};

const newSignatureValues = {
  title: '',
  overview: '',
  docs: null,
};

export const getNewInitialValue = (id: string) => {
  switch (id) {
    case WorkflowTypes.CHECKLIST:
      return newChecklistValues;
    case WorkflowTypes.UPLOAD_DOCUMENT:
      return newUploadValues;
    default:
      return newSignatureValues;
  }
};
