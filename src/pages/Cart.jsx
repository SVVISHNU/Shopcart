// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"

// const Cart = () => {

//   const { cartItems, products, removeFromCart, currency } = useContext(ShopContext)

//   const cartProducts = products.filter(product =>
//     cartItems[product.id]
//   )

//   return (
//     <div className="pt-16 px-4 sm:px-10">

//       <h2 className="text-2xl font-semibold mb-6">
//         Your Cart
//       </h2>

//       {cartProducts.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartProducts.map(product => (

//           <div key={product.id} className="flex justify-between items-center border-b py-4">

//             <div className="flex items-center gap-4">

//               <img
//                 src={product.image[0]}
//                 alt=""
//                 className="w-20 h-20 object-cover"
//               />

//               <div>
//                 <p className="font-medium">{product.name}</p>
//                 <p>{currency}{product.price}</p>
//                 <p>Qty: {cartItems[product.id]}</p>
//               </div>

//             </div>

//             <button
//               onClick={() => removeFromCart(product.id)}
//               className="text-red-500"
//             >
//               Remove
//             </button>

//           </div>

//         ))
//       )}

//     </div>
//   )
// }

// export default Cart

// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"

// const Cart = () => {

//   const {
//     cartItems,
//     products,
//     currency,
//     delivery_fee,
//     getCartCount,
//     getCartAmount
//   } = useContext(ShopContext)

//   const cartProducts = products.filter(product =>
//     cartItems[product.id]
//   )

//   return (
//     <div className="pt-16 px-6">

//       <h2 className="text-2xl font-semibold mb-6">
//         Your Cart
//       </h2>

//       {cartProducts.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cartProducts.map(product => (

//             <div key={product.id} className="flex justify-between items-center border-b py-4">

//               <div className="flex items-center gap-4">
//                 <img
//                   src={product.image[0]}
//                   alt=""
//                   className="w-20 h-20 object-cover"
//                 />

//                 <div>
//                   <p className="font-medium">{product.name}</p>
//                   <p>{currency}{product.price}</p>
//                   <p>Qty: {cartItems[product.id]}</p>
//                 </div>
//               </div>

//             </div>

//           ))}

//           <div className="mt-8 border-t pt-6 space-y-2">

//             <p>Total Products: {getCartCount()}</p>
//             <p>Subtotal: {currency}{getCartAmount().toFixed(2)}</p>
//             <p>Delivery Fee: {currency}{delivery_fee}</p>

//             <p className="text-xl font-semibold">
//               Total Amount: {currency}
//               {(getCartAmount() + delivery_fee).toFixed(2)}
//             </p>

//           </div>
//         </>
//       )}

//     </div>
//   )
// }

// export default Cart


// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"
// import { FaTrash } from "react-icons/fa"

// const Cart = () => {

//   const {
//     cartItems,
//     products,
//     removeFromCart,
//     currency,
//     getCartCount,
//     getCartAmount,
//     delivery_fee
//   } = useContext(ShopContext)

//   const cartProducts = products.filter(product =>
//     cartItems[product.id]
//   )

//   return (
//     <div className="pt-16 px-6">

//       <h2 className="text-2xl font-semibold mb-6">
//         Your Cart
//       </h2>

//       {cartProducts.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cartProducts.map(product => (

//             <div
//               key={product.id}
//               className="flex justify-between items-center border-b py-6"
//             >

//               <div className="flex items-center gap-6">

//                 <img
//                   src={product.image[0]}
//                   alt=""
//                   className="w-24 h-24 object-cover"
//                 />

//                 <div>
//                   <p className="font-medium text-lg">
//                     {product.name}
//                   </p>
//                   <p>{currency}{product.price}</p>
//                   <p>Qty: {cartItems[product.id]}</p>
//                 </div>

//               </div>

//               {/* DELETE ICON */}
//               <button
//                 onClick={() => removeFromCart(product.id)}
//                 className="text-red-500 text-xl hover:scale-110 transition"
//               >
//                 <FaTrash />
//               </button>

//             </div>

//           ))}

//           <div className="mt-8 border-t pt-6 space-y-2">
//             <p>Total Products: {getCartCount()}</p>
//             <p>Subtotal: {currency}{getCartAmount().toFixed(2)}</p>
//             <p>Delivery Fee: {currency}{delivery_fee}</p>
//             <p className="text-xl font-semibold">
//               Total Amount: {currency}
//               {(getCartAmount() + delivery_fee).toFixed(2)}
//             </p>
//           </div>
//         </>
//       )}

