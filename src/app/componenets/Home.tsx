import React from 'react'
import Navbar from './Navbar'

import Image from 'next/image'
import { Calendar, Clock4 } from 'lucide-react'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=' h-auto w-auto '>
      <Navbar color="#FBEBB5" />
      <div className=' max-w-[1440px] mx-auto pl-[202px] h-auto  flex relative bg-[#FBEBB5] px-6 md:px-10 lg:pl-[202px]  md:h-[800px]  flex-col-reverse md:flex-row items-center '>
        <div className='pt-[18px] md:pt-[28px] '>
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
        </div >

        <div className=' flex justify-center items-center w-[400px] h-[400px] md:w-[900px] md:h-[750px]'>
          <Image
            src='/images/hero.png'
            width={600}
            height={600}
            alt='hero'
            className='object-cover h-[390px] w-[00] md:h-[630px] md:w-[650px] '
          />
        </div>
      </div>
      </section>

      {/* Side Table Section */}
      <section className='h-[672px] w-auto  '>
        <div className='flex flex-col md:flex-row justify-around items-center max-w-[1440px] h-[672px] mx-auto bg-[#FAF4F4] '>
        {/* Left Image + Text */}
        <div className='flex flex-col items-center pl-[100px] pt-[20px]'>
          {/* Image */}
          <div >
          
            <Image
              src='/images/table.png'
              width={450}
              height={500}
              alt='table'
              className='object-cover'
            />
              {/* Heading */}
          <h2 className='font-poppins font-medium text-[36px] leading-[54px] '>
            Side table
          </h2>

          {/* Button directly below heading */}
          <div className='w-[121px] h-[49px] border-black border-b-2 mt-5 '>
            <button className='w-[125px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>
              View More
            </button>
          </div>
          </div>
        
        </div>

        {/* Right Image + Text */}
        <div className='flex flex-col items-center pl-[10px] pt-[20px]'>
          {/* Image */}
          <div className=''>
            <Image
              src='/images/sofa.png'
              width={450}
              height={500}
              alt='sofa'
              className=' object-cover'
            />

              {/* Heading */}
          <h2 className=' font-poppins font-medium text-[36px] leading-[54px]'>
            Side table
          </h2>

          {/* Button directly below heading */}
          <div className='w-[121px] h-[49px] border-black border-b-2 mt-5'>
            <button className='w-[125px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>
              View More
            </button>
          </div>
          </div>
        </div>
        </div>
      </section>

       {/* Top Picks Section */}
        <section className='h-[777px] w-auto  '>
          <div className=' mx-auto max-w-[1440px] flex flex-col items-center pt-5 bg-[#FFFFFF]' >
          <div className="w-[1152px] h-[136px] gap-4 pt-10 flex flex-col justify-center items-center px-4 sm:px-0">
            <h1 className="w-[311px] h-[54px] font-medium sm:text-3xl text-[36px] font-Poppins leading-[54px] text-[#000000]">
               Top Picks For You
            </h1>
            <p className="w-[773px]  h-[24px] font-medium text-[16px] font-Poppins leading-[27px] text-[#9F9F9F] ">
              Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
            </p>
          </div>

            {/* Image Section */}
          <div className='flex flex-wrap justify-center gap-[30px] w-full pt-24'>
            {/* Image 1 */}
          <div className='relative w-[287px] h-[297px] '>
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
        <div className='w-[115px] h-[49px] border-black border-b-[1px] text-center '>
          <button className='w-[104px] h-[30px] font-poppins font-medium text-center text-[20px] leading-[30px]'>
            View More
          </button >
        </div>
      </div>
      </div>
    </section>


     {/* Asgaard Sofa Section */}

    <section className='h-[639px] w-auto '>
       {/* Image Section */}
       <div className='max-w-[1440px] mx-auto bg-[#FFF9E5]  flex justify-around items-center'>
      <div className='pt-7 '>
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
         <div className='w-[255px] h-[64px] hover:bg-black hover:text-white border-black border-[1px] flex justify-center items-center bg-[#FFF9E5] '>
            <button className='w-[106px] h-[30px] font-poppins font-normal text-[20px] leading-[30px]'>Order Now</button>
         </div>
      </div>
      </div>
    </section> 



    {/* Blog Section */}
    <section className='h-[944px] w-auto'>
  <div className='max-w-[1440px] mx-auto flex flex-col items-center pt-5 bg-[#FFFFFF]'>
    <div className='w-full md:w-[1152px] h-auto md:h-[136px] gap-4 flex flex-col justify-center items-center pt-10 text-center'>
      <h1 className='w-full md:w-[174px] h-auto md:h-[54px] font-medium text-[28px] md:text-[36px] font-Poppins leading-[36px] md:leading-[54px] text-[#000000]'>
        Our Blogs
      </h1>
      <p className='w-full md:w-[479px] h-auto md:h-[24px] font-medium text-[14px] md:text-[16px] font-Poppins leading-[20px] md:leading-[27px] text-[#9F9F9F]'>
        Find a bright idea to suit your taste with our great selection
      </p>
    </div>

    <div className='max-w-[1440px] mx-auto h-auto'>
      <div className='w-full md:w-[1240px] h-auto md:h-[555px] flex flex-col justify-between pt-14'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-11'>
          
          {/* Blog 1 */}
          <div className='h-auto md:h-[393px] w-full md:w-[555px] flex flex-col items-center text-center'>
            <div className='w-full md:w-[393px] h-auto md:h-[393px]'>
              <Image 
                src='/images/blog3.jpeg' 
                height={400} 
                width={400} 
                alt='blog3' 
                className='bg-cover w-full md:w-[400px] h-[250px] md:h-[373px] rounded-[10px]' 
              />
            </div>
            <div className='h-auto md:h-[129px] w-full md:w-[339px] flex flex-col justify-center items-center pt-4 md:pt-7'>
              <p className='w-full md:w-[339px] font-normal text-center text-[18px] md:text-[20px] font-Poppins leading-[28px] md:leading-[30px] text-black'>
                Going all-in with millennial design
              </p>
              <div className='w-[120px] h-[46px] border-black border-b-[2px] flex justify-center items-center mt-2'>
                <button className='w-[130px] h-[36px] font-Poppins font-medium text-[20px] md:text-[24px] leading-[30px] md:leading-[36px]'>
                  Read More
                </button>
              </div>
            </div>
            <div className='h-auto md:h-[24px] w-full md:w-[223px] flex gap-2 text-center justify-center pt-4'>
              <Clock4 className='h-[18px] w-[18px]' />
              <p className='font-poppins font-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]'>5 min</p>
              <Calendar className='h-[18px] w-[18px]' />
              <p className='font-poppins font-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]'>12th Oct 2022</p>
            </div>
          </div>
          
          {/* Blog 2 */}
          <div className='h-auto md:h-[393px] w-full md:w-[555px] flex flex-col items-center text-center'>
            <div className='w-full md:w-[393px] h-auto md:h-[393px]'>
              <Image 
                src='/images/blog2.jpeg' 
                height={400} 
                width={400} 
                alt='blog2' 
                className='bg-cover w-full md:w-[400px] h-[250px] md:h-[373px] rounded-[10px]' 
              />
            </div>
            <div className='h-auto md:h-[129px] w-full md:w-[339px] flex flex-col justify-center items-center pt-4 md:pt-7'>
              <p className='w-full md:w-[339px] font-normal text-center text-[18px] md:text-[20px] font-Poppins leading-[28px] md:leading-[30px] text-black'>
              Going all-in with millennial design
              </p>
              <div className='w-[120px] h-[46px] border-black border-b-[2px] flex justify-center items-center mt-2'>
                <button className='w-[130px] h-[36px] font-Poppins font-medium text-[20px] md:text-[24px] leading-[30px] md:leading-[36px]'>
                  Read More
                </button>
              </div>
            </div>
            <div className='h-auto md:h-[24px] w-full md:w-[223px] flex gap-2 text-center justify-center pt-4'>
              <Clock4 className='h-[18px] w-[18px]' />
              <p className='font-poppins font-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]'>7 min</p>
              <Calendar className='h-[18px] w-[18px]' />
              <p className='font-poppins font-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]'>15th Nov 2022</p>
            </div>
          </div>
          {/* Blog 3 */}
          <div className='h-auto md:h-[393px] w-full md:w-[555px] flex flex-col items-center text-center'>
            <div className='w-full md:w-[393px] h-auto md:h-[393px]'>
              <Image 
                src='/images/blog1.jpeg' 
                height={400} 
                width={400} 
                alt='blog2' 
                className='bg-cover w-full md:w-[400px] h-[250px] md:h-[373px] rounded-[10px]' 
              />
            </div>
            <div className='h-auto md:h-[129px] w-full md:w-[339px] flex flex-col justify-center items-center pt-4 md:pt-7'>
              <p className='w-full md:w-[339px] font-normal text-center text-[18px] md:text-[20px] font-Poppins leading-[28px] md:leading-[30px] text-black'>
              Going all-in with millennial design
              </p>
              <div className='w-[120px] h-[46px] border-black border-b-[2px] flex justify-center items-center mt-2'>
                <button className='w-[130px] h-[36px] font-Poppins font-medium text-[20px] md:text-[24px] leading-[30px] md:leading-[36px]'>
                  Read More
                </button>
              </div>
            </div>
            <div className='h-auto md:h-[24px] w-full md:w-[223px] flex gap-2 text-center justify-center pt-4'>
              <Clock4 className='h-[18px] w-[18px]' />
              <p className='font-poppins font-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]'>7 min</p>
              <Calendar className='h-[18px] w-[18px]' />
              <p className='font-poppins font-light text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]'>15th Nov 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className='w-full md:w-[115px] h-auto md:h-[49px] border-black border-b-[1px] mt-28'>
      <button className='w-full md:w-[120px] h-auto md:h-[30px] font-poppins font-medium text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-center'>
      View All Post
      </button>
    </div>
  </div>
</section>

      {/* Our Instagram Section */}
      <section className='w-auto  h-[500px]'>
      <div className="bg-white max-w-[1440px] mx-auto bg-[url(/images/bg.jpeg)] bg-cover bg-center lg:bg-right h-[500px] flex items-center justify-center">
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
</section>


  </div>

  )
}

export default Home
