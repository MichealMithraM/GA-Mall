import { Clock, MapPin, Tag, User } from "lucide-react";

function Header() {
  const offers = [
    "50% OFF on Fashion",
    "Buy 1 Get 1 Free",
    "Weekend Special Deals",
    "Up to 70% OFF on Electronics",
    "Free Gifts with Purchase",
    "Exclusive Dining Offers",
    "Entertainment Discounts",
  ];

  // Joining with extra space for better readability during scroll
  const offerText = offers.join("   |   ");

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-200 text-sm text-gray-700 px-6 py-2 flex justify-between items-center">
        
        {/* Left Side: Static Info */}
        <div className="flex gap-6 items-center shrink-0">
          <p className="flex items-center gap-1">
            <Clock size={16} className="text-blue-900" /> Mall Timings: 11 AM - 10 PM
          </p>
          <p className="flex items-center gap-1">
            <MapPin size={16} className="text-blue-900" /> Chengalpattu
          </p>
        </div>

        {/* Middle: Scrolling Offers */}
        <div className="flex-1 mx-10 overflow-hidden relative border-x border-gray-300">
          <div className="flex whitespace-nowrap animate-marquee gap-10 w-max">
            <span className="flex items-center gap-2">
              <Tag size={16} className="text-red-500" /> {offerText}
            </span>
            {/* Duplicated for seamless loop */}
            {/* <span className="flex items-center gap-2">
              <Tag size={16} className="text-red-500" /> {offerText}
            </span> */}
          </div>
        </div>

        {/* Right Side: Static Action */}
        <div className="shrink-0">
          <p className="flex items-center gap-1 cursor-pointer font-medium hover:text-blue-800 transition-colors">
            <User size={16} /> Book Personal Shopper
          </p>
        </div>
      </div>

      {/* Navbar */}
      {/* Navbar */}
<nav className="bg-gradient-to-r from-[#000000] via-[#0f172a] to-[#1e293b] text-white px-12 py-3 flex items-center justify-between border-b border-gray-800">
  
  {/* Logo Section */}
  <div className="flex items-center gap-3 cursor-pointer group">
    <div className="bg-black rounded-full p-1 border border-yellow-500/30">
      {/* This approximates the GA icon in your image */}
      <h1 className="text-xl font-black italic tracking-tighter">
        <span className="text-yellow-500">G</span>
        <span className="text-yellow-200">A</span>
      </h1>
    </div>
    <h1 className="text-2xl font-bold tracking-tight">
      GA Mall
    </h1>
  </div>

  {/* Menu - Centered and Uppercase */}
  <ul className="hidden lg:flex items-center gap-8 text-[12px] font-semibold tracking-widest text-gray-300">
    {[
      "SHOPPING", 
      "DINING", 
      "ENTERTAINMENT", 
      "THEATER", 
      "LOUNGE", 
      "EVENT", 
      "SERVICES", 
      "CONTACT US"
    ].map((item) => (
      <li 
        key={item} 
        className="hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out"
      >
        {item}
      </li>
    ))}
  </ul>

  {/* Mobile Menu Icon */}
  <div className="lg:hidden">
    <button className="text-gray-400 hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>
  </div>
</nav>
    </header>
  );
}

export default Header;