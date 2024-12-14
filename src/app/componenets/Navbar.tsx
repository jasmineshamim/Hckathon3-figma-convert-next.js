
import { Heart, Search,  ShoppingCart, UserRound, AlignJustify } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = ({ color = 'white' }) => {
  return (
    <nav className=' h-[100px] w-auto '>
      <div className={` max-w-[1440px] mx-auto pt-[38px] ${color === 'white' ? 'bg-[#FFFFFF] text-black' : 'bg-[#FBEBB5] text-black'}  pl-[505px] h-[100px] `}>
        {/* Desktop Navigation */}
        <div className='md:flex hidden justify-evenly  gap-16 w-full items-center'>
          <ul className="flex gap-16 w-[430px] h-[24px]">
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href='/'>Home</Link></li>
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href="/about">Shop</Link></li>
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href="/services">About</Link></li>
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'><Link href="/contact">Contact</Link></li>
          </ul>

          <div className='flex items-center w-[247px] h-[28px] gap-11 '>
            <UserRound className='w-[28px] h-[28px]' />
            <Search className='w-[28px] h-[28px]' />
            <Heart className='w-[28px] h-[28px]' />
            <ShoppingCart className='w-[28px] h-[28px]' />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className='flex md:hidden'>
          <Sheet>
             <SheetTrigger>
               <AlignJustify className='w-6 h-6' />
             </SheetTrigger>
             <SheetContent>
               <SheetHeader>
                 <SheetTitle>Menu</SheetTitle>
                 <SheetDescription>
                   <ul className="flex flex-col h-full items-center text-center gap-8 justify-center">
                     <li className='font-poppins font-medium text-base'><Link href='/'>Home</Link></li>
                     <li className='font-poppins font-medium text-base'><Link href="/about">Shop</Link></li>
                     <li className='font-poppins font-medium text-base'><Link href="/services">About</Link></li>
                     <li className='font-poppins font-medium text-base'><Link href="/contact">Contact</Link></li>
                   </ul>
                 </SheetDescription>
               </SheetHeader>
             </SheetContent>
           </Sheet>
         </div>
      </div>
    </nav>
  );
};
 export default Navbar;
