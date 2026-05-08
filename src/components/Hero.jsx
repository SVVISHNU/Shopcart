import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-[#eaeaea] bg-white/30 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 group mt-4'>
        {/* HERO LEFT SIDE */}
        <div className='w-full sm:w-1/2 p-8 flex items-center justify-center py-16 sm:py-0 bg-gradient-to-br from-white/40 to-transparent'>
          <div className='text-[#2d3436] animate-fadeIn'>
              <div className='flex items-center gap-3 mb-4'> 
                  <p className='w-10 h-[2.5px] bg-[#5e60ce] rounded-full'></p>
                  <p className="font-bold text-xs md:text-sm tracking-[0.3em] uppercase text-[#5e60ce]">Special Bestsellers </p>
              </div>
              
              <h1 className='prata-regular text-4xl sm:py-4 lg:text-6xl leading-[1.1] font-semibold text-[#1a1a2e] mb-6'>
                Elevate Your <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5e60ce] to-[#1a1a2e]">Everyday Style</span>
              </h1>

              <div className='flex items-center gap-4 group/btn cursor-pointer'>
                <p className="font-black text-sm md:text-base tracking-[0.1em] text-[#1a1a2e] group-hover/btn:text-[#5e60ce] transition-colors">SHOP NOW</p>
                <div className='w-12 h-[1px] bg-[#2d3436] group-hover/btn:w-20 group-hover/btn:bg-[#5e60ce] transition-all duration-500'></div>
              </div>
          </div>
        </div>

        {/* HERO RIGHT SIDE */}
        <div className="w-full sm:w-1/2 overflow-hidden">
          <img 
            src={assets.heroimage} 
            alt="New Collection" 
            className='w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000'
          />
        </div>
    </div>
  )
}

export default Hero