import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='relative flex items-center justify-between py-3 px-3 sm:px-[5%] bg-white/70 backdrop-blur-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] border-b border-gray-100 sticky top-0 z-50'>
       
       {/* PREMIUM LOGO */}
       <div className="flex items-center gap-1.5 group cursor-pointer">
          <div className="bg-gradient-to-br from-black to-gray-700 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-base sm:text-2xl font-black tracking-tighter">
                <span className="text-black">Shop</span>
                <span className="bg-gradient-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent">Cart</span>
              </span>
              <span className="bg-black text-white px-1.5 py-0.5 rounded text-[7px] sm:text-[9px] font-black uppercase tracking-[0.1em] shadow-lg shadow-black/10">Admin</span>
            </div>
            <span className="hidden sm:block text-[8px] font-black uppercase tracking-[0.5em] text-gray-400 mt-0.5">Control Panel</span>
          </div>
       </div>

       {/* LOGOUT BUTTON */}
       <button onClick={()=>setToken('')} className="bg-[#1f2937] text-white px-3 sm:px-8 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_12px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgb(94,96,206,0.3)] hover:bg-[#5e60ce] hover:-translate-y-1 relative z-10 whitespace-nowrap">
         Logout
       </button>

    </div>
  )
}

export default Navbar