 
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { X } from 'lucide-react';
import FreeDelivery from '../componenets/FreeDelivery';
import Footer from '../componenets/Footer';
import Navbar from '../componenets/Navbar';
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
                   Checkout
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
                     Checkout
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

  {/* Billing details Section */}
<section className="h-auto w-auto">
  <div className="bg-white max-w-[1440px] mx-auto h-auto flex flex-col md:flex-row justify-evenly mt-5 md:mt-10 items-start">
  {/* Billing Details Form */}
  <div className="w-full md:w-1/2 h-auto px-5 md:px-20 pt-14 pb-0 md:py-14">
      <h2 className="text-[36px] font-semibold text-center md:text-start mb-6">Billing details</h2>
      <form>
        {/* First Name & Last Name */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="mb-8 w-full">
            <label className="block font-medium text-[16px] mb-5">First Name</label>
            <input type="text" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" />
          </div>
          <div className="mb-8 w-full">
            <label className="block font-medium text-[16px] mb-5">Last Name</label>
            <input type="text" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" />
          </div>
        </div>

        {/* Company Name (Optional) */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">Company Name (Optional)</label>
          <input type="text" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" />
        </div>

        {/* Country/Region Dropdown */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">Country / Region</label>
          <select className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]">
            <option value="" disabled selected>Select your country/region</option>
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>

        {/* Street Address */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">Street address</label>
          <input type="text" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" placeholder="House number and street name" />
        </div>

        {/* Town/City */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">Town / City</label>
          <input type="text" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" />
        </div>

        {/* Province Dropdown */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">Province</label>
          <select className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]">
            <option value="" disabled selected>Select your province</option>
            <option value="punjab">Punjab</option>
            <option value="sindh">Sindh</option>
            <option value="kpk">Khyber Pakhtunkhwa</option>
            <option value="balochistan">Balochistan</option>
          </select>
        </div>

        {/* ZIP Code */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">ZIP code</label>
          <input type="text" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" />
        </div>

        {/* Phone */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">Phone</label>
          <input type="tel" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" />
        </div>

        {/* Email Address */}
        <div className="mb-8">
          <label className="block font-medium text-[16px] mb-5">Email address</label>
          <input type="email" className="w-full h-[75px] px-3 border border-[#9F9F9F] rounded-[10px]" />
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <textarea className="w-full h-[75px] py-5 px-4 border border-[#9F9F9F] rounded-[10px]" placeholder="Additional information"></textarea>
        </div>
      </form>
    </div>


   {/* Product CheckotDetail */}

   <div className='h-auto w-auto md:w-[608px]'>
  <div className='h-auto w-auto md:w-[533px] md:px-[60px] px-10 py-14 md:py-[100px] flex flex-col'>
    {/* Product Details */}
    <div className='h-[225px] w-auto md:w-[533px] justify-between flex flex-row border-b-2 border-[#D9D9D9]'>
      <div>
        <h1 className='leading-[36px] text-black font-medium text-[24px] mb-3'>Product</h1>
        <ul className='flex flex-col gap-3'>
          <li className='text-[#9F9F9F] flex flex-row leading-[36px] font-normal text-[16px]'>
            Asgaard sofa
            <X className='h-[20px] text-black mt-2 mx-2 w-[13px]' />
            <span className='text-black'>1</span>
          </li>
          <li className='text-black leading-[36px] font-normal text-[16px]'>Subtotal</li>
          <li className='text-black leading-[36px] font-normal text-[16px]'>Total</li>
        </ul>
      </div>
      <div>
        <h1 className='leading-[36px] text-black font-medium text-end text-[24px] mb-3'>Subtotal</h1>
        <ul className='flex flex-col gap-3 justify-end items-end text-end'>
          <li className='text-black flex flex-row leading-[36px] font-normal text-[16px]'>
            Rs. 250,000.00
          </li>
          <li className='text-black leading-[36px] font-normal text-[16px]'>Rs. 250,000.00</li>
          <li className='text-[#B88E2F] leading-[36px] font-bold text-[24px]'>Rs. 250,000.00</li>
        </ul>
      </div>
    </div>

    {/* Direct Bank Transfer Section */}
    <div className='flex flex-col '>
    <div className='flex items-center mt-6'>
      <div className='h-[14px] w-[14px] bg-black  rounded-full mr-4'></div>
      <p className='text-black font-medium text-[16px]'>Direct Bank Transfer</p>
    </div>
    <p className='text-[#9F9F9F] mt-4 w-auto md:w-[528px] h-[72px] font-normal text-[16px]'> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
    <div className='flex items-center mt-6'>
      <div className='h-[14px] w-[14px] border-2 md:mt-0 mt-10 border-[#9F9F9F] rounded-full mr-4'></div>
      <p className='text-[#9F9F9F]  font-medium md:mt-0 mt-10 text-[16px]'>Direct Bank Transfer</p>
    </div>
    <div className='flex items-center mt-4'>
      <div className='h-[14px] w-[14px] border-2 border-[#9F9F9F]  rounded-full mr-4'></div>
      <p className='text-[#9F9F9F]  font-medium text-[16px]'>Cash On Delivery</p>
    </div>
        <p className="h-auto w-full md:w-[529px] mt-5 font-normal leading-[24px] text-[18px]">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
            <span className="font-bold"> privacy policy</span>.
       </p>
    </div>
    {/* Place Order Button */}
    <div className='flex justify-center md:pl-14 items-center'>
    <Link href='/cartsec'>
      <button
        type='submit'
        className='w-[200px] h-[50px] md:w-[318px] md:h-[64px] border border-black text-black rounded-[15px] hover:bg-black hover:text-white mt-16 self-center'
      >
        Place order
      </button>
      </Link>
    </div>
  </div>
</div>

  </div>
</section>



   <FreeDelivery />
   <Footer  />
  
    </section>
  )
}

export default page