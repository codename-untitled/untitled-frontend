import { WorkflowData } from 'modules/company/store/workflow';
import React from 'react';
import Template from '../template';

type Props = {
  templates: WorkflowData[];
};

const TemplateList = ({ templates }: Props) => (
  <div className="flex justify-center">
    <div className="py-5 px-5 grid grid-cols-4 gap-x-10 gap-y-7 max-xl:grid-cols-3 max-[868px]:grid-cols-2 max-sm:grid-cols-1">
      {templates.map((template) => (
        <Template name={template.title} id={template._id} key={template._id} />
      ))}
    </div>
  </div>
);

export default TemplateList;
