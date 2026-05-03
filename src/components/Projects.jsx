'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    title: "Gadget Heaven",
    desc: "A premium tech e-commerce platform featuring dynamic category filtering and cart management.",
    tags: ["React", "Tailwind", "Context API"],
    link: "https://assignment-08-orpin.vercel.app/",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Global News Portal",
    desc: "A high-performance news application with real-time data fetching and breaking news alerts.",
    tags: ["Next.js", "Vercel", "API Integration"],
    link: "https://news-paper-7u7x.vercel.app/",
    image: "https://images.unsplash.com/photo-1504711432869-efd597cdd042?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Modern UI Showcase",
    desc: "Interactive product landing page with smooth Framer Motion animations and glassmorphic design.",
    tags: ["React", "Framer Motion", "Netlify"],
    link: "https://fluffy-nougat-4007a9.netlify.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Creative Portfolio Hub",
    desc: "Minimalist web application focusing on typography and whitespace for a premium user experience.",
    tags: ["JavaScript", "CSS3", "Responsive"],
    link: "https://deft-truffle-2fa711.netlify.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Interactive Dashboard",
    desc: "Data-driven dashboard with real-time charts and user interaction monitoring.",
    tags: ["React", "Charts.js", "Netlify"],
    link: "https://guileless-paletas-f3a9c8.netlify.app/",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Service Platform",
    desc: "A functional service-based web app built with a focus on speed and performance.",
    tags: ["HTML", "Tailwind", "JS"],
    link: "https://joyful-scone-bd5149.netlify.app/",
    image: "https://images.unsplash.com/photo-1454165833767-02a698d5874c?q=80&w=800&auto=format&fit=crop"
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
                <img 
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
                   <button className="text-white/40 hover:text-white transition-colors">
                     <FiGithub size={18} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}