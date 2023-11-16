import Step from '../step';

const StepsComplete = () => (
  <Step className="py-48">
    <img
      src={require('assets/big-success-icon.svg').default}
      alt="success icon"
    />
    <h1 className="text-black text-[40px] leading-10 font-bold">Completed</h1>
    <p className="text-sm font-normal text-center max-w-2xl">
      Congratulations you have completed the onboarding process, you will
      receive information shortly in your email. Cheers!
    </p>
  </Step>
);

export default StepsComplete;
