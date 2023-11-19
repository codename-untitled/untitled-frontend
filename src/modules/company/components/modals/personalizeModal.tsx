/* eslint-disable react/jsx-curly-newline */
import { useAtom } from 'jotai';
import { personalizeWorkflowAtom } from 'modules/company/store/workflow';
import Button from 'modules/general/components/buttons/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalizeModal = () => {
  const navigate = useNavigate();
  const [personalizeState, setPersonalizeState] = useAtom(
    personalizeWorkflowAtom
  );

  return (
    <div
      className={`m-0 p-0 w-screen h-full min-h-screen bg-offBlack fixed top-0 left-0 flex justify-center items-center z-50 ${
        !personalizeState.showModal && 'hidden'
      }`}
    >
      <div className="w-[532px] p-3 pb-10 shadow-[1px_1px_0px_0px_#000] border-solid border bg-white rounded-md mx-[5%] flex flex-col gap-5">
        <img
          src={require('assets/personalize.svg').default}
          alt="personalize"
          className="block mx-auto mt-5"
        />
        <p className="text-center">
          Do you want to personalize workflow with contract agreements and
          documents?
        </p>
        <div className="flex gap-3 justify-center mt-5">
          <Button
            label="No, thanks"
            color="white"
            size="md"
            onClick={() =>
              setPersonalizeState({
                showModal: false,
              })
            }
          />
          <Button
            label="Personalize"
            color="purple"
            size="md"
            onClick={() =>
              navigate(
                `/company/workflow/personalize/${personalizeState.assignedWorkflowId}`
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalizeModal;
