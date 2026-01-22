import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Founders = () => {
  const founders = [
    {
      name: 'Akash Banerjee',
      title: 'Co-Founder & Product Architect',
      initials: 'AB',
      color: 'from-cyan-500 to-blue-500',
      description: 'Visionary product leader with expertise in AI/ML architecture and EdTech innovation.',
      socials: [
        { icon: Linkedin, href: '#' },
        { icon: Github, href: '#' },
        { icon: Mail, href: '#' },
      ],
    },
    {
      name: 'Rakesh Mandal',
      title: 'Co-Founder & Strategy Lead',
      initials: 'RM',
      color: 'from-purple-500 to-pink-500',
      description: 'Strategic thinker passionate about scaling businesses through intelligent automation.',
      socials: [
        { icon: Linkedin, href: '#' },
        { icon: Github, href: '#' },
        { icon: Mail, href: '#' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 gradient-text">
            Meet Our Founders
          </h2>
          <p className="text-gray-300 text-lg font-body">
            Visionaries driving the future of AI in education and business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-2xl p-8 text-center group hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Avatar */}
              <motion.div
                className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${founder.color} flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl`}
                whileHover={{ rotate: 5 }}
              >
                {founder.initials}
              </motion.div>

              {/* Name and Title */}
              <h3 className="text-2xl font-bold font-heading mb-2">
                {founder.name}
              </h3>
              <p className="text-cyan-400 font-semibold text-sm mb-4 font-body">
                {founder.title}
              </p>

              {/* Description */}
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-6">
                {founder.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {founder.socials.map((social, socialIdx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={socialIdx}
                      href={social.href}
                      className="p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Founders
