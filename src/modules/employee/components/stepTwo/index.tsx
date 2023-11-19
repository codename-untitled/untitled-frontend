import Step from '../step';

interface StepTwoProps {
  onBackClick?: () => void;
  onProceedClick?: () => void;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
}

const StepTwo = ({
  onBackClick,
  onProceedClick,
  hasBackButton,
  hasProceedButton,
}: StepTwoProps) => (
  <Step
    hasBackButton={hasBackButton}
    hasProceedButton={hasProceedButton}
    onBackClick={onBackClick}
    onProceedClick={onProceedClick}
  >
    <h1 className="mb-7 text-black text-[40px] font-bold">Title</h1>
    <p className="px-9 pb-5 border-b border-solid border-grey text-sm font-normal text-center max-w-2xl">
      Lorem ipsum dolor sit amet consectetur. Arcu id interdum ullamcorper
      gravida fringilla turpis. Mattis erat erat tortor orci quam turpis morbi
      tellus lacus. Vel viverra nisl vitae non maecenas.
    </p>
    <div className="my-24 flex gap-x-2.5 items-center">
      <p className="text-sm font-normal">
        Have you gotten your laptop and materials to report to HR?
      </p>
      <input
        type="checkbox"
        className="appearance-none w-[15px] h-[15px] border border-solid border-black shadow-[1px_1px_0_0_#000] checked:bg-chartPurple checked:border-chartPurple"
      />
    </div>
  </Step>
);

export default StepTwo;
