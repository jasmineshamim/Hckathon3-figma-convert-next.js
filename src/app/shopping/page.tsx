
"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Navbar from "../componenets/Navbar";
import Link from "next/link";
import FreeDelivery from "../componenets/FreeDelivery";
import Footer from "../componenets/Footer";
import Boxes from "../componenets/boxes";
import { useState } from "react";
import CartSidebar from "../componenets/cartsidebar";


// Define Product interface
interface Product {
  img: string;
  description: string;
  price: string;
  numericPrice: number; // Ensure numericPrice is part of Product
}

// Props for ProductSec component
// interface ProductSecProps {
//   heading: string;
//   description: string;
// }

// const ProductSec: React.FC<ProductSecProps> = ({ }) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

interface ProductSecProps {
  // No need for heading and description here anymore
}

const ProductSec: React.FC<ProductSecProps> = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products: Product[] = [
    { img: "/images/shop1.png", description: "Trenton modular sofa_3", price: "Rs. 25,000.00", numericPrice: 25000 },
    { img: "/images/shop2.png", description: "Granite dining table with dining chair", price: "Rs. 25,000.00", numericPrice: 25000 },
    { img: "/images/shop3.png", description: "Outdoor bar table and stool", price: "Rs. 25,000.00", numericPrice: 25000 },
    { img: "/images/shop4.png", description: "Plain console with teak mirror", price: "Rs. 25,000.00", numericPrice: 25000 },
    { img: "/images/shop5.png", description: "Grain coffee table", price: "Rs. 15,000.00", numericPrice: 15000 },
    { img: "/images/shop6.png", description: "Kent coffee table", price: "Rs. 225,000.00", numericPrice: 225000 },
    { img: "/images/shop7.png", description: "Round coffee table_color 2", price: "Rs. 251,000.00", numericPrice: 251000 },
    { img: "/images/shop8.png", description: "Reclaimed teak coffee table", price: "Rs. 25,200.00", numericPrice: 25200 },
    { img: "/images/shop9.png", description: "Trenton modular sofa_3", price: "Rs. 258,200.00", numericPrice: 258200 },
    { img: "/images/shop10.png", description: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", numericPrice: 20000 },
    { img: "/images/shop-11.png", description: "SJP_0825", price: "Rs. 200,000.00", numericPrice: 200000 },
    { img: "/images/shop-12.png", description: "Bella chair and table", price: "Rs. 100,000.00", numericPrice: 100000 },
    { img: "/images/side-table1.png", description: "Granite square side table", price: "Rs. 258,800.00", numericPrice: 258800 },
    { img: "/images/Asgaard-sofa.png", description: "Asgaard sofa", price: "Rs. 250,000.00", numericPrice: 250000 },
    { img: "/images/sofa.png", description: "Maya sofa three seater", price: "Rs. 115,000.00", numericPrice: 115000 },
    { img: "/images/shop13.png", description: "Outdoor sofa set", price: "Rs. 244,000.00", numericPrice: 244000 },
  ];

  // Add item to cart
  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setIsSidebarOpen(true); // Open sidebar when item is added
  };

  // Remove item from cart
  const removeFromCart = (product: Product) => {
    setCartItems(cartItems.filter((item) => item !== product));
  };

  // Calculate the total price (subtotal)
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.numericPrice, 0);
  };

  // Close the cart sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section className="h-auto w-auto">
      <Navbar />
       {/* Our Instagram Section */}
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
                    Shop
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
                    Shop
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto w-auto mt-[50px]">
      <div className="mx-auto h-auto max-w-[1440px] bg-[#FAF4F4] flex flex-wrap justify-around text-center items-center px-4 py-4 md:h-[100px]">
    {/* Filter Section */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-auto">
      <div className="flex items-center justify-center gap-2">
        <div className="h-[25px] w-[24px] mt-3 mx-2">
          <Image 
            src="/images/icon1.png" 
            alt="icon" 
            height={50} 
            width={50} 
            className="h-[19px] w-[19px] md:h-auto md:w-auto" 
          />
        </div>
        <span className="font-poppins text-[16px] md:text-[20px] font-normal text-black mt-2">Filter</span>
        <div className="h-[29px] w-[29px] mx-2 mt-2">
          <Image 
            src="/images/icon2.png" 
            alt="icon" 
            height={50} 
            width={50} 
            className="h-[23px] w-[22px] md:h-auto md:w-auto" 
          />
        </div>
        <div className="h-[24px] w-[24px] mr-6 mt-2">
          <Image 
            src="/images/icon3.png" 
            alt="icon" 
            height={50} 
            width={50} 
            className="h-[21px] w-[21px] md:h-auto md:w-auto" 
          />
        </div>

        {/* Showing Results Section */}
        <div className="flex items-center justify-end  border-l-2 border-[#9F9F9F] gap-2 w-full md:w-[230px] mt-2 md:mt-0 md:h-[35px]">
          <span className="font-poppins text-[14px] md:text-[16px] font-normal text-black">
            Showing <span>1 – 16</span> of <span>32</span> results
          </span>
        </div>
      </div>
    </div>

    {/* Show 16 and Sort By Section */}
    <div className="flex flex-row justify-center md:flex-row items-center gap-4 text-black w-full md:w-auto mt-4 md:mt-0">
      <h1 className="font-poppins font-normal text-[16px] md:text-[20px]">Show</h1>
      <span className="w-[50px] md:w-[55px] h-[50px] md:h-[55px] bg-[#FFFFFF] font-poppins text-[16px] md:text-[20px] font-normal py-3 text-[#9F9F9F] flex items-center justify-center">
        16
      </span>
      <h1 className="font-poppins font-normal text-[16px] md:text-[20px] ml-0 md:ml-2">Sort by</h1>
      <span className="w-[120px] md:w-[188px] h-[50px] md:h-[55px] bg-[#FFFFFF] font-poppins text-[16px] md:text-[20px] pr-4 md:pr-14 font-normal py-3 text-[#9F9F9F] flex items-center justify-center">
        Default
      </span>
    </div>
  </div>
  </section>
      <section className="h-auto w-auto mt-[50px]">
        
        <div className="mx-auto max-w-[1440px] pt-10 flex flex-col justify-center items-center bg-[#FFFFFF]">
          <div className="flex flex-wrap justify-center items-center gap-[30px] w-full">
            {products.map((product, index) => (
              <div
                key={index}
                className="md:h-[400px] md:w-[297px] h-[400px] max-w-[350px] flex flex-col items-center text-center justify-center overflow-hidden relative group"
              >
                <div className="relative">
                  <Image
                    src={product.img}
                    width={500}
                    height={500}
                    alt={product.description}
                    className="object-bottom h-[200px] w-[290px] mb-6 transform group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-2 p-2">
                  <p className="font-poppins text-start font-normal w-[170px] text-[14px] leading-[20px] text-black">
                    {product.description}
                  </p>
                  <span className="font-poppins font-medium text-[20px] text-start w-[170px] leading-[30px] text-black">
                    {product.price}
                  </span>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <div className="w-[130px] opacity-0 group-hover:opacity-100 transform transition-all duration-300 mt-4">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full h-[40px] border border-black hover:bg-black hover:text-white font-semibold transform transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <Link href="/singleProduct">
                    <div className="w-[130px] opacity-0 group-hover:opacity-100 transform transition-all duration-300 mt-4">
                      <button className="w-full h-[40px] hover:border hover:border-black hover:bg-white hover:text-black bg-black text-white font-semibold transform transition-all duration-300">
                        Buy Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Boxes />
        </div>
      </section>
      <FreeDelivery />
      <Footer />
      <CartSidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        subtotal={calculateSubtotal()} // Pass subtotal correctly here
      />
    </section>
  );
};

export default ProductSec;




