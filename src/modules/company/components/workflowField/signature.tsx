/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from 'formik';
import Button from 'modules/general/components/buttons/button';
import { ChangeEvent, useState } from 'react';

type ParentValue = {
  docs: string;
};

type Props = {
  workflowSchema?: any;
  isLoading?: boolean;
};

const Signature = ({ workflowSchema, isLoading }: Props) => {
  const [fileName, setFileName] = useState(
    workflowSchema?.data?.documents[0]?.name ?? 'Choose a file'
  );

  const { touched, errors, handleSubmit, setFieldValue } =
    useFormikContext<ParentValue>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      setFileName(selectedFile.name);
      setFieldValue('docs', selectedFile);
    } else {
      setFileName('Choose a file');
    }
  };

  const documentErrors = errors.docs;

  return (
    <div>
      <div className="shadow-[1px_1px_0px_0px_#000] h-[50px] flex items-center border-solid border-[0.5px] border-black bg-white rounded-md pl-5 text-[14px]">
        <input
          type="file"
          className="hidden"
          id="file-upload"
          onChange={handleFileChange}
        />
        <label className="flex gap-1 cursor-pointer" htmlFor="file-upload">
          <img src={require('assets/document-upload.svg').default} alt="" />
          <span className="line-clamp-1">{fileName}</span>
        </label>
      </div>
      {documentErrors && touched.docs && (
        <p className="text-[12px] text-red-600 ml-2">{documentErrors}</p>
      )}
      <p className="flex justify-end text-[12px] mt-1">Max size 5mb</p>
      <div>
        <Button
          label="Create"
          color="green"
          isLoading={isLoading}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Signature;
