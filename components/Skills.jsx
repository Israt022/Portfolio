"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend (Learning)",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: "🗄️" },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-muted/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Technologies I use for building web applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              {/* Title */}
              <h3 className="text-center font-semibold mb-6 text-sm uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition group"
                  >
                    {/* Icon */}
                    <span className="text-3xl text-primary group-hover:scale-110 transition">
                      {skill.icon}
                    </span>

                    {/* Name */}
                    <span className="text-xs font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
