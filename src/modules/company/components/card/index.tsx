type RepoProps = {
  number: number;
  name: string;
  imageSrc: string;
};

const Card = ({ number, name, imageSrc }: RepoProps) => (
  <div className="rounded-md bg-white h-[170px] w-[270px] shadow-[1px_1px_0px_0px_#000] border-solid border">
    <div className="flex flex-row gap-3 pt-2 pl-5">
      <img src={imageSrc} alt="" />
    </div>
    <div className="flex flex-col gap-2 mx-3 pl-4 pt-2">
      <h1 className="text-[30px] font-600">{number}</h1>
      <div className="flex justify-between">
        <p className="text-[14px] font-normal">{name}</p>
      </div>
    </div>
  </div>
);

export default Card;
