'use client'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { toast } from 'react-toastify'

export default function Contact() {
  const handleSubmit = (e) => {
  e.preventDefault()

  emailjs.sendForm(
  process.env.NEXT_PUBLIC_SERVICE_ID,
  process.env.NEXT_PUBLIC_TEMPLATE_ID,
  e.target,
  process.env.NEXT_PUBLIC_PUBLIC_KEY
)
  .then(() => {
    toast.success("I will get in touch with you very soon.")
  })
  .catch(() => {
    toast.error("Send fail 😐")
  })

  e.target.reset()
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
  return (
    <section id="contact" className="py-24 bg-gray-950 px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Let's Connect<span className="text-violet-500">.</span>
              </h2>
              <p className="text-gray-500 mt-4 max-w-sm text-lg">
                Have a project in mind or just want to say hi? Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-gray-900 border border-white/5 rounded-2xl group-hover:border-violet-500/50 transition-colors">
                  <FiMail className="text-violet-500" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Email Me</p>
                  <p className="text-white font-medium">lokmant733@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-gray-900 border border-white/5 rounded-2xl group-hover:border-violet-500/50 transition-colors">
                  <FiMapPin className="text-violet-500" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Location</p>
                  <p className="text-white font-medium">Rangpur, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Follow Me</p>
              <div className="flex gap-4">
               {socialLinks.map((item, idx) => {
                 const Icon = item.icon
             
                 return (
                   <motion.a
                     key={idx}
                     href={item.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ y: -5 }}
                     className="p-4 bg-gray-900 border border-white/5 rounded-xl text-gray-400 hover:text-white hover:border-violet-500/50 transition-all"
                   >
                     <Icon size={20} />
                   </motion.a>
                 )
               })}
                </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Name</label>
                  <input 
                    type="text"
                    name="name" 
                    className="w-full bg-gray-950 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                  <input 
                    type="email"
                    name="email"
                    className="w-full bg-gray-950 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea 
                  rows="5"
                  name="message"
                  className="w-full bg-gray-950 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-violet-900/20"
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}