import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react';
import Footer from "../componenets/Footer";
import FreeDelivery from "../componenets/FreeDelivery";
import Navbar from "../componenets/Navbar";

const page = () => {
  return (
    <section className='h-auto w-auto'>
      <Navbar />
    {/* Our My Account Section */}
<section className="w-auto h-[316px]">
  <div className="bg-white max-w-[1440px] mx-auto bg-[url(/images/bg.jpg)] bg-cover bg-center lg:bg-right h-[316px] flex items-center justify-center relative">
    <div className="w-full h-full bg-[#ffffffab] flex justify-center items-center">
      <div className="w-full sm:w-auto max-w-[90%] sm:max-w-[270px] md:max-w-[500px] lg:max-w-[700px] rounded-xl py-8 px-4 flex flex-col items-center text-center gap-3">
        {/* Logo and Heading Section */}
        <div className="w-auto h-[202px] flex flex-col justify-center items-center relative mt-[-60px]">
          <div className="flex flex-col justify-center items-center">
            {/* Logo and Heading */}
            <div>
              <Image
                src="/images/logo.png"
                alt="logo"
                height={100}
                width={100}
              />
            </div>
            <h1 className="font-poppins font-medium md:text-[48px] text-[30px] leading-[72px] text-black mt-[-20px]">
             Cart
            </h1>
          </div>

          {/* Home Link with Greater Than Icon */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Link
              href="/"
              className="font-poppins text-[16px] font-medium text-black flex items-center gap-2"
            >
              Home
            </Link>
            <span className="text-black text-[16px]">
              <ChevronRight />
            </span>
            <h3 className="font-poppins text-[16px] font-light text-black flex items-center gap-2">
               Cart
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 


<section className="h-auto w-auto">
    <div className="max-w-[1440px] mx-auto flex justify-center items-center px-4 md:px-20 py-10 md:py-14">
        <div className="h-auto md:h-[390px] w-full md:w-[1240px] flex flex-col md:flex-row justify-between gap-10 items-start">
            <div className="h-auto md:h-[216px] w-full md:w-[817px] flex flex-col gap-10 md:gap-14">
                <ul className="h-[55px] flex justify-center items-center gap-8 md:gap-12 w-full md:w-[817px] bg-[#FFF9E5]">
                    <li className="font-poppins text-[14px] md:text-[16px] font-medium text-black md:pr-0 pr-8">Product</li>
                    <li className="font-poppins text-[14px] md:text-[16px] font-medium text-black md:pl-16">Price</li>
                    <li className="font-poppins text-[14px] md:text-[16px] font-medium text-black md:pl-20">Quantity</li>
                    <li className="font-poppins text-[14px] md:text-[16px] font-medium text-black">Subtotal</li>
                </ul>
               <div className="h-auto md:h-[106px] flex justify-start items-center gap-4 md:gap-12 w-full md:w-[817px]">
                    <div className="flex flex-col  justify-center items-center">
                        <h1 className="font-poppins py-2 text-[10px] md:text-[16px] font-normal md:hidden flex text-black">Asgaard sofa</h1>
                        <div className="h-[75px] md:h-[120px] w-[75px] md:w-[120px] bg-[#FBEBB5] flex justify-center items-center rounded-[10px]">
                   
                            <Image
                               src='/images/Asgaard-sofa.png'
                               height={400}
                               width={400}
                               alt="Asgaardsofa"
                            />
                        </div>
                    </div>
                    <ul className="flex justify-center items-center gap-4 md:gap-14">
                        <li className="font-poppins text-[10px] md:text-[16px] font-normal md:flex hidden text-[#9F9F9F]">Asgaard sofa</li>
                        <li className="font-poppins text-[10px] md:text-[16px] font-normal text-[#9F9F9F] pl-4 md:pl-5">Rs. 250,000.00</li>
                        <div className="md:ml-6 ml-5 font-poppins md:h-[32px] md:w-[32px] h-[27px] w-[27px]  text-[10px] md:text-[16px] font-normal border border-[#9F9F9F] flex justify-center items-center rounded-[5px]">
                            <span>1</span>
                        </div>
                        <li className="font-poppins text-[10px] md:text-[16px] font-normal text-black pl-5">Rs. 250,000.00</li>
                        <div>
                            <Image 
                                src='/images/trash.png'
                                height={400}
                                width={400}
                                alt="Asgaardsofa"
                                className="h-[18px] md:h-[21px] w-[18px] md:w-[21px]"
                            />
                        </div>
                    </ul>
                </div>
            </div>
            <div className="h-auto md:h-[390px] w-full md:w-[393px] bg-[#FFF9E5] flex justify-start items-center flex-col">
                <h1 className="font-semibold text-[24px] md:text-[32px] font-poppins mt-4">Cart Totals</h1>
                <div className='h-auto md:h-[125px] w-full md:w-[250px] flex justify-between md:px-0 px-10 mt-10 md:mt-16'>
                    <ul className='flex flex-col gap-4 md:gap-7'>
                        <li className='text-black font-medium text-[14px] md:text-[16px]'>Subtotal</li>
                        <li className='text-black font-medium text-[14px] md:text-[16px]'>Total</li>
                    </ul>
                    <ul className='flex flex-col gap-4 md:gap-7 text-end'>
                        <li className='text-black font-medium text-[14px] md:text-[16px]'>Rs. 250,000.00</li>
                        <li className='text-[#B88E2F] font-bold text-[18px] md:text-[20px]'>Rs. 250,000.00</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center md:px-0 px-20 md:py-0 py-5 w-full'>
                  <Link href='/checkoutsec'>
                    <button
                        type='submit'
                        className='w-[180px] md:w-[222px] h-[50px] md:h-[58px] border border-black text-black rounded-[15px] hover:bg-black hover:text-white mt-6 md:mt-0 self-center'
                    >
                        Check Out
                    </button>
                  </Link>
                </div>
            </div>
        </div>
    </div>
</section>

<FreeDelivery />
<Footer />

</section>
  )
}

export default page