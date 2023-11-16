/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import { FieldArray, FormikErrors, useFormikContext } from 'formik';
import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formComponents/formField';

type Items = {
  // eslint-disable-next-line react/no-unused-prop-types
  label: string;
};

type ParentValue = {
  items: Items[];
};

const Checklist = () => {
  const checklistValues = {
    label: '',
  };

  const { touched, values, handleChange, errors, handleBlur, handleSubmit } =
    useFormikContext<ParentValue>();

  return (
    <div>
      <div>
        <FieldArray name="items">
          {({ push }) => (
            <div className="flex flex-col gap-10 mt-10">
              {values.items?.map(({ label }: Items, index) => (
                <FormField
                  key={index}
                  placeholder="E.g Have you collected your laptop?"
                  name={`items.${index}.label`}
                  value={label}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={
                    (errors.items as FormikErrors<{ label: string }>[])?.[index]
                      ?.label
                  }
                  touched={
                    touched.items &&
                    touched.items[index] &&
                    touched.items[index].label
                  }
                />
              ))}
              <div className="flex gap-2">
                <Button
                  label="+ Add question"
                  color="purple"
                  size="md"
                  onClick={() => push(checklistValues)}
                />
                <Button label="Save" color="green" onClick={handleSubmit} />
              </div>
            </div>
          )}
        </FieldArray>
      </div>
    </div>
  );
};

export default Checklist;
