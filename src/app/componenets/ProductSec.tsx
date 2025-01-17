
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// import CartSidebar from "./cartsidebar";

// interface Product {
//   img: string;
//   description: string;
//   price: string;
//   numericPrice: number;
// }

// interface ProductSecProps {
//   heading: string;
//   description?: string; // Marking discription as optional
// }

// const ProductSec: React.FC<ProductSecProps> = ({ heading, description }) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]); // State to store cart items
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

//   const products: Product[] = [
//     {
//       img: "/images/shop1.png",
//       description: "Trenton modular sofa_3",
//       price: "Rs. 25,000.00",
//       numericPrice: 25000.00,
//     },
//     {
//       img: "/images/shop2.png",
//       description: "Granite dining table with dining chair",
//       price: "Rs. 25,000.00",
//       numericPrice: 25000.00,
//     },
//     {
//       img: "/images/shop3.png",
//       description: "Outdoor bar table and stool",
//       price: "Rs. 25,000.00",
//       numericPrice: 25000.00,
//     },
//     {
//       img: "/images/shop4.png",
//       description: "Plain console with teak mirror",
//       price: "Rs. 25,000.00",
//       numericPrice: 25000.00,
//     },
//   ];

//   const addToCart = (product: Product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//     setIsSidebarOpen(true); // Open sidebar on adding item
//   };

//   const removeFromCart = (product: Product) => {
//     setCartItems(cartItems.filter((item) => item !== product));
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => total + item.numericPrice, 0);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <section className="h-auto w-auto">
//       <div className="mx-auto h-auto md:h-[777px] border-t-2 max-w-[1440px] flex flex-col justify-center items-center pt-10 bg-[#FFFFFF]">
//         <h1 className="md:text-[36px] text-[30px] font-medium text-center mb-5 mt-5">{heading}</h1>
//         {description && <p className="text-[13px] md:text-[16px] text-[#9F9F9F] px-3 md:w-[773px] font-medium text-center mt-5">{description}</p>}
        
//         <div className="flex flex-wrap justify-center items-center gap-[30px] w-full pt-10">
//           {products.slice(0, 4).map((product, index) => (
//             <div
//               key={index}
//               className="md:h-[400px] md:w-[297px] h-[430px] max-w-[350px] flex flex-col items-center md:text-start text-center sm:w-[287px] justify-center lg:w-[287px] xl:w-[287px] overflow-hidden relative w-[700px] group"
//             >
//               <Image
//                 src={product.img}
//                 width={487}
//                 height={497}
//                 alt={product.description}
//                 className="object-right-bottom mb-6 h-[250px] w-[350px] md:h-[200px] md:w-[255px] transform group-hover:scale-105 transition-all duration-300"
//               />

//               <div className="w-full flex flex-col justify-center items-center gap-2 p-2">
//                 <p className="font-poppins w-[180px] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
//                   {product.description}
//                 </p>
//                 <span className="font-poppins w-[180px] font-medium text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-black">
//                   {product.price}
//                 </span>
//               </div>

//               <div className="flex gap-4 justify-center items-center">
//                 <div className="w-[130px] opacity-0 group-hover:opacity-100 transform transition-all duration-300 mt-4">
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="w-full h-[40px] border border-black hover:bg-black hover:text-white font-semibold transform transition-all duration-300"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//                 <Link href="/singleProduct">
//                   <div className="w-[130px] opacity-0 group-hover:opacity-100 transform transition-all duration-300 mt-4">
//                     <button className="w-full h-[40px] hover:border hover:border-black hover:bg-white hover:text-black bg-black text-white font-semibold transform transition-all duration-300">
//                       Buy Now
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className='mt-[10px] my-10'>
//           <div className='w-[115px] h-[49px] border-black border-b-[1px] text-center'>
//             <Link href="/shopping" className="w-full h-full block">
//               <button className='w-[104px] h-[30px] font-poppins font-medium text-center text-[20px] leading-[30px]'>
//                 View More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <CartSidebar
//         isOpen={isSidebarOpen}
//         closeSidebar={closeSidebar}
//         cartItems={cartItems}
//         removeFromCart={removeFromCart}
//         subtotal={calculateSubtotal()}
//       />
//     </section>
//   );
// };

// export default ProductSec;


"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CartSidebar from "./cartsidebar";

// Product interface
interface Product {
  img: string;
  description: string;
  price: string;
  numericPrice: number;
}

// ProductSecProps interface
interface ProductSecProps {
  heading: string;
  description?: string; // Marking description as optional
}

// ProductSec component
const ProductSec: React.FC<ProductSecProps> = ({ heading, description }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]); // State to store cart items
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  const products: Product[] = [
    {
      img: "/images/shop1.png",
      description: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      numericPrice: 25000.00,
    },
    {
      img: "/images/shop2.png",
      description: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      numericPrice: 25000.00,
    },
    {
      img: "/images/shop3.png",
      description: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      numericPrice: 25000.00,
    },
    {
      img: "/images/shop4.png",
      description: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      numericPrice: 25000.00,
    },
  ];

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsSidebarOpen(true); // Open sidebar on adding item
  };

  const removeFromCart = (product: Product) => {
    setCartItems(cartItems.filter((item) => item !== product));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.numericPrice, 0);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section className="h-auto w-auto">
      <div className="mx-auto h-auto md:h-[777px] border-t-2 max-w-[1440px] flex flex-col justify-center items-center pt-10 bg-[#FFFFFF]">
        <h1 className="md:text-[36px] text-[30px] font-medium text-center mb-5 mt-5">{heading}</h1>
        {description && <p className="text-[13px] md:text-[16px] text-[#9F9F9F] px-3 md:w-[773px] font-medium text-center mt-5">{description}</p>}
        
        <div className="flex flex-wrap justify-center items-center gap-[30px] w-full pt-10">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={index}
              className="md:h-[400px] md:w-[297px] h-[430px] max-w-[350px] flex flex-col items-center md:text-start text-center sm:w-[287px] justify-center lg:w-[287px] xl:w-[287px] overflow-hidden relative w-[700px] group"
            >
              <Image
                src={product.img}
                width={487}
                height={497}
                alt={product.description}
                className="object-right-bottom mb-6 h-[250px] w-[350px] md:h-[200px] md:w-[255px] transform group-hover:scale-105 transition-all duration-300"
              />

              <div className="w-full flex flex-col justify-center items-center gap-2 p-2">
                <p className="font-poppins w-[180px] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-black">
                  {product.description}
                </p>
                <span className="font-poppins w-[180px] font-medium text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-black">
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

        <div className='mt-[10px] my-10'>
          <div className='w-[115px] h-[49px] border-black border-b-[1px] text-center'>
            <Link href="/shopping" className="w-full h-full block">
              <button className='w-[104px] h-[30px] font-poppins font-medium text-center text-[20px] leading-[30px]'>
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <CartSidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        subtotal={calculateSubtotal()}
      />
    </section>
  );
};

export default ProductSec;