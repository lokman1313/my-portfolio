'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-24 bg-white dark:bg-gray-950 text-foreground px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-slate-200/60 dark:border-slate-900 pb-12">
          
          {/* Brand/Logo Part */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              LOKMAN<span className="text-violet-500 animate-pulse">HOSSEN</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-[250px] leading-relaxed">
              Building digital experiences with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-slate-400">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item)}
                  className="hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-violet-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/lokman1313" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/lokman-hossen-dev/" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/lokman.hossen.697687" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30 dark:hover:border-violet-500/30 shadow-sm hover:shadow-[0_8px_24px_rgba(139,92,246,0.1)] transition-all duration-300"
              >
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
          <p suppressHydrationWarning>© {currentYear} Lokman Hossen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-600 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-600 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}