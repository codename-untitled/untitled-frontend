interface StepProps {
  className?: string;
  children: React.ReactNode;
}

const Step = ({ className, children }: StepProps) => (
  <div
    className={`p-12 w-full min-h-[55vh] border border-solid rounded-md bg-white shadow-[1px_1px_0_0_#000] flex flex-col items-center gap-y-5 ${className}`}
  >
    {children}
  </div>
);

export default Step;
