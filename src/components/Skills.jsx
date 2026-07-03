'use client'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiAuth0, SiNpm, SiFramer } from 'react-icons/si'
import { HiOutlineTemplate } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FaReact className="text-blue-400" />,
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript (ES6)', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
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
      { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white" /> },
      { name: 'NPM Packages', icon: <SiNpm className="text-red-500" /> },
      { name: 'HeroUI', icon: <HiOutlineTemplate className="text-violet-500" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-fuchsia-500" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      {/* Ambient background glow — matches Hero section */}
      <div className="pointer-events-none absolute -top-34 -left-32 w-[28rem] h-[28rem] bg-violet-400/20 dark:bg-violet-700/20 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[24rem] h-[24rem] bg-fuchsia-400/10 dark:bg-fuchsia-700/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="text-violet-600 dark:text-violet-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-violet-600 dark:bg-violet-400" />
            What I Work With
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Technical Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl">
            A list of my preferred technologies for building high-quality web applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="group p-8 bg-gray-50/80 dark:bg-gray-900/50 border border-black/5 dark:border-white/5 rounded-3xl hover:border-violet-500/30 dark:hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl p-3 bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 rounded-2xl group-hover:bg-violet-500/10 dark:group-hover:bg-violet-500/20 transition-colors">
                  {category.icon}
                </span>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800/40 border border-black/5 dark:border-white/5 rounded-full text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:border-violet-500/20 dark:group-hover:border-white/10 transition-all"
                  >
                    <span className="text-base">{skill.icon}</span>
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