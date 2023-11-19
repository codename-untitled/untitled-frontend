import Step from '../step';
import FileInput from '../fileInput';

interface StepThreeProps {
  onBackClick?: () => void;
  onProceedClick?: () => void;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
}
const StepThree = ({
  onBackClick,
  onProceedClick,
  hasBackButton,
  hasProceedButton,
}: StepThreeProps) => (
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
    <FileInput className="mt-9 mb-28" />
  </Step>
);

export default StepThree;
