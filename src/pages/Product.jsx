
// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState("description")
//   const [relatedProducts, setRelatedProducts] = useState([])
//   const [selectedSize, setSelectedSize] = useState("")


//   useEffect(() => {

//     const foundProduct = products.find(
//       (item) => item.id.toString() === id
//     )

//     if (foundProduct) {
//       setProductData(foundProduct)

//       // 🔥 FILTER RELATED PRODUCTS (Same category)
//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item.id !== foundProduct.id
//       )

//       setRelatedProducts(related.slice(0, 4)) // show 4 products
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Product Not Found</div>

//   // ⭐ Calculate average rating
//   const totalRatings = productData.reviews?.reduce(
//     (acc, review) => acc + review.rating, 0
//   ) || 0

//   const averageRating =
//     productData.reviews?.length > 0
//       ? (totalRatings / productData.reviews.length).toFixed(1)
//       : 0

//   return (
//     <div className="border-t pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         {/* IMAGE */}
//         <div className="flex-1">
//           <img
//             src={productData.image[0]}
//             alt=""
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         {/* DETAILS */}
//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           {/* RATING */}
//           <div className="flex items-center gap-1 mt-2">
//             {Array(5).fill("").map((_, index) => (
//               <span
//                 key={index}
//                 className={`text-xl ${
//                   index < Math.round(averageRating)
//                     ? "text-yellow-500"
//                     : "text-gray-300"
//                 }`}
//               >
//                 ★
//               </span>
//             ))}
//             <span className="text-gray-500 ml-2">
//               ({averageRating}) | {productData.reviews?.length || 0} Reviews
//             </span>
//           </div>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           <p className="mt-4 text-gray-600">
//             {productData.description}
//           </p>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//               className="border px-4 py-2"
//             >
//               -
//             </button>

//             <span>{quantity}</span>

//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="border px-4 py-2"
//             >
//               +
//             </button>
//           </div>
// {/* SIZE SELECTOR */}
// <div className="mt-6">
//   <p className="font-medium mb-2">Select Size:</p>

//   <div className="flex gap-3">
//     {productData.sizes.map((size, index) => (
//       <button
//         key={index}
//         onClick={() => setSelectedSize(size)}
//         className={`border px-4 py-2 ${
//           selectedSize === size
//             ? "bg-black text-white"
//             : ""
//         }`}
//       >
//         {size}
//       </button>
//     ))}
//   </div>
// </div>

//           <button
//   onClick={() => addToCart(productData.id, selectedSize, quantity)}
//   className="bg-black text-white px-8 py-3 mt-6"
// >
//   ADD TO CART
// </button>


//         </div>
//       </div>

//       {/* DESCRIPTION & REVIEWS TABS */}
//       <div className="mt-16">

//         <div className="flex gap-8 border-b">
//           <button
//             onClick={() => setActiveTab("description")}
//             className={`pb-2 ${
//               activeTab === "description"
//                 ? "border-b-2 border-black font-medium"
//                 : ""
//             }`}
//           >
//             Description
//           </button>

//           <button
//             onClick={() => setActiveTab("reviews")}
//             className={`pb-2 ${
//               activeTab === "reviews"
//                 ? "border-b-2 border-black font-medium"
//                 : ""
//             }`}
//           >
//             Reviews ({productData.reviews?.length || 0})
//           </button>
//         </div>

//         {activeTab === "description" && (
//           <div className="mt-6 text-gray-600">
//             {productData.description}
//           </div>
//         )}

//         {activeTab === "reviews" && (
//           <div className="mt-6 space-y-6">

//             {productData.reviews?.length > 0 ? (
//               productData.reviews.map((review, index) => (
//                 <div key={index} className="border p-4 rounded">

//                   <div className="flex justify-between">
//                     <p className="font-medium">{review.name}</p>

//                     <div>
//                       {Array(5).fill("").map((_, i) => (
//                         <span
//                           key={i}
//                           className={`${
//                             i < review.rating
//                               ? "text-yellow-500"
//                               : "text-gray-300"
//                           }`}
//                         >
//                           ★
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <p className="mt-2 text-gray-600">
//                     {review.comment}
//                   </p>

