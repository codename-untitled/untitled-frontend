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

export type SignData = {
  title: string;
  overview: string;
  docs: string;
};

export enum WorkflowTypes {
  CHECKLIST = 'CheckList',
  UPLOAD_DOCUMENT = 'UploadDocument',
  SIGN_DOCUMENT = 'SignDocument',
}
