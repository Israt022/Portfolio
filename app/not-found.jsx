"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Home, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-accent/10 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 mx-auto max-w-2xl text-center"
            >
                {/* Code icon */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-primary/10 text-primary"
                >
                    <Code2 size={30} />
                </motion.div>

                {/* 404 */}
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                    Error 404
                </p>

                <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-foreground sm:text-8xl">
                    4<span className="text-primary">0</span>4
                </h1>

                <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
                    Lost in the code?
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    Looks like this page went missing. The URL might be incorrect,
                    or the page may have moved. Let&apos;s get you back on track.
                </p>

                {/* Code-style message */}
                <div className="mx-auto mt-7 max-w-sm rounded-xl border border-border bg-card/70 px-5 py-4 text-left font-mono text-sm">
                    <p className="text-muted-foreground">
                        <span className="text-primary">const</span> page ={" "}
                        <span className="text-foreground">undefined</span>;
                    </p>
                    <p className="mt-2 text-muted-foreground">
                        <span className="text-primary">if</span> (!page) {"{"}
                    </p>
                    <p className="mt-1 pl-5 text-foreground">
                        return <span className="text-primary">home</span>;
                    </p>
                    <p className="mt-1 text-muted-foreground">{"}"}</p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-6 py-3 transition-transform hover:-translate-y-1"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="btn-secondary inline-flex items-center gap-2 px-6 py-3 transition-transform hover:-translate-y-1"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                <Link
                    href="/#projects"
                    className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                    <Search size={15} />
                    Explore my projects
                </Link>
            </motion.div>
        </main>
    );
}
