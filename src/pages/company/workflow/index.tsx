import workflowTemplates from 'mockdata/workflow';
import Button from 'modules/company/components/buttons/button';
import EmptyState from 'modules/company/components/emptyState';
import TemplateList from 'modules/company/components/templateList';
import { useNavigate } from 'react-router-dom';

const Workflow = () => {
  const navigate = useNavigate();

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
          <TemplateList templates={workflowTemplates} />
        )}
      </div>
    </div>
  );
};

export default Workflow;
