import React from 'react';

const ScrollingOffers = () => {
  const offers = [
    "🔥 UP TO 50% OFF ON BESTSELLERS | ",
    "🚚 FREE SHIPPING ON ORDERS OVER $100 | ",
    "✨ NEW ARRIVALS: CHECK OUT THE LATEST COLLECTION | ",
    "🎁 SIGN UP & GET 10% OFF YOUR FIRST ORDER | ",
    "💫 PREMIUM QUALITY GUARANTEED | ",
    "🕒 LIMITED TIME OFFER: SHOP NOW! | "
  ];

  return (
    <div className="relative bg-[#1a1a2e] text-white py-2.5 overflow-hidden border-b border-white/5 select-none shadow-2xl z-50">
      {/* Side Fades for Premium Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1a1a2e] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1a1a2e] to-transparent z-10"></div>
      
      <div className="animate-ticker whitespace-nowrap inline-block">
        {/* Triple the array for consistent flow */}
        {[...offers, ...offers, ...offers].map((offer, index) => (
          <span key={index} className="text-[10px] md:text-xs font-bold tracking-[0.3em] px-8 opacity-80 hover:opacity-100 transition-all duration-300 uppercase cursor-pointer">
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingOffers;
