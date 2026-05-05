"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold text-gradient">
            &lt;Israt /&gt;
          </Link>

          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-xl">

          <a
            href="https://github.com/Israt022"
            target="_blank"
            className="hover:text-white text-muted-foreground transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mst-israt-jahan-era/"
            target="_blank"
            className="hover:text-white text-muted-foreground transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/@isratjahan14004"
            target="_blank"
            className="hover:text-white text-muted-foreground transition"
          >
            <FaXTwitter />
          </a>

        </div>

        {/* RIGHT */}
        <div className="text-xs text-muted-foreground text-center md:text-right">
          <p>Built with Next.js</p>
          <p>Made with ❤️</p>
        </div>

      </div>

    </footer>
  );
}