'use client'
import logo from "../../public/lokman hossen portfolio.png"
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { HiOutlineArchive } from 'react-icons/hi';
import AnimatedText from './AnimatedText';
import Image from "next/image";

export default function Hero() {
  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-950 px-6 py-20 md:py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-white/10 rounded-full overflow-hidden p-2">
              <Image 
                src={logo} 
                alt="Profile"
                width={500}
                className="w-full h-full object-cover rounded-full transition-all duration-700"
              />
            </div>
            
            <div className="absolute top-6 -right-2 md:top-10 md:-right-4 bg-gray-950 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md z-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">Online</span>
            </div>
          </div>
        </motion.div>

        {/* TEXT CONTENT SIDE */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="justify-center md:justify-start text-violet-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-violet-400"></span>
              Available for Work
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Lokman Hossen<span className="text-violet-500">.</span>
            </h1>
            
            {/* <h2 className="text-gray-500 text-xl md:text-2xl mt-4 font-medium italic">
              MARN Stack Developer & UI Designer
            </h2> */}
            <AnimatedText></AnimatedText>

            <p className="text-gray-400 mt-6 max-w-lg text-lg leading-relaxed mx-auto md:mx-0">
              Crafting high-performance web experiences through clean code and intuitive design systems.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-violet-900/20"
              >
                View Work
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 transition-all"
              >
                Hire Me
                <HiOutlineArchive className="text-violet-400" size={18} />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}