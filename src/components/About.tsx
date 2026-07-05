"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Briefcase, FolderGit2 } from "lucide-react";

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" className="py-16 md:py-20 lg:py-32 bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pr-0 lg:pr-8 w-full"
          >
            <div className="flex items-center gap-6 mb-6 flex-wrap">
              <div className="text-center flex-shrink-0">
                <div className="text-8xl font-bold text-primary">5</div>
                <div className="text-lg font-semibold text-dark/80">Years</div>
              </div>
              <h3 className="text-2xl font-semibold text-dark">
                of working experience as a software developer
              </h3>
            </div>

            <p className="text-dark/70 text-lg leading-relaxed">
              Passionate about creating impactful, efficient, and user-friendly
              digital solutions. I specialize in building modern web applications
              that solve real-world problems.
            </p>

            <div className="space-y-4">
              {[
                "Affordable Prices",
                "High Quality Product",
                "On Time Project Delivery",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-dark font-medium"
                >
                  <CheckCircle className="text-primary" size={20} />
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Right Column — Clean stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 pl-0 lg:pl-8 w-full justify-center"
          >
            {/* Professional tech abstract card instead of profile image */}
            <div className="rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100 relative p-8 flex flex-col justify-between min-h-[18rem] group">
              {/* Warm, sunny gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 border border-gray-100">
                  <span className="text-xl font-bold text-primary">JC</span>
                </div>
                <h4 className="text-2xl font-bold text-dark leading-snug">
                  Building scalable <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">digital ecosystems</span>
                </h4>
              </div>
              
              <div className="relative z-10 flex gap-3 mt-8">
                <div className="h-1.5 w-12 bg-primary rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* Minimal stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <p className="text-sm text-dark/60 font-medium">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FolderGit2 className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <p className="text-sm text-dark/60 font-medium">
                  Projects Delivered
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
