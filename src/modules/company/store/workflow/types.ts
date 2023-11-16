type ChecklistItems = {
  label: string;
};

export type ChecklistData = {
  title: string;
  overview: string;
  items: ChecklistItems[];
};

type UploadDocuments = {
  name: string;
};

export type UploadData = {
  title: string;
  overview: string;
  items: UploadDocuments[];
};

export type ChecklistOrUploadPayload = {
  type: string;
  data: ChecklistData | UploadData;
};

export type SignaturePayload = {
  title: string;
  overview: string;
  docs: File;
};

export enum WorkflowTypes {
  CHECKLIST = 'CheckList',
  UPLOAD_DOCUMENT = 'UploadDocument',
  SIGN_DOCUMENT = 'SignDocument',
}

type StepDocuments = {
  step: string;
  order: string;
};

export interface WorkflowPayload {
  title: string;
  overview: string;
  steps: StepDocuments[];
}

export interface WorkflowData extends WorkflowPayload {
  id: string;
}

export type WorkflowResponse = {
  data: WorkflowData[];
};
