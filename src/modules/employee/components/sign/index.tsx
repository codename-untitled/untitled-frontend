import { SignDocumentType } from 'modules/employee/store';
import Step from '../step';
import FileInput from '../fileInput';

interface SignProps {
  onBackClick?: () => void;
  onCompleteClick?: () => void;
  onProceedClick?: () => void;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
  data: SignDocumentType;
}
const Sign = ({
  onBackClick,
  onCompleteClick,
  onProceedClick,
  hasProceedButton,
  hasBackButton,
  data,
}: SignProps) => (
  <Step
    hasProceedButton={hasProceedButton}
    hasBackButton={hasBackButton}
    onBackClick={onBackClick}
    onCompleteClick={onCompleteClick}
    onProceedClick={onProceedClick}
  >
    <h1 className="mb-7 text-black text-[40px] font-bold">{data.title}</h1>
    <p className="px-9 pb-5 border-b border-solid border-grey text-sm font-normal text-center max-w-2xl">
      {data.overview}
    </p>
    <div className="mt-9 mb-12 flex flex-col gap-y-7">
      <div className="px-7 py-5 border border-solid border-black shadow-[1px_1px_0_0_#000] rounded-md bg-white flex items-center justify-between w-full">
        <div className="flex gap-x-2 items-center">
          <img
            src={require('assets/document.svg').default}
            alt="document icon"
          />
          <p className="text-sm font-normal">NDA doc</p>
        </div>
        <a
          href="/"
          download
          className="text-xs font-normal underline text-chartPurple"
        >
          Download
        </a>
      </div>
      <FileInput />
    </div>
  </Step>
);

export default Sign;
