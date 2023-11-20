import Button from 'modules/general/components/buttons/button';
import { useNavigate } from 'react-router-dom';
import Step from '../step';

type Props = {
  firstName: string;
  workflowAssigned: string;
  isLoading: boolean;
};

const Welcome = ({ firstName, workflowAssigned, isLoading }: Props) => {
  const navigate = useNavigate();

  return (
    <Step>
      <h1 className="mb-1 text-black text-[40px] font-bold">Welcome</h1>
      <p className="text-sm font-normal">
        Hi {firstName}, complete these steps and get fully onboarded
      </p>
      <img
        src={require('assets/employee-illustration.svg').default}
        alt="star icon"
      />
      <div className="mt-5">
        <Button
          label="Proceed"
          className="py-4 h-max !w-[140px]"
          icon={require('assets/arrow-right.svg').default}
          iconPosition="right"
          onClick={() => navigate(`/employee/${workflowAssigned}`)}
          isLoading={isLoading}
        />
      </div>
    </Step>
  );
};

export default Welcome;
