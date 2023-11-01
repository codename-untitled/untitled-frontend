
type Props = {
  placeholder: string;
};

const EmptyState = ({ placeholder }: Props) => {
  return (
    <div className='flex flex-col items-center mt-[10%]'>
      <img src={require('assets/box.svg').default} alt='' />
      <p className='text-base text-grey'>{placeholder}</p>
    </div>
  );
};

export default EmptyState;
