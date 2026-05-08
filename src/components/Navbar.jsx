
import React, { useContext, useState, useRef, useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import SearchBar from "./SearchBar"

const Navbar = () => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const { getCartCount, token, setToken, setCartItems, setShowSearch } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const menuRef = useRef()

  // Track scroll for "Alive" Navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown if click outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <>
      <div className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-3xl py-1 shadow-xl border-b border-gray-100/50' : 'bg-white/40 backdrop-blur-md py-4 border-b border-transparent'}`}>
        
        {/* Animated Moving Light Beam on Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-black/20 to-transparent animate-[shimmer_3s_infinite]"></div>
        </div>

        <div className="w-full flex items-center justify-between px-6 md:px-12 font-medium transition-all duration-500">

          {/* PREMIUM LOGO */}
          <Link to="/" className="flex items-center gap-2 group relative">
            <div className="flex items-center gap-1.5">
              <div className="bg-gradient-to-br from-black to-gray-700 p-2 rounded-xl shadow-lg group-hover:shadow-black/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div className="flex flex-col leading-none pr-1">
                <span className={`font-black tracking-tighter ${scrolled ? 'text-xl' : 'text-2xl'} transition-all duration-500`}>
                  <span className="text-black">Shop</span>
                  <span className="bg-gradient-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent">Cart</span>
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.4em] text-gray-400">Authentic Style</span>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></div>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden sm:flex items-center gap-1 text-[13px] text-gray-600 font-semibold tracking-[0.1em]">
            <NavLink to="/" className={({isActive}) => `relative px-4 py-2 transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''} group`}>
              HOME
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black scale-x-0 transition-transform duration-500 origin-left group-[.active]:scale-x-100"></span>
            </NavLink>
            <NavLink to="/collection" className={({isActive}) => `relative px-4 py-2 transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''} group`}>
              COLLECTION
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black scale-x-0 transition-transform duration-500 origin-left group-[.active]:scale-x-100"></span>
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `relative px-4 py-2 transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''} group`}>
              ABOUT
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black scale-x-0 transition-transform duration-500 origin-left group-[.active]:scale-x-100"></span>
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `relative px-4 py-2 transition-all duration-300 hover:text-black ${isActive ? 'text-black' : ''} group`}>
              CONTACT
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black scale-x-0 transition-transform duration-500 origin-left group-[.active]:scale-x-100"></span>
            </NavLink>
          </ul>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-4 sm:gap-6 relative">

            {/* SEARCH ICON */}
            <button 
              onClick={() => {
                navigate("/collection")
                setShowSearch(true)
              }} 
              className="group relative p-2 transition-all duration-300 active:scale-90"
            >
              <img
                src={assets.search}
                alt="Search"
                className="w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <span className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>

            {/* USER ICON */}
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => token ? setShowUserMenu(!showUserMenu) : navigate('/login')} 
                className="group relative p-2 transition-all duration-300 active:scale-90"
              >
                <img
                  src={assets.user}
                  alt="User Profile"
                  className="w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                />
                <span className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>

              {token && showUserMenu && (
                <div className="absolute right-0 mt-4 w-52 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 rounded-2xl py-3 z-50 overflow-hidden animate-in fade-in zoom-in duration-300">
                  <Link to="/profile" className="flex items-center gap-3 px-6 py-3 text-[13px] font-semibold hover:bg-black/5 transition-colors">
                    My Profile
                  </Link>
                  <Link to="/orders" className="flex items-center gap-3 px-6 py-3 text-[13px] font-semibold hover:bg-black/5 transition-colors">
                    My Orders
                  </Link>
                  <div className="h-px bg-gray-100/60 my-2 mx-4"></div>
                  <button
                    onClick={logout}
                    className="w-full text-left px-6 py-3 text-[13px] text-red-600 hover:bg-red-50 transition-colors font-bold"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>

            <Link to="/cart" className="group relative p-2 transition-all duration-300 active:scale-90">
              <img src={assets.Cart} alt="Cart" className="w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]" />
              <span className="absolute top-1 right-1 translate-x-1 -translate-y-1 bg-black text-white w-5 h-5 text-[10px] flex items-center justify-center rounded-full font-bold shadow-lg ring-2 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
                {getCartCount()}
              </span>
            </Link>

            <button onClick={() => setShowMobileMenu(true)} className="sm:hidden p-2 active:scale-90">
              <img
                src={assets.menu}
                alt="Menu"
                className="w-6"
              />
            </button>

          </div>
        </div>
      </div>

      {/* SEARCH BAR COMPONENT */}
      <SearchBar />

      {/* MOBILE SIDEBAR MENU & BACKDROP */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity" onClick={() => setShowMobileMenu(false)}></div>
      )}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[70] ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="bg-black p-1.5 rounded-lg shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <span className="font-black tracking-tighter text-lg transition-all duration-500 pr-1">
              <span className="text-black">Shop</span>
              <span className="bg-gradient-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent">Cart</span>
            </span>
          </div>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col px-6 py-8 gap-6 text-gray-800 font-medium text-lg">
          <NavLink onClick={() => setShowMobileMenu(false)} to="/" className="hover:text-black transition-colors">Home</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} to="/collection" className="hover:text-black transition-colors">Collection</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} to="/about" className="hover:text-black transition-colors">About Us</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} to="/contact" className="hover:text-black transition-colors">Contact</NavLink>
          {token && (
            <>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/profile" className="hover:text-black transition-colors">My Profile</NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/orders" className="hover:text-black transition-colors">My Orders</NavLink>
              <button onClick={() => { logout(); setShowMobileMenu(false); }} className="text-left text-red-600 hover:text-red-700 transition-colors">Sign out</button>
            </>
          )}
        </ul>

      </div>
    </>
  )
}

