"use client";

import { motion } from "framer-motion";
import { Card, Chip } from "@heroui/react";
import { FiCode, FiCpu, FiLayout } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-gray-950 text-foreground px-6 overflow-hidden transition-colors duration-500"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-fuchsia-400/10 dark:bg-fuchsia-700/10 blur-[120px] rounded-full" />

      <div className="pointer-events-none absolute -bottom-34 -left-16 w-[24rem] h-[24rem] bg-violet-400/20 dark:bg-violet-700/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
            About Me
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
          {/* Status Chips */}
          <div className="flex flex-wrap gap-3">
            <Chip
              variant="flat"
              color="secondary"
              className="bg-violet-500/10 text-violet-500 dark:text-violet-400 border border-violet-500/20"
            >
              CST Diploma Student
            </Chip>
            <Chip
              variant="flat"
              color="success"
              className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
            >
              MERN Stack Developer
            </Chip>
          </div>

          <p className="text-xl md:text-2xl text-violet-600 dark:text-violet-400 font-semibold leading-snug">
            Bridging structured engineering with modern full-stack web
            development.
          </p>

          <div className="space-y-6 max-w-4xl">
            <p className="text-default-600 text-base md:text-lg leading-relaxed">
              I am a driven{" "}
              <span className="text-foreground font-semibold">
                Computer Science & Technology
              </span>{" "}
              diploma student currently in my final year (7th semester). Over
              the course of my academic journey, I have translated theoretical
              foundations into absolute practical expertise, specializing as a{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
                MERN Stack Developer
              </span>
              .
            </p>

            <p className="text-default-600 text-base md:text-lg leading-relaxed">
              My engineering background pushes me to build things that don't
              just look stunning, but scale seamlessly. From designing database
              architectures in{" "}
              <span className="text-foreground border-b border-violet-500/30">
                MongoDB and Node.js
              </span>{" "}
              to crafting responsive, high-performance interfaces using{" "}
              <span className="text-foreground border-b border-violet-500/30">
                React and Next.js
              </span>
              , I love taking a project from absolute zero to a deployment-ready
              production state.
            </p>
          </div>

          {/* Feature Boxes using HeroUI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
  {/* Card 1 */}
  <Card className="relative overflow-hidden rounded-3xl border border-default-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-violet-500/20 hover:-translate-y-2 transition-all duration-500 group">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative p-7">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
        <FiCode className="text-white text-2xl" />
      </div>

      <h4 className="mt-6 text-xl font-bold">
        MERN Stack Development
      </h4>

      <p className="mt-3 text-default-500 leading-relaxed">
        Building scalable full-stack applications using MongoDB,
        Express.js, React and Node.js.
      </p>

      <div className="mt-6 flex items-center text-violet-500 font-medium">
        Full-Stack Development
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  </Card>

  {/* Card 2 */}
  <Card className="relative overflow-hidden rounded-3xl border border-default-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-violet-500/20 hover:-translate-y-2 transition-all duration-500 group">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative p-7">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
        <FiCpu className="text-white text-2xl" />
      </div>

      <h4 className="mt-6 text-xl font-bold">
        Next.js Ecosystem
      </h4>

      <p className="mt-3 text-default-500 leading-relaxed">
        Creating high-performance applications with SSR, App Router,
        Authentication and SEO optimization.
      </p>

      <div className="mt-6 flex items-center text-violet-500 font-medium">
        Performance First
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  </Card>

  {/* Card 3 */}
  <Card className="relative overflow-hidden rounded-3xl border border-default-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-violet-500/20 hover:-translate-y-2 transition-all duration-500 group">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative p-7">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
        <FiLayout className="text-white text-2xl" />
      </div>

      <h4 className="mt-6 text-xl font-bold">
        UI/UX Engineering
      </h4>

      <p className="mt-3 text-default-500 leading-relaxed">
        Designing responsive, accessible and beautiful interfaces using
        HeroUI, Tailwind CSS and Framer Motion.
      </p>

      <div className="mt-6 flex items-center text-violet-500 font-medium">
        Modern Interfaces
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  </Card>
</div>
        </motion.div>
      </div>
    </section>
  );
}
