import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  // Data for Trending Stores
  const stores = [
    {
      id: "watch-store",
      name: "WATCH STORE",
      image: "/watch-store.jpg",
      link: "/shops/watches",
      height: "h-64",
      marginTop: "lg:mt-32", 
    },
    {
      id: "beauty-wellness",
      name: "BEAUTIFY & WELLNESS",
      image: "/beauty-store.jpg",
      link: "/shops/beauty",
      height: "h-96",
      marginTop: "lg:mt-16",
    },
    {
      id: "clothing-store",
      name: "CLOTHING STORE",
      image: "/clothing-store.jpg",
      link: "/shops/clothing",
      height: "h-[500px]",
      marginTop: "lg:mt-0",
    },
  ];

  // Data for Experience Section
  const experiences = [
    {
      title: "SHOP",
      desc: "The perfect shopping experience",
      img: "/shop-exp.jpg",
      link: "/shopping",
    },
    {
      title: "DINE",
      desc: "New culinary experience every time",
      img: "/dine-exp.jpg",
      link: "/dining",
    },
    {
      title: "Kids Zone",
      desc: "Get immersed in fun activities",
      img: "/kids",
      link: "/kids-zone",
    },
    {
      title: "CELEBRATE",
      desc: "Breathtaking events and exhibitions",
      img: "/celebrate-exp.jpg",
      link: "/events",
    },
  ];

  // Data for Business Section
  const businessServices = [
    {
      title: "Advertise With Us",
      desc: "Grow your brand with powerful communication & visuals",
      img: "/adv-img.jpg",
      marginTop: "mt-0",
    },
    {
      title: "Collaborate With Us",
      desc: "Be a part of our cultural community",
      img: "/coll-img.jpg",
      marginTop: "lg:mt-24", // Responsive margin
    },
    {
      title: "Retail Space Leasing",
      desc: "Get the space to grow your business",
      img: "/retail-img.jpg",
      marginTop: "mt-0",
    },
    {
      title: "Partnerships With Us",
      desc: "Take your brand to the next level with Forum",
      img: "/part-img.jpg",
      marginTop: "lg:mt-24", // Responsive margin
    },
  ];

  const mallHours = [
    {
      title: "General Mall Timings",
      weekdays: "Mon - Thu: 10:00 am to 10:00 pm",
      weekends: "Fri - Sun: 10:00 am to 10:00 pm",
    },
    {
      title: "Foodcourt",
      weekdays: "Mon - Thu: 10:00 am to 10:00 pm",
      weekends: "Fri - Sun: 10:00 am to 10:00 pm",
    },
    {
      title: "Movie Show Timings",
      weekdays: "Mon - Thu: 10:00 am to 10:00 pm",
      weekends: "Fri - Sun: 10:00 am to 10:00 pm",
    },
    {
      title: "Supermarkets & Shop Timings",
      weekdays: "Mon - Thu: 10:00 am to 10:00 pm",
      weekends: "Fri - Sun: 10:00 am to 10:00 pm",
    },
  ];
  
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Header />
      <Hero />

      {/* --- Trending Stores Section --- */}
      <div className="mt-10 lg:mt-20">
        <section className="py-24 px-6 md:px-20 bg-white">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/4 lg:sticky lg:top-24">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-8"
              >
                TRENDING MALL <br /> STORES
              </motion.h2>

              <button 
                onClick={() => navigate("/brands")}
                className="border border-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-500"
              >
                Explore All Brands
              </button>
            </div>

            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {stores.map((store, index) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col ${store.marginTop}`}
                >
                  <div
                    onClick={() => navigate(store.link)}
                    className={`relative group cursor-pointer overflow-hidden rounded-2xl ${store.height} shadow-lg`}
                  >
                    <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={store.image}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 z-20 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                        VIEW SHOP
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 group">
                    <p className="text-sm font-serif font-bold tracking-wider mb-1">
                      {store.name}
                    </p>
                    <div className="w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- Experience Section --- */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-[#1a2e23] via-[#2d4a3e] to-[#1a2e23] text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(item.link)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl h-[350px] mb-6 shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-0 group-hover:border-4 border-[#D4AF37]/30 transition-all duration-300 rounded-3xl" />
              </div>
              <h3 className="text-xl font-bold tracking-wider mb-2 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
              <div className="w-0 h-[2px] bg-[#D4AF37] mt-3 group-hover:w-1/3 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Business Section --- */}
      <section className="py-24 bg-white text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">
          GA For Business
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-16 uppercase">
          Grow Your Business With Us
        </h2>

        <div className="px-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {businessServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col text-left group cursor-pointer ${service.marginTop}`}
            >
              <div className="overflow-hidden rounded-[2.5rem] h-[400px] mb-6 shadow-xl relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-lg mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.desc}
              </p>
              {/* FIXED: Icon now works correctly */}
              <ArrowUpRight className="text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={24} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Amenities Banner --- */}
      <div className="bg-white py-12">
      <section className="bg-[#FF6347] py-20 px-10 md:px-20 flex flex-col md:flex-row justify-between items-center text-white">
        <div className="max-w-3xl">
          <span className="bg-white text-[#FF6347] px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm mb-6 inline-block">
            Amenities
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight uppercase">
            Elevate Your Experience At <br /> GA Mall
          </h2>
        </div>
        
        <button 
          onClick={() => navigate("/amenities")}
          className="mt-10 md:mt-0 border border-white/50 px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#FF6347] transition-all duration-300"
        >
          View All
        </button>
      </section>
      </div>
      <div className="bg-white py-12">
{/* --- founder Section --- */}
<section className="py-24 bg-gradient-to-b from-black via-[#0a1118] to-[#1a252f] text-white overflow-visible">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-20 tracking-widest uppercase">
            Hear From Our Founder
          </h2>

          {/* White Card Container */}
          <div className="relative bg-white text-black rounded-xl flex flex-col md:flex-row items-stretch shadow-2xl">
            
            {/* Left: Overlapping Image */}
            <div className="md:w-[35%] relative">
              <div className="md:absolute md:-top-10 md:-left-10 w-full h-full md:w-[115%] md:h-[115%] p-4 md:p-0">
                <img 
                  src="/founder.jpg" 
                  alt="Founder" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white/10"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=Founder"; }}
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="md:w-[65%] p-8 md:p-14 flex flex-col justify-center text-left">
              {/* Red Quote Symbol */}
              <span className="text-5xl text-[#e63946] font-serif leading-none mb-4">“</span>
              
              <div className="space-y-4 text-sm md:text-[15px] text-gray-700 leading-relaxed italic">
                <p>
                  GA Mall was created with a simple vision to bring modern shopping, food, 
                  and entertainment culture within everyone.
                </p>
                <p>
                  For too long, families had to travel far to experience quality malls, leisure 
                  spaces, and premium entertainment. I wanted to change that. GA Mall is 
                  built so that every family, every student, and every visitor can enjoy a 
                  world-class experience without worrying about affordability or distance.
                </p>
                <p>
                  From food courts and gaming zones to private theatres and relaxing 
                  lounges, every corner of GA Mall is designed to offer joy, comfort, and 
                  togetherness.
                </p>
                <p>
                  My goal is not just to build a mall, but to build employment, a community 
                  space where culture, lifestyle, and affordability come together.
                </p>
              </div>

              {/* Signature & Animated LinkedIn */}
              <div className="mt-10 flex flex-col items-end w-full">
                <p className="font-bold text-gray-900 text-lg">
                  — Lakshmipathi Perumal
                </p>
                
                <div className="flex items-center gap-3 mt-1 group">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                    Founder, GA Mall
                  </p>
                  
                  {/* Clickable LinkedIn Icon with Animation */}
                  <motion.a 
                    href="https://www.linkedin.com/in/lakshmipathi-perumal-4a0264213/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black text-white p-2 rounded-full cursor-pointer transition-colors hover:bg-[#0077b5]"
                  >
                    <FaLinkedinIn size={14} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/* --- Mall Hours Section --- */}
      <div className="bg-white py-12">
      <section className="py-24 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-serif text-[#1e40af] mb-20 uppercase tracking-widest">
            Mall Open Hours
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {mallHours.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col space-y-6"
              >
                <h4 className="font-bold text-[#1e40af] text-sm lg:text-base border-b border-blue-200 pb-2">
                  {item.title}
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-xs uppercase text-gray-500 mb-1">Weekdays</p>
                    <p className="text-sm text-gray-700">{item.weekdays}</p>
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase text-gray-500 mb-1">Weekends</p>
                    <p className="text-sm text-gray-700">{item.weekends}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>


    <Footer />  

    </div>

  );
}