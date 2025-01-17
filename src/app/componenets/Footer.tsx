import React from 'react';

const Footer = () => {
  return (
    <footer className="h-auto w-auto flex items-center justify-center bg-[#FFFFFF]">
      <div className="max-w-[1440px] w-full">
        {/* Top Section with Grid Layout */}
        <div className="h-auto w-full max-w-[1550px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 px-6 lg:px-[100px] py-10 md:pt-24">
          
          {/* Address Section */}
          <div className="flex justify-center md:justify-start items-center">
            <p className="text-[#9F9F9F] md:mb-0 mb-5 font-poppins font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-center md:text-left">
              400 University Drive Suite 200
              Coral  <br /> Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links and Support Section */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {/* Links Column */}
            <ul className="flex flex-col gap-10">
              <span className="text-[#9F9F9F] font-poppins font-medium text-[16px] leading-[24px] mb-2">
                Links
              </span>
              <li className="font-poppins font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">Home</li>
              <li className="font-poppins font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">Shop</li>
              <li className="font-poppins font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">About</li>
              <li className="font-poppins font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">Contact</li>
            </ul>

            {/* Support Column */}
            <ul className="flex flex-col gap-10">
              <span className="text-[#9F9F9F] font-poppins font-medium text-[16px] leading-[24px] mb-2">
                Help
              </span>
              <li className="font-poppins w-[160px] font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">Payment Options</li>
              <li className="font-poppins font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">Returns</li>
              <li className="font-poppins font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col md:col-span-1">
            <h1 className="font-poppins font-medium text-[#9F9F9F] text-[16px] leading-[24px] mb-4 md:mb-7">
              Newsletter
            </h1>
            <div className="flex flex-row  gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-[200px] md:w-[200px] text-start h-[40px] border-b-[1px] border-black focus:outline-none"
              />
              <button className="border-b-[1px] border-black text-black font-poppins h-[40px] font-medium text-[14px] leading-[21px]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#D9D9D9] mx-4 md:mx-20 py-8">
          <div className="flex justify-center md:justify-start items-center">
            <p className="text-center font-poppins font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              2022 Meubel House. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
