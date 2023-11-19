/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useAtom } from 'jotai';
import {
  assignWorkflowAtom,
  deleteWorkflowAtom,
} from 'modules/company/store/workflow';
import { useNavigate } from 'react-router-dom';

type TemplateProps = {
  name: string;
  id: string;
};

const Template = ({ name, id }: TemplateProps) => {
  const navigate = useNavigate();
  const [, setDeleteState] = useAtom(deleteWorkflowAtom);
  const [, setAssignWorkflowState] = useAtom(assignWorkflowAtom);

  return (
    <div className="rounded-md bg-white h-[212px] w-[212px] shadow-[1px_1px_0px_0px_#000] border-solid border">
      <div
        className="border-solid border-b-[0.3px] rounded-br-md rounded-bl-md cursor-pointer"
        onClick={() => navigate(`/company/workflow/edit/${id}`)}
      >
        <img
          src={require('assets/folder.svg').default}
          alt=""
          className="block ml-auto mr-auto"
        />
      </div>
      <div className="flex flex-col gap-3 mx-3 pt-3">
        <p className="text-[12px] font-normal">{name}</p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="assign"
              onClick={() => {
                setAssignWorkflowState({
                  showModal: true,
                  workflowId: id,
                });
              }}
            >
              <img src={require('assets/assign-user.svg').default} alt="" />
            </button>
            <button
              type="button"
              aria-label="edit"
              onClick={() => navigate(`/company/workflow/edit/${id}`)}
            >
              <img src={require('assets/edit_template.svg').default} alt="" />
            </button>
          </div>
          <button
            type="button"
            aria-label="delete"
            onClick={() => {
              setDeleteState({
                fileName: name,
                showModal: true,
                workflowId: id,
              });
            }}
          >
            <img src={require('assets/cancel cross.svg').default} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
