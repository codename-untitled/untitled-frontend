import Button from '../../../general/components/buttons/button';
import FormField from '../formField';
import ModalBase from './modalBase';
import { ModalProps } from './types';

const EmployeeDetailsModal = ({ show, setShow }: ModalProps) => (
  <ModalBase modalLabel="Employee Details" show={show} setShow={setShow}>
    <form action="" className="mx-[3%]">
      <div className="flex w-[100%] gap-[30px] mt-[20px]">
        <div className="basis-[50%]">
          <FormField label="First name" />
        </div>
        <div className="basis-[50%]">
          <FormField label="Last name" />
        </div>
      </div>
      <div className="flex w-[100%] gap-[30px] mt-[20px]">
        <div className="basis-[50%]">
          <FormField label="Company email" />
        </div>
        <div className="basis-[50%]">
          <FormField label="Phone no" />
        </div>
      </div>
      <div className="w-[100%] mt-[20px]">
        <FormField label="Phone no" />
      </div>
      <div className="flex w-[100%] gap-[30px] mt-[20px]">
        <div className="basis-[50%]">
          <FormField label="Department" />
        </div>
        <div className="basis-[50%]">
          <FormField label="Role" />
        </div>
      </div>
      <div className="w-[100%] mt-[40px] flex gap-4">
        <Button
          label="Edit"
          icon={require('assets/edit.svg').default}
          color="white"
        />
        <Button label="Save" />
      </div>
    </form>
  </ModalBase>
);

export default EmployeeDetailsModal;
