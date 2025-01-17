import { Heart, Search, ShoppingCart, UserRound, AlignJustify } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = ({ color = 'white' }) => {
  return (
    <nav className=' h-auto  w-auto'>
      <div className={`max-w-[1440px]  h-auto mx-auto pt-0 md:pt-[38px] ${color === 'white' ? 'bg-[#FFFFFF] text-black' : 'bg-[#FBEBB5] text-black'} pl-4 md:pl-[505px] md:h-[100px]`}>
        {/* Desktop Navigation */}
        <div className='md:flex hidden justify-evenly gap-16 w-full items-center'>
          <ul className="flex gap-16 w-[430px] h-[24px]">
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'>
              <Link href='/'>Home</Link>
            </li>
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'>
              <Link href="/shopping">Shop</Link>
            </li>
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'>
              <Link href="/blog">About</Link>
            </li>
            <li className='w-[48px] h-[24px] top-[38px] font-poppins font-medium text-base leading-6'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <div className='flex items-center w-[247px] h-[28px] gap-11'>
            <UserRound className='w-[28px] h-[28px]' />
            <Search className='w-[28px] h-[28px]' />
            <Heart className='w-[28px] h-[28px]' />
            <ShoppingCart className='w-[28px] h-[28px]' />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className='flex md:hidden h-[60px] '>
          <Sheet>
            <SheetTrigger>
              <AlignJustify className='w-6 h-6 ' />
            </SheetTrigger>
            <SheetContent className='bg-[#FAF4F4] flex justify-center '>
              <SheetHeader >
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>

                    {/* Search Bar */}
                  <div className="flex items-center w-[250px] h-[45px] mx-auto  border border-gray-400 rounded-[10px] p-2">
                     <input
                        type="text"
                        placeholder="Search..."
                       className="bg-transparent outline-none w-[200px] h-[40px]  text-gray-700 text-[16px] leading-[24px]"
                      />
                     <button className="text-black hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                     </button>
                 </div>
                  <ul className="flex flex-col h-full items-center text-center gap-8">
                    <li className='font-poppins font-medium text-base'>
                      <Link href='/'>Home</Link>
                    </li>
                    <li className='font-poppins font-medium text-base'>
                      <Link href="/shopping">Shop</Link>
                    </li>
                    <li className='font-poppins font-medium text-base'>
                      <Link href="/blog">About</Link>
                    </li>
                    <li className='font-poppins font-medium text-base'>
                      <Link href="/contact">Contact</Link>
                    </li>
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