import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'

const Hero = () => {
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
      opacity: [0.3, 0.5, 0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
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
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl font-heading glow-blue overflow-hidden">
            {/* Replace with your logo image */}
            <img 
              src={logo} 
              alt="ARMB Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none'
              }}
            />
            <span className="absolute" style={{display: 'none'}}>ARMB</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6 gradient-text"
          variants={itemVariants}
        >
          Building AI That Powers the Future of Education & Business
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-body letter-spacing-wide"
          variants={itemVariants}
        >
          ARMB. creates intelligent AI products that redefine EdTech and empower modern business proprietors.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg font-heading hover:shadow-lg glow-blue transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg font-heading hover:shadow-lg glow-blue transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        <motion.p
          className="text-sm text-gray-400 font-body"
          variants={itemVariants}
        >
          ↓ Scroll to explore what we offer
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