//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">
//                 No reviews yet.
//               </p>
//             )}

//           </div>
//         )}

//       </div>

//       {/* 🔥 RELATED PRODUCTS SECTION */}
//       <div className="mt-16">

//         <h2 className="text-2xl font-semibold mb-6">
//           Related Products
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

//           {relatedProducts.map(item => (
//             <Link
//               key={item.id}
//               to={`/product/${item.id}`}
//               className="border p-4 rounded hover:shadow-lg"
//             >
//               <img
//                 src={item.image[0]}
//                 alt=""
//                 className="w-full h-40 object-cover"
//               />

//               <p className="mt-3 font-medium">
//                 {item.name}
//               </p>

//               <p className="text-gray-500">
//                 {currency}{item.price}
//               </p>
//             </Link>
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Product

// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/shopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState("")
//   const [relatedProducts, setRelatedProducts] = useState([])

//   useEffect(() => {

//     if (products.length === 0) return

//     const foundProduct = products.find(
//       (item) => item._id === id
//     )

//     if (foundProduct) {
//       setProductData(foundProduct)

//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item._id !== foundProduct._id
//       )

//       setRelatedProducts(related.slice(0, 4))
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Loading...</div>

//   return (
//     <div className="border-t pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         <div className="flex-1">
//           <img
//             src={productData.image[0]}
//             alt=""
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           <div className="mt-6">
//             <p className="font-medium mb-2">Select Size:</p>

//             <div className="flex gap-3">
//               {productData.sizes?.map((size, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border px-4 py-2 ${
//                     selectedSize === size ? "bg-black text-white" : ""
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//               className="border px-4 py-2"
//             >
//               -
//             </button>

//             <span>{quantity}</span>

//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="border px-4 py-2"
//             >
//               +
//             </button>
//           </div>

//           <button
//             onClick={() => addToCart(productData._id, selectedSize, quantity)}
//             className="bg-black text-white px-8 py-3 mt-6"
//           >
//             ADD TO CART
//           </button>

//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-16">

//         <h2 className="text-2xl font-semibold mb-6">
//           Related Products
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

//           {relatedProducts.map(item => (
//             <Link
//               key={item._id}
//               to={`/product/${item._id}`}
//               className="border p-4 rounded hover:shadow-lg"
//             >
//               <img
//                 src={item.image[0]}
//                 alt=""
//                 className="w-full h-40 object-cover"
//               />

//               <p className="mt-3 font-medium">
//                 {item.name}
//               </p>

//               <p className="text-gray-500">
//                 {currency}{item.price}
//               </p>
//             </Link>
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Product

// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState("")
//   const [relatedProducts, setRelatedProducts] = useState([])

//   useEffect(() => {

//     if (!id || products.length === 0) return

//     const foundProduct = products.find(
//       (item) => item._id === id
//     )

//     if (foundProduct) {

//       setProductData(foundProduct)

//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item._id !== foundProduct._id
//       )

//       setRelatedProducts(related.slice(0, 4))
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Loading...</div>

//   return (
//     <div className="border-t pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         {/* IMAGE */}
//         <div className="flex-1">
//           <img
//             src={productData.image?.[0]}
//             alt=""
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         {/* DETAILS */}
//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           {/* SIZE */}
//           <div className="mt-6">
//             <p className="font-medium mb-2">Select Size:</p>

//             <div className="flex gap-3">
//               {productData.sizes?.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border px-4 py-2 ${
//                     selectedSize === size
//                       ? "bg-black text-white"
//                       : ""
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//               className="border px-4 py-2"
//             >
//               -
//             </button>

//             <span>{quantity}</span>

//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="border px-4 py-2"
//             >
//               +
//             </button>
//           </div>

//           {/* ADD TO CART */}
//           <button
//             onClick={() => addToCart(productData._id, selectedSize, quantity)}
//             className="bg-black text-white px-8 py-3 mt-6"
//           >
//             ADD TO CART
//           </button>

//         </div>
//       </div>

//       {/* RELATED PRODUCTS */}
//       <div className="mt-16">

//         <h2 className="text-2xl font-semibold mb-6">
//           Related Products
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

