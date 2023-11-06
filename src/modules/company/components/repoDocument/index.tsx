type RepoProps = {
  name: string;
  documentType: string;
  date: string;
};

const RepoDocument = ({ name, documentType, date }: RepoProps) => (
  <div className="rounded-md bg-white h-[212px] w-[212px] shadow-[1px_1px_0px_0px_#000] border-solid border">
    <div className="border-solid border-b-[0.3px] rounded-br-md rounded-bl-md">
      <img
        src={require('assets/document-folder.svg').default}
        alt=""
        className="block ml-auto mr-auto"
      />
    </div>
    <div className="flex flex-col gap-3 mx-3 pt-2">
      <h1 className="text-[12px] font-normal">{name}</h1>
      <div className="flex justify-between">
        <p className="text-[12px] font-normal text-grey">{date}</p>
        <p className="text-[12px] font-normal text-grey">{documentType}</p>
      </div>
    </div>
  </div>
);

export default RepoDocument;
