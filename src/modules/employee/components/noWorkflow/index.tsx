import Button from 'modules/general/components/buttons/button';
import { useNavigate } from 'react-router-dom';
import Step from '../step';

const NoWorkflow = () => {
  const navigate = useNavigate();

  return (
    <Step>
      <img src={require('assets/oops.svg').default} alt="oops illustration" />
      <p className="my-8 text-base font-medium text-center">
        You do not been assigned any information to fill.
        <br />
        Kindly contact your Manager{' '}
      </p>
      <div className="mt-5">
        <Button
          label="Back"
          className="py-4 h-max !w-[140px]"
          color="white"
          onClick={() => navigate(-1)}
        />
      </div>
    </Step>
  );
};

export default NoWorkflow;
