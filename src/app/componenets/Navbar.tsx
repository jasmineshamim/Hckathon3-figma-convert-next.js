
import { Heart, Search,  ShoppingCart, UserRound } from 'lucide-react';
import Link from 'next/link';



const Navbar = ({ color = 'white' }) => {
  return (
    <nav className={`flex h-[100px] w-auto mx-auto max-w-[1440px] ${color === 'white' ? 'bg-[#FFFFFF] text-black' : 'bg-[#FBEBB5] text-black'} pt-[38px] pl-[505px] justify-evenly`}>
      
      <ul className="flex gap-14 w-[430px] h-[24px]">
        <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href='/'>Home</Link></li>
        <li className='w-[42px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href="/about">Shop</Link></li>
        <li className='w-[49px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href="/services">About</Link></li>
        <li className='w-[66px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href="/contact">Contact</Link></li>
      </ul>

       <div className='w-[247px] h-[28px] gap-11 flex '>
       <UserRound className='w-[28px] h-[28px]'/>
         <Search className='w-[28px] h-[28px]'/>
         <Heart className='w-[28px] h-[28px]'/>
         <ShoppingCart className='w-[28px] h-[28px]'/>
       </div> 
  
    </nav>
  );
};

export default Navbar;
