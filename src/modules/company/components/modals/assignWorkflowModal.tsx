/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useAtom } from 'jotai';
import { Employee, useGetEmployees } from 'modules/company/store/employees';
import {
  assignWorkflowAtom,
  personalizeWorkflowAtom,
  useAssignWorkflowMutation,
} from 'modules/company/store/workflow';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AssignWorkflowModal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Employee[]>([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [employeeId, setEmployeeId] = useState('');

  const [assignWorkflowState, setAssignWorkflowState] =
    useAtom(assignWorkflowAtom);

  const [, setPersonalizeState] = useAtom(personalizeWorkflowAtom);

  const { data: employees, isLoading } = useGetEmployees();

  const mutation = useAssignWorkflowMutation({
    onSuccess: (response) => {
      toast.success('success');

      setAssignWorkflowState({
        showModal: false,
      });

      setPersonalizeState({
        showModal: true,
        assignedWorkflowId: response.assignedWorkflow,
      });
    },
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowDropDown(true);
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = employees.filter((item) =>
      item.email.toLowerCase().includes(term)
    );
    setFilteredItems(filtered);
  };

  const handleSelect = (selectedItem: Employee) => {
    setSearchTerm(selectedItem.email);
    setEmployeeId(selectedItem.id);
  };

  const onSubmit = () => {
    const payload = {
      workflowId: assignWorkflowState.workflowId as string,
      employeeId,
    };

    mutation.mutate(payload);
  };

  return (
    <div
      className={`m-0 p-0 w-screen h-full min-h-screen bg-offBlack fixed top-0 left-0 flex justify-center items-center z-50 ${
        !assignWorkflowState.showModal && 'hidden'
      }`}
    >
      <div className="w-[728px] h-[500px] shadow-[1px_1px_0px_0px_#000] border-solid border bg-white rounded-md mx-[5%]">
        <div className="px-[5%] py-[20px] border-b-[1px] border-black border-solid pb-2">
          <div className="flex justify-between ">
            <h1 className="text-[24px]">Assign Workflow</h1>
            <button
              type="button"
              onClick={() => {
                setAssignWorkflowState({
                  showModal: false,
                });
              }}
            >
              <img src={require('assets/x-cancel.svg').default} alt="cancel" />
            </button>
          </div>
          <p className="text-[14px] font-extralight">
            Enter the email of the employee you want to assign this workflow to.
          </p>
        </div>
        <div className="px-[5%] mt-4">
          <FormField
            label="Email address"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {showDropDown && (
            <div>
              {!isLoading && (
                <div>
                  <div className="flex flex-col gap-2 my-4 after:shadow-[1px_1px_0px_0px_#000] h-[200px] w-full border-solid border-[0.5px] py-2 border-black bg-white rounded-md overflow-y-auto">
                    {filteredItems.map((item: Employee) => (
                      <li
                        key={item.id}
                        className="list-none hover:bg-gray-100 cursor-pointer pl-5"
                        onClick={() => handleSelect(item)}
                      >
                        {item.email}
                      </li>
                    ))}
                  </div>
                  <Button label="Assign" onClick={() => onSubmit()} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignWorkflowModal;
