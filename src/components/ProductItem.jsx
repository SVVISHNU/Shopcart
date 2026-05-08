import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      className="group cursor-pointer block h-full focus:outline-none" 
      to={`/product/${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 rounded-2xl p-2 sm:p-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgb(94,96,206,0.2)] hover:-translate-y-2 hover:bg-white/70 hover:border-white/90">
        
        {/* IMAGE CONTAINER */}
        <div className="overflow-hidden rounded-xl bg-gray-100 relative shadow-inner w-full flex-grow aspect-[4/5] sm:aspect-[3/4]">
          {/* BASE IMAGE */}
          <img 
            className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered && image[1] ? 'opacity-0 scale-110' : 'opacity-100 scale-100'} group-hover:scale-110`} 
            src={image[0]} 
            alt={name} 
          />
          
          {/* HOVER IMAGE (IF EXISTS) */}
          {image[1] && (
            <img 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
              src={image[1]} 
              alt={`${name} alternative`} 
            />
          )}
          
          {/* PREMIUM SHINE EFFECT */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 transition-transform duration-1000 ease-in-out -translate-x-full group-hover:translate-x-full"></div>
          </div>

          {/* HOVER HOVER OVERLAY GLOW */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* QUICK VIEW BADGE */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span className="bg-[#5e60ce]/90 backdrop-blur-md shadow-xl text-[10px] uppercase tracking-widest font-bold text-white px-5 py-2 rounded-full border border-white/20 whitespace-nowrap">
              Discover More
            </span>
          </div>
        </div>

        {/* TEXT DETAILS */}
        <div className="mt-4 px-2 pb-2">
          <p className="text-[14px] sm:text-[15px] font-bold text-gray-800 line-clamp-1 group-hover:text-[#5e60ce] transition-colors tracking-wide">
            {name}
          </p>
          <div className="flex items-center justify-between mt-1.5">
            <p className="text-base sm:text-lg font-black text-[#5e60ce] tracking-wider">
              {currency}{price}
            </p>
            <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#5e60ce] group-hover:bg-[#5e60ce]/10 transition-all">
               <svg className="w-3 h-3 text-gray-400 group-hover:text-[#5e60ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
            </div>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default ProductItem