import { useFormik } from 'formik';
import { saveWorkflowStep } from 'modules/employee/store/customMutation';
import { Dispatch, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { schema } from './validation';

interface FileInputProps {
  className?: string;
  label?: string;
  name: string;
  stepId: string;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
}

const FileInput = ({
  className,
  label,
  name,
  stepId,
  setIsDisabled,
}: FileInputProps) => {
  const [fileLabel] = useState(label ?? 'Add file or drop file here');
  const [file, setFile] = useState<File | null>(null);

  const params = useParams();

  const formik = useFormik({
    initialValues: {
      docs: '',
    },
    validationSchema: schema,
    onSubmit: () => {},
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      setIsDisabled(false);
      formik.setFieldValue('docs', selectedFile);
      toast.loading('Uploading...', {
        id: 'upload',
      });
      setFile(selectedFile);

      const formData = new FormData();
      formData.append('docs', selectedFile);
      formData.append('name', name);

      saveWorkflowStep(formData, params.id as string, stepId)
        .then((response) => {
          if (response) {
            toast.success('Uploaded', {
              id: 'upload',
            });
          }
        })
        .catch((err) => {
          toast.error(err.response.data.error, {
            id: 'upload',
          });
        });
    }
  };

  return (
    <div className={className}>
      <form>
        <div className="flex gap-x-2.5 items-center">
          <label
            htmlFor={name}
            className="py-5 border border-solid border-black shadow-[1px_1px_0_0_#000] rounded-md bg-white flex gap-x-2 items-center justify-center w-[400px] cursor-pointer"
          >
            <img
              src={require('assets/paper-clip.svg').default}
              alt="paper clip icon"
            />
            <p className="text-sm font-normal">{fileLabel}</p>
          </label>
          <input
            type="file"
            id={name}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {formik.errors.docs && formik.touched.docs && (
          <p className="text-[12px] text-red-600 ml-2">{formik.errors.docs}</p>
        )}
      </form>
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
