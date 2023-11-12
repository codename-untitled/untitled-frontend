import RepoDocument from '../repoDocument';

type Props = {
  repositories: { name: string; date: string; documentType: string }[];
};

const RepositoryList = ({ repositories }: Props) => (
  <div className="flex justify-center">
    <div className="py-5 px-5 grid grid-cols-4 gap-x-10 gap-y-7 max-xl:grid-cols-3 max-[868px]:grid-cols-2 max-sm:grid-cols-1">
      {repositories.map((repository) => (
        <RepoDocument
          key={repository.name}
          name={repository.name}
          date={repository.date}
          documentType={repository.documentType}
        />
      ))}
    </div>
  </div>
);

export default RepositoryList;
