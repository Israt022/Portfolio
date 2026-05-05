"use client";
import skillsImg from "@/asset/Portfolio/skillsPhere.png";
import newsImg from "@/asset/Portfolio/DragonNews.png";
import bookImg from "@/asset/Portfolio/bookVibe.png";
import keenImg from "@/asset/Portfolio/keenKeeper.png";
import playImg from "@/asset/Portfolio/playStore.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";

const projects = [
  {
    id: 1,
    title: "SkillSphere",
    category: "Full Stack Learning Platform",
    description:
      "An online learning platform with courses, authentication, instructor system, and protected course access.",
    image: skillsImg,
    live: "https://skill-sphere-kohl.vercel.app",
    repo: "https://github.com/Israt022/SkillSphere",
  },
  {
    id: 2,
    title: "Dragon News",
    category: "Frontend News App",
    description:
      "A responsive news application built with React that fetches real-time news by category with Firebase authentication for secure user login.",
    image: newsImg,
    live: "https://dragon-news-roan-three.vercel.app/category/01",
    repo: "https://github.com/Israt022/Dragon-News",
  },
  {
    id: 3,
    title: "Book Vibe",
    category: "Frontend Book management",
    description: "Book can get and book add to wishlist for reading",
    image: bookImg,
    live: "https://book-vibe-liard-theta.vercel.app/",
    repo: "https://github.com/Israt022/Book-Vibe",
  },
  {
    id: 4,
    title: "KeenKeeper",
    category: "Frontend React App",
    description:
      "A friendship management app that helps users track interactions, set relationship goals, and visualize communication history with analytics charts.",
    image: keenImg,
    live: "https://keen-keeper-nu.vercel.app/",
    repo: "https://github.com/Israt022/Keen-Keeper",
  },
  {
    id: 5,
    title: "Play Store App",
    category: "Frontend React App",
    description: "A app store project",
    image: playImg,
    live: "https://ph-play-store-app.vercel.app/",
    repo: "https://github.com/Israt022/PH-Play-Store-App",
  },
];

export default function Projects() {
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
