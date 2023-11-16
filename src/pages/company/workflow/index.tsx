import workflowTemplates from 'mockdata/workflow';
import Button from 'modules/general/components/buttons/button';
import EmptyState from 'modules/company/components/emptyState';
import TemplateList from 'modules/company/components/templateList';
import { useNavigate } from 'react-router-dom';
import { useGetWorkflows } from 'modules/company/store/workflow/queries';
import SpinnerLoader from 'modules/general/components/spinner/spinnerLoader';

const Workflow = () => {
  const navigate = useNavigate();
  const { data: templates, isLoading } = useGetWorkflows();

  if (isLoading) {
    return (
      <div className="mx-[5%] mt-[60px] rounded-md bg-white h-[600px] shadow-[1px_1px_0px_0px_#000] border-solid border">
        <div className="flex justify-center mt-[15%]">
          <SpinnerLoader />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-[5%]">
      <div className="flex justify-between mt-[30px]">
        <h1 className="text-[20px] font-normal">Templates</h1>
        <Button
          label="+ Create Workflow"
          size="md"
          onClick={() => navigate('/company/workflow/create')}
        />
      </div>
      <div className="mt-[30px] rounded-md bg-white h-[550px] shadow-[1px_1px_0px_0px_#000] border-solid border max-sm:h-[650px] overflow-y-auto">
        {workflowTemplates.length === 0 ? (
          <EmptyState placeholder="Oops, there is no workflow" />
        ) : (
          <TemplateList templates={templates.data} />
        )}
      </div>
    </div>
  );
};

export default Workflow;
