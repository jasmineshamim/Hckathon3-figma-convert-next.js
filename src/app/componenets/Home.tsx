import React from 'react'
import Navbar from './Navbar'

import Image from 'next/image'
import { Calendar, Clock4 } from 'lucide-react'

const Home = () => {
  return (
    <div className='mx-auto h-auto w-auto max-w-[1440px] bg-slate-500'>
      {/* Hero Section */}
      <div className='mx-auto h-[900px] w-auto bg-[#FBEBB5] flex relative '>
        <Navbar color="#FBEBB5" />

        <div className='absolute top-[328px] left-[202px]'>
          {/* Heading */}
          <h1 className='w-[440px] h-[192px] font-poppins font-medium text-[64px] leading-[96px]'>
            Rocket single seater
          </h1>

          {/* Button directly below heading */}
          <div className='w-[121px] h-[49px] border-black border-b-2 mt-10'>
            <button className='w-[121px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>
              Shop Now
            </button>
          </div>
        </div>

        <div className='absolute top-0 right-0 w-[853px] h-[1000px]'>
          <Image
            src='/images/hero.png'
            width={853}
            height={1000}
            alt='hero'
            className='object-cover'
          />
        </div>
      </div>

      {/* Side Table Section */}
      <div className='h-[672px] bg-[#FAF4F4] flex justify-around items-center'>
        {/* Left Image + Text */}
        <div className='flex flex-col items-center'>
          {/* Image */}
          <div className='w-[605px] h-[562px]'>
            <Image
              src='/images/table.png'
              width={605}
              height={562}
              alt='table'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Heading */}
          <h2 className='font-poppins font-medium text-[36px] leading-[54px]'>
            Side Table
          </h2>

          {/* Button directly below heading */}
          <div className='w-[121px] h-[49px] border-black border-b-2 mt-2 '>
            <button className='w-[125px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>
              View More
            </button>
          </div>
        </div>

        {/* Right Image + Text */}
        <div className='flex flex-col items-center'>
          {/* Image */}
          <div className='w-[605px] h-[562px]'>
            <Image
              src='/images/sofa.png'
              width={605}
              height={562}
              alt='sofa'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Heading */}
          <h2 className=' font-poppins font-medium text-[36px] leading-[54px]'>
            Sofa Table
          </h2>

          {/* Button directly below heading */}
          <div className='w-[121px] h-[49px] border-black border-b-2 mt-1'>
            <button className='w-[125px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>
              View More
            </button>
          </div>
        </div>
      </div>

       {/* Top Picks Section */}
        <div className='h-[777px] w-[1440px] bg-[#FFFFFF] flex flex-col items-center pt-5'>
          <div className="w-[1152px] h-[136px] gap-4 pt-10 flex flex-col justify-center items-center">
            <h1 className="w-[311px] h-[54px] font-medium text-[36px] font-Poppins leading-[54px] text-[#000000]">
               Top Picks For You
            </h1>
            <p className="w-[773px] h-[24px] font-medium text-[16px] font-Poppins leading-[27px] text-[#9F9F9F] ">
              Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
            </p>
          </div>

            {/* Image Section */}
          <div className='flex justify-center gap-[30px] w-full pt-24'>
            {/* Image 1 */}
          <div className='relative w-[287px] h-[297px]'>
            <Image
              src='/images/Top-pics7.png'
              width={387}
              height={497}
              alt='image1'
              className='object-cover h-[185px] w-[255px]'
            />
            <div className='absolute bottom-3  text-black'>
         
              <p className='pb-8 w-[194px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]'>Trenton modular sofa_3</p>
              <span className='w-[158px] h-[36px]  font-poppins font-medium text-[24px] leading-[36px] text-black pt-5'>Rs. 25,000.00</span>
            </div>
        </div>

        {/* Image 2 */}
        <div className='relative w-[287px] h-[397px]'>
          <Image
            src='/images/Top-pics2.png'
            width={387}
            height={497}
            alt='image2'

            className='object-cover h-[185px] w-[255px]'
          />
          <div className='absolute bottom-20  text-black'>
            <p className='pb-14 w-[199px] h-[48px] font-poppins font-normal text-[16px] leading-[24px]'>Granite dining table with dining chair</p>
            <span className='w-[158px] h-[36px]  font-poppins font-medium text-[24px] leading-[36px] text-black'>Rs. 25,000.00</span>
          </div>
        </div>

        {/* Image 3 */}
        <div className='relative w-[287px] h-[397px]'>
          <Image
            src='/images/Top-pics6.png'
            width={387}
            height={497}
            alt='image3'
            className='object-cover h-[180px] w-[250px] '
          />
          <div className='absolute bottom-20  text-black'>
            <p className='pb-14 w-[199px] h-[48px] font-poppins font-normal text-[16px] leading-[24px]'>Outdoor bar table and <br />stool</p>
            <span className='w-[158px] h-[36px]  font-poppins font-medium text-[24px] leading-[36px] text-black '>Rs. 25,000.00</span>
          </div>
        </div>

        {/* Image 4 */}
        <div className='relative w-[287px] h-[397px]'>
          <Image
            src='/images/Top-pics4.png'
            width={387}
            height={497}
            alt='image4'
            className='object-cover h-[174px] w-[240px]'
          />
          <div className='absolute bottom-20  text-black'>
            <p className='pb-14 w-[199px] h-[48px] font-poppins font-normal text-[16px] leading-[24px]'>Plain console with teak mirror</p>
            <span className='w-[158px] h-[36px]  font-poppins font-medium text-[24px] leading-[36px] text-black '>Rs. 25,000.00</span>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className='mt-[10px]'>
        <div className='w-[115px] h-[49px] border-black border-b-[1px] text-center'>
          <button className='w-[104px] h-[30px] font-poppins font-medium text-center text-[20px] leading-[30px]'>
            View More
          </button >
        </div>
      </div>
    </div>


     {/* Asgaard Sofa Section */}

    <div className='h-[639px] w-[1440px] bg-[#FFF9E5] flex justify-around items-center'>
       {/* Image Section */}
      <div className=' pt-16 '>
        <Image
          src='/images/Asgaardsofa.png'
          alt='Asgaard Sofa'
          height={400}
          width={400}
          className='object-cover w-[890px] h-[650px] '
        />
      </div>
     <div className='w-[331px] h-[205px] flex flex-col text-center gap-7 justify-center items-center '>
         <div className='w-[331px] h-[108px] '>
            <p className='"w-[149px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>New Arrivals</p>
            <h1 className='w-[331px] h-[72px] absolute font-poppins font-bold text-[48px] leading-[72px]'>Asgaard sofa</h1>
         </div>
         <div className='w-[255px] h-[64px] border-black border-[1px] flex justify-center items-center bg-[#FFF9E5] '>
            <button className='w-[106px] h-[30px] font-poppins font-normal text-[20px] leading-[30px]'>Order Now</button>
         </div>
      </div>
    </div> 



    {/* Blog Section */}
    <div className='h-[944px] w-[1440px] bg-[#FFFFFF] flex flex-col items-center pt-5'>
      
  <div className="w-[1152px] h-[136px] gap-4 flex flex-col justify-center items-center pt-10 text-center">
    <h1 className="w-[174px] h-[54px] font-medium text-[36px] font-Poppins leading-[54px] text-[#000000]">
      Our Blogs
    </h1>
    <p className="w-[479px] h-[24px] font-medium text-[16px] font-Poppins leading-[27px] text-[#9F9F9F] ">
      Find a bright idea to suit your taste with our great selection
    </p>
  </div>
  <div className='w-[1240px] h-[679px]'>
  <div className='w-[1240px] h-[555px] flex flex-col justify-between pt-14'>
    <div className='flex justify-center items-center gap-11'>
      {/* Blog 1 */}
      <div className='h-[393px] w-[555px] flex flex-col items-center text-center'>
        <div className='w-[393px] h-[393px]'>
          <Image
            src='/images/blog3.jpeg'
            height={400}
            width={400}
            alt='blog3'
            className='bg-cover w-[400px] h-[373px] rounded-[10px]'
          />
        </div>
        <div className='h-[129px] w-[339px] flex flex-col justify-center items-center pt-7'>
          <p className='w-[339px] h-[30px] font-normal text-center text-[20px] font-Poppins leading-[30px] text-black'>
            Going all-in with millennial design
          </p>
          <div className='w-[120px] h-[46px] border-black border-b-[2px] flex justify-center items-center '>
            <button className='w-[130px] h-[36px] font-Poppins font-medium text-[24px] leading-[36px]'>
              Read More
            </button>
          </div>
        </div>
        <div className='h-[24px] w-[223px] flex gap-2 text-center justify-center pt-5'>
          <Clock4 className='h-[18px] w-[18px]' />
          <p className='w-[45px] h-[24px] font-poppins font-light text-[16px] leading-[24px]'>5 min</p>
          <Calendar className='h-[18px] w-[18px]'/>
          <p className='w-[99px] h-[24px] font-poppins font-light text-[16px] leading-[24px]'>12th Oct 2022</p>
        </div>
      </div>

      {/* Blog 2 */}
      <div className='h-[393px] w-[555px] flex flex-col items-center text-center'>
        <div className='w-[393px] h-[393px]'>
          <Image
            src='/images/blog2.jpeg'
            height={400}
            width={400}
            alt='blog3'
            className='bg-cover w-[400px] h-[373px] rounded-[10px]'
          />
        </div>
        <div className='h-[129px] w-[339px] flex flex-col justify-center items-center pt-7'>
          <p className='w-[339px] h-[30px] font-normal text-center text-[20px] font-Poppins leading-[30px] text-black'>
            Exploring modern architecture trends
          </p>
          <div className='w-[120px] h-[46px] border-black border-b-[2px] flex justify-center items-center'>
            <button className='w-[130px] h-[36px] font-Poppins font-medium text-[24px] leading-[36px]'>
              Read More
            </button>
          </div>
        </div>
        <div className='h-[24px] w-[223px] flex gap-2 text-center justify-center pt-5'>
          <Clock4 className='h-[18px] w-[18px]'/>
          <p className='w-[45px] h-[24px] font-poppins font-light text-[16px] leading-[24px]'>7 min</p>
          <Calendar className='h-[18px] w-[18px]'/>
          <p className='w-[99px] h-[24px] font-poppins font-light text-[16px] leading-[24px]'>15th Nov 2022</p>
        </div>
      </div>

      {/* Blog 3 */}
      <div className='h-[393px] w-[555px] flex flex-col items-center text-center '>
        <div className='w-[393px] h-[393px]'>
          <Image
            src='/images/blog1.jpeg'
            height={400}
            width={400}
            alt='blog3'
            className='bg-cover w-[400px] h-[373px] rounded-[10px]'
          />
        </div>
        <div className='h-[129px] w-[339px] flex flex-col justify-center items-center pt-7'>
          <p className='w-[339px] h-[30px] font-normal text-center text-[20px] font-Poppins leading-[30px] text-black'>
            Interior design tips for small spaces
          </p>
          <div className='w-[120px] h-[46px] border-black border-b-[2px] flex justify-center items-center'>
            <button className='w-[130px] h-[36px] font-Poppins font-medium text-[24px] leading-[36px]'>
              Read More
            </button>
          </div>
        </div>
        <div className='h-[24px] w-[223px] flex gap-2 text-center justify-center pt-5'>
          <Clock4 className='h-[18px] w-[18px]'/>
          <p className='w-[45px] h-[24px] font-poppins font-light text-[16px] leading-[24px]'>8 min</p>
          <Calendar className='h-[18px] w-[18px]'/>
          <p className='w-[99px] h-[24px] font-poppins font-light text-[16px] leading-[24px]'>20th Jan 2022</p>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  {/* View More Button */}
  <div className='w-[115px] h-[49px] border-black border-b-[1px]  '>
        <button className='w-[104px] h-[30px] font-poppins font-medium text-center text-[20px] leading-[30px] '>
          View More
        </button>
      </div>
