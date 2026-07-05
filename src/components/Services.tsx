"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Database,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Laptop size={32} className="text-dark" />,
    title: "Web App Development",
    price: "",
    description:
      "Engineering impactful, efficient, and easy-to-use web apps and portals using React, Angular, Node.js, Laravel, and modern UI libraries like Tailwind CSS and Bootstrap.",
  },
  {
    icon: <Smartphone size={32} className="text-dark" />,
    title: "Mobile App Development",
    price: "",
    description:
      "Building cross-platform mobile applications with React Native and Flutter, delivering striking UI and resilient back ends for both iOS and Android.",
  },
  {
    icon: <Database size={32} className="text-dark" />,
    title: "Data Engineering",
    price: "",
    description:
      "Designing and building scalable data pipelines and infrastructure using Apache Spark, Kafka, Airflow, Hadoop Hive, and Apache Beam with PostgreSQL and MySQL.",
  },
  {
    icon: <GitBranch size={32} className="text-dark" />,
    title: "DevOps & CI/CD",
    price: "",
    description:
      "Setting up and maintaining CI/CD pipelines, containerised deployments with Docker, and version control workflows using GitHub and Bitbucket.",
  },
  {
    icon: <ShieldCheck size={32} className="text-dark" />,
    title: "Auth & Security",
    price: "",
    description:
      "Implementing secure authentication and authorisation solutions using Keycloak, including SSO, role-based access control, and identity federation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl sm:text-5xl font-bold text-dark mb-4 md:mb-0"
          >
            My Services
          </motion.h2>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg inline-block text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-semibold text-dark">
                    {service.title}
                  </h4>
                  {/* <h6 className="text-lg text-dark/70">
                    Start from{" "}
                    <span className="text-primary font-bold">
                      {service.price}
                    </span>
                  </h6> */}
                  <p className="text-dark/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
