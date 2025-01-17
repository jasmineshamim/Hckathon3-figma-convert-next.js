
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import FreeDelivery from '../componenets/FreeDelivery';
import Footer from '../componenets/Footer';
import Navbar from '../componenets/Navbar';
import Boxes from '../componenets/boxes';

const BlogSec = () => {
  return (
    <section className="w-auto h-auto">
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
                   Blog
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
                     Blog
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section className="w-auto h-auto">
        <div className='h-auto md:h-[2710px] max-w-[1440px] mx-auto'>
  <div className="bg-white h-auto md:h-[2490px] flex flex-col justify-evenly md:flex-row my-10 md:my-24 ">

    {/* Blog Section */}
    <div className="flex flex-col gap-10 p-5 ml-0 md:ml-16 w-full  md:w-2/3">
      {/* Blog 1 */}
      <div className="flex flex-col items-start text-left">
        <div className="w-full h-auto md:w-[817px] md:h-[500px]">
          <Image
            src="/images/blog2.jpeg"
            height={400}
            width={400}
            alt="blog2"
            className="bg-fit w-full h-[250px] md:h-[500px] rounded-[10px]"
          />
        </div>
        <div className="flex gap-7 text-left pt-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/blog-icon1.png"
              height={400}
              width={400}
              alt="profile"
              className="w-[20px] h-[20px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">Admin</h3>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src="/images/blog-icon2.png"
              height={400}
              width={400}
              alt="calendar"
              className="w-[20px] h-[20px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">14 Oct 2022</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/images/blog-icon3.png"
              height={400}
              width={400}
              alt="category"
              className="w-[24px] h-[24px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">Wood</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-4 items-start ">
          <h1 className="font-medium text-[20px] md:text-[30px] text-black">
            Going all-in with millennial design
          </h1>
          <p className="text-[13px]  md:w-[817px]  w-[362px] h-auto md:text-[15px] text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
          </p>
          <div className="mt-2 w-[100px] text-center hover:border-b hover:border-black h-[40px]">
            <button className="w-[110px] h-[36px] font-Poppins font-medium text-[20px] text-left">
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* Blog 2 */}
      <div className="flex flex-col items-start text-left">
        <div className="w-full h-auto md:w-[817px] md:h-[500px]">
          <Image
            src="/images/blog4.jpeg"
            height={400}
            width={400}
            alt="blog2"
            className="bg-fit w-full h-[250px] md:h-[500px] rounded-[10px]"
          />
        </div>
        <div className="flex gap-7 text-left pt-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/blog-icon1.png"
              height={400}
              width={400}
              alt="profile"
              className="w-[20px] h-[20px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">Admin</h3>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src="/images/blog-icon2.png"
              height={400}
              width={400}
              alt="calendar"
              className="w-[20px] h-[20px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">14 Oct 2022</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/images/blog-icon3.png"
              height={400}
              width={400}
              alt="category"
              className="w-[24px] h-[24px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">Handmade</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <h1 className="font-medium text-[20px] md:text-[30px] text-black">
            Exploring new ways of decorating
          </h1>
          <p className="text-[13px] md:w-[817px] w-[362px] h-auto md:text-[15px] text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
          </p>
          <div className="mt-2 w-[100px] text-center hover:border-b hover:border-black h-[40px]">
            <button className="w-[130px] h-[36px] font-Poppins font-medium text-[20px] text-left">
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="flex flex-col items-start text-left">
        <div className="w-full h-auto md:w-[817px] md:h-[500px]">
          <Image
            src="/images/blog5.jpeg"
            height={400}
            width={400}
            alt="blog2"
            className="bg-fit w-full h-[250px] md:h-[500px] rounded-[10px]"
          />
        </div>
        <div className="flex gap-7 text-left pt-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/blog-icon1.png"
              height={400}
              width={400}
              alt="profile"
              className="w-[20px] h-[20px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">Admin</h3>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src="/images/blog-icon2.png"
              height={400}
              width={400}
              alt="calendar"
              className="w-[20px] h-[20px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">14 Oct 2022</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/images/blog-icon3.png"
              height={400}
              width={400}
              alt="category"
              className="w-[24px] h-[24px]"
            />
            <h3 className="font-poppins font-normal text-[14px] text-[#9F9F9F]">Wood</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <h1 className="font-medium text-[20px] md:text-[30px] text-black">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[13px] md:w-[817px] w-[362px] h-auto md:text-[15px] text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
          </p>
          <div className="mt-2 w-[100px] text-center hover:border-b hover:border-black h-[40px]">
            <button className="w-[130px] h-[36px] font-Poppins font-medium text-[20px] text-left">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Categories and Recent Posts Section */}
    <div className="bg-white w-full md:w-1/3 mr-0 md:mr-12 p-5 flex flex-col  items-center">
      {/* Search Bar */}
      <div className="flex items-center w-[350px]  md:w-[311px]  h-[58px] mx-auto mb-8 border border-gray-300 rounded-[10px] p-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-[350px] h-[40px] md:w-[311px] md:h-[58px] text-gray-700 text-[16px] leading-[24px]"
        />
        <button className="text-black hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      

      {/* Categories Section */}
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-start items-center md:items-start w-[251px]'>
        <h2 className="text-[24px] font-medium text-black mb-9 ">Categories</h2>
        </div>
        
        <div className="flex flex-col gap-9 w-[251px]">
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-normal text-[#9F9F9F]">Crafts</span>
            <span className="text-[16px] font-normal text-[#9F9F9F]">2</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-normal text-[#9F9F9F]">Design</span>
            <span className="text-[16px] font-normal text-[#9F9F9F]">8</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-normal text-[#9F9F9F]">Handmade</span>
            <span className="text-[16px] font-normal text-[#9F9F9F]">7</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-normal text-[#9F9F9F]">Interior</span>
            <span className="text-[16px] font-normal text-[#9F9F9F]">1</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-normal text-[#9F9F9F]">Wood</span>
            <span className="text-[16px] font-normal text-[#9F9F9F]">6</span>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold text-black mb-11 mt-10 md:text-start text-center">Recent Posts</h2>
        <div className="flex flex-col gap-7">
          {/* Recent Post 1 */}
          <div className="flex gap-4 items-center">
            <div>
              <Image
                src="/images/recent-post1.jpg"
                alt="image"
                height={500}
                width={500}
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
            </div>
            <div className="text-left ">
              <h3 className="font-medium leading-snug text-[16px] w-[140px]">Going all-in with millennial design</h3>
              <p className="text-[14px] text-[#9F9F9F] pt-1">03 Aug 2022</p>
            </div>
          </div>

          {/* Recent Post 2 */}
          <div className="flex gap-4 items-center">
            <div>
              <Image
                src="/images/recent-post2.jpg"
                alt="image"
                height={500}
                width={500}
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
            </div>
            <div className="text-left">
              <h3 className="font-medium leading-snug text-[16px] w-[150px]">Exploring new ways of decorating</h3>
              <p className="text-[14px] text-[#9F9F9F] pt-1">03 Aug 2022</p>
            </div>
          </div>

            {/* Recent Post 3 */}
            <div className="flex gap-4 items-center">
            <div>
              <Image
                src="/images/recent-post3.jpg"
                alt="image"
                height={500}
                width={500}
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
            </div>
            <div className="text-left">
              <h3 className="font-medium leading-snug text-[16px]">Handmade pieces <br />that took time to make</h3>
              <p className="text-[14px] text-[#9F9F9F] w-[119px] pt-1">03 Aug 2022</p>
            </div>
          </div>

            {/* Recent Post 4 */}
            <div className="flex gap-4 items-center">
            <div>
              <Image
                src="/images/recent-post4.jpg"
                alt="image"
                height={500}
                width={500}
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
            </div>
            <div className="text-left gap-1">
              <h3 className="font-medium leading-snug text-[16px] w-[130px]">Modern home in Milan</h3>
              <p className="text-[14px] text-[#9F9F9F] pt-1">03 Aug 2022</p>
            </div>
          </div>

            {/* Recent Post 5*/}
            <div className="flex gap-4 items-center">
            <div>
              <Image
                src="/images/recent-post5.jpg"
                alt="image"
                height={500}
                width={500}
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
            </div>
            <div className="text-left ">
              <h3 className="font-medium leading-snug text-[16px] w-[130px]">Colorful office redesign</h3>
              <p className="text-[14px] text-[#9F9F9F] pt-1">03 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Boxes />
  </div>
</section>
<FreeDelivery/>
<Footer />


</section>
  )
}

export default BlogSec;





















