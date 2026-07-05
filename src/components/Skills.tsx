"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Laravel (PHP)"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "Kafka", "Hadoop Hive", "Airflow", "Apache Beam", "Atlas", "Minio"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "State Management",
    skills: ["React Redux", "NGRX"],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "React Storybook"],
  },
  {
    title: "UI Libraries",
    skills: ["Tailwind CSS", "Bootstrap", "PrimeFaces"],
  },
  {
    title: "Auth & Security",
    skills: ["Keycloak"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "GitHub", "Bitbucket", "CI/CD"],
  },
  {
    title: "Project Mgmt",
    skills: ["Asana", "Trello", "ClickUp"],
  },
];

const experiences = [
  {
    title: "Fullstack Developer (Hybrid)",
    period: "2025 - present",
    company: "expressPay Ghana Limited",
    location: "Accra, Ghana",
  },
  {
    title: "Fullstack Developer (Hybrid)",
    period: "2023 - 2025",
    company: "ePareto Information Systems",
    location: "Accra, Ghana",
  },
  {
    title: "Frontend Developer (Remote)",
    period: "2022 - 2024",
    company: "Best Adapted Company Limited",
    location: "Farnborough, England",
  },
  {
    title: "Software Developer",
    period: "2019 - 2023",
    company: "GI-KACE",
    location: "Accra, Ghana",
  },
  {
    title: "Frontend Developer (Remote)",
    period: "2021 - present",
    company: "ZroVerse Inc",
    location: "Durham, United States",
  },
];

const educationItems = [
  {
    degree: "BSc Computer Engineering",
    period: "2015 - 2019",
    institution: "University of Ghana (Legon)",
  },
  {
    degree: "WASSCE",
    period: "2012 - 2015",
    institution: "Adisadel College",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const itemsPerPage = 3;
  const activeItems = activeTab === "experience" ? experiences : educationItems;
  const totalPages = Math.ceil(activeItems.length / itemsPerPage);
  const safePage = currentPage < totalPages ? currentPage : 0;
  const currentSlice = activeItems.slice(safePage * itemsPerPage, (safePage + 1) * itemsPerPage);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentPage((prev) => {
        const next = prev + newDirection;
        if (next < 0) return totalPages - 1;
        if (next >= totalPages) return 0;
        return next;
      });
    },
    [totalPages],
  );

  // Auto-advance carousel
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, [totalPages, activeTab, paginate]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section id="skills" className="py-16 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl sm:text-5xl font-bold text-dark mb-16 text-center"
        >
          Skills & Experience
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Technical Skills List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-dark mb-8">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-dark/60 uppercase tracking-wider mb-3">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-light text-dark text-sm font-medium rounded-lg border border-gray-200 hover:border-primary hover:text-primary hover:bg-white transition-all cursor-default shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Education Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tab Switcher */}
            <div className="flex mb-8 bg-light rounded-lg p-1">
              {(["experience", "education"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setCurrentPage(0); setDirection(0); }}
                  className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all capitalize ${
                    activeTab === tab
                      ? "bg-white text-primary shadow-sm"
                      : "text-dark/70 hover:text-dark"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden min-h-[400px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={`${activeTab}-${safePage}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {activeTab === "experience" && (
                    <>
                      {(currentSlice as typeof experiences).map((exp, index) => (
                        <div key={index} className="bg-light rounded-lg p-6 border border-gray-100 shadow-sm">
                          <h5 className="text-xl font-semibold text-dark mb-2">{exp.title}</h5>
                          <div className="h-0.5 w-12 bg-primary mb-3" />
                          <p className="text-primary font-medium mb-1">{exp.period}</p>
                          <h6 className="text-dark font-semibold">{exp.company}</h6>
                          <p className="text-dark/70 text-sm mt-1">{exp.location}</p>
                        </div>
                      ))}
                    </>
                  )}
                  {activeTab === "education" && (
                    <>
                      {(currentSlice as typeof educationItems).map((edu, index) => (
                        <div key={index} className="bg-light rounded-lg p-6 border border-gray-100 shadow-sm">
                          <h5 className="text-xl font-semibold text-dark mb-2">{edu.degree}</h5>
                          <div className="h-0.5 w-12 bg-primary mb-3" />
                          <p className="text-primary font-medium mb-1">{edu.period}</p>
                          <h6 className="text-dark font-semibold">{edu.institution}</h6>
                        </div>
                      ))}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => paginate(-1)}
                  className="w-10 h-10 rounded-full bg-light hover:bg-primary hover:text-white text-dark flex items-center justify-center transition-all"
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > safePage ? 1 : -1);
                        setCurrentPage(index);
                      }}
                      className={`h-2.5 rounded-full transition-all ${
                        index === safePage
                          ? "bg-primary w-6"
                          : "bg-dark/20 hover:bg-dark/40 w-2.5"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => paginate(1)}
                  className="w-10 h-10 rounded-full bg-light hover:bg-primary hover:text-white text-dark flex items-center justify-center transition-all"
                  aria-label="Next Page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