export default Navbar

// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import SearchBar from "./SearchBar";

// const Navbar = () => {

//   const navigate = useNavigate();

//   const { getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//     navigate("/login", { state: { mode: "signup" } });
//   };

//   const [showSearch, setShowSearch] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const menuRef = useRef();

//   // Close dropdown if click outside
//   useEffect(() => {
//     const handler = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setShowUserMenu(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div className="flex items-center justify-between py-5 px-6 font-medium relative">

//       {/* LOGO */}
//       <Link to="/">
//         <img src={assets.logo} className="w-36" alt="" />
//       </Link>

//       {/* DESKTOP NAV */}
//       {!showSearch && (
//         <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
//           <NavLink to="/">HOME</NavLink>
//           <NavLink to="/collection">COLLECTION</NavLink>
//           <NavLink to="/about">ABOUT</NavLink>
//           <NavLink to="/contact">CONTACT</NavLink>
//         </ul>
//       )}

//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-6 relative">

//         {/* MOBILE MENU */}
//         {!showSearch && (
//           <img
//             src={assets.menu}
//             alt=""
//             className="w-6 sm:hidden cursor-pointer"
//             onClick={() => setShowMobileMenu(true)}
//           />
//         )}

//         {/* SEARCH */}
//         {!showSearch && (
//           <img
//             src={assets.search}
//             alt=""
//             className="w-5 cursor-pointer"
//             onClick={() => setShowSearch(true)}
//           />
//         )}

//         {/* USER */}
//         {!showSearch && (
//           <div className="relative" ref={menuRef}>

//             <img
//               onClick={() => token ? setShowUserMenu(!showUserMenu) : navigate("/login")}
//               src={assets.user}
//               alt=""
//               className="w-6 cursor-pointer"
//             />

//             {token && showUserMenu && (
//               <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg border rounded-md py-2 z-50">

//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   My Profile
//                 </Link>

//                 <Link
//                   to="/orders"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   My Orders
//                 </Link>

//                 <button
//                   onClick={logout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>

//               </div>
//             )}

//           </div>
//         )}

//         {/* CART */}
//         {!showSearch && (
//           <Link to="/cart" className="relative">
//             <img src={assets.Cart} alt="" className="w-6" />
//             <span className="absolute -right-2 -bottom-2 bg-black text-white w-5 h-5 text-xs flex items-center justify-center rounded-full">
//               {getCartCount()}
//             </span>
//           </Link>
//         )}

//       </div>

//       {/* SEARCH BAR */}
//       {showSearch && (
//         <SearchBar closeSearch={() => setShowSearch(false)} />
//       )}

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
//         ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}
//       >

//         <div className="flex justify-between items-center p-5 border-b">
//           <h2 className="font-semibold">Menu</h2>
//           <button
//             onClick={() => setShowMobileMenu(false)}
//             className="text-xl"
//           >
//             ✕
//           </button>
//         </div>

//         <ul className="flex flex-col p-5 gap-4 text-gray-700">
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/">HOME</NavLink>
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/collection">COLLECTION</NavLink>
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/about">ABOUT</NavLink>
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/contact">CONTACT</NavLink>
//         </ul>

//       </div>

//     </div>
//   );
// };

// export default Navbar;