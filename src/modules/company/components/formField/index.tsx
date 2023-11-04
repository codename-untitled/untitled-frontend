interface Props {
  label: string;
  placeholder?: string;
  errors?: string;
  touched?: boolean;
}

const FormField = ({ label, ...rest }: Props) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <label className='text-[14px] font-light'>{label}</label>
      <input
        {...rest}
        className='shadow-[1px_1px_0px_0px_#000] h-[50px] border-solid border-[0.5px] border-black bg-white rounded-md pl-5'
      />
    </div>
  );
};

export default FormField;
