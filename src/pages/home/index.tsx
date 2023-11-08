import Button from 'modules/general/components/buttons/button';
import Header from 'modules/general/components/header';
import Footer from 'modules/general/components/footer';

const Home = () => (
  <div className="min-h-screen bg-offWhite grid grid-rows-[max-content,1fr,max-content]">
    <Header />
    <div className="flex w-[100%]">
      <div className="basis-[50%] ml-[5%]">
        <p className="text-black text-[68px] font-extrabold max-w-[583px] mt-[100px] leading-[110%]">
          The <span className="underline text-chartBlue">Ultimate</span> HR
          software for new hires.
        </p>
        <p className="max-w-[543px] text-[16px] mt-2">
          Onboarder is easy to use, flexible, and scalable. You can create{' '}
          <br />
          onboarding programs for any role or department.
        </p>
        <Button label="Get started" className="w-[186px] h-[60px] mt-10" />
      </div>
      <div className="basis-[50%]" />
    </div>
    <Footer />
  </div>
);

export default Home;
