import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import FreeDelivery from '../componenets/FreeDelivery';
import Footer from '../componenets/Footer';
import Navbar from '../componenets/Navbar';

const ContactSec = () => {
  return (
    <section className="w-full h-auto">
      <Navbar />
      {/* Our My Account Section */}
      <section className="w-full h-[316px]">
        <div className="bg-white max-w-[1440px] mx-auto bg-[url(/images/bg.jpg)] bg-cover bg-center lg:bg-right h-[316px] flex items-center justify-center relative">
          <div className="w-full h-full bg-[#ffffffab] flex justify-center items-center">
            <div className="w-full sm:w-auto max-w-[90%] sm:max-w-[270px] md:max-w-[500px] lg:max-w-[700px] rounded-xl py-8 px-4 flex flex-col items-center text-center gap-3">
              {/* Logo and Heading Section */}
              <div className="w-full h-[202px] flex flex-col justify-center items-center relative mt-[-60px]">
                <div className="flex flex-col justify-center items-center">
                  {/* Logo */}
                  <Image src="/images/logo.png" alt="logo" height={100} width={100} />
                  <h1 className="font-poppins font-medium md:text-[48px] text-[30px] leading-[72px] text-black mt-[-20px]">
                    Contact
                  </h1>
                </div>
                {/* Home Link with Greater Than Icon */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Link href="/home" className="font-poppins text-[16px] font-medium text-black flex items-center gap-2">
                    Home
                  </Link>
                  <span className="text-black text-[16px]">
                    <ChevronRight />
                  </span>
                  <h3 className="font-poppins text-[16px] font-light text-black">Contact</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full bg-white h-auto py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center justify-center items-center flex flex-col mb-16">
            <h1 className="text-3xl md;text-4xl font-poppins font-medium text-black mb-4">
              Get In Touch With Us
            </h1>
                <p className="md:text-lg text-base text-[#9F9F9F] md:w-[644px] w-auto h-[48px] text-center">
              For more information about our products and services, feel free to drop us an email. Our staff is always here to assist you.
            </p>
          </div>

          

          <div className="flex flex-wrap justify-around mt-10  md:mt-32 ">

             {/* Contact Info (Phone, Location, etc.) */}
             <div className="w-full lg:w-[45%] px-4 mt-0 ">
              <div className="flex flex-col gap-8 justify-center items-start md:items-center">
                <div className="flex items-start gap-7">
                    <div>
                        <Image
                            src='/images/icon4.png'
                            height={100}
                            width={100}
                            alt='location'
                            className='h-[28px] w-[22px] mt-1'
                        />
                    </div>
                  <div className='flex flex-col'>
                    <h1 className=" font-medium text-[24px] text-black">Address</h1>
                     <p className=" h-[72px] w-[190px] font-normal text-[16px] text-black">236 5th SE Avenue, New York NY10000, United States</p>
                  </div>
                  
                </div>
                <div className="flex items-start gap-7">
                <Image
                  src='/images/icon5.png'
                  height={100}
                  width={100}
                  alt='location'
                  className='h-[22px] w-[22px]  mt-2'
                  />
                 <div className='flex flex-col'>
                    <h1 className=" font-medium text-[24px] text-black">Phone</h1>
                     <p className=" h-[72px] w-[190px] font-normal text-[16px] text-black">Mobile: +(84) 546-6789
                     Hotline: +(84) 456-6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-7">
                <Image
                  src='/images/icon6.png'
                  height={100}
                  width={100}
                  alt='location'
                  className='h-[23px] w-[23px]  mt-2'
                  />
                  <div className='flex flex-col'>
                    <h1 className=" font-medium text-[24px] text-black">Working Time</h1>
                     <p className=" h-[72px] w-[190px] font-normal text-[16px] text-black">Monday-Friday: 9:00 - 22:00
                     <br />Saturday-Sunday: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Contact Form */}
            <div className="w-full md:w-[635px] h-auto md:h-[723px] px-4 mt-16 md:my-0">
              <form>
              {/* your name*/}
              <div className="mb-8">
                  
                  <label className="block font-medium text-[16px] mb-5">Your name</label>
                  <input 
                  type="text" 
                  placeholder='Abc'
                  className="w-full md:w-[526px] md:h-[75px] h-[55px] px-6 border border-[#9F9F9F] rounded-[10px]" />
                </div>

                 {/* email address*/}
                 <div className="mb-8">
                  <label className="block font-medium text-[16px] mb-5">Email address</label>
                  <input 
                  type="text" 
                  placeholder='Abc@def.com'
                  className="w-full md:w-[526px] md:h-[75px] h-[55px]  px-6 border border-[#9F9F9F] rounded-[10px]" />
                </div>


                {/* Subject */}
                <div className="mb-8">
                  <label className="block font-medium text-[16px] mb-5">Subject</label>
                  <input 
                  type="text" 
                  placeholder='This is an optional'
                  className="w-full md:w-[526px] md:h-[75px] h-[55px] px-6 border border-[#9F9F9F] rounded-[10px]" />
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block font-medium text-[16px] mb-5">Message</label>
                  <textarea 
                  placeholder='Hi! i’d like to ask about'
                  className="w-full md:w-[527px] md:h-[120px] h-auto  px-6 py-7 border border-[#9F9F9F] rounded-[10px]" />
                </div>

                <div className="flex justify-center md:justify-start">
                  <button type="submit" className="hover:bg-black text-black hover:text-white h-[50px] md:h-[48px] w-[237px] border border-black  rounded-[15px] bg-white">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FreeDelivery />
      <Footer />

    </section>
  )
}

export default ContactSec;
