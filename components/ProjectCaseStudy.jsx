"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  // Github,
  Layers,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ProjectCaseStudy({ project, projectNumber, prevProject, nextProject }) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background"
    >
      {/* ── Back Navigation ── */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-lg border border-border text-sm text-foreground hover:border-primary/30 hover:text-primary transition-all"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO COVER                                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full">
        {/* Full-width cover image */}
        <motion.div
          variants={fadeUp}
          className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/60" />

          {/* Large project number watermark */}
          <div className="absolute bottom-6 right-8 md:bottom-10 md:right-16 select-none pointer-events-none">
            <span className="text-[120px] md:text-[200px] font-black font-display text-white/[0.04] leading-none">
              {projectNumber}
            </span>
          </div>

          {/* Hero text overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-6xl mx-auto px-6 pb-10 md:pb-16">
              <motion.div variants={stagger} className="space-y-4">
                <motion.p
                  variants={fadeUp}
                  className="text-primary uppercase tracking-[0.3em] text-xs font-medium"
                >
                  {project.category}
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight"
                >
                  {project.title}
                </motion.h1>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* MAIN CONTENT                                           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* ── Left Column: Main Content ── */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Overview
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Project Screenshot — Large Featured */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-surface">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                {project.title} — Main Interface
              </p>
            </motion.div>

            {/* Challenges Section */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <AlertTriangle size={16} className="text-accent" />
                  </div>
                  <h2 className="text-xl font-bold font-display">
                    Challenges & Solutions
                  </h2>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4 p-4 rounded-xl bg-surface border border-border"
                    >
                      <span className="text-primary font-bold font-display text-sm mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Future Improvements Section */}
            {project.future && project.future.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb size={16} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold font-display">
                    Future Improvements
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {project.future.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border"
                    >
                      <ChevronRight
                        size={14}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ── Right Column: Sidebar ── */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Project Info Card */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-surface border border-border space-y-6"
              >
                {/* Category */}
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Category
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {project.category}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border" />

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={14} className="text-primary" />
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      Tech Stack
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/8 text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-[#7C3AED] transition-all active:scale-[0.97]"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-white/[0.02] transition-all"
                  >
                    <FaGithub size={15} />
                    View Source Code
                  </a>
                </div>
              </motion.div>

              {/* Project Navigation */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.id}`}
                    className="block p-4 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all group"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Next Project
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {nextProject.title}
                    </p>
                  </Link>
                )}

                {prevProject && (
                  <Link
                    href={`/projects/${prevProject.id}`}
                    className="block p-4 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all group"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Previous Project
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prevProject.title}
                    </p>
                  </Link>
                )}

                <Link
                  href="/#projects"
                  className="block text-center p-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/20 transition-all"
                >
                  ← All Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
