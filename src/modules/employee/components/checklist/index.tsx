/* eslint-disable no-underscore-dangle */
import { CheckListType } from 'modules/employee/store';
import Step from '../step';

interface ChecklistProps {
  onBackClick?: () => void;
  onProceedClick?: () => void;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
  data: CheckListType;
}

const Checklist = ({
  onBackClick,
  onProceedClick,
  hasBackButton,
  hasProceedButton,
  data,
}: ChecklistProps) => (
  <Step
    hasBackButton={hasBackButton}
    hasProceedButton={hasProceedButton}
    onBackClick={onBackClick}
    onProceedClick={onProceedClick}
  >
    <h1 className="mb-7 text-black text-[40px] font-bold">{data.title}</h1>
    <p className="px-9 pb-5 border-b border-solid border-grey text-sm font-normal text-center max-w-2xl">
      {data.overview}
    </p>
    {data.items.map((item) => (
      <div key={item._id}>
        <form className="flex gap-x-2.5 items-center">
          <p className="text-sm font-normal">{item.label}</p>
          <input
            type="checkbox"
            className="appearance-none w-[15px] h-[15px] border border-solid border-black shadow-[1px_1px_0_0_#000] checked:bg-chartPurple checked:border-chartPurple"
          />
        </form>
      </div>
    ))}
  </Step>
);

export default Checklist;
