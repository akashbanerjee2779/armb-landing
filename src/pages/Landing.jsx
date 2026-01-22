import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Vision from '../components/Vision'
import Founders from '../components/Founders'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <motion.main
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Products />
      <Vision />
      <Founders />
      <Contact />
      <Footer />
    </motion.main>
  )
}

export default Landing
