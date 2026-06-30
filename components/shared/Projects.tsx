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
            <div className="mx-auto max-w-5xl">
                {/* Section heading */}
                <SlideIn direction="bottom">
                    <div className="mb-12 text-center">
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

                {/* Stacking cards — each sticks under the navbar and the next slides over it. */}
                <div className="card-container">
                    {projectData.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={project.title}
                                className="sticky"
                                style={{ top: `calc(88px + ${index * 16}px)` }}
                            >
                                <article className="group relative my-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c10]/95 p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-colors duration-500 hover:border-emerald-400/30 md:p-10">
                                    {/* Ambient gradient glow */}
                                    <div
                                        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.gradient} opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70`}
                                    />

                                    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                                        {/* Left: index + icon + title */}
                                        <div className="md:col-span-5">
                                            <div className="flex items-center justify-between md:block">
                                                <span className="font-display text-5xl font-semibold text-white/10">
                                                    {`0${index + 1}`}
                                                </span>
                                                <div
                                                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} md:mt-6`}
                                                >
                                                    <Icon className="h-5 w-5 text-white" />
                                                </div>
                                            </div>
                                            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/70">
                                                {project.niche}
                                            </p>
                                            <h3 className="font-display mt-1 text-3xl font-semibold text-white">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Right: description + tech + live */}
                                        <div className="flex flex-col md:col-span-7">
                                            <p className="text-sm font-light leading-relaxed tracking-wide text-neutral-400 md:text-base">
                                                {project.description}
                                            </p>

                                            <ul className="mt-6 flex flex-wrap gap-2">
                                                {project.technologies.map((tech) => (
                                                    <TechBadge key={tech.name} tech={tech} />
                                                ))}
                                            </ul>

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
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
