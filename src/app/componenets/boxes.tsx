import React from 'react'

const Boxes = () => {
  return (
    <div>
       {/* Pagination Boxes */}
       <div className="my-20 flex gap-7 justify-center items-center">
          <div className="md:w-[60px] md:h-[60px] w-[45px] h-[45px] flex items-center justify-center bg-[#FBEBB5] rounded-[10px]">
            <span className="font-poppins font-normal md:font-light text-[20px]">1</span>
          </div>
          <div className="md:w-[60px] md:h-[60px] w-[45px] h-[45px] flex items-center justify-center bg-[#FFF9E5] rounded-[10px]">
            <span className="font-poppins font-normal md:font-light text-[20px]">2</span>
          </div>
          <div className="md:w-[60px] md:h-[60px] w-[45px] h-[45px] flex items-center justify-center bg-[#FFF9E5] rounded-[10px]">
            <span className="font-poppins font-normal md:font-light text-[20px]">3</span>
          </div>
          <div className="w-[65px] h-[45px]  md:w-[98px]  md:h-[60px] flex items-center justify-center bg-[#FFF9E5] rounded-[10px]">
            <span className="font-poppins font-normal md:font-light text-[15px] md:text-[20px]">Next</span>
          </div>
        </div>
    </div>
  )
}

export default Boxes;
