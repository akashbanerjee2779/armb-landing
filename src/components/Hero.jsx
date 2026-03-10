import React from 'react'
import { motion } from 'framer-motion'
import logoLight from '../assets/images/logo_light.png'   // logo for light mode
import logoDark from '../assets/images/logo_dark.png'     // logo for dark mode

const Hero = ({ darkMode }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 0.9, 1.1, 1],
      opacity: [0.2, 0.35, 0.2, 0.35, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-white dark:bg-black transition-colors duration-500">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#7B2D26]/20 dark:bg-yellow-100/20 rounded-full blur-3xl"
          variants={blobVariants}
          animate="animate"
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7B2D26]/20 dark:bg-yellow-100/20 rounded-full blur-3xl"
          variants={blobVariants}
          animate="animate"
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#7B2D26]/20 dark:bg-yellow-100/20 rounded-full blur-3xl"
          variants={blobVariants}
          animate="animate"
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />

      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Logo */}
        <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
          <div className="w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden border border-[#7B2D26]/40 dark:border-yellow-100/40">

            <img
              src={darkMode ? logoDark : logoLight}
              alt="ARMB Logo"
              className="w-full h-full object-cover transition-all duration-300"
              onError={(e) => { e.target.style.display = 'none' }}
            />

          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6 transition-colors duration-500 ${
            darkMode ? 'text-yellow-100' : 'text-[#7B2D26]'
          }`}
          variants={itemVariants}
        >
          Building AI That Powers the Future of Education & Business
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-body transition-colors duration-500 ${
            darkMode ? 'text-yellow-100' : 'text-[#7B2D26]'
          }`}
          variants={itemVariants}
        >
          ARMB. creates intelligent AI products that redefine EdTech and empower modern business proprietors.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >

          <motion.button
            className={`px-8 py-3 font-semibold rounded-lg font-heading transition-all duration-300 ${
              darkMode
                ? 'bg-yellow-100 text-black hover:bg-yellow-200'
                : 'bg-[#7B2D26] text-white hover:bg-[#5a1f1a]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
          </motion.button>

          <motion.button
            className={`px-8 py-3 font-semibold rounded-lg font-heading transition-all duration-300 ${
              darkMode
                ? 'bg-yellow-100 text-black hover:bg-yellow-200'
                : 'bg-[#7B2D26] text-white hover:bg-[#5a1f1a]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>

        </motion.div>

        <motion.p
          className={`text-sm font-body transition-colors duration-500 ${
            darkMode ? 'text-yellow-100' : 'text-[#7B2D26]'
          }`}
          variants={itemVariants}
        >
          ↓ Scroll to explore what we offer
        </motion.p>

      </motion.div>
    </section>
  )
}

export default Hero