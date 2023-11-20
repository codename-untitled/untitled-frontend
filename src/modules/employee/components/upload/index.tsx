/* eslint-disable no-underscore-dangle */
import { UploadDocumentType } from 'modules/employee/store';
import Step from '../step';
import FileInput from '../fileInput';

interface UploadProps {
  onBackClick?: () => void;
  onProceedClick?: () => void;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
  data: UploadDocumentType;
}
const Upload = ({
  onBackClick,
  onProceedClick,
  hasBackButton,
  hasProceedButton,
  data,
}: UploadProps) => (
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
    {data.documents.map((document) => (
      <div key={document._id}>
        <FileInput className="mt-9 mb-28" label={document.name} />
      </div>
    ))}
  </Step>
);

export default Upload;
