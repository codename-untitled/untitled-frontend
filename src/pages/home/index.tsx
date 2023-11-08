import Button from 'modules/general/components/buttons/button';
import Header from 'modules/general/components/header';

const Home = () => (
  <div className="min-h-screen h-[100%] bg-offWhite">
    <Header />
    <div className="flex w-[100%]">
      <div className="basis-[50%] ml-[5%]">
        <p className="text-black text-[68px] font-extrabold max-w-[583px] mt-[100px]">
          The <span className="underline text-chartBlue">Ultimate</span> HR
          software for new hires.
        </p>
        <p className="max-w-[543px] text-[16px]">
          Onboarder is easy to use, flexible, and scalable. You can create{' '}
          <br />
          onboarding programs for any role or department.
        </p>
        <Button label="Get started" className="w-[186px] h-[60px] mt-10" />
      </div>
      <div className="basis-[50%]" />
    </div>
  </div>
);

export default Home;
