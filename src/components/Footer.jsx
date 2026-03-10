import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Facebook, X } from "lucide-react";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  // Color logic
  const headingColor = darkMode ? "text-yellow-100" : "text-[#7B2D26]";
  const textColor = darkMode ? "text-yellow-100" : "text-[#7B2D26]";
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const borderColor = darkMode ? "border-yellow-100/30" : "border-[#7B2D26]/20";

  const socialLinks = [
    { Icon: Mail, link: "mailto:armb.founder@gmail.com", external: false },
    {
      Icon: Linkedin,
      link: "https://www.linkedin.com/company/amrbgroups/",
      external: true,
    },
    {
      Icon: Instagram,
      link: "https://www.instagram.com/armb.co.in",
      external: true,
    },
    {
      Icon: Facebook,
      link: "https://www.facebook.com/share/1Bs3RLEKgK/",
      external: true,
    },
    { Icon: X, link: "https://x.com/armb_co_in", external: true },
  ];

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${bgColor}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>
              ARMB.
            </h3>
            <p className={`text-sm ${textColor}`}>
              Building the future of AI in education and business
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${headingColor}`}>
              Quick Links
            </h4>
            <ul className={`space-y-2 text-sm ${textColor}`}>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${headingColor}`}>
              Connect With Us
            </h4>

            <div className="flex gap-4">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target={item.external ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border ${borderColor} ${textColor} hover:scale-110 transition`}
                >
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className={`border-t my-8 ${borderColor}`} />

        {/* Bottom */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`${textColor} text-sm italic`}>
            ARMB. © {currentYear}. All rights reserved.
          </p>

          <p className={`${textColor} text-sm italic`}>
            Made with AI-first mindset 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;