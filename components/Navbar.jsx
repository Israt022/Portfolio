"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-full transition-all duration-300 ${
        isScrolled ? "glass py-3 px-8 shadow-lg" : "bg-transparent py-5 px-4"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-gradient font-display">
          &lt;Israt /&gt;
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          Hire Me
        </button>
      </div>
    </nav>
  );
}