import React, { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import { useLocation } from "react-router-dom"

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (showSearch && location.pathname.toLowerCase().includes("collection")) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location, showSearch])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50/50 backdrop-blur-md text-center transition-all duration-500">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white shadow-sm hover:shadow-md transition-shadow group">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm text-gray-700 placeholder:text-gray-400"
          type="text"
          placeholder="Search for products, collections..."
          autoFocus
        />
        <img className="w-4 ml-2 opacity-50 group-focus-within:opacity-100 transition-opacity" src={assets.search} alt="search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer opacity-60 hover:opacity-100 hover:rotate-90 transition-all duration-300 ml-4"
        src={assets.dropdown} // Reusing dropdown icon as a simple indicator or we can use a custom SVG for X
        style={{ transform: 'rotate(-90deg)' }} // Making the dropdown look like a close or back if needed, but better to use a real X if possible.
        alt="close"
      />
      {/* Since we don't have a clear X icon in assets shown, I'll use a better SVG close icon for premium feel */}
      <span 
        onClick={() => setShowSearch(false)}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 cursor-pointer transition-colors ml-2 align-middle group"
      >
        <svg className="w-4 h-4 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </span>
    </div>
  ) : null
}

export default SearchBar