import React from "react";
import { motion } from "framer-motion";
// Importing Font Awesome icons from react-icons
import { 
  FaFacebookF, 
  FaYoutube, 
  FaLinkedinIn, 
  FaInstagram, 
  FaWhatsapp,
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      "About us", "Careers", "Refund Policy", "Taxes & Damages", 
      "Terms & Conductions", "Terms & Conductions for Stores", 
      "Offers", "Privacy policy", "FAQ's", "Contact us"
    ],
    "Entertainment": [
      "Video Games", "Kids Play area", "Outdoor Play area", "VR Games", "Trampoline"
    ],
    "Dine": [
      "Cafe's & Bakeries", "Restaurants", "Specialty Food / Sweets", "Food Court", "Festival Bay Dining"
    ],
    "Shop": [
      "Accessories", "Clothing's", "Electronics & Computers", "Eyewear", 
      "Health & Beauty", "Home Furnishing", "Hypermarket", "Jewellery", "Toys", "Watch"
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-400 py-16 px-6 md:px-16 lg:px-24 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo & Address */}
          <div className="lg:col-span-1 text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-tr from-yellow-600 to-yellow-200 p-1 rounded-sm">
                <span className="text-black font-black text-xl italic tracking-tighter px-1">GA</span>
              </div>
              <h2 className="text-white text-2xl font-bold tracking-tight">GA Mall</h2>
            </div>
            <div className="text-sm space-y-4 leading-relaxed">
              <p>Address: NH45, Melavalam,<br />Karunguzhi, Tamil Nadu 603303</p>
              <div className="space-y-1">
                <p className="text-white font-semibold">Timings:</p>
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Weekdays</p>
                <p className="text-gray-300">Mon - Thu: 10:00 am to 10.30 pm</p>
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider pt-2">Weekends</p>
                <p className="text-gray-300">Fri - Sun: 10:00 am to 10.00 pm</p>
              </div>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-left">
              <h3 className="text-white font-bold mb-6 text-lg tracking-wide">{title}</h3>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link} className="hover:text-yellow-500 cursor-pointer transition-colors duration-300">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Newsletter and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 border-t border-white/5 pt-16">
          
          {/* Newsletters */}
          <div className="text-left">
            <h3 className="text-white text-xl font-bold mb-2">Newsletters</h3>
            <p className="text-sm mb-6">Subscribe to our mailing list and get Latest Updates notifications</p>
            <div className="flex flex-col sm:flex-row gap-0 max-w-md shadow-lg">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white text-black px-4 py-3 w-full outline-none"
              />
              <button className="bg-indigo-700 hover:bg-indigo-600 text-white px-8 py-3 font-bold transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Google Map Integration */}
          <div className="w-full h-48 rounded-xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.7322039673254!2d79.90528327483392!3d12.55419628772411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a531d8713dea3f9%3A0x487a79873d8f8670!2sGA%20mall!5e1!3m2!1sen!2sin!4v1777821826591!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            <FaMapMarkerAlt size={14} className="text-blue-500" />
            <span>Chengalpattu, Tamil Nadu 603303</span>
          </div>

          <p className="text-[11px] text-gray-500 font-medium">
            Copyright© 2026 GA Mall. All rights reserved.
          </p>

          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-white font-bold text-xs uppercase tracking-widest">Follow Us</span>
            <div className="flex gap-5">
              {[
                { Icon: FaFacebookF, link: "#" },
                { Icon: FaYoutube, link: "#" },
                { Icon: FaLinkedinIn, link: "#" },
                { Icon: FaInstagram, link: "#" },
                { Icon: FaWhatsapp, link: "#" }
              ].map(({ Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  whileHover={{ y: -5, scale: 1.1, color: "#eab308" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/80 hover:text-yellow-500 transition-all p-1"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;