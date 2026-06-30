export type Education = {
    school: string;
    location: string;
    degree: string;
    duration: string;
    note?: string;
    highlights: string[];
};

export const education: Education[] = [
    {
        school: "Central University",
        location: "Miotso, Accra",
        degree: "BSc, Information Technology",
        duration: "Feb 2021 — Jul 2025",
        note: "Vice President, Department",
        highlights: [
            "Web Development",
            "Data Structures & Algorithms",
            "Databases",
            "Object-Oriented Programming",
            "Unix / Linux Administration",
            "Cloud Computing",
            "Software Engineering",
            "Python Programming",
        ],
    },
];

export const languages: { name: string; level: string }[] = [
    { name: "English", level: "Proficient" },
    { name: "French", level: "Intermediate" },
];
