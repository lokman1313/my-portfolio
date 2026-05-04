'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi' 
import { FaCircle } from 'react-icons/fa'

const links = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map(link => link.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActive(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl py-4 border-b border-white/5' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Professional LH Logo Badge */}
<motion.div 
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => scrollTo('hero')}
>
  <div className="relative flex items-center justify-center">

    {/* Glow background */}
    <div className="absolute w-12 h-12 bg-violet-600/30 blur-2xl rounded-full"></div>

    {/* Circle badge */}
    <div className="w-10 h-10 rounded-full border border-violet-500/40 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg shadow-violet-700/20">

      {/* Logo text (center fixed) */}
      <span className="text-white font-bold text-xl tracking-tighter leading-none -translate-y-[1px]">
        {"{L}"}
      </span>

    </div>

  </div>
</motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.id} className="relative group">
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-[12px] font-bold tracking-[0.2em] transition-all duration-300 uppercase ${
                  active === link.id ? 'text-white' : 'text-gray-500 hover:text-gray-200'
                }`}
              >
                {link.name}
              </button>
              {active === link.id && (
                <motion.span 
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-violet-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white z-[110] p-2 hover:bg-white/5 rounded-full transition-all"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu Sidebar (Right Side - 1/4 or 3/4 on mobile) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Overlay with Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] md:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[75%] md:w-[350px] h-screen bg-gray-950/90 backdrop-blur-2xl z-[105] border-l border-white/5 flex flex-col p-10 md:hidden"
            >
              <div className="mt-16 space-y-8 text-right">
                {links.map((link, i) => (
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full text-2xl font-black uppercase tracking-tight transition-all ${
                      active === link.id ? 'text-violet-500' : 'text-zinc-600 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-end gap-4">
                       {link.name}
                       {active === link.id && <FaCircle size={8} className="text-violet-500" />}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Social or Quick Footer in Sidebar */}
              <div className="mt-auto pt-10 border-t border-white/5">
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest text-right">
                  © 2026 Lokman Hossen
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}