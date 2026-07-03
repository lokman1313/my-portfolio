'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiFacebook, FiLoader } from 'react-icons/fi'
import { toast } from 'react-toastify'

export default function Contact() {
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent. I'll get back to you soon.")
        e.target.reset()
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.")
      })
      .finally(() => {
        setIsSending(false)
      })
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/lokman1313",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/lokman-hossen-dev/",
    },
    {
      name: "Facebook",
      icon: FiFacebook,
      url: "https://www.facebook.com/lokman.hossen.697687",
    },
  ]

  const contactDetails = [
    {
      icon: FiMail,
      label: "Email Me",
      value: "lokmant733@email.com",
      href: "mailto:lokmant733@email.com",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Rangpur, Bangladesh",
      href: null,
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-gray-950 text-foreground px-6 overflow-hidden transition-colors duration-500"
    >
      {/* Background Ambient Glows - Position Swapped & Improved Opacity */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-[26rem] h-[26rem] bg-violet-400/10 dark:bg-violet-700/20 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[28rem] h-[28rem] bg-fuchsia-400/20 dark:bg-fuchsia-600/10 blur-[130px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Contact Info (Takes 5 cols on large screens) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-10 lg:col-span-5"
          >
            <div>
              <p className="text-violet-600 dark:text-violet-400 uppercase tracking-[0.25em] text-xs font-bold mb-3 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-violet-600 dark:bg-violet-400 rounded-full" />
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
                Let's Connect
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-5 max-w-sm text-base md:text-lg leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={idx}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-5 group p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 shadow-sm hover:shadow-md hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-300 backdrop-blur-md"
                  >
                    <div className="p-3.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group-hover:bg-violet-50 dark:group-hover:bg-violet-950/50 group-hover:border-violet-500/30 transition-colors shrink-0">
                      <Icon className="text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500">{item.label}</p>
                      <p className="text-slate-800 dark:text-slate-200 font-medium text-sm md:text-base break-all">{item.value}</p>
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-4">Follow Me</p>
              <div className="flex gap-3.5">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 dark:hover:border-violet-500/40 shadow-sm hover:shadow-[0_8px_30px_rgb(124,58,237,0.12)] transition-all duration-300"
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form (Takes 7 cols on large screens) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest ml-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full  border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 shadow-sm transition-all"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest  ml-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                    placeholder="Type your Email..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest  ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  required
                  className="w-full  border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 shadow-sm transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-600/60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-violet-600/20 active:shadow-none hover:shadow-violet-600/30"
              >
                {isSending ? (
                  <>
                    <FiLoader className="animate-spin text-lg" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend className="text-sm group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}