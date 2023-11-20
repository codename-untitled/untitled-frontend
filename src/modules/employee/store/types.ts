import { WorkflowTypes } from 'modules/company/store/workflow';

type StepItemType = {
  label: string;
  completed: boolean;
  _id: string;
};

export type CheckListType = {
  _id: string;
  data: {
    _id: string;
    title: string;
    overview: string;
    items: StepItemType[];
  };
  type: WorkflowTypes.CHECKLIST;
};

export type Documents = {
  title: string;
  overview: string;
  documents: {
    name: string;
    url: string;
    _id: string;
  }[];
};

export type UploadDocumentType = {
  _id: string;
  type: WorkflowTypes.UPLOAD_DOCUMENT;
  data: Documents;
};

export type SignDocumentType = {
  _id: string;
  type: WorkflowTypes.SIGN_DOCUMENT;
  data: Documents;
};

type StepType = {
  step: CheckListType | UploadDocumentType | SignDocumentType;
  order: number;
  _id: string;
};

export type WorkflowSchema = {
  _id: string;
  title: string;
  overview: string;
  steps: StepType[];
};

export type Employee = {
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  jobTitle: string;
  phoneNumber: string;
  role: string;
  department: string;
  assignedWorkflow: string;
};
