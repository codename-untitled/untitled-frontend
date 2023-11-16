import { checklistSchema, signatureSchema, uploadSchema } from './validation';

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

export const getInitialValue = (id: number) => {
  switch (id) {
    case 1:
      return checklistValues;
    case 2:
      return uploadValues;
    default:
      return signatureValues;
  }
};

export const getSchema = (id: number) => {
  switch (id) {
    case 1:
      return checklistSchema;
    case 2:
      return uploadSchema;
    default:
      return signatureSchema;
  }
};
