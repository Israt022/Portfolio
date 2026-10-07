"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <Section id="projects" className="bg-muted/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg text-base leading-relaxed">
            A curated collection of projects I've built — from full-stack
            platforms to AI-powered applications.
          </p>
        </motion.div>

        {/* Project List — Editorial / Alternating Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group"
              >
                <div
                  className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "" : "direction-rtl"
                    }`}
                >
                  {/* Image Side */}
                  <motion.div
                    className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={`/projects/${project.id}`} className="block">
                      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
                        {/* Project number overlay */}
                        <div className="absolute top-5 left-5 z-10">
                          <span className="text-7xl md:text-8xl font-black font-display text-white/[0.06] leading-none select-none">
                            {projectNumber}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Subtle overlay on hover */}
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                        </div>

                        {/* Bottom bar */}
                        <div className="px-5 py-4 flex items-center justify-between border-t border-border">
                          <span className="text-xs text-muted-foreground uppercase tracking-widest">
                            {project.category}
                          </span>
                          <ArrowUpRight
                            size={16}
                            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="space-y-6">
                      {/* Number + Category */}
                      <div className="flex items-center gap-4">
                        <span className="text-primary font-display font-bold text-sm">
                          {projectNumber}
                        </span>
                        <div className="w-8 h-px bg-border" />
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-surface border border-border text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 5 && (
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-surface border border-border text-muted-foreground">
                            +{project.stack.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-[#7C3AED] transition-all active:scale-[0.97]"
                        >
                          View Project
                          <ArrowUpRight size={14} />
                        </Link>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:bg-white/[0.02] transition-all"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>

                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:bg-white/[0.02] transition-all"
                        >
                          <FaGithub size={14} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