//     </div>
//   )
// }

// export default Cart


// 

// import React, { useContext, useEffect, useState } from "react"
// import { ShopContext } from "../context/ShopContext"

// import { FaTrash } from "react-icons/fa"

// const Cart = () => {

//   const {
//     cartItems,
//     products,
//     removeFromCart,
//     currency,
//     getCartCount,
//     getCartAmount,
//     delivery_fee
//   } = useContext(ShopContext)

//   // ✅ DATE & TIME STATE
//   const [currentDateTime, setCurrentDateTime] = useState(new Date())

//   // ✅ UPDATE EVERY SECOND
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date())
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="pt-16 px-6">

//       {/* 🔥 CURRENT DATE & TIME */}
//       <div className="mb-6 text-gray-600">
//         <p>
//           Date: {currentDateTime.toLocaleDateString()}
//         </p>
//         <p>
//           Time: {currentDateTime.toLocaleTimeString()}
//         </p>
//       </div>

//       <h2 className="text-2xl font-semibold mb-6">
//         Your Cart
//       </h2>

//       {Object.keys(cartItems).length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {Object.keys(cartItems).map(itemId => {

//   const product = products.find(p => p.id === itemId)

//   return Object.keys(cartItems[itemId]).map(size => {

//     const itemData = cartItems[itemId][size]

//     return (
//       <div
//         key={itemId + size}
//         className="flex justify-between items-center border-b py-6"
//       >

//         <div className="flex items-center gap-6">

//           <img
//             src={product.image[0]}
//             alt=""
//             className="w-24 h-24 object-cover"
//           />

//           <div>
//             <p className="font-medium text-lg">
//               {product.name}
//             </p>

//             <p>Size: {size}</p>

//             <p>Qty: {itemData.quantity}</p>

// <p className="text-sm text-gray-500">
//   Added At: {itemData.addedAt}
// </p>

//             <p>{currency}{product.price}</p>
//           </div>

//         </div>

//         <button
//           onClick={() => removeFromCart(itemId, size)}
//           className="text-red-500 text-xl"
//         >
//           <FaTrash />
//         </button>

//       </div>
//     )
//   })
// })}


//           {/* TOTAL SECTION */}
//           <div className="mt-8 border-t pt-6 space-y-2">
//             <p>Total Products: {getCartCount()}</p>
//             <p>Subtotal: {currency}{getCartAmount().toFixed(2)}</p>
//             <p>Delivery Fee: {currency}{delivery_fee}</p>
//             <p className="text-xl font-semibold">
//               Total Amount: {currency}
//               {(getCartAmount() + delivery_fee).toFixed(2)}
//             </p>
//           </div>
//         </>
//       )}

//     </div>
//   )
// }

// export default Cart


// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"
// import { FaTrash } from "react-icons/fa"
// import { useNavigate } from "react-router-dom"

// const Cart = () => {

//   const navigate = useNavigate()

//   const {
//     cartItems,
//     products,
//     removeFromCart,
//     currency,
//     getCartCount,
//     getCartAmount,
//     delivery_fee
//   } = useContext(ShopContext)

//   return (
//     <div className="pt-16 px-6">

//       <h2 className="text-2xl font-semibold mb-6">
//         Your Cart
//       </h2>

//       {Object.keys(cartItems).length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {/* CART ITEMS */}
//           {Object.keys(cartItems).map(itemId => {

//             const product = products.find(p => p.id === itemId)

//             return Object.keys(cartItems[itemId]).map(size => {

//               const itemData = cartItems[itemId][size]

//               return (
//                 <div
//                   key={itemId + size}
//                   className="flex justify-between items-center border-b py-6"
//                 >

//                   <div className="flex items-center gap-6">

//                     <img
//                       src={product.image[0]}
//                       alt=""
//                       className="w-24 h-24 object-cover rounded"
//                     />

//                     <div>
//                       <p className="font-medium text-lg">
//                         {product.name}
//                       </p>

//                       <p>Size: {size}</p>

//                       <p>Qty: {itemData.quantity}</p>

//                       <p className="text-sm text-gray-500">
//                         Added At: {itemData.addedAt}
//                       </p>

//                       <p className="font-semibold">
//                         {currency}{product.price}
//                       </p>
//                     </div>

//                   </div>

//                   {/* DELETE BUTTON */}
//                   <button
//                     onClick={() => removeFromCart(itemId, size)}
//                     className="text-red-500 text-xl hover:scale-110 transition"
//                   >
//                     <FaTrash />
//                   </button>

//                 </div>
//               )
//             })
//           })}

