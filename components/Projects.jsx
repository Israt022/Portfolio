"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
import { projects } from "@/data/projects";


export default function Projects() {
  // const pro = projec
  return (
    <Section id="projects" className="bg-muted/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Some things I’ve built recently
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold">{project.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 pt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-xs px-3 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition"
                  >
                    GitHub
                  </a>
                  <Link href={`/projects/${project.id}`}
                    className="text-xs px-3 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
