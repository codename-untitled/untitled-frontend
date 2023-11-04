import Button from 'modules/company/components/buttons/button';
import EmptyState from 'modules/company/components/emptyState';

const Repository = () => {
  return (
    <div className='mx-[5%]'>
      <div className='flex justify-between mt-[30px]'>
        <Button
          label='Filter'
          icon={require('assets/sort.svg').default}
          color='white'
        />
        <Button label='+ Add Employee' size='lg' />
      </div>
      <div className='mt-[30px] rounded-md bg-white h-[100%] min-h-[550px] shadow-[1px_1px_0px_0px_#000] border-solid border'>
        <EmptyState placeholder='No files found' />
      </div>
    </div>
  );
};

export default Repository;