//           {/* TOTAL SECTION */}
//           <div className="mt-10 border-t pt-6 space-y-3">

//             <p>Total Products: {getCartCount()}</p>

//             <p>Subtotal: {currency}{getCartAmount().toFixed(2)}</p>

//             <p>Delivery Fee: {currency}{delivery_fee}</p>

//             <p className="text-xl font-semibold">
//               Total Amount: {currency}
//               {(getCartAmount() + delivery_fee).toFixed(2)}
//             </p>

//             {/* ✅ PROCEED BUTTON */}
//             <button
//               onClick={() => navigate("/PlaceOrder")}
//               className="bg-black text-white px-8 py-3 mt-6 rounded w-full sm:w-auto"
//             >
//               Proceed To Checkout
//             </button>

//           </div>
//         </>
//       )}

//     </div>
//   )
// }

// export default Cart

import React, { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const navigate = useNavigate()

  const {
    cartItems,
    products,
    removeFromCart,
    currency,
    getCartCount,
    getCartAmount,
    token,
    getDiscountAmount,
    getSubtotal,
    getDeliveryFee,
    getFinalAmount
  } = useContext(ShopContext)

  return (
    <div className="pt-16 px-6">

      <h2 className="text-2xl font-semibold mb-6">
        Your Cart
      </h2>

      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>

          {/* CART ITEMS */}
          {Object.keys(cartItems).map(itemId => {

            const product = products.find(p => p._id === itemId)

            if (!product) return null

            return Object.keys(cartItems[itemId]).map(size => {

              const itemData = cartItems[itemId][size]

              return (
                <div
                  key={itemId + size}
                  className="flex justify-between items-center border-b py-6"
                >

                  <div className="flex items-center gap-6">

                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded"
                    />

                    <div>
                      <p className="font-medium text-lg">
                        {product.name}
                      </p>

                      <p>Size: {size}</p>
                      <p>Qty: {typeof itemData === 'object' ? itemData.quantity : itemData}</p>

                      {typeof itemData === 'object' && itemData.addedAt && (
                        <p className="text-sm text-gray-500">Added At: {itemData.addedAt}</p>
                      )}

                      <p className="font-semibold">
                        {currency}{product.price}
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={() => removeFromCart(itemId, size)}
                    className="text-red-500 text-xl hover:scale-110 transition"
                  >
                    <FaTrash />
                  </button>

                </div>
              )
            })
          })}

          {/* TOTAL SECTION */}
          <div className="mt-12 mb-20 animate-fadeInUp">
            <div className="flex flex-col sm:flex-row justify-end">
              <div className="w-full sm:w-[450px] bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-200/50 space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-widest border-b border-gray-50 pb-4">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount().toFixed(2)}</p>
                  </div>

                  {/* 🎁 MEMBER DISCOUNT */}
                  {token && (
                    <div className="flex justify-between text-green-600 font-bold bg-green-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center gap-2">
                         <span>🎁</span>
                         <p className="text-sm">Member Discount (10%)</p>
                      </div>
                      <p className="text-sm">- {currency}{getDiscountAmount().toFixed(2)}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Shipping</p>
                      {getSubtotal() < 100 && getSubtotal() > 0 && (
                        <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest mt-1">
                          Buy {currency}{(100 - getSubtotal()).toFixed(2)} more for FREE SHIPPING!
                        </p>
                      )}
                    </div>
                    <p className={`font-black tracking-tighter ${getDeliveryFee() === 0 ? "text-green-600 text-xl" : "text-black"}`}>
                      {getDeliveryFee() === 0 ? "FREE" : `${currency}${getDeliveryFee().toFixed(2)}`}
                    </p>
                  </div>

                  <div className="h-px bg-gray-100 w-full pt-2"></div>

                  <div className="flex justify-between items-end pt-2">
                    <p className="text-sm font-bold uppercase tracking-tighter text-gray-400">Grand Total</p>
                    <p className="text-3xl font-black text-black leading-none">{currency}{getFinalAmount().toFixed(2)}</p>
                  </div>
                </div>

                <div className="pt-4">
                   <button
                     onClick={() => navigate("/placeorder")}
                     className="w-full bg-black text-white py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-3"
                   >
                     SECURE CHECKOUT
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                   </button>
                </div>
                
                <div className="flex flex-col items-center gap-2 pt-2">
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">30-Day Easy Returns • Secure SSL Encryption</p>
                </div>
              </div>
            </div>
          </div>

        </>
      )}

    </div>
  )
}

export default Cart