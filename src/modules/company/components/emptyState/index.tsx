type Props = {
  placeholder: string;
};

function EmptyState({ placeholder }: Props) {
  return (
    <div className="flex flex-col items-center mt-[15%] max-md:mt-[30%]">
      <img src={require('assets/box.svg').default} alt="" />
      <p className="text-base text-grey">{placeholder}</p>
    </div>
  );
}

export default EmptyState;
