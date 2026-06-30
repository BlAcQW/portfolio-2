import { GraduationCap, MapPin, Award } from "lucide-react";
import { education } from "@/constants/education";
import SlideIn from "./SlideIn";

function Education() {
    return (
        <section id="education" className="px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <SlideIn direction="bottom">
                    <div className="mb-12">
                        <span className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-300/80">
                            Background
                        </span>
                        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            Education
                        </h2>
                    </div>
                </SlideIn>

                {education.map((edu) => (
                    <SlideIn key={edu.school} direction="bottom">
                        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-10">
                            <div className="accent-glow pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full opacity-20 blur-3xl" />

                            <div className="relative flex flex-wrap items-start justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-emerald-400/10">
                                        <GraduationCap className="h-6 w-6 text-emerald-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-white">
                                            {edu.school}
                                        </h3>
                                        <p className="mt-1 text-emerald-300">{edu.degree}</p>
                                        <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
                                            <MapPin className="h-3.5 w-3.5" /> {edu.location}
                                        </p>
                                    </div>
                                </div>
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-300">
                                    {edu.duration}
                                </span>
                            </div>

                            {edu.note && (
                                <p className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-sm text-amber-200">
                                    <Award className="h-4 w-4" /> {edu.note}
                                </p>
                            )}

                            <div className="relative mt-6">
                                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                                    Academic highlights
                                </p>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {edu.highlights.map((h) => (
                                        <li
                                            key={h}
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300"
                                        >
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SlideIn>
                ))}
            </div>
        </section>
    );
}

export default Education;
