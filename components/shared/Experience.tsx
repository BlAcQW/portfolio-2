import { experiences } from "@/constants/experience";
import SlideIn from "./SlideIn";

function Experience() {
    return (
        <section id="experience" className="px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <SlideIn direction="bottom">
                    <div className="mb-14">
                        <span className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-300/80">
                            Career
                        </span>
                        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            Experience
                        </h2>
                    </div>
                </SlideIn>

                {/* Timeline */}
                <div className="relative border-l border-white/10 pl-8 md:pl-10">
                    {experiences.map((exp) => (
                        <div key={`${exp.company}-${exp.role}`} className="relative pb-12 last:pb-0">
                            {/* Node */}
                            <span className="absolute -left-[37px] top-1.5 flex h-3.5 w-3.5 items-center justify-center md:-left-[45px]">
                                <span className="h-3.5 w-3.5 rounded-full border border-emerald-400/50 bg-emerald-400/20" />
                                <span className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>

                            <SlideIn direction="bottom">
                                <div className="glass rounded-2xl p-7 transition-colors duration-300 hover:border-emerald-400/20">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <h3 className="font-display text-lg font-semibold text-white">
                                                {exp.role}{" "}
                                                <span className="text-emerald-300">· {exp.company}</span>
                                            </h3>
                                            <p className="mt-0.5 text-sm text-neutral-500">{exp.location}</p>
                                        </div>
                                        {exp.tag && (
                                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-200">
                                                {exp.tag}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                                        {exp.duration}
                                    </p>

                                    <p className="mt-4 text-sm leading-relaxed tracking-wide text-neutral-300">
                                        {exp.description}
                                    </p>

                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <li
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-neutral-400"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SlideIn>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
