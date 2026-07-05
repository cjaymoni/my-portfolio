"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light text-dark relative border-t border-gray-200">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-2 text-dark">Jude Clottey</h2>
            <p className="text-dark/60 text-lg font-medium">
              Fullstack Web Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 justify-center md:justify-end"
          >
            {[
              {
                name: "GitHub",
                href: "https://github.com/cjaymoni",
                icon: FaGithub,
              },
              {
                name: "LinkedIn",
                href: "http://linkedin.com/in/jude-clottey-647698151/",
                icon: FaLinkedin,
              },
              {
                name: "Email",
                href: "mailto:judeclottey1@gmail.com",
                icon: FaEnvelope,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.name}
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-primary text-dark/70 hover:text-white border border-gray-200 transition-all shadow-sm hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-dark/50"
        >
          <p>
            &copy; {new Date().getFullYear()} Jude Clottey. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-primary transition-colors cursor-pointer font-medium">
              Privacy Policy
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer font-medium">
              Terms of Service
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