</div>  


      {/* Our Instagram Section */}
{/* 
      <div className='h-[450px] w-[1440px] bg-white relative'>
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> 
  <Image
    src='/images/bg.jpeg'
    width={1440}
    height={450}
    alt='hero'
    className='object-cover absolute inset-0 w-full h-full'
  />
 
</div> */}
  


  <div className="bg-white bg-[url(/images/bg.jpeg)] bg-cover bg-center lg:bg-right h-[500px] flex items-center justify-center">
  <div className="w-full h-full bg-[#ffffffab] flex justify-center items-center">
    <div
      className="w-full sm:w-auto max-w-[90%] sm:max-w-[270px] md:max-w-[500px] lg:max-w-[700px]
      rounded-xl py-8 px-4 sm:px-8 flex flex-col items-center text-center gap-3"
    >
      <div className="w-[454px] h-[202px] flex flex-col gap-5 justify-center items-center relative">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-poppins font-bold text-[60px] leading-[90px]">Our Instagram</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px]">Follow our store on Instagram</p>
        </div>
        <button className="shadow-2xl bottom-4 bg-[#FAF4F4] text-black py-2 px-6 w-[255px] h-[64px] rounded-[50px] border-none hover:border-solid border-2 border-black font-poppins font-normal text-[20px] text-center">
          Follow Us
        </button>
      </div>
    </div>
  </div>
</div>


  </div>

  )
}

export default Home
