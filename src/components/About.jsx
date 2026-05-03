'use client'

import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiLayout } from 'react-icons/fi' 

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            About Me<span className="text-violet-500">.</span>
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-violet-500/50 to-transparent"></div>
        </div>

        {/* Content Area - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl text-violet-400 font-medium italic leading-snug">
            "Solving complex problems with simple, elegant code."
          </p>
          
          <div className="space-y-6">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I am a <span className="text-white font-semibold">Full Stack Developer</span> specialized in building high-performance web applications. My journey started with a curiosity for how things work on the internet, which evolved into a career of crafting digital experiences using <span className="text-white border-b border-violet-500/50">React, Next.js, and Node.js</span>.
            </p>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I don't just write code; I build solutions that are scalable, accessible, and user-centric. Whether it's a pixel-perfect frontend or a robust backend architecture, I focus on quality and performance.
            </p>
          </div>

          {/* Feature Boxes - Simplified Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
            <div className="group p-6 bg-gray-900/40 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300">
              <FiCode className="text-violet-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-white font-bold text-lg">Clean Code</h4>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest font-medium">SOLID Principles</p>
            </div>

            <div className="group p-6 bg-gray-900/40 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300">
              <FiCpu className="text-violet-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-white font-bold text-lg">Modern Tech</h4>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest font-medium">Next.js 14+</p>
            </div>

            <div className="group p-6 bg-gray-900/40 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300">
              <FiLayout className="text-violet-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-white font-bold text-lg">UI Design</h4>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest font-medium">Pixel Perfect</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}