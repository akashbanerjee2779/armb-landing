import React from 'react'
import { motion } from 'framer-motion'

const Vision = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />

        <motion.div
          className="glass rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-8 gradient-text">
            Why ARMB. ?
          </h2>

          <div className="mb-12">
            <p className="text-xl text-gray-200 font-body leading-relaxed mb-8">
              <span className="text-cyan-400 font-semibold">
                At ARMB. , we believe AI should simplify learning, optimize decisions, and scale human potential — not replace it.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="text-left p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500/70 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold font-heading text-cyan-400 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-300 font-body leading-relaxed">
                Empower educators and business leaders with intelligent AI tools that enhance decision-making, boost productivity, and unlock human potential.
              </p>
            </motion.div>

            <motion.div
              className="text-left p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/70 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold font-heading text-purple-400 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-300 font-body leading-relaxed">
                To transform EdTech and business landscape by creating seamless, intelligent, and ethical AI solutions that redefine how learning and work happens.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-lg font-body italic">
              "AI is not the future—it's the present. And we're building it right."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision
