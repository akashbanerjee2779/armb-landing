import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading gradient-text mb-2">
              ARMB.
            </h3>
            <p className="text-gray-400 font-body text-sm">
              Building the future of AI in education and business
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="mailto:armb.founder@gmail.com"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/amrbgroups/"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-400 font-body text-sm">
            ARMB. © {currentYear}. All rights reserved.
          </p>
          <p className="text-gray-400 font-body text-sm italic">
            Made with AI-first mindset 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
