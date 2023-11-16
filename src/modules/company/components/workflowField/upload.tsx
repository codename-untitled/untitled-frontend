/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import { FieldArray, FormikErrors, useFormikContext } from 'formik';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';

const Upload = () => {
  type Document = {
    // eslint-disable-next-line react/no-unused-prop-types
    name: string;
  };

  type ParentValue = {
    documents: Document[];
  };

  const documentValues = {
    label: '',
  };

  const { touched, values, handleChange, errors, handleBlur, handleSubmit } =
    useFormikContext<ParentValue>();

  return (
    <div>
      <FieldArray name="documents">
        {({ push }) => (
          <div className="flex flex-col gap-10 mt-10">
            {values.documents?.map(({ name }: Document, index) => (
              <FormField
                key={index}
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
            ))}
            <div className="flex gap-2">
              <Button
                label="+ Add document"
                color="purple"
                size="md"
                onClick={() => push(documentValues)}
              />
              <Button label="Save" color="green" onClick={handleSubmit} />
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default Upload;
