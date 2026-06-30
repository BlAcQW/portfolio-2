import {
    Building2,
    Boxes,
    Church,
    CalendarClock,
    Megaphone,
    Gavel,
    ShoppingBag,
    Sofa,
    GraduationCap,
    type LucideIcon,
} from "lucide-react";

export type Tech = {
    name: string;
    icon?: string;
    invert?: boolean;
};

export type Project = {
    title: string;
    niche: string;
    icon: LucideIcon;
    description: string;
    technologies: Tech[];
    live?: string;
    /** Tailwind gradient stops used for the card's ambient glow + index badge. */
    gradient: string;
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Shared tech badges — keeps the data DRY and consistent across projects.
const T = {
    ts: { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
    js: { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
    react: { name: "React", icon: `${DEVICON}/react/react-original.svg` },
    next: { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true },
    node: { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    express: { name: "Express", icon: `${DEVICON}/express/express-original.svg`, invert: true },
    fastify: { name: "Fastify", icon: `${DEVICON}/fastify/fastify-original.svg`, invert: true },
    python: { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
    fastapi: { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
    tailwind: { name: "Tailwind", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    postgres: { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    prisma: { name: "Prisma", icon: `${DEVICON}/prisma/prisma-original.svg`, invert: true },
    mongo: { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    three: { name: "Three.js", icon: `${DEVICON}/threejs/threejs-original.svg`, invert: true },
    supabase: { name: "Supabase", icon: `${DEVICON}/supabase/supabase-original.svg` },
    // Text-only badges (no reliable devicon glyph)
    ai: { name: "AI / LLM" },
    voice: { name: "Voice AI" },
    webrtc: { name: "WebRTC" },
    rest: { name: "REST APIs" },
    framer: { name: "Framer Motion" },
    gsap: { name: "GSAP" },
    whatsapp: { name: "WhatsApp API" },
    paypal: { name: "PayPal" },
    paystack: { name: "Paystack" },
} satisfies Record<string, Tech>;

export const projectData: Project[] = [
    {
        title: "DiaServe",
        niche: "AI REAL-ESTATE ASSISTANT",
        icon: Building2,
        gradient: "from-emerald-400/30 to-cyan-400/10",
        description:
            "An AI assistant for real estate that pairs an on-site property chat widget with a voice agent and multi-channel outreach — SMS, email, and voice campaigns — so agencies can qualify and follow up with buyers automatically.",
        technologies: [T.react, T.ts, T.python, T.fastapi, T.postgres, T.voice, T.ai],
    },
    {
        title: "IKIGUY",
        niche: "APPLIED-AI STUDIO SITE",
        icon: Boxes,
        gradient: "from-violet-400/30 to-cyan-400/10",
        description:
            "The marketing site for an applied-AI studio, built with interactive 3D scenes (React Three Fiber) and immersive motion to turn the studio's work into an experience.",
        technologies: [T.next, T.ts, T.three, T.framer, T.tailwind],
        live: "https://ikieguy.online",
    },
    {
        title: "ChurchSync",
        niche: "CHURCH MANAGEMENT SAAS",
        icon: Church,
        gradient: "from-amber-300/30 to-emerald-400/10",
        description:
            "A multi-tenant church-management platform — member directories, events, giving, and admin dashboards — with strict per-church data isolation across every tenant.",
        technologies: [T.next, T.ts, T.prisma, T.postgres, T.tailwind],
    },
    {
        title: "BookingFlow",
        niche: "WHATSAPP BOOKING SAAS",
        icon: CalendarClock,
        gradient: "from-emerald-400/30 to-teal-300/10",
        description:
            "A multi-tenant SaaS that automates appointment booking over WhatsApp, letting businesses take, confirm, and manage bookings conversationally without lifting a finger.",
        technologies: [T.next, T.fastify, T.node, T.ts, T.whatsapp],
    },
    {
        title: "Campaign Server",
        niche: "CAMPAIGN MICROSERVICE",
        icon: Megaphone,
        gradient: "from-cyan-400/30 to-emerald-400/10",
        description:
            "A multi-channel campaign engine — voice, SMS, and email — that plugs into client platforms through a signed proxy and executes outreach at scale behind a clean API.",
        technologies: [T.python, T.fastapi, T.rest, T.voice],
    },
    {
        title: "Car Auction",
        niche: "AUCTION MARKETPLACE",
        icon: Gavel,
        gradient: "from-amber-300/30 to-cyan-400/10",
        description:
            "A car-auction marketplace MVP with rich listings, live bidding, and end-to-end seller and buyer flows.",
        technologies: [T.next, T.ts, T.tailwind],
    },
    {
        title: "Storely",
        niche: "COMMERCE PLATFORM",
        icon: ShoppingBag,
        gradient: "from-teal-300/30 to-violet-400/10",
        description:
            "A storefront and commerce platform with a polished marketing site and a product experience built to convert.",
        technologies: [T.next, T.ts, T.tailwind],
        live: "https://storely-landing.vercel.app",
    },
    {
        title: "Rainbow A&M",
        niche: "CINEMATIC STUDIO SITE",
        icon: Sofa,
        gradient: "from-violet-400/30 to-emerald-400/10",
        description:
            "A cinematic, scroll-driven website for an interior-design studio in Accra — motion-led storytelling that makes the site itself feel like a showroom.",
        technologies: [T.next, T.ts, T.gsap, T.framer, T.tailwind],
    },
    {
        title: "LMS",
        niche: "LEARNING PLATFORM",
        icon: GraduationCap,
        gradient: "from-emerald-400/30 to-amber-300/10",
        description:
            "A learning-management system with courses, enrollment, and PayPal-powered payments for selling and managing online education.",
        technologies: [T.react, T.node, T.express, T.mongo, T.paypal],
    },
];
