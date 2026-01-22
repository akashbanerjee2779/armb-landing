import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 gradient-text">
            Start Your AI Journey With ARMB.
          </h2>
          <p className="text-gray-300 text-lg font-body">
            Get in touch with us to explore how our AI solutions can transform your organization
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Info Cards */}
          <motion.div
            className="glass rounded-xl p-6 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 inline-block p-3 bg-cyan-500/20 rounded-lg">
              <ArrowRight className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold font-heading mb-2">Quick Response</h3>
            <p className="text-gray-400 text-sm font-body">We typically respond within 24 hours</p>
          </motion.div>

          <motion.div
            className="glass rounded-xl p-6 text-center"
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4 inline-block p-3 bg-purple-500/20 rounded-lg">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold font-heading mb-2">Expert Team</h3>
            <p className="text-gray-400 text-sm font-body">Speak with AI & business experts</p>
          </motion.div>

          <motion.div
            className="glass rounded-xl p-6 text-center"
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 inline-block p-3 bg-blue-500/20 rounded-lg">
              <ArrowRight className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold font-heading mb-2">Custom Solutions</h3>
            <p className="text-gray-400 text-sm font-body">Tailored for your unique needs</p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-block">
                <CheckCircle className="w-16 h-16 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">Thank You!</h3>
              <p className="text-gray-300 font-body">
                We've received your message and will get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold font-heading mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 transition-colors duration-300 font-body"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold font-heading mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 transition-colors duration-300 font-body"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-semibold font-heading mb-2">
                  Company / Institution
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 transition-colors duration-300 font-body"
                  placeholder="Your company or institution"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-semibold font-heading mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 transition-colors duration-300 font-body resize-none"
                  placeholder="Tell us about your needs..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg font-heading hover:shadow-lg glow-blue transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
