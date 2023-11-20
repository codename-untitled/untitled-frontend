import { useState } from 'react';

interface FileInputProps {
  className?: string;
  label?: string;
}

const FileInput = ({ className, label }: FileInputProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      setFile(selectedFile);
      // setFieldValue('docs', selectedFile);
    }
  };

  return (
    <div className={className}>
      <div className="flex gap-x-2.5 items-center">
        <label
          htmlFor={label}
          className="py-5 border border-solid border-black shadow-[1px_1px_0_0_#000] rounded-md bg-white flex gap-x-2 items-center justify-center w-[400px] cursor-pointer"
        >
          <img
            src={require('assets/paper-clip.svg').default}
            alt="paper clip icon"
          />
          <p className="text-sm font-normal">{label}</p>
        </label>
        <input
          type="file"
          id={label}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {file && (
        <div className="mt-4 flex gap-x-1.5 items-center justify-end">
          <img
            src={require('assets/purple-checked.svg').default}
            alt="checked icon"
          />
          <p className="text-sm font-normal">
            {`${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileInput;
