"use client";
import logo from "../../public/lokman hossen portfolio.png";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { GrNotes } from "react-icons/gr";

const socials = [
  { icon: FiGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/", label: "Twitter" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 * i, ease: "easeOut" },
  }),
};

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500 px-6 py-24 md:py-0"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-violet-400/20 dark:bg-violet-700/20 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[24rem] h-[24rem] bg-fuchsia-400/10 dark:bg-fuchsia-700/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-black/10 dark:border-white/10 rounded-full overflow-hidden p-2">
              <Image
                src={logo}
                alt="Lokman Hossen"
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover rounded-full transition-all duration-700"
              />
            </div>

            <div className="absolute top-6 -right-2 md:top-10 md:-right-4 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md z-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-gray-900 dark:text-white text-[10px] font-black tracking-[0.2em] uppercase">
                Online
              </span>
            </div>

            {/* Experience badge */}
            {/* <div className="absolute bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white/90 dark:bg-gray-950/90 border border-black/10 dark:border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-lg">
              <p className="text-gray-900 dark:text-white text-lg font-black leading-none">1+</p>
              <p className="text-gray-500 dark:text-gray-500 text-[9px] uppercase tracking-widest mt-1">
                Years Exp.
              </p>
            </div> */}
          </div>
        </motion.div>

        {/* TEXT CONTENT SIDE */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="justify-center md:justify-start text-violet-600 dark:text-violet-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 flex items-center gap-2"
          >
            <span className="w-8 h-[1px] bg-violet-600 dark:bg-violet-400" />I
            Build Fast & Modern Web Apps
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="text-gray-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Lokman Hossen
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            <AnimatedText />
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="text-gray-600 dark:text-gray-400 mt-6 max-w-lg text-lg leading-relaxed mx-auto md:mx-0"
          >
            Crafting high-performance web experiences through clean code and
            intuitive design systems.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap justify-center md:justify-start gap-5"
          >
            <Button
              onPress={() => scrollToSection("projects")}
              radius="full"
              size="lg"
              className="group bg-violet-600 hover:bg-violet-700 text-white px-8 font-bold text-sm shadow-lg shadow-violet-900/20"
            >
              View Work <FiArrowUpRight></FiArrowUpRight>
            </Button>

            <Link
              href="https://drive.google.com/file/d/1I9QDlyNiXVeC4JUPbiwEvYPqaoY8EbJ_/view"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              <span>View Resume</span>
              <GrNotes className="text-base text-neutral-500 dark:text-neutral-400" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
