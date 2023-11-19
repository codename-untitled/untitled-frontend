import { atom } from 'jotai';
import {
  AssignWorkflowAtom,
  DeleteAtom,
  PersonalizedWorkflowAtom,
} from './types';

export const deleteWorkflowAtom = atom<DeleteAtom>({
  fileName: '',
  showModal: false,
  workflowId: '',
});

export const assignWorkflowAtom = atom<AssignWorkflowAtom>({
  showModal: false,
  workflowId: '',
});

export const personalizeWorkflowAtom = atom<PersonalizedWorkflowAtom>({
  showModal: false,
  assignedWorkflowId: '',
});
