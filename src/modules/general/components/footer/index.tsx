const Footer = () => (
  <div className="px-[5%] py-6 border-solid border-t-[0.5px] border-navBlack bg-offWhite flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-3.5 text-base font-normal text-[#353535]">
    <div className="flex items-center gap-x-3 md:gap-x-6">
      <p>Terms of service</p>
      <p>Privacy policy</p>
    </div>
    <p className="before:content-['©'] before:mr-1">onboarder, 2024</p>
    <div className="flex items-center gap-x-3 md:gap-x-6">
      <p>Twitter</p>
      <p>LinkedIn</p>
    </div>
  </div>
);

export default Footer;
