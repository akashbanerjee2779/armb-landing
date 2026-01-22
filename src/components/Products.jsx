import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Brain,
  BarChart3,
  Workflow,
} from 'lucide-react'

const Products = () => {
  const products = [
    {
      icon: Brain,
      title: 'AI Smart Teaching Assistant',
      description: 'Intelligent tutoring system that adapts to student learning patterns',
    },
    {
      icon: Zap,
      title: 'AI Business Decision Engine',
      description: 'Real-time analytics and predictive insights for business optimization',
    },
    {
      icon: BarChart3,
      title: 'Unified Analytics Platform',
      description: 'Comprehensive data visualization and insights across all metrics',
    },
    {
      icon: Workflow,
      title: 'Intelligent Workflow Automation',
      description: 'Streamline operations with AI-powered process automation',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-primary via-primary to-primary/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 gradient-text">
            Our Products & Solutions
          </h2>
          <p className="text-gray-300 text-lg font-body max-w-3xl mx-auto">
            Cutting-edge AI solutions designed for modern education and business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative h-full"
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Gradient border effect - Always visible */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-30 group-hover:opacity-100 transition-all duration-300 -z-10 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-80 transition-all duration-300 -z-10" />
                
                {/* Card background */}
                <div className="rounded-2xl p-8 h-full backdrop-blur-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300 shadow-2xl group-hover:shadow-2xl group-hover:shadow-cyan-500/40">
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon container with enhanced styling */}
                    <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-cyan-500/50 to-blue-500/50 rounded-xl group-hover:from-cyan-500/70 group-hover:to-blue-500/70 transition-all duration-300 border border-cyan-400/40 group-hover:border-cyan-300/80 shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/40 w-fit">
                      <Icon className="w-8 h-8 text-white group-hover:text-cyan-100 transition-colors duration-300" />
                    </div>

                    {/* Title - Improved visibility */}
                    <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-200 group-hover:via-blue-200 group-hover:to-purple-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm font-body leading-relaxed mb-6 flex-grow group-hover:text-gray-100 transition-colors duration-300">
                      {product.description}
                    </p>

                    {/* CTA Link */}
                    <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-all duration-300 cursor-pointer mt-auto">
                      <span>Explore</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Products
