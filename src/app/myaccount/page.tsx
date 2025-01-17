 
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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
                    My Account
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
                    My account
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

    {/* Login And Registered Section */}
<section className="h-auto w-auto">
  <div className="bg-white max-w-[1440px] mx-auto h-auto md:h-[760px] flex flex-col md:flex-row justify-evenly items-center">
    {/* Login Section */}
    <div className="w-full md:w-[608px] h-auto px-5 md:px-20 py-14">
      <h2 className="text-[36px] font-semibold text-start mb-6">Login</h2>
      <form>
        <div className="mb-8">
          <label className="block font-medium font-poppins text-[16px] mb-5">Username or email address</label>
          <input
            type="email"
            className="w-full md:w-[423px] px-3 h-[75px] border border-[#9F9F9F] rounded-[10px]"
          />
        </div>
        <div className="mb-10">
          <label className="block font-medium font-poppins text-[16px] mb-5">Password</label>
          <input
            type="password"
            className="w-full md:w-[423px] px-3 h-[75px] border border-[#9F9F9F] rounded-[10px]"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="rememberMe"
            className="w-[30px] h-[27px] mr-3 rounded-[5px]"
          />
          <label htmlFor="rememberMe" className="text-[14px] font-medium">Remember me</label>
        </div>

        {/* Login Button */}
        <Link href="/checkoutsec">
        <button
          type="submit"
          className="w-full md:w-[215px] h-[64px] border border-black text-black rounded-[15px] hover:bg-black hover:text-white  my-10"
        >
          Login
        </button>
        </Link>

        <Link href="#forgot-password" className=" text-black font-normal text-[16px] md:px-8">Lost your password?</Link>
      </form>
    </div>

    {/* Register Section */}
    <div className="w-full md:w-[608px] h-auto px-5 md:px-20 py-14">
      <h2 className="text-[36px] font-semibold text-start mb-6">Register</h2>
      <form>
        <div className="mb-8">
          <label className="block font-medium font-poppins text-[16px] mb-5">Email address</label>
          <input
            type="email"
            className="w-full md:w-[423px] px-3 h-[75px] border border-[#9F9F9F] rounded-[10px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="h-auto w-full md:w-[453px] font-normal leading-[24px] text-[18px]">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="h-auto w-full md:w-[453px] mt-5 font-normal leading-[24px] text-[18px]">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
            <span className="font-bold"> privacy policy</span>.
          </p>
        </div>

        {/* Register Button */}
        <Link href="/checkoutsec">
        <button
          type="submit"
          className="w-full md:w-[215px] h-[64px] border border-black text-black rounded-[15px] hover:bg-black hover:text-white  mt-16"
        >
          Register
        </button>
        </Link>
      </form>
    </div>
  </div>
</section>

   <FreeDelivery />
   <Footer  />
  
    </section>
  )
}

export default page