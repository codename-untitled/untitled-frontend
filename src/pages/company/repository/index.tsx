import repositoryFiles from 'mockdata/repository';
import Button from 'modules/general/components/buttons/button';
import EmptyState from 'modules/company/components/emptyState';
import RepositoryList from 'modules/company/components/repositoryList';

const Repository = () => (
  <div className="mx-[5%]">
    <div className="flex justify-between mt-[30px]">
      <Button
        label="Filter"
        icon={require('assets/sort.svg').default}
        color="white"
      />
      <Button label="+ Upload doc" size="md" />
    </div>
    <div className="mt-[30px] rounded-md bg-white h-[550px] shadow-[1px_1px_0px_0px_#000] border-solid border max-sm:h-[650px] overflow-y-auto">
      {repositoryFiles.length === 0 ? (
        <EmptyState placeholder="No files found" />
      ) : (
        <RepositoryList repositories={repositoryFiles} />
      )}
    </div>
  </div>
);

export default Repository;
