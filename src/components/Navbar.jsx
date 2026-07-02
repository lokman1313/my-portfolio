'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { ThemeSwitch } from './ThemeSwitch'
import { Separator } from '@heroui/react'

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
    handleScroll()
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
          ? 'bg-white/70 dark:bg-black/60 backdrop-blur-xl py-3 border-b border-gray-200/50 dark:border-white/5 shadow-sm dark:shadow-none'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo Badge (KnowledgeHub-style wordmark) */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-violet-600/30 blur-2xl rounded-full" />
            <div className="w-10 h-10 rounded-full border border-violet-500/40 bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg shadow-violet-700/10 dark:shadow-violet-700/20">
              <span className="text-gray-900 dark:text-white font-bold text-xl tracking-tighter leading-none -translate-y-[1px]">
                {"{L}"}
              </span>
            </div>
          </div>
          <p className="hidden sm:block font-bold text-lg tracking-tight text-gray-950 dark:text-white">
            Lokman<span className="text-violet-600 dark:text-violet-500">Hossen</span>
          </p>
        </motion.div>

        {/* Desktop Menu — pill container */}
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-1 bg-gray-100/80 dark:bg-white/5 backdrop-blur-md p-1.5 px-2 rounded-full border border-gray-200/50 dark:border-white/10 shadow-inner dark:shadow-none">
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id} className="relative">
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`relative px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-violet-600 rounded-full shadow-md shadow-violet-600/20"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
       <Separator className='hidden sm:flex my-2' orientation="vertical" />
          {/* Theme Toggle + Mobile Button */}
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            <button
              className="md:hidden text-gray-800 dark:text-white z-[110] p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[100] md:hidden"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[75%] md:w-[350px] h-screen bg-white/95 dark:bg-gray-950/90 backdrop-blur-2xl z-[105] border-l border-gray-200 dark:border-white/5 flex flex-col p-8 md:hidden"
            >
              <div className="mt-16 space-y-2">
                {links.map((link, i) => {
                  const isActive = active === link.id
                  return (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i }}
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wide transition-colors ${
                        isActive
                          ? 'bg-violet-600/10 dark:bg-violet-600/20 text-violet-600 dark:text-violet-400 border border-violet-500/20 dark:border-violet-500/30'
                          : 'text-gray-500 dark:text-zinc-500 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  )
                })}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-200 dark:border-white/5">
                <p className="text-gray-400 dark:text-zinc-500 text-[10px] uppercase tracking-widest">
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