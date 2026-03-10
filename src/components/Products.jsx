import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, BarChart3, Workflow } from 'lucide-react';

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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-[#7B2D26] dark:text-yellow-100">
            Our Products & Solutions
          </h2>

          <p className="text-[#7B2D26] dark:text-yellow-100 text-lg font-body max-w-3xl mx-auto">
            Cutting-edge AI solutions designed for modern education and business
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative h-full"
                whileHover={{ y: -12 }}
              >

                {/* Hover glow */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-300 bg-[#7B2D26]/20 dark:bg-yellow-100/20 blur-sm -z-10"></div>

                <div className="rounded-2xl p-8 h-full backdrop-blur-xl bg-white dark:bg-black border-2 border-[#7B2D26]/30 dark:border-yellow-100/30 group-hover:border-[#7B2D26] dark:group-hover:border-yellow-100 transition-all duration-300 shadow-xl">

                  <div className="flex flex-col h-full">

                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 rounded-xl bg-[#7B2D26]/10 dark:bg-yellow-100/10 border border-[#7B2D26]/30 dark:border-yellow-100/30 w-fit">
                      <Icon className="w-8 h-8 text-[#7B2D26] dark:text-yellow-100" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-heading mb-4 text-[#7B2D26] dark:text-yellow-100">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#7B2D26] dark:text-yellow-100 text-sm font-body leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>

                    {/* Explore */}
                    <div className="inline-flex items-center gap-2 text-[#7B2D26] dark:text-yellow-100 text-sm font-semibold cursor-pointer mt-auto group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
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
  );
};

export default Products;