//           {relatedProducts.map(item => (
//             <Link
//               key={item._id}
//               to={`/product/${item._id}`}
//               className="border p-4 rounded hover:shadow-lg"
//             >
//               <img
//                 src={item.image?.[0]}
//                 alt=""
//                 className="w-full h-40 object-cover"
//               />

//               <p className="mt-3 font-medium">
//                 {item.name}
//               </p>

//               <p className="text-gray-500">
//                 {currency}{item.price}
//               </p>
//             </Link>
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Product

// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState("")
//   const [relatedProducts, setRelatedProducts] = useState([])

//   useEffect(() => {

//     if (!id || products.length === 0) return

//     const foundProduct = products.find(
//       item => String(item._id) === String(id)
//     )

//     if (foundProduct) {

//       setProductData(foundProduct)

//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item._id !== foundProduct._id
//       )

//       setRelatedProducts(related.slice(0, 4))
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Loading...</div>

//   return (
//     <div className="pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         <div className="flex-1">
//           <img
//             src={productData.image?.[0]}
//             alt={productData.name}
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           <div className="mt-6">
//             <p className="mb-2">Select Size:</p>

//             <div className="flex gap-3">
//               {productData.sizes?.map(size => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border px-4 py-2 ${
//                     selectedSize === size ? "bg-black text-white" : ""
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => addToCart(productData._id, selectedSize, quantity)}
//             className="bg-black text-white px-8 py-3 mt-6"
//           >
//             ADD TO CART
//           </button>

