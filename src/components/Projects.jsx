'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import tile from "../../public/tiles_gallery_thumbnail.svg"
import dragon from "../../public/dragon_news_thumbnail.svg"
import cricket from "../../public/cricket_dream11_epic_thumbnail.svg"
import keenkeper from "../../public/keenkepper.png"
import digi from "../../public/digitool.png"
import book from "../../public/book.png"

const projects = [
  {
    title: "Tiles Gallary",
    desc: "A premium tech e-commerce platform featuring high-speed dynamic category filtering and a seamless cart management system.",
    tags: [ "Tailwind","Vercel","Next.js","DaisyUi","MongoDB"],
    link: "https://assignment-08-orpin.vercel.app/",
    gitlink :"https://github.com/lokman1313/assignment-08",
    image: tile
  },
  {
    title: "Global News Portal",
    desc: "A high-speed news platform featuring real-time data synchronization and instantaneous breaking news notifications for a seamless user experience.",
    tags: ["Next.js", "Vercel", "API Integration","HeroUI"],
    link: "https://news-paper-7u7x.vercel.app/",
    gitlink :"https://github.com/lokman1313/Next-js-Authenticetion/tree/main",
    image: dragon
  },
  {
    title: "Cricket Player Choosing",
    desc: "An interactive landing page featuring sleek Framer Motion animations and a modern glassmorphic interface for a premium user experience.",
    tags: ["React", "Context API", "Netlify","DaisyUI"],
    link: "https://fluffy-nougat-4007a9.netlify.app/",
    gitlink :"https://github.com/lokman1313/modul-35",
    image: cricket
  },
  {
    title: "KeenKeeper",
    desc: "A minimalist web app utilizing strategic whitespace and elegant typography to deliver a sophisticated travel experience.",
    tags: ["JavaScript", "CSS3", "Responsive"],
    link: "https://assignment-07-nu.vercel.app/",
    gitlink :"https://github.com/lokman1313/assignment-07/tree/main",
    image: keenkeper
  },
  {
    title: "Digi Tools",
    desc: "A high-performance, data-driven dashboard featuring real-time analytics and advanced user interaction monitoring.",
    tags: ["React", "Charts.js", "Netlify"],
    link: "https://guileless-paletas-f3a9c8.netlify.app/",
    gitlink :"https://github.com/lokman1313/Assignment-06",
    image: digi
  },
  {
    title: "Book Reading",
    desc: "Book Reading: A high-performance, service-oriented web app designed for a seamless reading experience.",
    tags: ["HTML", "Tailwind", "JS"],
    link: "https://joyful-scone-bd5149.netlify.app/",
    gitlink :"https://github.com/lokman1313/Book-Reading",
    image: book
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Selected Works<span className="text-violet-500">.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-md">
              A collection of projects where I blend design aesthetics with functional code.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-violet-400 font-bold flex items-center gap-2 uppercase text-xs tracking-widest"
          >
            View All Projects <FiArrowRight />
          </motion.button>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 border border-white/5 rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all duration-500 shadow-xl"
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-violet-600 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold tracking-widest uppercase text-violet-400 bg-violet-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-xs leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                <div className="mt-5 pt-5 border-t border-white/5 flex gap-4">
                   <a href={project.link} target="_blank" className="text-white/40 hover:text-white transition-colors">
                     <FiExternalLink size={18} />
                   </a>
                   <a href={project.gitlink} target="_blank" className="text-white/40 hover:text-white transition-colors">
                     <FiGithub size={18} />
                   </a>
                   
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}