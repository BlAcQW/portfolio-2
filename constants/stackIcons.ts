const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export type StackIcon = {
    src: string;
    name: string;
    /** Extra classes applied to the <img>, e.g. `invert` for dark monochrome logos. */
    style?: string;
};

export const stackIcons: StackIcon[] = [
    { src: `${DEVICON}/javascript/javascript-original.svg`, name: "JavaScript" },
    { src: `${DEVICON}/typescript/typescript-original.svg`, name: "TypeScript" },
    { src: `${DEVICON}/react/react-original.svg`, name: "React" },
    { src: `${DEVICON}/nextjs/nextjs-original.svg`, name: "Next.js", style: "invert" },
    { src: `${DEVICON}/nodejs/nodejs-original.svg`, name: "Node.js" },
    { src: `${DEVICON}/python/python-original.svg`, name: "Python" },
    { src: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, name: "Tailwind" },
    { src: `${DEVICON}/postgresql/postgresql-original.svg`, name: "PostgreSQL" },
    { src: `${DEVICON}/prisma/prisma-original.svg`, name: "Prisma", style: "invert" },
    { src: `${DEVICON}/mongodb/mongodb-original.svg`, name: "MongoDB" },
    { src: `${DEVICON}/git/git-original.svg`, name: "Git" },
    { src: `${DEVICON}/fastapi/fastapi-original.svg`, name: "FastAPI" },
];
