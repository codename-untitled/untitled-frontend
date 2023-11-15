import Button from 'modules/general/components/buttons/button';

interface StepProps {
  className?: string;
  hasBackButton?: boolean;
  hasProceedButton?: boolean;
  hasCompleteButton?: boolean;
  children: React.ReactNode;
  onBackClick?: () => void;
  onProceedClick?: () => void;
  onCompleteClick?: () => void;
}

const Step = ({
  className,
  hasBackButton,
  hasProceedButton,
  hasCompleteButton,
  children,
  onBackClick,
  onProceedClick,
  onCompleteClick,
}: StepProps) => (
  <div
    className={`p-12 w-full border border-solid rounded-md bg-white shadow-[1px_1px_0_0_#000] flex flex-col items-center gap-y-5 ${className}`}
  >
    {children}
    {(hasBackButton || hasProceedButton || hasCompleteButton) && (
      <div className="mt-12 flex gap-x-3.5">
        {hasBackButton && (
          <Button
            label="Back"
            className="py-4 h-max w-[140px]"
            color="white"
            onClick={onBackClick}
          />
        )}
        {hasProceedButton && (
          <Button
            label="Proceed"
            className="py-4 h-max w-[140px]"
            icon={require('assets/arrow-right.svg').default}
            iconPosition="right"
            onClick={onProceedClick}
          />
        )}
        {hasCompleteButton && (
          <Button
            label="Complete"
            className="py-4 h-max w-[140px]"
            onClick={onCompleteClick}
          />
        )}
      </div>
    )}
  </div>
);

export default Step;
