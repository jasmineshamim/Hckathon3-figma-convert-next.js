import React from 'react'

const FreeDelivery = () => {
  return (
    <section className='w-auto h-auto py-12'>
      <div className='bg-[#FAF4F4] h-auto py-5 md:h-[300px] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-32'>
        
        {/* Column 1 */}
        <div className='flex-1 text-center md:text-left mb-8 md:mb-0'>
          <h2 className='font-poppins w-[244px] font-medium text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] md:w-[265px] mx-auto md:mx-0'>
            Free Delivery
          </h2>
          <p className='text-[#9F9F9F]  font-poppins font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] w-full md:w-[376px]'>
          For all oders over $50, consectetur <br /> adipim scing elit.
          </p>
        </div>
        
        {/* Column 2 */}
        <div className='flex-1 text-center md:text-left mb-8 md:mb-0'>
          <h2 className='font-poppins  w-[244px] font-medium text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] md:w-[265px] mx-auto md:mx-0'>
          90 Days Return
          </h2>
          <p className='text-[#9F9F9F] font-poppins font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] w-full md:w-[376px]'>
          If goods have problems, consectetur <br /> adipim scing elit.
          </p>
        </div>
        
        {/* Column 3 */}
        <div className='flex-1 text-center md:text-left'>
          <h2 className='font-poppins  w-[244px] font-medium text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] md:w-[265px] mx-auto md:mx-0'>
          Secure Payment
          </h2>
            <p className='font-poppins font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] w-full md:w-[376px] text-[#9F9F9F]'>
          100% secure payment, consectetur <br /> adipim scing elit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FreeDelivery;
