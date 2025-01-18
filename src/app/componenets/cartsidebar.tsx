"use client";
import { FC } from "react";
import Link from "next/link";
import { X } from 'lucide-react';

import Image from "next/image";
interface CartSidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
  cartItems: { img: string; description: string; price: string; numericPrice: number }[];
  removeFromCart: (product: { img: string; description: string; price: string; numericPrice: number }) => void;
  subtotal: number;
}

const CartSidebar: FC<CartSidebarProps> = ({ isOpen, closeSidebar, cartItems, removeFromCart, subtotal }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
    >
      <div className="md:w-[400px] w-[300px] h-full bg-white flex flex-col absolute right-0 py-6">
        {/* Close button with an enhanced icon */}
        <button
          onClick={closeSidebar}
          className="absolute top-5 right-5 text-black font-semibold text-2xl p-2 "
        >
         <Image
         src="/images/trash.png"
         height={100}
         width={100}
         alt="trash"
         className="h-[19px] w-[18px]"
         />
        </button>
        <h2 className=" font-poppins text-[24px] font-semibold mx-8 border-b w-[280px] pb-6 mb-6 text-start">
          Shopping Cart
        </h2>
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto  px-8">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center gap-5">
                   <div className="flex items-center justify-center h-[80px] w-[80px] md:h-[90px] md:w-[90px] bg-[#FBEBB5] rounded-[10px]">
                        <Image 
                            src={item.img} 
                            height={300}
                            width={300}
                            alt='images'
                            className="w-[100] h-[90] object-cover p-2" 
                        />
                   </div>
                   <div className="flex flex-col gap-2">
                        <p className="font-poppins font-medium text-[13px] md:text-sm text-black w-[100px] md:w-2/3">{item.description}</p>
                        <div className="flex flex-row h-[20px] justify-start items-center gap-2">
                          <span>1</span>
                          <X  className=" h-3 w-3"/>
                        <span className="text-xs text-[#B88E2F]">{item.price}</span>
                        </div>
                        
                   </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="h-[20px] w-[20px] bg-[#9F9F9F] text-white  rounded-full items-center flex justify-center"
                >
                    <X  className=" h-4 w-4"/>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="mt-5">
          <div className="flex justify-between  px-8  w-2/3 text-sm font-medium text-black">
            <span className="font-normal">Subtotal</span>
            <span className=" text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="my-6 border-t "></div>
            <div className="flex gap-6  px-8"> 
            <Link href='/cartsec'>
              <button className="md:w-[131px] w-[100px] h-[31px] rounded-[50px] hover:bg-black hover:text-white border border-[#000000] font-normal text-[14px]">View Cart</button>
            </Link>
              <Link href='/checkoutsec'>
                 <button className="md:w-[131px] w-[100px] h-[31px] rounded-[50px] hover:bg-white hover:text-black bg-black text-white border border-[#000000] font-normal text-[14px]">Checkout</button>
              </Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
