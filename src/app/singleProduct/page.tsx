import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Footer from '../componenets/Footer';
import ProductSec from '../componenets/ProductSec';
import Navbar from '../componenets/Navbar';

const SingleProduct = () => {
  return (
    <section className="h-auto w-full ">
      <Navbar />
      {/* Breadcrumb Navigation */}
      <div className="h-[100px] max-w-[1440px] mx-auto bg-[#FFFFFF] flex items-center px-4 md:px-[100px] ">
        <div className="flex items-center text-[#333] font-poppins text-[14px] md:text-[16px] w-full ">
          <Link href="/" className="hover:underline">
            <span className="font-normal text-[#9F9F9F]">Home</span>
          </Link>
          <ChevronRight className="w-[20px] h-[20px] mx-2" />
          <Link href="/shopping" className="hover:underline">
            <span className="font-normal text-[#9F9F9F]">Shop</span>
          </Link>
          <ChevronRight className="w-[20px] h-[20px] mx-2 mr-7" />
          <div className="flex items-center justify-end border-l-2 border-[#9F9F9F] pl-4 w-[100px] md:w-[130px]">
            <span className="font-poppins text-[12px] md:text-[16px] font-normal text-black">Asgaard Sofa</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="h-auto w-full">
        <div className="h-auto max-w-[1440px] mx-auto bg-[#FFFFFF] pt-5">
          <div className="flex flex-col md:flex-row px-4 md:px-[100px] gap-10">
            {/* Left Side - 4 Images in a Column */}
            <div className="flex md:flex-col flex-row gap-4 md:gap-6">
              {[1, 2, 3, 4].map((img, index) => (
                <div
                  key={index}
                  className="h-[80px] w-[76px] bg-[#FFF9E5] flex justify-center items-center rounded-md overflow-hidden"
                >
                  <Image
                    src={`/images/asgaardsofa${img}.png`}
                    alt={`Image ${img}`}
                    width={76}
                    height={80}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="w-full md:w-[481px]">
              <div className="w-full h-[300px] md:h-[500px] rounded-md bg-[#FFF9E5] flex justify-center items-center">
                <Image
                  src="/images/Asgaard-sofa.png"
                  alt="Asgaard Sofa"
                  width={423}
                  height={500}
                  className="object-contain h-[500px] w-[330px] md:w-[423px]"
                />
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="w-full md:w-[600px] ml-0 md:ml-16">
              {/* Product Name */}
              <h1 className="font-poppins md:pb-0 pb-5 font-normal text-[32px] md:text-[42px] leading-[48px] md:leading-[63px]">
                Asgaard Sofa
              </h1>

              {/* Product Price */}
              <span className="text-[#9F9F9F] font-poppins font-medium text-[20px] md:text-[24px] leading-[28px] md:leading-[36px]">
                Rs. 250,000.00
              </span>

              {/* Product Rating */}
              <div className="flex items-center mt-2">
                <div className="flex items-center gap-[5px]">
                  {/* Full Stars */}
                  <span className="text-[#FFDA5B] text-2xl">★</span>
                  <span className="text-[#FFDA5B] text-2xl">★</span>
                  <span className="text-[#FFDA5B] text-2xl">★</span>
                  <span className="text-[#FFDA5B] text-2xl">★</span>
                  <div className="h-[24px] w-[24px] mr-3">
                    <Image
                      src="/images/star.png"
                      alt="star"
                      width={76}
                      height={80}
                      className="object-cover h-[19px] w-[10px] pt-1"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end border-l-2 border-[#9F9F9F] gap-2 w-[130px] md:w-[140px] mt-2 md:mt-0 md:h-[33px]">
                  <span className="font-poppins text-[12px] md:text-[13px] font-normal text-[#9F9F9F]">
                    <span>5 Customer Review</span>
                  </span>
                </div>
              </div>

              {/* Product Description */}
              <p className="md:w-[424px] w-[350px] h-[80px] font-poppins font-normal text-[13px] leading-[19.5px] mt-4">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
                well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>

              {/* Size Options */}
              <div className='mt-5 md:mt-0'>
                <label className="text-[#9F9F9F] font-poppins font-normal text-[14px]">Size</label>
                <div className="mt-3 flex gap-5">
                  <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#FBEBB5] rounded-[5px]">
                    <span className="font-poppins font-normal text-[13px]">L</span>
                  </div>
                  <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#FAF4F4] rounded-[5px]">
                    <span className="font-poppins font-normal text-[13px]">XL</span>
                  </div>
                  <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#FAF4F4] rounded-[5px]">
                    <span className="font-poppins font-normal text-[13px]">XS</span>
                  </div>
                </div>
              </div>

              {/* Color Options */}
              <div className="mt-6">
                <label className="text-[#9F9F9F] font-poppins font-normal text-[14px]">Color</label>
                <div className="flex gap-4 mt-2">
                  <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full cursor-pointer"></div>
                  <div className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer"></div>
                  <div className="w-[30px] h-[30px] bg-[#CDBA7B] rounded-full cursor-pointer"></div>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 mt-6">
                {/* Plus-Minus Button */}
                <div className="w-[123px] h-[64px] border-[1px] border-[#9F9F9F] rounded-[15px] flex items-center justify-between px-3">
                  <button className="text-xl font-bold text-[#333]">-</button>
                  <span className="text-lg font-medium text-[#333]">1</span>
                  <button className="text-xl font-bold text-[#333]">+</button>
                </div>

                {/* Add to Cart Button */}
                <Link href='/myaccount'>
                  <button className=" hover:bg-black hover:text-white md:w-[215px] w-[170px] h-[64px] text-[20px] font-normal rounded-[15px] border border-[#000000]">
                    Add To Cart
                  </button>
                </Link>
              </div>
           

              {/* Product Information */}
              <div className="h-[160px] mt-16 border-t-2 border-[#D9D9D9] flex flex-col justify-center">
                <ul className="flex flex-col gap-4 pt-14">
                  <li className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px]">
                    SKU <span className="text-[#9F9F9F] pl-[9%]">:</span>
                    <span className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px] pl-4">SS001</span>
                  </li>
                  <li className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px]">
                    Category <span className="text-[#9F9F9F] pl-4">:</span>
                    <span className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px] pl-4">Sofas</span>
                  </li>
                  <li className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px]">
                    Tags <span className="text-[#9F9F9F] pl-12">:</span>
                    <span className="text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px] pl-4">
                      Sofa, Chair, Home, Shop
                    </span>
                  </li>
                  <li className="flex flex-row text-[#9F9F9F] font-poppins font-normal text-[16px] leading-[24px]">
                    Share <span className="text-[#9F9F9F] pl-10">:</span>
                    <div className="flex flex-row gap-5 pl-4">
                      <div className="h-[24px] w-[24px] text-center">
                        <Image
                          src="/images/facebook.png"
                          alt="facebook"
                          width={76}
                          height={80}
                          className="object-cover h-[20px] w-[20px]"
                        />
                      </div>
                      <div className="h-[24px] w-[24px] text-center">
                        <Image
                          src="/images/linkedin.png"
                          alt="linkedin"
                          width={76}
                          height={80}
                          className="object-cover h-[20px] w-[20px]"
                        />
                      </div>
                      <div className="h-[24px] w-[24px] text-center">
                        <Image
                          src="/images/twitter.png"
                          alt="twitter"
                          width={76}
                          height={80}
                          className="object-cover h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="h-[27px] w-[27px] ml-10 md:ml-40 ">
                        <Image
                          src="/images/heart.png"
                          alt="heart"
                          width={76}
                          height={80}
                          className="object-cover h-[28px] w-[23px]"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Additional Information Section */}
