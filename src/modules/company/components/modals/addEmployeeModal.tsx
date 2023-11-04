import Button from '../buttons/button';
import FormField from '../formField';
import ModalBase from './modalBase';
import { ModalProps } from './types';


const AddEmployeeModal = ({show, setShow}: ModalProps) => {
  return (
    <ModalBase modalLabel='Add Employee' show={show} setShow={setShow}>
      <form action='' className='mx-[3%]'>
        <div className='flex w-[100%] gap-[30px] mt-[20px]'>
          <div className='basis-[50%]'>
            <FormField label='First name' />
          </div>
          <div className='basis-[50%]'>
            <FormField label='Last name' />
          </div>
        </div>
        <div className='flex w-[100%] gap-[30px] mt-[20px]'>
          <div className='basis-[50%]'>
            <FormField label='Company email' />
          </div>
          <div className='basis-[50%]'>
            <FormField label='Phone no' />
          </div>
        </div>
        <div className='w-[100%] mt-[20px]'>
          <FormField label='Phone no' />
        </div>
        <div className='flex w-[100%] gap-[30px] mt-[20px]'>
          <div className='basis-[50%]'>
            <FormField label='Department' />
          </div>
          <div className='basis-[50%]'>
            <FormField label='Role' />
          </div>
        </div>
        <div className='w-[100%] mt-[40px]'>
          <Button label='Save' />
        </div>
      </form>
    </ModalBase>
  );
};

export default AddEmployeeModal;
