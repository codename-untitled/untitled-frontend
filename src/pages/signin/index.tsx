import Button from 'modules/general/components/buttons/button';
import FormField from 'modules/general/components/formField';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen h-[100%] flex bg-offWhite max-lg:bg-purp max-lg:bg-cover max-[375px]:min-h-full">
      <div className="basis-[55%] relative max-lg:basis-[100%]">
        <h1 className="text-[30px] font-extrabold ml-[10%] pt-5 max-lg:ml-0 max-lg:text-center max-lg:text-white">
          ONBOARDER
        </h1>
        <div className="max-w-[510px] block mx-auto mt-[10vh] z-30 relative max-sm:px-10 max-sm:mt-[15%]">
          <div className="px-[10%] shadow-[1px_1px_0px_0px_#000] h-[478px] w-[510px] border-solid border-[0.5px] border-black bg-white rounded-md z-30 max-sm:h-full max-sm:w-full max-sm:pb-6">
            <p className="text-center text-[24px] font-bold mt-[30px]">
              Welcome back
            </p>
            <p className="text-center text-[14px] mt-[5px]">
              Sign in to continue
            </p>
            <form className="mt-[35px]">
              <div className="flex flex-col w-[100%] gap-[30px] mt-[20px]">
                <FormField label="Email address" />
                <div className="basis-[50%] flex flex-col gap-2">
                  <FormField label="Password" type="password" />
                  <p className="flex justify-end text-chartPurple cursor-pointer text-[12px]">
                    Forgot password?
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col mt-[30px]">
                <Button label="Sign in" className="h-[42px] w-full" />
                <p className="text-[12px] mt-4">
                  Already have an account?{' '}
                  <Link
                    className="text-chartPurple cursor-pointer"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <img
            src={require('assets/purple star.svg').default}
            alt="purple star"
            className="absolute -z-[1] -right-[20px] -top-8 max-sm:left-[20px]"
          />
          <img
            src={require('assets/orange star.svg').default}
            alt="orange star"
            className="absolute -left-10 top-[110px] max-sm:hidden"
          />
        </div>
        <div className="absolute bottom-0 border-t-[0.5px] border-solid border-black w-full max-lg:bg-white max-[375px]:relative max-[375px]:mt-10">
          <p className="text-[16px] py-3 text-center ">©onboarder {year}</p>
        </div>
      </div>
      <div className="basis-[45%] bg-purp bg-cover max-lg:hidden" />
    </div>
  );
};

export default SignIn;