<section className='h-auto w-full mt-20'>
  <div className='md:h-[744px] h-auto max-w-[1440px] mx-auto bg-[#FFFFFF] border-t-2 border-[#D9D9D9]'>
    {/* Section Heading */}
    <div className='flex flex-col md:flex-row md:gap-14 gap-4 mt-10 justify-center items-center'>
      <h1 className='font-poppins font-normal text-[24px] leading-[36px] text-black'>
        Description
      </h1>
      <h2 className='font-poppins font-normal text-[24px] leading-[36px] text-[#9F9F9F]'>
        Additional Information
      </h2>
      <h2 className='font-poppins font-normal text-[24px] leading-[36px] text-[#9F9F9F]'>
        Reviews [5]
      </h2>
    </div>

    {/* Description under the heading */}
    <div className='flex flex-col gap-7  text-center md:text-start w-full max-w-[1026px] mx-auto mt-10 justify-center items-center px-5 md:px-0'>
      <p className='font-poppins font-normal text-[16px] text-[#9F9F9F] leading-[24px]'>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </p>
      <p className='font-poppins font-normal text-[16px] text-[#9F9F9F] leading-[24px] '>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences, while the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>

   {/* Two Images in a row */}
<div className='flex flex-wrap justify-center gap-8 mt-8'>
  <div className='w-full md:w-[605px] h-[300px] md:h-[348px] bg-[#FFF9E5] flex justify-center items-center md:items-start group'>
    <Image
      src='/images/sofa1.png' // Replace with your image path
      alt='Image 1'
      width={500}
      height={500}
      className='object-cover h-[180px] w-[400px] group-hover:scale-110 group-hover:rotate-0 transition-all duration-300 md:h-[300px] md:w-[600px] pr-6'
    />
  </div>
  <div className='w-full md:w-[605px] h-[300px] md:h-[348px] mb-9 bg-[#FFF9E5] flex justify-center items-center group'>
    <Image
      src='/images/sofa2.png' // Replace with your image path
      alt='Image 2'
      width={500}
      height={500}
      className='object-cover h-[160px] w-[390px] group-hover:scale-110 group-hover:rotate-0 transition-all duration-300 md:h-[250px] md:w-[750px] pl-4'
    />
  </div>
</div>

  </div>
</section>

     <ProductSec heading="Related Products" />
      <Footer />
    </section>
  );
};

export default SingleProduct;
