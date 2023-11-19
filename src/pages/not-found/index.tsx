import Logo from 'modules/general/components/logo';
import Footer from 'modules/general/components/footer';

const NotFound = () => (
  <div className="min-h-screen bg-offWhite grid grid-rows-[max-content,1fr,max-content]">
    <div className="border-b border-solid border-black flex justify-center">
      <Logo color="black" className="mx-auto my-5 w-[221px]" />
    </div>
    <div className="flex flex-col gap-y-[70px] justify-center items-center">
      <h1 className="text-[80px] font-extrabold">Oops!</h1>
      <img src={require('assets/404.svg').default} alt="404 illustration" />
    </div>
    <Footer />
  </div>
);

export default NotFound;
