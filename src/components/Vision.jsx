import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B2D26]/10 dark:bg-yellow-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B2D26]/10 dark:bg-yellow-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">

        <motion.div
          className="rounded-2xl p-12 text-center bg-white dark:bg-black border border-[#7B2D26]/30 dark:border-yellow-100/30 transition-colors duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-8 text-[#7B2D26] dark:text-yellow-100">
            Why ARMB. ?
          </h2>

          {/* Intro Text */}
          <div className="mb-12">
            <p className="text-xl font-body leading-relaxed mb-8 text-[#7B2D26] dark:text-yellow-100">
              <span className="font-semibold">
                At ARMB., we believe AI should simplify learning, optimize decisions, and scale human potential — not replace it.
              </span>
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

            <motion.div
              className="text-left p-6 rounded-lg border border-[#7B2D26]/30 dark:border-yellow-100/30 hover:border-[#7B2D26] dark:hover:border-yellow-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold font-heading mb-3 text-[#7B2D26] dark:text-yellow-100">
                Our Mission
              </h3>

              <p className="text-[#7B2D26] dark:text-yellow-100 font-body leading-relaxed">
                Empower educators and business leaders with intelligent AI tools that enhance decision-making, boost productivity, and unlock human potential.
              </p>
            </motion.div>

            <motion.div
              className="text-left p-6 rounded-lg border border-[#7B2D26]/30 dark:border-yellow-100/30 hover:border-[#7B2D26] dark:hover:border-yellow-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold font-heading mb-3 text-[#7B2D26] dark:text-yellow-100">
                Our Vision
              </h3>

              <p className="text-[#7B2D26] dark:text-yellow-100 font-body leading-relaxed">
                To transform the EdTech and business landscape by creating seamless, intelligent, and ethical AI solutions that redefine how learning and work happens.
              </p>
            </motion.div>

          </div>

          {/* Quote */}
          <motion.div
            className="mt-12 pt-8 border-t border-[#7B2D26]/30 dark:border-yellow-100/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[#7B2D26] dark:text-yellow-100 text-lg font-body italic">
              "AI is not the future—it's the present. And we're building it right."
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Vision;