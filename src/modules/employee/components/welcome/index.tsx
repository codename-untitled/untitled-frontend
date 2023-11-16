import Step from '../step';

interface WelcomeProps {
  onProceedClick: () => void;
}

const Welcome = ({ onProceedClick }: WelcomeProps) => (
  <Step hasProceedButton onProceedClick={onProceedClick}>
    <h1 className="mb-1 text-black text-[40px] font-bold">Welcome</h1>
    <p className="text-sm font-normal">
      Hi [username], complete these steps and get fully onboarded
    </p>
    <img
      src={require('assets/employee-illustration.svg').default}
      alt="star icon"
    />
  </Step>
);

export default Welcome;
