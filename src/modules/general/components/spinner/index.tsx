import { VariantProps, cva } from 'class-variance-authority';

export const spinnerVariants = cva('relative animate-spin', {
  variants: {
    size: {
      small: 'w-7 h-7',
      big: 'w-[9.75rem] h-[9.75rem]',
    },
    position: {
      center: 'mx-auto',
      default: '',
    },
  },
  defaultVariants: {
    size: 'big',
    position: 'default',
  },
});

interface Props extends VariantProps<typeof spinnerVariants> {
  color: string;
}

function Spinner({ size, position, color }: Props) {
  return (
    <div className={spinnerVariants({ size, position })}>
      {color === 'white' ? (
        <img
          width={156}
          height={156}
          alt="spinner"
          src={require('assets/spinner purple.svg').default}
          className="object-fit"
        />
      ) : (
        <img
          width={156}
          height={156}
          alt="spinner"
          src={require('assets/spinner.svg').default}
          className="object-fit"
        />
      )}
    </div>
  );
}

export default Spinner;
