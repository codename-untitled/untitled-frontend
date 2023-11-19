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

export type SignatureData = {
  title: string;
  overview: string;
  documents: { name: string; url: string }[];
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
  _id: string;
}

export type WorkflowResponse = {
  data: WorkflowData[];
};

export type UploadDocument = {
  id: string;
  title: string;
  overview: string;
  documents: '';
};

export type Step = {
  id: string;
  type: 'UploadDocument' | 'SignDocument' | 'CheckList';
  data: '';
};

export type WorkflowDetailsResponse = {
  id: string;
  title: string;
  overview: string;
  steps: [];
};

export type StepToWorkflowPayload = {
  stepId: string;
  order: string;
};

export interface SignDocumentSchema {
  _id: string;
  type: 'UploadDocument';
  data: UploadData;
}

export interface StepSchema {
  _id: string;
  type: WorkflowTypes;
  data: ChecklistData | UploadData | SignatureData;
}

interface WorkflowStep {
  step: StepSchema;
  order: number;
  _id: string;
}
export type WorkflowSchema = {
  _id: string;
  title: string;
  overview: string;
  steps: WorkflowStep[];
};

export type DeleteAtom = {
  fileName?: string;
  showModal?: boolean;
  workflowId?: string;
};

export type AssignWorkflowAtom = {
  showModal?: boolean;
  workflowId?: string;
};

export type PersonalizedWorkflowAtom = {
  showModal?: boolean;
  assignedWorkflowId?: string;
};

export type AssignWorkflowPayload = {
  workflowId: string;
  employeeId: string;
};
