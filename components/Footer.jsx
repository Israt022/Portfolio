"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left */}
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-2xl font-bold text-gradient"
          >
            &lt;Israt /&gt;
          </Link>

          <p className="mt-2 text-sm text-muted-foreground">
            MERN Stack Developer | Building modern web applications.
          </p>

          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} MST Israt Jahan Era. All rights reserved.
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/Israt022"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition hover:text-primary"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mst-israt-jahan-era/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition hover:text-primary"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/isratjahan14004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-muted-foreground transition hover:text-primary"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right text-sm text-muted-foreground">
          <p>Built with Next.js & Tailwind CSS</p>
          <p className="mt-1">Designed & Developed by Israt ❤️</p>
        </div>
      </div>
    </footer>
  );
}