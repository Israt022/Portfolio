import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectDetails({ params }) {
    const { id } = await params;

    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen py-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Hero Image */}
                <div className="relative w-full h-[250px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Title */}
                <div className="mt-10">
                    <p className="text-primary uppercase tracking-widest text-sm">
                        {project.category}
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        {project.title}
                    </h1>

                    <p className="mt-6 text-muted-foreground leading-8">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-10 glass rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Technology Stack
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Challenges */}
                <div className="mt-8 glass rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Challenges Faced
                    </h2>

                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {project.challenges.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Future Plan */}
                <div className="mt-8 glass rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Future Improvements
                    </h2>

                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {project.future.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                        href={project.live}
                        target="_blank"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium"
                    >
                        Live Demo
                    </Link>

                    <Link
                        href={project.repo}
                        target="_blank"
                        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5"
                    >
                        GitHub Repository
                    </Link>

                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5"
                    >
                        ← Back to Portfolio
                    </Link>
                </div>

            </div>
        </main>
    );
}