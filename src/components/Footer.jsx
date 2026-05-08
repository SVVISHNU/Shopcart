import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className ='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <div className="flex items-center gap-1.5 mb-5 group h-12">
            <div className="bg-black p-2 rounded-xl shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <span className="font-black tracking-tighter text-2xl transition-all duration-500 pr-1">
              <span className="text-black">Shop</span>
              <span className="bg-gradient-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent">Cart</span>
            </span>
          </div>
          <p className ='w-full md:w-2/3 text-gray-600'>
                At our e-commerce store, we are committed to providing you with the best shopping experience. We exceptional customer service, and fast shipping. Our mission is to make your online shopping easy, enjoyable, and satisfying. Thank you for choosing us for your shopping needs!
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className= 'flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Terms & Conditions</li>
                </ul>
        </div>
  <div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className= 'flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-789</li>
                <li>support@ecommerce.com</li>
                </ul>
  </div>
    </div>
    <div>
        <hr/>
        <p className='text-center text-gray-600 text-sm py-5'>© 2024 E-commerce Store. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer