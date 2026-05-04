import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Counter Component that resets every time it enters the view
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  // Setting once: false allows the animation to trigger every time you scroll to it
  const isInView = useInView(ref, { amount: 0.5, once: false }); 
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    
    if (isInView) {
      let startTime = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smoother counting
        const currentCount = Math.floor(progress * end);
        setDisplayValue(currentCount);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    } else {
      // Reset to 0 when it leaves the view so it can restart next time
      setDisplayValue(0);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

function Hero() {
  const stats = [
    { label: "TOTAL GLA", value: "1", suffix: "L+ SQ.FT.", color: "text-[#d14b3d]" },
    { label: "PARKING SLOTS", value: "350", suffix: "+", sub: "FREE CAR PARKING", color: "text-[#d14b3d]" },
    { label: "FLOORS", value: "2", suffix: "", color: "text-[#d14b3d]" },
    { label: "SHOPS", value: "27", suffix: "+", color: "text-[#d14b3d]" },
    { label: "WALK INS", value: "10000", suffix: "+", color: "text-[#d14b3d]" },
  ];

  return (
    <section className="relative w-full h-[95vh] flex flex-col items-center mb-20">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full w-full px-10 md:px-20 text-white">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="italic mb-2 text-lg text-gray-200 font-light"
        >
          Curated for the Way You Live
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8"
        >
          Experience Elite <br /> Shopping
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4"
        >
          <button className="bg-white text-black px-8 py-2.5 text-sm font-bold uppercase tracking-tight hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
            Explore Brands
          </button>

          <button className="border border-white/60 px-8 py-2.5 text-sm font-medium uppercase tracking-tight hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-300">
            View Events
          </button>
        </motion.div>
      </div>

      {/* Floating Stats Bar - Matched to Image Structure */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="absolute bottom-[-60px] w-[95%] max-w-6xl bg-white rounded-[35px] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.15)] py-10 px-4 grid grid-cols-2 md:grid-cols-5 gap-y-8 z-30"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center px-2">
            <p className="text-[#555] font-bold text-[11px] mb-4 tracking-normal uppercase">
              {stat.label}
            </p>
            <div className={`text-[22px] font-extrabold leading-none ${stat.color}`}>
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            {stat.sub && (
              <p className="text-[10px] font-bold text-[#555] mt-2 leading-tight uppercase">
                {stat.sub}
              </p>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;