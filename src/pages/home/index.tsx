import Button from 'modules/general/components/buttons/button';
import Header from 'modules/general/components/header';
import Footer from 'modules/general/components/footer';

const starImage = require('assets/regular-star.svg').default;

const keyPoints = ['MONITOR', 'INTERACT', 'ONBOARD', 'ASSIGN'];

const Home = () => (
  <div className="min-h-screen bg-offWhite grid grid-rows-[max-content,1fr,max-content]">
    <Header />
    <div className="grid grid-cols-2 gap-x-10">
      <div className="pt-[6%] grid grid-rows-[max-content,1fr,max-content]">
        <img src={starImage} alt="star icon" className="ml-[5vw]" />
        <div className="ml-[5vw] pt-[12.4%]">
          <h1 className="text-7xl leading-[1.1] font-extrabold text-black">
            <span>The </span>
            <span className="text-chartBlue underline">Ultimate</span>
            <span> HR software for new hires.</span>
          </h1>
          <p className="text-base font-normal my-8">
            Onboarder is easy to use, flexible, and scalable. You can create
            onboarding programs for any role or department.
          </p>
          <Button label="Get started" className="px-8 py-4 h-max w-max" />
        </div>
        <div className="self-end relative">
          <img
            src={require('assets/big-blue-star.svg').default}
            alt="star icon"
          />
          <div className="absolute top-0 -left-2 bottom-0 my-auto h-max px-5 py-2.5 border border-solid border-black rounded-md bg-offWhite flex gap-x-1.5 -rotate-[2.7deg]">
            {keyPoints.map((point) => (
              <div key={point} className="p-2.5 flex gap-x-2.5 items-center">
                <img src={starImage} alt="star icon" className="w-6" />
                <p className="text-black text-2xl font-semibold leading-[1.1]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="self-center justify-self-center">
        <div className="w-max relative z-10 before:absolute before:-z-10 before:inset-0 before:m-auto before:w-[95%] before:pt-[95%] before:border before:border-dashed before:border-chartPurple before:rounded-full after:absolute after:-z-10 after:top-0 after:-left-[5%] after:bottom-0 after:m-auto after:w-[110%] after:pt-[110%] after:border after:border-dashed after:border-chartPurple after:rounded-full">
          <img
            src={require('assets/images/analytics-screenshot.png')}
            alt="onboarder analytics page"
          />
          <img
            src={require('assets/regular-orange-star.svg').default}
            alt="star icon"
            className="absolute -top-[16%] left-[23.5%]"
          />
          <img
            src={require('assets/big-purple-star.svg').default}
            alt="star icon"
            className="absolute -top-[16%] -right-[5%] -z-10"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
