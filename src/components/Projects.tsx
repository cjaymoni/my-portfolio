"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Eye, ExternalLink, X } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "RentHelper",
    image: "/images/renthelper_home.png",
    link: "https://staging.renthelper.co.uk",
    category: "Web App",
  },
  {
    title: "MSME Gateway Platform",
    image: "/images/msmegateway.png",
    link: "https://msmegateway.com/",
    category: "Web App",
  },
  {
    title: "Zroin",
    image: "/images/zroin_home.png",
    link: "https://staging.zroin.com",
    category: "Web App",
  },
  {
    title: "DP Platform",
    image: "/images/dp_home.png",
    link: "#",
    category: "Web App",
  },
  {
    title: "AirRand",
    image: "/images/airrand_home.png",
    link: "#",
    category: "Web App",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("Web App");
  const [preview, setPreview] = useState<Project | null>(null);

  const filteredProjects =
    filter === "Web App"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl sm:text-5xl font-bold text-dark mb-4 md:mb-0"
          >
            My Projects
          </motion.h2>
          <div className="flex gap-4">
            {["Web App"].map((category) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? "bg-primary text-white"
                    : "text-dark/70 hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div
                className="aspect-square relative overflow-hidden cursor-pointer"
                onClick={() => setPreview(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay - visible on hover (desktop) */}
                <div className="absolute inset-0 bg-primary/90 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4 w-full">
                    <button
                      onClick={(e) => { e.stopPropagation(); setPreview(project); }}
                      className="flex-1 bg-white text-primary p-3 rounded-lg flex items-center justify-center active:scale-95 transition-transform"
                    >
                      <Eye size={20} />
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-white text-primary p-3 rounded-lg flex items-center justify-center active:scale-95 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-dark">{project.title}</h3>
                <p className="text-sm text-dark/70">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setPreview(null)}
                className="absolute top-4 right-6 z-20 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors border border-gray-100"
              >
                <X size={20} className="text-dark" />
              </button>
              <div className="w-full max-h-[75vh] overflow-y-auto bg-gray-100 relative custom-scrollbar">
                <img
                  src={preview.image}
                  alt={preview.title}
                  className="w-full h-auto object-top"
                />
              </div>
              <div className="p-6 flex items-center justify-between border-t border-gray-100 bg-white z-10">
                <div>
                  <h3 className="font-semibold text-dark">{preview.title}</h3>
                  <p className="text-sm text-dark/70">{preview.category}</p>
                </div>
                {preview.link !== "#" && (
                  <a
                    href={preview.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
                  >
                    Visit site <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
