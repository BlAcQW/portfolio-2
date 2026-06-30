export type Experience = {
    role: string;
    company: string;
    location: string;
    duration: string;
    /** Optional tag rendered as a small pill (e.g. NSS, Internship). */
    tag?: string;
    description: string;
    technologies: string[];
};

export const experiences: Experience[] = [
    {
        role: "Software Engineer",
        company: "IKIEGUY Software",
        location: "Teiman, Accra",
        duration: "Aug 2025 — Present",
        tag: "National Service",
        description:
            "Develop and test AI agents for automation and natural user interaction, and integrate external services and APIs to support core platform functionality. I ship UI updates, fix bugs, and collaborate with the team to deliver work across agile sprint cycles.",
        technologies: ["React", "Next.js", "TypeScript", "AI / LLM", "Voice AI", "REST APIs", "Agile"],
    },
    {
        role: "Junior Developer",
        company: "NERASOL Ghana Limited",
        location: "Dzorwulu, Accra",
        duration: "Aug 2024 — Oct 2024",
        tag: "Internship",
        description:
            "Built web interfaces with React and Next.js, connected application features to backend APIs, and resolved issues across existing UI. Worked within an agile environment and learned to navigate real product workflows.",
        technologies: ["React", "Next.js", "JavaScript", "REST APIs", "Agile"],
    },
    {
        role: "IT Support",
        company: "Ghana Ports & Harbours Authority",
        location: "Tema, Ghana",
        duration: "May 2023 — Jul 2023",
        tag: "Internship",
        description:
            "Troubleshot technical issues, installed software and configured network components, and repaired or replaced damaged hardware. Maintained documentation of IT systems, processes, and procedures for the team.",
        technologies: ["Networking", "Hardware", "Windows / Linux", "Tech Support"],
    },
    {
        role: "Volunteer Secretary",
        company: "ETRADIS GH",
        location: "Dansoman, Accra",
        duration: "Aug 2020 — Oct 2022",
        description:
            "Maintained confidentiality of records and client information, delivered prompt and accurate customer service, and supported due diligence in processing transactions. Kept clear documentation of systems and procedures.",
        technologies: ["Documentation", "Customer Service", "Records"],
    },
];
