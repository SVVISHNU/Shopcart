import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[15%] sm:w-[18%] min-h-screen border-r border-gray-100 bg-white/50 backdrop-blur-sm'>
        <div className='flex flex-col gap-4 pt-6 pl-[max(3vw,10px)] text-[15px]'>
            <NavLink 
              className={({isActive}) => `flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-3 rounded-l-2xl transition-all duration-300 ${isActive ? 'bg-black text-white border-black shadow-lg translate-x-1' : 'hover:bg-gray-50'}`} 
              to="/add"
            >
              <img className='w-5 h-5 brightness-100 invert-0 group-[.active]:invert' src={assets.add_icon} alt=""/>
              <p className='hidden lg:block font-bold'>Add Items</p>
            </NavLink>

             <NavLink 
              className={({isActive}) => `flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-3 rounded-l-2xl transition-all duration-300 ${isActive ? 'bg-black text-white border-black shadow-lg translate-x-1' : 'hover:bg-gray-50'}`} 
              to="/list"
            >
              <img className='w-5 h-5' src={assets.order_icon} alt=""/>
              <p className='hidden lg:block font-bold'>List Items</p>
            </NavLink>

             <NavLink 
              className={({isActive}) => `flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-3 rounded-l-2xl transition-all duration-300 ${isActive ? 'bg-black text-white border-black shadow-lg translate-x-1' : 'hover:bg-gray-50'}`} 
              to="/orders"
            >
              <img className='w-5 h-5' src={assets.order_icon} alt=""/>
              <p className='hidden lg:block font-bold'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar