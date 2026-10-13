"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/data/experience";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  Building2,
  X,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on ESC key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <Section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Career Path
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Hands-on professional experience building scalable web solutions,
            optimizing full-stack codebases, and collaborating in agile teams.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group border border-border"
            >
              {/* Subtle ambient accent in background */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />

              <div className="relative z-10 space-y-6">
                {/* Header: Company & Role */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-inner">
                      <Building2 size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-foreground leading-snug">
                        {exp.position}
                      </h3>
                      <p className="text-primary font-semibold text-base mt-0.5 flex items-center gap-1.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Metadata Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/25 text-primary">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border text-muted-foreground">
                      <Briefcase size={13} className="text-primary" />
                      {exp.employmentType}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border text-muted-foreground">
                      <MapPin size={13} className="text-primary" />
                      {exp.workplace}
                    </span>
                  </div>
                </div>

                {/* Achievement Highlight */}
                {exp.achievement && (
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-accent/10 border border-accent/20">
                    <div className="p-1 rounded-lg bg-accent/20 text-accent shrink-0 mt-0.5">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-accent">
                        Key Recognition
                      </p>
                      <p className="text-sm font-medium text-foreground mt-0.5 leading-relaxed">
                        {exp.achievement}
                      </p>
                    </div>
                  </div>
                )}

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                    Core Responsibilities & Impact
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-surface/80 border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action: View Certificate Button */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-border/60">
                  <button
                    onClick={() => setSelectedCert(exp.certificate)}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-[#7C3AED] transition-all active:scale-[0.97] shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    <Award size={16} />
                    <span>View Certificate</span>
                  </button>

                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-primary" />
                    Verified Completion & Recognition
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Certificate Modal / Lightbox */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="cert-modal-title"
                data-lenis-prevent
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              >
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedCert(null)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
                />

                {/* Modal Dialog Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative z-10 w-full max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain bg-surface border border-border rounded-3xl shadow-2xl p-6 md:p-8 my-auto"            >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate modal"
                    className="absolute top-5 right-5 p-2 rounded-full bg-surface border border-border text-muted-foreground hover:text-white hover:border-primary/40 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  {/* Modal Header */}
                  <div className="flex items-center gap-3 mb-6 pr-10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3
                        id="cert-modal-title"
                        className="text-lg md:text-xl font-bold font-display text-foreground"
                      >
                        {selectedCert.title || "Internship Certificate"}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Issued by {selectedCert.issuer} • {selectedCert.duration}
                      </p>
                    </div>
                  </div>

                  {/* Certificate Viewer / Preview Frame */}
                  {selectedCert.imagePath ? (
                    /* Actual Certificate Image */
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-black/40">
                      <Image
                        src={selectedCert.imagePath}
                        alt={`${selectedCert.issuer} Internship Certificate`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    /* Elegant Certificate Preview Structure (Ready for User Image) */
                    <div className="relative rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/10 via-surface to-surface p-6 md:p-8 text-center space-y-5 overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 border border-primary/30 text-primary shadow-lg shadow-primary/10 mx-auto">
                        <Award size={32} />
                      </div>

                      <div>
                        <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-primary">
                          Certificate of Completion
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold font-display text-foreground mt-1">
                          {selectedCert.role}
                        </h4>
                        <p className="text-sm font-semibold text-primary mt-1">
                          {selectedCert.issuer} • {selectedCert.duration}
                        </p>
                      </div>

                      {/* Recognition Callout */}
                      <div className="max-w-md mx-auto py-3 px-4 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center gap-2 text-accent text-sm font-semibold">
                        <Sparkles size={16} />
                        <span>Distinction: {selectedCert.achievement}</span>
                      </div>

                      {/* Placeholder / Image Setup Instructions */}
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-muted-foreground text-left space-y-1.5 leading-relaxed">
                        <p className="font-semibold text-foreground flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-primary" />
                          Certificate Ready for Display
                        </p>
                        <p>
                          To display your official certificate image file, place your image (e.g.{" "}
                          <code className="text-primary px-1 bg-surface rounded">
                            certificate.png
                          </code>
                          ) into the{" "}
                          <code className="text-primary px-1 bg-surface rounded">
                            asset/
                          </code>{" "}
                          or{" "}
                          <code className="text-primary px-1 bg-surface rounded">
                            public/
                          </code>{" "}
                          folder, and update{" "}
                          <code className="text-primary px-1 bg-surface rounded">
                            imagePath
                          </code>{" "}
                          in{" "}
                          <code className="text-primary px-1 bg-surface rounded">
                            data/experience.js
                          </code>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Modal Footer */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-primary" />
                      Official Credential Verification
                    </span>
                    <button
                      onClick={() => setSelectedCert(null)}
                      type="button"
                      className="px-4 py-2 rounded-lg bg-surface border border-border text-foreground hover:bg-white/[0.05] transition-colors cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </Section>
  );
}
