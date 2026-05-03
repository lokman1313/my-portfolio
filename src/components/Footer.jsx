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
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-white/5 pb-12">
          
          {/* Brand/Logo Part */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              LOKMAN<span className="text-violet-500">.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-[250px]">
              Building digital experiences with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { icon: <FaGithub />, link: "https://github.com/lokman1313" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/lokman-hossen-dev/" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/lokman.hossen.697687" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                whileHover={{ y: -3, textShadow: "0px 0px 8px rgb(139, 92, 246)" }}
                className="text-gray-500 hover:text-violet-500 text-xl transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600 font-medium">
          <p>© {currentYear} Lokman Hossen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}