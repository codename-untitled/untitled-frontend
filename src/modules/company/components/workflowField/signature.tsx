/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from 'formik';
import { ChangeEvent, useState } from 'react';

const Signature = () => {
  const [fileName, setFileName] = useState('Choose a file');

  const { touched, values, handleChange, errors, handleBlur } =
    useFormikContext();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      setFileName(selectedFile.name);
    } else {
      setFileName('Choose a file');
    }
  };

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
          {fileName}
        </label>
      </div>
      <p className="flex justify-end text-[12px] mt-1">Max size 5mb</p>
    </div>
  );
};

export default Signature;
