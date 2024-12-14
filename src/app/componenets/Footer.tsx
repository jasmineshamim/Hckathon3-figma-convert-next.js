import React from 'react';

const Footer = () => {
  return (
    <footer className=" h-[555px] w-auto flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto bg-[#FFFFFF]">
        {/* Top Section */}
        <div className="h-[419px] w-full max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between px-6 lg:px-[100px] py-10">
          {/* Address Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex items-center">
            <p className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px]">
              400 University Drive Suite 200 <br />
              Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap w-full md:w-2/3 justify-between">
            {/* Column 1 */}
            <ul className="w-1/3 flex flex-col gap-10">
              <span className="text-[#9F9F9F] font-poppins font-medium text-[16px] leading-[24px] mb-6">
                Links
              </span>
              <li className="font-poppins font-medium text-[16px] leading-[24px]">Home</li>
              <li className="font-poppins font-medium text-[16px] leading-[24px]">Shop</li>
              <li className="font-poppins font-medium text-[16px] leading-[24px]">About</li>
              <li className="font-poppins font-medium text-[16px] leading-[24px]">Contact</li>
            </ul>

            {/* Column 2 */}
            <ul className="w-1/3 flex flex-col gap-10">
              <span className="text-[#9F9F9F] font-poppins font-medium text-[16px] leading-[24px] mb-6">
                Support
              </span>
              <li className="font-poppins font-medium text-[16px] leading-[24px]">
                Payment Options
              </li>
              <li className="font-poppins font-medium text-[16px] leading-[24px]">Returns</li>
              <li className="font-poppins font-medium text-[16px] leading-[24px]">
                Privacy Policies
              </li>
            </ul>

            {/* Newsletter Section */}
            <div className="w-1/3">
              <h1 className="font-poppins font-medium text-[#9F9F9F] text-[16px] leading-[24px] mb-12">
                Newsletter
              </h1>
              <div className="flex  gap-3 ">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-[200px] text-center h-[40px]  border-b-[1px] border-black focus:outline-none"
                />
                <button className="border-b-2 border-black text-black font-Poppins  h-[40px] font-medium text-[14px] leading-[21px]">
                SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex justify-center items-center'>
        <div className=" border-t border-[#D9D9D9] py-10 h-[59px] w-[1240px] items-start flex">
          <p className="text-center font-poppins font-normal text-[16px] leading-[24px]">
            2022 Meubel House. All rights reserved
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