//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold mb-6">
//             Related Products
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {relatedProducts.map(item => (
//               <Link
//                 key={item._id}
//                 to={`/product/${item._id}`}
//                 className="border p-4 rounded"
//               >
//                 <img
//                   src={item.image?.[0]}
//                   alt={item.name}
//                   className="w-full h-40 object-cover"
//                 />
//                 <p className="mt-2">{item.name}</p>
//                 <p>{currency}{item.price}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default Product

import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

const Product = () => {
  const { id } = useParams()
  const { products, addToCart, currency } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  // ⭐ Mock reviews
  const mockReviews = [
    { name: "Sarah J.", rating: 5, date: "2 days ago", comment: "Absolutely love the quality! It exceeded my expectations. Shipping was also surprisingly fast." },
    { name: "Michael R.", rating: 4, date: "1 week ago", comment: "Great product, but it fits slightly smaller than expected. I recommend sizing up." }
  ]

  useEffect(() => {
    if (!id || products.length === 0) return
    const foundProduct = products.find((item) => item._id === id)
    if (foundProduct) {
      setProductData(foundProduct)
      const related = products.filter(item =>
        item.category?.toLowerCase() === foundProduct.category?.toLowerCase() &&
        item._id !== foundProduct._id
      )
      setRelatedProducts(related.slice(0, 4))
    }
  }, [id, products])

  if (!productData)
    return <div className="pt-20 text-center">Loading...</div>

  const reviews = productData.reviews || mockReviews
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div className="border-t pt-10 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-12">
        {/* IMAGE */}
        <div className="flex-1">
          <div className="group overflow-hidden rounded-2xl bg-gray-50 aspect-square shadow-sm">
            <img
              src={productData.image?.[0]}
              alt={productData.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
             <h1 className="text-3xl font-bold text-gray-900 leading-tight">
               {productData.name}
             </h1>
             {/* ⭐ RATING SUMMARY */}
             <div className="flex items-center gap-3">
               <div className="flex items-center gap-0.5">
                 {Array(5).fill("").map((_, i) => (
                   <span key={i} className={`text-lg ${i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                 ))}
               </div>
               <span className="text-sm font-medium text-gray-500">({averageRating}) • {reviews.length} Customer Reviews</span>
               <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase tracking-wider">In Stock</span>
             </div>
          </div>

          <p className="text-4xl font-extrabold text-black">
            {currency}{productData.price}
          </p>

          <p className="text-gray-600 leading-relaxed max-w-md">
            {productData.description || "A premium product designed for style and comfort. Perfect for any occasion with a modern fit and high-quality materials."}
          </p>

          {/* SIZE SELECTOR */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {productData.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[50px] h-12 flex items-center justify-center border-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    selectedSize === size ? "bg-black border-black text-white shadow-xl scale-105" : "bg-white border-gray-100 hover:border-gray-300 text-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY SELECTOR */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Quantity</p>
            <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden w-fit shadow-sm bg-white/50 backdrop-blur-sm">
              <button 
                type="button"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-5 py-3 hover:bg-white transition-colors font-bold text-gray-600 active:bg-gray-100"
              >
                -
              </button>
              <div className="min-w-[50px] text-center font-black text-black border-x border-gray-100 py-3">
                {quantity}
              </div>
              <button 
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-5 py-3 hover:bg-white transition-colors font-bold text-gray-600 active:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <div className="pt-4">
             <button
               onClick={() => addToCart(productData._id, selectedSize, quantity)}
               className="w-full sm:w-auto bg-black text-white px-12 py-4 rounded-xl text-sm font-bold shadow-2xl hover:bg-gray-800 transition-all duration-300 active:scale-95 uppercase tracking-widest"
             >
               ADD TO CART
             </button>
          </div>
          
          <div className="h-px bg-gray-100 w-full"></div>
          
          <div className="grid grid-cols-2 gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">✨ 100% Original</div>
            <div className="flex items-center gap-2">🔄 7-day Exchange</div>
          </div>
        </div>
      </div>

      {/* 📑 DESCRIPTION & REVIEWS TABS */}
      <div className="mt-20">
        <div className="flex gap-10 border-b border-gray-100">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
              activeTab === "description" ? "text-black" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Description
            {activeTab === "description" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>}
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
              activeTab === "reviews" ? "text-black" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Reviews ({reviews.length})
            {activeTab === "reviews" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>}
          </button>
        </div>

        <div className="py-10">
          {activeTab === "description" ? (
            <div className="max-w-3xl space-y-4 animate-fadeIn">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{productData.description}</p>
              <p className="text-gray-600 leading-relaxed">
                Experience unparalleled comfort and state-of-the-art design. This product is crafted from sustainable materials, ensuring both environmental responsibility and long-lasting durability. 
                Whether you're dressing up for a special event or keeping it casual, its versatile silhouette adapts to your unique style.
              </p>
            </div>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                 {/* Rating Overview */}
                 <div className="w-full md:w-64 bg-gray-50 p-8 rounded-2xl space-y-4 text-center">
                    <h3 className="text-5xl font-black text-black">{averageRating}</h3>
                    <div className="flex justify-center items-center gap-0.5">
                      {Array(5).fill("").map((_, i) => (
                        <span key={i} className={`text-xl ${i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                      ))}
                    </div>
                    <p className="text-sm font-bold uppercase text-gray-400 tracking-wider">Based on {reviews.length} reviews</p>
                 </div>

                 {/* Individual Reviews */}
                 <div className="flex-1 space-y-6 w-full">
                   {reviews.map((review, index) => (
                     <div key={index} className="p-6 border border-gray-50 rounded-2xl bg-white shadow-sm space-y-3 transition-all hover:shadow-md">
                       <div className="flex justify-between items-center">
                         <div>
                            <p className="text-sm font-bold text-gray-900">{review.name}</p>
                            <div className="flex items-center gap-0.5">
                              {Array(5).fill("").map((_, i) => (
                                <span key={i} className={`text-xs ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                              ))}
                            </div>
                         </div>
                         <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{review.date || "Verified Buyer"}</span>
                       </div>
                       <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔥 RELATED PRODUCTS SECTION */}
      <div className="mt-20 pb-20">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-black uppercase tracking-widest">You May Also Like</h2>
           <div className="h-px bg-gray-100 flex-1 ml-8"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {relatedProducts.length > 0 ? (
            relatedProducts.map(item => (
              <Link
                key={item._id}
                to={`/product/${item._id}`}
                className="group space-y-4"
              >
                <div className="overflow-hidden rounded-xl bg-gray-50 aspect-square">
                  <img
                    src={item.image?.[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-gray-600 transition-colors">{item.name}</p>
                  <p className="text-sm font-medium text-gray-500">{currency}{item.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 italic">Exploring similar trends for you...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product