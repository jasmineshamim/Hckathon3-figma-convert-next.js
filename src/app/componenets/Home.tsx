
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock4 } from 'lucide-react'
import ProductSec from './ProductSec'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=' h-auto w-auto '>
      <Navbar color="#FBEBB5" />
      <div className=' max-w-[1440px]  mx-auto pl-0 md:pl-[202px] h-auto flex relative bg-[#FBEBB5] md:px-10 lg:pl-[202px] py-10 md:h-[800px] flex-col-reverse md:flex-row items-center '>
        <div className='pt-[18px] flex flex-col  items-center md:items-start md:pt-[28px] '>
          {/* Heading */}
          <h1 className='md:w-[440px] md:h-[192px] w-[300px] h-auto font-poppins font-semibold md:font-medium text-[45px] md:text-[64px] md:text-start text-center leading-[55px] md:leading-[96px]'>
            Rocket single seater
          </h1>

          {/* Button directly below heading */}
          <div className='w-[121px] h-[49px] hover:border-black hover:border-b-[1px] mt-10 '>
           <Link href="/shopping" className="w-full h-full block">
             <button className='w-[121px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>
                Shop Now
              </button>
            </Link>
          </div>
        </div >

        <div className=' flex justify-center items-center w-[300px] h-[400px] md:w-[1000px] md:h-[1000px]'>
          <Image
            src='/images/Asgard-sofa.png'
            width={500}
            height={500}
            alt='hero'
            className='object-cover w-[600px] h-[400px] md:w-[1100px] md:h-[900px] drop-shadow-lg transform md:scale-x-[-1]'
          />
        </div>

      </div>
      </section>

    {/* Side Table Section */}
<section className="h-auto w-auto">
  <div className="max-w-[1440px] mx-auto gap-10 flex flex-col md:flex-row justify-around items-center bg-[#FAF4F4] py-10 md:gap-6">
    <div className="md:text-start text-center mx-3 group">
      <Image
        src="/images/side-table1.png"
        width={500}
        height={500}
        alt="table"
        className="object-cover w-[300px] h-[250px] md:w-[400px] md:h-[330px] group-hover:scale-110 group-hover:rotate-0 transition-all duration-300"
      />
      <h2 className="text-[30px] md:text-[36px] font-poppins font-medium mt-4">
        Side Table
      </h2>
      <Link href="/shopping" className="w-full h-full block">
        <button className="group-hover:border-b-[1px] group-hover:border-black text-[20px] md:text-[24px] leading-[36px] font-poppins mt-5 md:mt-3 transition-all duration-300">
          View More
        </button>
      </Link>
    </div>
    <div className="md:text-start text-center mx-3 group">
      <Image
        src="/images/side-table2.png"
        width={500}
        height={500}
        alt="sofa"
        className="object-cover w-[300px] h-[250px] md:w-[400px] md:h-[300px] group-hover:scale-110 group-hover:rotate-0 transition-all duration-300"
      />
      <h2 className="text-[30px] md:text-[36px] font-poppins font-medium mt-4">
       Side Table
      </h2>
      <Link href="/shopping" className="w-full h-full block">
        <button className="group-hover:border-b-[1px] group-hover:border-black text-[20px] md:text-[24px] leading-[36px] font-poppins mt-5 md:mt-3 transition-all duration-300">
          View More
        </button>
      </Link>
    </div>
  </div>
