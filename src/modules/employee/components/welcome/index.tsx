import { useNavigate } from 'react-router-dom';
import Step from '../step';

type Props = {
  firstName: string;
  workflowAssigned: string;
};

const Welcome = ({ firstName, workflowAssigned }: Props) => {
  const navigate = useNavigate();

  return (
    <Step
      hasProceedButton
      onProceedClick={() => {
        navigate(`/employee/${workflowAssigned}`);
      }}
    >
      <h1 className="mb-1 text-black text-[40px] font-bold">Welcome</h1>
      <p className="text-sm font-normal">
        Hi {firstName}, complete these steps and get fully onboarded
      </p>
      <img
        src={require('assets/employee-illustration.svg').default}
        alt="star icon"
      />
    </Step>
  );
};

export default Welcome;
