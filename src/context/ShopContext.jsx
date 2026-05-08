// import { createContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import axios from "axios"

// export const ShopContext = createContext()

// const ShopContextProvider = ({ children }) => {

//   const currency = "$"
//   const delivery_fee = 10
//   const backendUrl = import.meta.env.VITE_BACKEND_URL

//   const [cartItems, setCartItems] = useState({})
//   const [orders, setOrders] = useState([])
//   const [products, setProducts] = useState([])
//   const [token ,setToken]=useState('')

//   // ---------------- LOAD ORDERS FROM LOCAL STORAGE ----------------
//   useEffect(() => {
//     const savedOrders = localStorage.getItem("orders")
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders))
//     }
//   }, [])

//   // ---------------- SAVE ORDERS TO LOCAL STORAGE ----------------
//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders))
//   }, [orders])

//   // ---------------- FETCH PRODUCTS ----------------
//   useEffect(() => {

//     const getProductsData = async () => {
//       try {
//         const response = await axios.get(
//           backendUrl + "/api/product/list"
//         )

//         if (response.data.success) {
//           setProducts(response.data.products)
//         }

//       } catch (error) {
//         console.log(error)
//       }
//     }

//     if (backendUrl) {
//       getProductsData()
//     }

//   }, [backendUrl])

//   // ---------------- ADD TO CART ----------------
//   const addToCart = (itemId, size, quantity) => {

//     if (!size) {
//       toast.error("Please select size ❗")
//       return
//     }

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (!data[itemId]) data[itemId] = {}

//       if (!data[itemId][size]) {
//         data[itemId][size] = {
//           quantity: 0,
//           addedAt: new Date().toLocaleString()
//         }
//       }

//       data[itemId][size].quantity += quantity

//       return data
//     })
//     if (token){
//       try {
//         await axios.post (backendUrl +'/api/cart/add',{itemId,size},{headers:{token}})

//       } 
//       catch (error) {
//         console.log(error)
//         toast.error(error.message)
        
//       }
//     }

//     toast.success("Added to Cart 🛒")
//   }

