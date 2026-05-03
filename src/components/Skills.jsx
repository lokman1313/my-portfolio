'use client'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiAuth0 } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FaReact className="text-blue-400" />,
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: 'Backend & Database',
    icon: <FaNodeJs className="text-green-500" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Better Auth', icon: <SiAuth0 className="text-orange-400" /> },
    ],
  },
  {
    title: 'Version Control & Tools',
    icon: <FaGitAlt className="text-red-500" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-red-400" /> },
      { name: 'GitHub', icon: <span className="text-white italic">GH</span> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Technical Stack<span className="text-violet-500">.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl">
            A list of my preferred technologies for building high-quality web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-gray-900/50 border border-white/5 rounded-3xl hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl p-3 bg-gray-800 rounded-2xl group-hover:bg-violet-500/20 transition-colors">
                  {category.icon}
                </span>
                <h3 className="text-white font-bold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/40 border border-white/5 rounded-full text-sm text-gray-300 group-hover:text-white group-hover:border-white/10 transition-all"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}