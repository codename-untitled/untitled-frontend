import Button from 'modules/general/components/buttons/button';
import { useAtom } from 'jotai';
import { useDeleteWorkflowMutation } from 'modules/company/store/workflow';
import toast from 'react-hot-toast';
import { deleteWorkflowAtom } from 'modules/company/store/workflow/states';

type Props = {
  mutate: () => void;
};

const DeleteModal = ({ mutate }: Props) => {
  const [deleteState, setDeleteState] = useAtom(deleteWorkflowAtom);

  const deleteMutation = useDeleteWorkflowMutation(
    deleteState.workflowId as string,
    {
      onSuccess: () => {
        toast.success('Workflow Deleted');
        setDeleteState({
          showModal: false,
          workflowId: '',
          fileName: '',
        });
        mutate();
      },
    }
  );

  return (
    <div
      className={`m-0 p-0 w-screen h-full min-h-screen bg-offBlack fixed top-0 left-0 flex justify-center items-center z-50 ${
        !deleteState.showModal && 'hidden'
      }`}
    >
      <div className="w-[326px] p-3 pb-10 shadow-[1px_1px_0px_0px_#000] border-solid border bg-white rounded-md mx-[5%]">
        <button
          onClick={() => {
            setDeleteState({
              showModal: false,
            });
          }}
          type="button"
          className="block ml-auto"
        >
          <img src={require('assets/x-cancel.svg').default} alt="cancel" />
        </button>
        <div>
          <p className="text-center font-semibold px-5 mt-5">
            Are you sure you want to delete {deleteState.fileName}?
          </p>
          <div className="flex gap-3 justify-center mt-10">
            <Button
              label="No, thanks"
              color="white"
              onClick={() => {
                setDeleteState({
                  showModal: false,
                });
              }}
            />
            <Button
              label="Delete"
              color="red"
              onClick={() => deleteMutation.mutate('')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
