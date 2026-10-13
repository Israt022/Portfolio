/**
 * Work Experience Data
 * Easily update your position, dates, description, achievements, and certificate here.
 */
import certificateImg from "@/asset/Certificate/Internship/CertificateInternship.png";

export const experiences = [
  {
    id: "jevxo-internship",
    company: "JEVXO",
    position: "MERN Stack Developer Intern",
    employmentType: "Internship",
    workplace: "Remote",
    duration: "July 2026 – August 2026",
    location: "Remote",
    achievement: "Recognized for outstanding performance during the internship.",
    skills: [
      "Next.js",
      "Prisma",
      "Git & GitHub",
      "Team Collaboration",
    ],
    responsibilities: [
      "Worked on web development tasks using Next.js and Prisma.",
      "Collaborated with fellow interns on project development and problem-solving.",
      "Improved practical development skills through hands-on tasks and team collaboration.",
    ],
    certificate: {
      /**
       * How to add your certificate image:
       * 1. Place your certificate image file (e.g. certificate.png or certificate.jpg) into the `/asset` folder (e.g. `asset/certificate.png`)
       *    or into the `/public` folder (e.g. `public/certificate.png`).
       * 2. Set `imagePath` below to "/certificate.png" (if in public) or import it directly.
       * 3. If imagePath is null or file not found, the certificate preview modal automatically displays an official preview card.
       */
      imagePath: certificateImg,
      title: "Internship Completion Certificate",
      issuer: "JEVXO",
      role: "MERN Stack Developer Intern",
      achievement: "Outstanding Performance",
      duration: "July 2026 – August 2026",
    },
  },
];
