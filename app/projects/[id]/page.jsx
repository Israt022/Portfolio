import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} — Case Study`,
        description: project.description,
    };
}

export default async function ProjectDetails({ params }) {
    const { id } = await params;

    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        notFound();
    }

    const projectIndex = projects.findIndex((p) => p.id === Number(id));
    const projectNumber = String(projectIndex + 1).padStart(2, "0");

    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject =
        projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    return (
        <ProjectCaseStudy
            project={project}
            projectNumber={projectNumber}
            prevProject={prevProject}
            nextProject={nextProject}
        />
    );
}