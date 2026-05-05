"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const education = [
  {
    year: "2020 - 2022",
    title: "SSC (Vocational) – Computer & Information Technology",
    institution: "Completed (Session 2020)",
    description:
      "Completed SSC from Vocational background in Computer & Information Technology trade, gaining foundational knowledge in computer systems, basic programming, and IT fundamentals.",
  },
  {
    year: "2022 - Present",
    title: "Diploma in Engineering – CST (Computer Science & Technology)",
    institution: "7th Semester (Session 2022–23)",
    description:
      "Currently pursuing Diploma in Computer Science & Technology, focusing on software development, web technologies, and modern frameworks like React, Next.js, and Node.js.",
  },
];

export default function Qualification() {
  return (
    <Section id="education">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            My academic background and learning path
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 space-y-10">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-6"
            >

              {/* Dot */}
              <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-primary shadow-lg" />

              <div className="glass p-6 rounded-2xl">

                <span className="text-xs text-primary font-semibold">
                  {item.year}
                </span>

                <h3 className="text-lg font-bold mt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                  {item.institution}
                </p>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </Section>
  );
}