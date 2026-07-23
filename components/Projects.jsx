"use client";
import skillsImg from "@/asset/Portfolio/skillsPhere.png";
import SkillPilot from "@/asset/Portfolio/skillpilot.png";
import ticketbari from "@/asset/Portfolio/ticketbari.png";
import petverse from "@/asset/Portfolio/petverse.png";
import confluxa from "@/asset/Portfolio/confluxa.png";
import expensetracker from "@/asset/Portfolio/expensetracker.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";

const projects = [
  {
    id: 1,
    title: "TicketBari",
    category: "Full Stack Ticket Booking Platform",
    description:
      "A full-stack ticket booking platform where users can explore events, book tickets, make secure payments, and manage bookings through a modern dashboard.",
    image: ticketbari,
    live: "https://ticketbari-client-steel.vercel.app/",
    repo: "https://github.com/Israt022/ticketbari_client",
  },
  {
    id: 2,
    title: "SkillPilot-AI",
    category: "AI Learning Platform",
    description:
      "An AI-powered learning platform featuring authentication, interactive courses, AI assistance, and a modern dashboard for learners and instructors.",
    image: SkillPilot,
    live: "https://skill-pilot-ai-sigma.vercel.app/",
    repo: "https://github.com/Israt022/SkillPilot-AI",
  },
  {
    id: 3,
    title: "PetVerse",
    category: "Pet Adoption Platform",
    description:
      "A full-stack pet adoption platform where users can browse pets, submit adoption requests, manage listings, and complete secure online donations.",
    image: petverse,
    live: "https://pet-verse-mu.vercel.app/",
    repo: "https://github.com/Israt022/PetVerse-Client",
  },
  {
    id: 4,
    title: "Confluxa",
    category: "Event Management Platform",
    description:
      "A responsive event management platform that allows users to discover events, book tickets, manage registrations, and explore upcoming activities.",
    image: confluxa,
    live: "https://confluxa-client.vercel.app/",
    repo: "https://github.com/Israt022/Confluxa_Client",
  },
  {
    id: 5,
    title: "SkillSphere",
    category: "Online Learning Platform",
    description:
      "A responsive e-learning platform with course management, secure authentication, instructor features, and an engaging learning experience.",
    image: skillsImg,
    live: "https://skill-sphere-kohl.vercel.app",
    repo: "https://github.com/Israt022/SkillSphere",
  },
  {
    id: 6,
    title: "Expense Tracker",
    category: "Personal Finance Tracker",
    description:
      "A responsive expense tracking application that helps users manage income, expenses, budgets, and visualize spending with interactive charts.",
    image: expensetracker,
    live: "https://expense-tracker-client-swart.vercel.app/",
    repo: "https://github.com/Israt022/expense-tracker-client",
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