//   // ---------------- REMOVE FROM CART ----------------
//   const removeFromCart = (itemId, size) => {

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (data[itemId]) {
//         delete data[itemId][size]

//         if (Object.keys(data[itemId]).length === 0) {
//           delete data[itemId]
//         }
//       }

//       return data
//     })
//   }

//   // ---------------- CART COUNT ----------------
//   const getCartCount = () => {

//     let total = 0

//     for (const item in cartItems) {
//       for (const size in cartItems[item]) {
//         total += cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- CART AMOUNT ----------------
//   const getCartAmount = () => {

//     let total = 0

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {
//         total += product.price * cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- PLACE ORDER ----------------
//   const placeOrder = (paymentMethod) => {

//     if (Object.keys(cartItems).length === 0) {
//       toast.error("Cart is empty ❗")
//       return
//     }

//     const orderTime = new Date().toLocaleString()
//     let newOrders = []

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {

//         newOrders.push({
//           _id: product._id + "-" + size,
//           name: product.name,
//           image: product.image[0],
//           price: product.price,
//           quantity: cartItems[item][size].quantity,
//           size,
//           orderTime,
//           payment: paymentMethod,
//           status: "Order Placed"
//         })
//       }
//     }

//     setOrders(prev => [...prev, ...newOrders])
//     setCartItems({})
//     toast.success("Order Placed Successfully 🎉")
//   }

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     cartItems,
//     orders,
//     addToCart,
//     removeFromCart,
//     getCartCount,
//     getCartAmount,
//     placeOrder,
//     setToken ,token,
//     backendUrl,

//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider


// import { createContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import axios from "axios"

// export const ShopContext = createContext()

// const ShopContextProvider = ({ children }) => {

//   const currency = "$"
//   const delivery_fee = 10
//   const backendUrl = import.meta.env.VITE_BACKEND_URL

//   const [cartItems, setCartItems] = useState({})
//   const [orders, setOrders] = useState([])
//   const [products, setProducts] = useState([])
//   const [token, setToken] = useState("")

//   // ---------------- LOAD ORDERS ----------------
//   useEffect(() => {
//     const savedOrders = localStorage.getItem("orders")
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders))
//     }
//   }, [])

//   // ---------------- SAVE ORDERS ----------------
//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders))
//   }, [orders])

//   // ---------------- FETCH PRODUCTS ----------------
//   useEffect(() => {

//     const getProductsData = async () => {
//       try {
//         const response = await axios.get(
//           backendUrl + "/api/product/list"
//         )

//         if (response.data.success) {
//           setProducts(response.data.products)
//         }

//       } catch (error) {
//         console.log(error)
//       }
//     }

//     if (backendUrl) {
//       getProductsData()
//     }

//   }, [backendUrl])

//   // ---------------- ADD TO CART ----------------
//   const addToCart = async (itemId, size, quantity) => {

//     if (!size) {
//       toast.error("Please select size ❗")
//       return
//     }

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (!data[itemId]) data[itemId] = {}

//       if (!data[itemId][size]) {
//         data[itemId][size] = {
//           quantity: 0,
//           addedAt: new Date().toLocaleString()
//         }
//       }

//       data[itemId][size].quantity += quantity

//       return data
//     })

//     if (token) {
//       try {

//         await axios.post(
//           backendUrl + "/api/cart/add",
//           { itemId, size },
//           { headers: { token } }
//         )

//       } catch (error) {
//         console.log(error)
//         toast.error(error.message)
//       }
//     }

//     toast.success("Added to Cart 🛒")
//   }

//   // ---------------- REMOVE FROM CART ----------------
//   const removeFromCart = (itemId, size) => {

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (data[itemId]) {
//         delete data[itemId][size]

//         if (Object.keys(data[itemId]).length === 0) {
//           delete data[itemId]
//         }
//       }

//       return data
//     })
//   }

//   // ---------------- CART COUNT ----------------
//   const getCartCount = () => {

//     let total = 0

//     for (const item in cartItems) {
//       for (const size in cartItems[item]) {
//         total += cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- CART AMOUNT ----------------
//   const getCartAmount = () => {

//     let total = 0

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {
//         total += product.price * cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- PLACE ORDER ----------------
//   const placeOrder = (paymentMethod) => {

//     if (Object.keys(cartItems).length === 0) {
//       toast.error("Cart is empty ❗")
//       return
//     }

//     const orderTime = new Date().toLocaleString()
//     let newOrders = []

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {

//         newOrders.push({
//           _id: product._id + "-" + size,
//           name: product.name,
//           image: product.image[0],
//           price: product.price,
//           quantity: cartItems[item][size].quantity,
//           size,
//           orderTime,
//           payment: paymentMethod,
//           status: "Order Placed"
//         })
//       }
//     }

//     setOrders(prev => [...prev, ...newOrders])
//     setCartItems({})
//     toast.success("Order Placed Successfully 🎉")
//   }

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     cartItems,
//     orders,
//     addToCart,
//     removeFromCart,
//     getCartCount,
//     getCartAmount,
//     placeOrder,
//     setToken,
//     token,
//     backendUrl,
//     setCartItems,
//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   )
// }

import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const currency = "$";
  const delivery_fee = 10;

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://backend-one-mauve-11.vercel.app";

  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // ---------------- LOAD TOKEN ON MOUNT ----------------
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // ---------------- SYNC CART ON TOKEN CHANGE ----------------
  useEffect(() => {
    if (token) {
      getUserCart(token);
    }
  }, [token]);

  // ---------------- LOAD ORDERS ----------------
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ---------------- FETCH PRODUCTS ----------------
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products || []);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load products ❌");
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  // ---------------- GET USER CART ----------------
  const getUserCart = async (userToken) => {
    try {
      const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token: userToken } });
      if (response.data.success) {
        setCartItems(response.data.cartData || {});
      }
    } catch (error) {
      console.log(error);
      toast.error("Cart synchronization failed ❌");
    }
  };

  // ---------------- ADD TO CART ----------------
  const addToCart = async (itemId, size, quantity = 1) => {

    if (!size) {
      toast.error("Please select size ❗");
      return;
    }

    let data = structuredClone(cartItems);

    if (!data[itemId]) data[itemId] = {};
    if (!data[itemId][size]) {
      data[itemId][size] = {
        quantity: 0,
        addedAt: new Date().toLocaleString()
      };
    }

    data[itemId][size].quantity += quantity;
    setCartItems(data);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/add`, { itemId, size, quantity }, { headers: { token } });
        toast.success("Added to Cart 🛒");
      } catch (error) {
        console.log(error);
        toast.error("Server sync failed ❌");
      }
    } else {
      toast.success("Added to Cart (guest) 🛒");
    }
  };

  // ---------------- UPDATE QUANTITY ----------------
  const updateQuantity = async (itemId, size, quantity) => {
    let data = structuredClone(cartItems);

    if (quantity === 0) {
      delete data[itemId][size];
      if (Object.keys(data[itemId]).length === 0) delete data[itemId];
    } else {
      data[itemId][size].quantity = quantity;
    }

    setCartItems(data);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error("Update failed ❌");
      }
    }
  };

  // ---------------- REMOVE FROM CART ----------------
  const removeFromCart = (itemId, size) => {
    updateQuantity(itemId, size, 0);
  };

  // ---------------- CART HELPERS ----------------
  const getCartCount = () => {
    let total = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        // Handle both simple number and object structure
        const itemValue = cartItems[item][size];
        total += typeof itemValue === 'object' ? (itemValue.quantity || 0) : (itemValue || 0);
      }
    }
    return total;
  };

  // ---------------- PRICE CALCULATIONS ----------------
  const getCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      const product = products.find(p => p._id === item);
      if (!product) continue;
      for (const size in cartItems[item]) {
        const itemValue = cartItems[item][size];
        const qty = typeof itemValue === 'object' ? (itemValue.quantity || 0) : (itemValue || 0);
        total += product.price * qty;
      }
    }
    return total;
  };

  // 10% Discount for logged-in users
  const getDiscountAmount = () => {
    const rawAmount = getCartAmount();
    return token ? (rawAmount * 0.1) : 0;
  };

  // Subtotal after discount
  const getSubtotal = () => {
    return getCartAmount() - getDiscountAmount();
  };

  // Dynamic delivery fee: Free over $100
  const getDeliveryFee = () => {
    const subtotal = getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 100 ? 0 : delivery_fee;
  };

  const getFinalAmount = () => {
    return getSubtotal() + getDeliveryFee();
  };

  // ---------------- PLACE ORDER ----------------
  const placeOrder = (paymentMethod) => {
    if (Object.keys(cartItems).length === 0) {
      toast.error("Cart is empty ❗");
      return;
    }

    const orderTime = new Date().toLocaleString();
    let newOrders = [];

    for (const item in cartItems) {
      const product = products.find(p => p._id === item);
      if (!product) continue;
      for (const size in cartItems[item]) {
        const itemValue = cartItems[item][size];
        const qty = typeof itemValue === 'object' ? (itemValue.quantity || 0) : (itemValue || 0);

        newOrders.push({
          _id: product._id + "-" + size,
          name: product.name,
          image: product.image[0],
          price: product.price, // Store raw price
          quantity: qty,
          size,
          orderTime,
          payment: paymentMethod,
          status: "Order Placed"
        });
      }
    }

    setOrders(prev => [...prev, ...newOrders]);
    setCartItems({});
    toast.success("Order Placed Successfully 🎉");
  };

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    orders,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getCartAmount,
    getDiscountAmount,
    getSubtotal,
    getDeliveryFee,
    getFinalAmount,
    placeOrder,
    setToken,
    token,
    backendUrl,
    setCartItems,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    getUserCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// export default ShopContextProvider

// import { createContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import axios from "axios"

// export const ShopContext = createContext()

// const ShopContextProvider = ({ children }) => {

//   const currency = "$"
//   const delivery_fee = 10
//   const backendUrl = import.meta.env.VITE_BACKEND_URL

//   const [cartItems, setCartItems] = useState({})
//   const [orders, setOrders] = useState([])
//   const [products, setProducts] = useState([])
//   const [token, setToken] = useState("")

//   // ---------------- LOAD CART ----------------
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cartItems")
//     if (savedCart) {
//       setCartItems(JSON.parse(savedCart))
//     }
//   }, [])

//   // ---------------- SAVE CART ----------------
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems))
//   }, [cartItems])

//   // ---------------- LOAD ORDERS ----------------
//   useEffect(() => {
//     const savedOrders = localStorage.getItem("orders")
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders))
//     }
//   }, [])

//   // ---------------- SAVE ORDERS ----------------
//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders))
//   }, [orders])

//   // ---------------- FETCH PRODUCTS ----------------
//   useEffect(() => {

//     const getProductsData = async () => {
//       try {

//         const response = await axios.get(
//           backendUrl + "/api/product/list"
//         )

//         if (response.data.success) {
//           setProducts(response.data.products)
//         }

//       } catch (error) {
//         console.log(error)
//       }
//     }

//     if (backendUrl) {
//       getProductsData()
//     }

//   }, [backendUrl])

//   // ---------------- ADD TO CART ----------------
//   const addToCart = async (itemId, size, quantity) => {

//     if (!size) {
//       toast.error("Please select size ❗")
//       return
//     }

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (!data[itemId]) data[itemId] = {}

//       if (!data[itemId][size]) {
//         data[itemId][size] = {
//           quantity: 0,
//           addedAt: new Date().toLocaleString()
//         }
//       }

//       data[itemId][size].quantity += quantity

//       return data
//     })

//     if (token) {
//       try {

//         await axios.post(
//           backendUrl + "/api/cart/add",
//           { itemId, size },
//           { headers: { token } }
//         )

//       } catch (error) {
//         console.log(error)
//         toast.error(error.message)
//       }
//     }

//     toast.success("Added to Cart 🛒")
//   }

//   // ---------------- REMOVE FROM CART ----------------
//   const removeFromCart = (itemId, size) => {

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (data[itemId]) {
//         delete data[itemId][size]

//         if (Object.keys(data[itemId]).length === 0) {
//           delete data[itemId]
//         }
//       }

//       return data
//     })
//   }

//   // ---------------- CART COUNT ----------------
//   const getCartCount = () => {

//     let total = 0

//     for (const item in cartItems) {
//       for (const size in cartItems[item]) {
//         total += cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- CART AMOUNT ----------------
//   const getCartAmount = () => {

//     let total = 0

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {
//         total += product.price * cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- PLACE ORDER ----------------
//   const placeOrder = (paymentMethod) => {

//     if (Object.keys(cartItems).length === 0) {
//       toast.error("Cart is empty ❗")
//       return
//     }

//     const orderTime = new Date().toLocaleString()
//     let newOrders = []

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {

//         newOrders.push({
//           _id: product._id + "-" + size,
//           name: product.name,
//           image: product.image[0],
//           price: product.price,
//           quantity: cartItems[item][size].quantity,
//           size,
//           orderTime,
//           payment: paymentMethod,
//           status: "Order Placed"
//         })
//       }
//     }

//     setOrders(prev => [...prev, ...newOrders])
//     setCartItems({})
//     toast.success("Order Placed Successfully 🎉")
//   }

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     cartItems,
//     orders,
//     addToCart,
//     removeFromCart,
//     getCartCount,
//     getCartAmount,
//     placeOrder,
//     setToken,
//     token,
//     backendUrl,
//     setCartItems,
//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider