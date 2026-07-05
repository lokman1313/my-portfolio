"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Chip, Button, Tooltip } from "@heroui/react";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import tile from "../../public/tiles-gallary.png";
import knowledge from "../../public/knowledge-hub.png";
import idea from "../../public/idea.png";
import Link from "next/link";

const projects = [
  {
    title: "Tiles Gallery",
    desc: "A responsive tile-browsing platform with instant search, protected routes, and secure BetterAuth authentication.",
    tags: ["Next.js", "Tailwind CSS", "DaisyUI", "BetterAuth", "MongoDB"],
    link: "https://assignment-08-orpin.vercel.app/",
    gitlink: "https://github.com/lokman1313/assignment-08",
    image: tile,
  },
  {
    title: "IdeaVault",
    desc: "A startup idea-sharing community with JWT-protected routes, live comments, category filters, and a trending feed.",
    tags: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Framer Motion"],
    link: "https://idea-vault-vert.vercel.app/",
    gitlink: "https://github.com/lokman1313/Idea-Vault",
    image: idea,
  },
  {
    title: "Knowledge Hub",
    desc: "A full-stack book delivery platform with Stripe payments, role-based dashboards, and real-time analytics.",
    tags: ["Next.js 15", "Express.js", "MongoDB", "Stripe", "HeroUI"],
    link: "https://knowledge-hub-navy.vercel.app/",
    gitlink: "https://github.com/lokman1313/Knowledge-Hub",
    image: knowledge,
    featured: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    // Thêm relative và overflow-hidden vào đây để chứa 2 đốm sáng tuyệt đối (absolute)
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-gray-950 text-foreground px-6 overflow-hidden transition-colors duration-500"
    >
      {/* Ambient background glow (Góc trên bên phải) */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-fuchsia-400/5 dark:bg-fuchsia-700/10 blur-[120px] rounded-full transition-colors duration-500" />

      {/* Ambient background glow (Góc dưới bên trái) */}
      <div className="pointer-events-none absolute -bottom-32 -left-16 w-[24rem] h-[24rem] bg-violet-400/10 dark:bg-violet-700/20 blur-[120px] rounded-full transition-colors duration-500" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
              Selected Works
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-md text-sm md:text-base">
              A collection of full-stack products where design meets functional,
              production-ready code.
            </p>
          </div>

          <Link
            href="https://github.com/lokman1313?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full px-4 border-violet-500/40 text-violet-600 dark:text-violet-400 font-bold uppercase text-xs tracking-widest hover:bg-violet-500/10 flex justify-center items-center"
          >
            <span>View All Projects</span> <FiArrowRight />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="group relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 bg-gradient-to-b from-white via-white to-violet-50/40dark:from-zinc-900 dark:via-zinc-900 dark:to-violet-950/30 border-zinc-200/70 dark:border-white/10 shadow-md shadow-zinc-200/50 dark:shadow-black/30 ackdrop-blur-sm hover:border-violet-500/40 dark:hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-violet-500/10 focus-within:ring-2 focus-within:ring-violet-500"
            >
              {project.featured && (
                <span className="absolute top-4 left-4 z-10 text-[9px] font-bold tracking-widest uppercase text-white bg-violet-600 px-2.5 py-1 rounded-full">
                  Featured
                </span>
              )}

              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Tooltip content="Open live site" color="secondary">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live site`}
                      className="bg-violet-600 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-violet-500"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </Tooltip>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      size="sm"
                      variant="flat"
                      className="text-[9px] font-bold tracking-widest uppercase bg-violet-500/10 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-zinc-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-xs leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                {/* Footer Card */}
                <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-white/5 flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                    className="text-zinc-400 dark:text-white/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <FiExternalLink size={18} />
                  </a>
                  <a
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="text-zinc-400 dark:text-white/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
