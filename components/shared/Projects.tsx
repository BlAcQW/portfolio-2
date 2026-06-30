"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SlideIn from "./SlideIn";
import { projectData, type Tech } from "@/constants/projectData";

function TechBadge({ tech }: { tech: Tech }) {
    return (
        <li className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-neutral-300">
            {tech.icon && (
                <img
                    src={tech.icon}
                    alt=""
                    aria-hidden
                    className={`h-3.5 w-3.5 ${tech.invert ? "invert" : ""}`}
                />
            )}
            {tech.name}
        </li>
    );
}

export const Projects = () => {
    return (
        <section id="projects" className="px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <SlideIn direction="bottom">
                    <div className="mb-14 text-center">
                        <span className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-300/80">
                            Selected Work
                        </span>
                        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            Selected <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="mt-3 font-light text-neutral-400">
                            A range of full-stack and AI products I&apos;ve designed and built.
                        </p>
                    </div>
                </SlideIn>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projectData.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <SlideIn key={project.title} direction="bottom">
                                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
                                    {/* Ambient gradient glow */}
                                    <div
                                        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${project.gradient} opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70`}
                                    />

                                    <div className="relative flex h-full flex-col">
                                        {/* Top row */}
                                        <div className="flex items-start justify-between">
                                            <span className="font-display text-sm font-medium tracking-widest text-neutral-500">
                                                {`0${index + 1}`}
                                            </span>
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
                                            >
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>
                                        </div>

                                        {/* Niche + title */}
                                        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/70">
                                            {project.niche}
                                        </p>
                                        <h3 className="font-display mt-1 text-2xl font-semibold text-white">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 flex-1 text-sm font-light leading-relaxed tracking-wide text-neutral-400">
                                            {project.description}
                                        </p>

                                        {/* Tech */}
                                        <ul className="mt-6 flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <TechBadge key={tech.name} tech={tech} />
                                            ))}
                                        </ul>

                                        {/* Live link (only where a public deploy exists) */}
                                        {project.live && (
                                            <Link
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                                            >
                                                Live preview
                                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </Link>
                                        )}
                                    </div>
                                </article>
                            </SlideIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
