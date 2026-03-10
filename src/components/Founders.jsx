import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import akash from "../assets/images/Akash.png";
import rakesh from "../assets/images/Rakesh.jpeg";

const Founders = () => {
  const founders = [
    {
      name: "Akash Banerjee",
      title: "CTO",
      image: akash,
      email: "akashbanerjee2779@gmail.com",
      linkedin: "https://www.linkedin.com/in/akash-banerjee-4bab1020b/",
      whatsapp: "916290448040",
    },
    {
      name: "Rakesh Mandal",
      title: "CEO",
      image: rakesh,
      email: "rm46770@gmail.com",
      linkedin: "https://www.linkedin.com/in/rakeshmandal-engineer",
      whatsapp: "917001708833",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-[#7B2D26] dark:text-yellow-100">
            Meet Our Founders
          </h2>

          <p className="text-[#7B2D26] dark:text-yellow-100 text-lg font-body">
            Visionaries driving the future of AI in education and business
          </p>
        </motion.div>

        {/* Founder Cards */}
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
              className="rounded-2xl p-8 text-center group border border-[#7B2D26]/30 dark:border-yellow-100/30 bg-white dark:bg-black hover:border-[#7B2D26] dark:hover:border-yellow-100 transition-all duration-300"
              whileHover={{ y: -10 }}
            >

              {/* Avatar */}
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#7B2D26]/20 dark:bg-yellow-100/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-2xl font-bold font-heading mb-2 text-[#7B2D26] dark:text-yellow-100">
                {founder.name}
              </h3>

              {/* Title */}
              <p className="text-[#7B2D26] dark:text-yellow-100 font-semibold text-sm mb-5 font-body">
                {founder.title}
              </p>

              {/* Icons */}
              <div className="flex justify-center gap-4">

                {/* Email */}
                <motion.a
                  href={`mailto:${founder.email}`}
                  className="p-2 rounded-lg border border-[#7B2D26]/30 dark:border-yellow-100/30 text-[#7B2D26] dark:text-yellow-100 hover:bg-[#7B2D26]/10 dark:hover:bg-yellow-100/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[#7B2D26]/30 dark:border-yellow-100/30 text-[#7B2D26] dark:text-yellow-100 hover:bg-[#7B2D26]/10 dark:hover:bg-yellow-100/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${founder.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[#7B2D26]/30 dark:border-yellow-100/30 text-[#7B2D26] dark:text-yellow-100 hover:bg-[#7B2D26]/10 dark:hover:bg-yellow-100/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                </motion.a>

              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;