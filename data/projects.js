import skillsImg from "@/asset/Portfolio/skillsPhere.png";
import SkillPilot from "@/asset/Portfolio/skillpilot.png";
import ticketbari from "@/asset/Portfolio/ticketbari.png";
import petverse from "@/asset/Portfolio/petverse.png";
import confluxa from "@/asset/Portfolio/confluxa.png";
import expensetracker from "@/asset/Portfolio/expensetracker.png";

export const projects = [
    {
        id: 1,
        title: "TicketBari",
        category: "Full Stack Ticket Booking Platform",
        description:
            "A full-stack ticket booking platform where users can explore events, book tickets, make secure payments, and manage bookings through a modern dashboard.",
        image: ticketbari,
        stack: [
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
            "Stripe",
        ],
        challenges: [
            "Implementing secure authentication and role-based access.",
            "Managing ticket availability and booking flow.",
            "Integrating secure online payment gateway.",
        ],
        future: [
            "QR code ticket verification.",
            "Email notifications for bookings.",
            "Advanced analytics dashboard.",
        ],
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
        stack: [
            "Next.js",
            "TypeScript",
            "Express.js",
            "MongoDB",
            "Gemini AI",
            "Tailwind CSS",
            "JWT",
        ],
        challenges: [
            "Integrating AI responses with the application.",
            "Managing authentication and protected routes.",
            "Designing an intuitive learning dashboard.",
        ],
        future: [
            "Voice-based AI assistant.",
            "Personalized learning recommendations.",
            "Course progress analytics.",
        ],
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
        stack: [
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
        ],
        challenges: [
            "Managing adoption request workflow.",
            "Implementing secure authentication.",
        ],
        future: [
            "Real-time chat between adopters and owners.",
            "Pet recommendation system.",
            "Location-based pet search.",
        ],
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
        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "MongoDB",
        ],
        challenges: [
            "Managing event registration flow.",
            "Building a responsive user interface.",
            "Optimizing performance for large event lists.",
        ],
        future: [
            "Calendar integration.",
            "Online event streaming.",
            "Admin analytics dashboard.",
        ],
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
        stack: [
            "Next.js",
            "Tailwind CSS",
            "HeroUI",
            "Better Auth",
            "MongoDB",
        ],
        challenges: [
            "Creating role-based dashboards.",
            "Managing course content efficiently.",
            "Implementing secure authentication.",
        ],
        future: [
            "Video conferencing support.",
            "Assignment submission system.",
            "Student performance analytics.",
        ],
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
        stack: [
            "Next.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Chart.js",
            "Tailwind CSS",
        ],
        challenges: [
            "Generating accurate financial reports.",
            "Visualizing data using interactive charts.",
            "Managing CRUD operations efficiently.",
        ],
        future: [
            "Recurring expense reminders.",
            "Export reports as PDF or Excel.",
            "Multi-currency support.",
        ],
        live: "https://expense-tracker-client-swart.vercel.app/",
        repo: "https://github.com/Israt022/expense-tracker-client",
    },
];