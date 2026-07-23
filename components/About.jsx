"use client";

import aboutImg from "@/asset/about2.png";
import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" className="bg-muted/30 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center">

          <motion.div
            animate={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 30% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-primary/40 to-accent/40 overflow-hidden glass border border-white/10"
          >
            <div className="relative w-full h-full p-4">
              <Image
                src={aboutImg}
                alt="About Image"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* BADGE */}
          <div className="absolute bottom-0 right-38 translate-x-1/4 translate-y-1/4 glass px-4 py-2 rounded-xl shadow-lg">
            <p className="text-sm font-semibold text-primary">MERN Stack Dev</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              MongoDB • React • Next.js
            </p>
          </div>

        </div>

        {/* TEXT SIDE */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed max-w-md mx-auto md:mx-0">
            I'm a passionate MERN Stack Developer who enjoys building modern,
            responsive, and user-friendly web applications. I love turning ideas into
            real-world digital experiences using React, Next.js, Node.js, Express.js,
            and MongoDB.
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            I enjoy solving real-world problems, learning new technologies, and
            improving my development skills. I'm always exploring better ways to build
            scalable, efficient, and user-friendly applications.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto md:mx-0">

            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-semibold text-primary mb-1 text-sm">
                Frontend
              </h4>
              <p className="text-xs text-muted-foreground">
                React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="glass-card p-4 rounded-xl">
              <h4 className="font-semibold text-accent mb-1 text-sm">
                Backend
              </h4>
              <p className="text-xs text-muted-foreground">
                Node.js, Express.js, MongoDB
              </p>
            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}