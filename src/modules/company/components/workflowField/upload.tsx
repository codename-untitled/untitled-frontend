/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import { FieldArray, FormikErrors, useFormikContext } from 'formik';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';
import { useLocation } from 'react-router-dom';

type Document = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: string;
};

type ParentValue = {
  documents: Document[];
};

const Upload = () => {
  const location = useLocation();
  const { touched, values, handleChange, errors, handleBlur, handleSubmit } =
    useFormikContext<ParentValue>();

  const documentValues = {
    label: '',
  };

  return (
    <div>
      <FieldArray name="documents">
        {({ push, remove }) => (
          <div className="flex flex-col gap-10 mt-10">
            {values.documents?.map(({ name }: Document, index) => (
              <div key={index}>
                {location.pathname === '/company/workflow/create' && (
                  <p
                    className={`flex justify-end text-[12px] cursor-pointer text-red-600 ${
                      index === 0 && 'hidden'
                    }`}
                    onClick={() => remove(index)}
                  >
                    delete
                  </p>
                )}
                <FormField
                  placeholder="e.g NYSC Certificate"
                  name={`documents.${index}.name`}
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={
                    (errors.documents as FormikErrors<{ name: string }>[])?.[
                      index
                    ]?.name
                  }
                  touched={
                    touched.documents &&
                    touched.documents[index] &&
                    touched.documents[index].name
                  }
                />
              </div>
            ))}
            <div className="flex gap-2">
              <Button
                label="+ Add document"
                color="purple"
                size="md"
                onClick={() => push(documentValues)}
              />
              <Button label="Create" color="green" onClick={handleSubmit} />
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default Upload;
