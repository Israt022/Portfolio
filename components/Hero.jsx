"use client";
import heroImg from "@/asset/hero.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Blobs (softer + smaller) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[90px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[90px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold tracking-[0.25em] uppercase text-xs mb-4 block"
          >
            Frontend Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4"
          >
            Crafting Modern <br />
            <span className="text-gradient">React & Next.js</span> <br />
            Interfaces That Feel Alive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground max-w-md mb-6 mx-auto md:mx-0"
          >
            I’m a Frontend Developer focused on building clean, responsive and
            interactive web interfaces using React, Next.js and modern UI tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-3"
          >
            <a href="#projects">
              <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition hover:-translate-y-1">
                View My Work
              </button>
            </a>

            <a href="#contact">
              <button className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition hover:-translate-y-1">
                Contact Me
              </button>
            </a>
          </motion.div>
        </div>

        {/* IMAGE (shape same, just smaller + cleaner) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[210px] h-[210px] md:w-[290px] md:h-[290px] lg:w-[330px] lg:h-[330px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-2xl opacity-20 animate-pulse" />

            <div className="relative w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border border-white/10 glass p-3">
              <Image
                src={heroImg}
                alt="Hero Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
