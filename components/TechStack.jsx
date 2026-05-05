"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { DiDjango } from "react-icons/di";
import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiGithub,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export default function TechStack() {
  return (
    <Section id="tech">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-muted-foreground mt-2">
          Tools & technologies I use
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="glass p-5 rounded-2xl flex flex-col items-center gap-2 hover:shadow-lg transition"
          >
            <span className="text-3xl text-primary">
              {tech.icon}
            </span>
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}