</section>

    <ProductSec heading="Top Picks For You" description='Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.'/> 


     {/* Asgaard Sofa Section */}

    <section className='h-auto w-auto '>
       {/* Image Section */}
       <div className='max-w-[1440px] h-[639px] mx-auto bg-[#FFF9E5] flex flex-col md:flex-row justify-around items-center'>
      <div className='md:pt-0 pt-10'>
        <Image
          src='/images/Asgaard-sofa.png'
          alt='Asgaard Sofa'
          height={500}
          width={500}
          className='object-cover w-[390px] h-[330px] md:w-[960px] md:h-[800px]'
        />
      </div>
     <div className='w-[331px] h-[205px] flex flex-col text-center gap-7 md:mb-0 mb-10 justify-center items-center '>
         <div className='w-[331px] h-[108px] '>
            <p className='"w-[149px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>New Arrivals</p>
            <h1 className='w-[331px] h-[72px] absolute font-poppins font-bold text-[48px] leading-[72px]'>Asgaard sofa</h1>
         </div>
         <Link href="/singleProduct" >
            <div className='md:w-[255px] w-[200px] h-[55px] hover:bg-black hover:text-white border-black border-[1px] flex justify-center items-center bg-[#FFF9E5] '>
              <button className='md:w-[106px] w-[100px] h-[30px] font-poppins font-normal text-[20px] leading-[30px]'>Order Now</button>
            </div>
         </Link>
      </div>
      </div>
    </section> 



    {/* Blog Section */}
    <section className='h-auto w-auto'>
  <div className='max-w-[1440px] mx-auto h-auto md:h-[944px] flex flex-col items-center pt-5 bg-[#FFFFFF]'>
    <div className='w-full md:w-[1152px] h-auto md:h-[136px] gap-4 flex flex-col justify-center items-center pt-10 text-center '>
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
                src='/images/blog1.jpeg' 
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
              <Link href="/blog" >
                <div className='w-[120px] h-[46px] border-black border-b-[1px] flex justify-center items-center mt-2'>
                  <button className='w-[130px] h-[36px] font-Poppins font-medium text-[20px] md:text-[24px] leading-[30px] md:leading-[36px]'>
                    Read More
                  </button>
                </div>
              </Link>
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
              <Link href="/blog" >
                <div className='w-[120px] h-[46px] border-black border-b-[1px] flex justify-center items-center mt-2'>
                  <button className='w-[130px] h-[36px] font-Poppins font-medium text-[20px] md:text-[24px] leading-[30px] md:leading-[36px]'>
                    Read More
                  </button>
                </div>
              </Link>
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
                src='/images/blog3.jpeg' 
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
              <Link href="/blog" >
                <div className='w-[120px] h-[46px] border-black border-b-[1px] flex justify-center items-center mt-2'>
                  <button className='w-[130px] h-[36px] font-Poppins font-medium text-[20px] md:text-[24px] leading-[30px] md:leading-[36px]'>
                     Read More
                  </button>
                </div>
              </Link>
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
    <Link href="/blog" >
      <div className='w-[120px] h-[46px] border-black border-b-[1px] flex justify-center items-center my-20'>
        <button className='w-[130px] h-[36px] font-Poppins font-medium text-[18px] md:text-[20px] leading-[30px] md:leading-[36px]'>
          View All Post
        </button>
      </div>
    </Link>
  </div>
</section>

      {/* Our Instagram Section */}
      <section className='w-auto h-[500px]'>
      <div className="bg-white max-w-[1440px] mx-auto bg-[url(/images/follow.jpeg)] bg-cover bg-center lg:bg-right h-[500px] flex items-center justify-center">
  <div className="w-full h-full bg-[#ffffffab] flex justify-center items-center">
    <div
      className="w-full sm:w-auto max-w-[90%] sm:max-w-[270px] md:max-w-[500px] lg:max-w-[700px]
      rounded-xl py-8 px-4 sm:px-8 flex flex-col items-center text-center gap-3"
    >
      <div className="md:w-[454px] w-[300px] h-[202px] flex flex-col gap-5 justify-center items-center relative">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-poppins font-bold  text-[40px] md:text-[60px] leading-[90px]">Our Instagram</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px]">Follow our store on Instagram</p>
        </div>
        <Link href="/contact" >
          <button className="shadow-2xl bottom-4 hover:bg-black hover:text-[#FAF4F4] bg-[#FAF4F4] text-black py-2 px-6 md:w-[255px] w-[200px] h-[50px] md:h-[64px] rounded-[50px] border-none hover:border-solid border-2 border-black font-poppins font-normal text-[20px] text-center">
             Follow Us
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
</section>


  </div>

  )
}

export default Home


