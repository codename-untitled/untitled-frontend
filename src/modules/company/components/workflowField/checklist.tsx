/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
  const { touched, values, handleChange, errors, handleBlur, handleSubmit } =
    useFormikContext<ParentValue>();

  const checklistValues = {
    label: '',
  };

  return (
    <div>
      <div>
        <FieldArray name="items">
          {({ push, remove }) => (
            <div className="flex flex-col gap-10 mt-10">
              {values.items?.map(({ label }: Items, index) => (
                <div key={index}>
                  <p
                    className={`flex justify-end text-[12px] cursor-pointer text-red-600 ${
                      index === 0 && 'hidden'
                    }`}
                    onClick={() => remove(index)}
                  >
                    delete
                  </p>
                  <FormField
                    placeholder="E.g Have you collected your laptop?"
                    name={`items.${index}.label`}
                    value={label}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={
                      (errors.items as FormikErrors<{ label: string }>[])?.[
                        index
                      ]?.label
                    }
                    touched={
                      touched.items &&
                      touched.items[index] &&
                      touched.items[index].label
                    }
                  />
                </div>
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