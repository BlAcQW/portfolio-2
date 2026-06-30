import { stackIcons } from "@/constants/stackIcons";
import { languages } from "@/constants/education";
import SlideIn from "./SlideIn";

function Skills() {
  return (
    <section id="about" className="overflow-hidden px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SlideIn direction="left" duration={0.7}>
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-300/80">
            About
          </span>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Engineering products where <span className="text-gradient">design</span> meets
            real-world <span className="text-gradient">intelligence</span>.
          </h2>
        </SlideIn>

        <div className="mt-12 grid grid-cols-12 gap-6">
          {/* Stack */}
          <div className="col-span-12 lg:col-span-5">
            <SlideIn direction="bottom" duration={0.7}>
              <div className="glass h-full rounded-3xl p-8">
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Stack
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {stackIcons.map((icon) => (
                    <div
                      key={icon.name}
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-sm text-neutral-200 transition-colors hover:border-emerald-400/30"
                    >
                      <img
                        className={`h-6 w-6 ${icon.style || ""}`}
                        src={icon.src}
                        alt={icon.name}
                      />
                      <span>{icon.name}</span>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Languages
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
                    >
                      {lang.name}
                      <span className="text-neutral-500"> · {lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Narrative */}
          <div className="col-span-12 lg:col-span-7">
            <SlideIn direction="right" duration={0.7}>
              <div className="glass h-full rounded-3xl p-9 text-left tracking-wide text-neutral-300">
                <p>
                  My path into{" "}
                  <span className="font-medium text-white">software engineering</span>{" "}
                  started with hands-on IT — troubleshooting systems and networks — before
                  I found my real interest in building software that people actually use.
                </p>
                <p className="mt-4">
                  Today I work across the full stack, and I&apos;m especially drawn to{" "}
                  <span className="font-medium text-white">applied AI</span>: designing,
                  building, and testing AI agents that automate work and hold natural
                  conversations. At{" "}
                  <span className="font-medium text-white">IKIEGUY Software</span> I build
                  voice-AI agents, integrate external services and APIs, and ship UI across
                  agile sprint cycles.
                </p>
                <p className="mt-4">
                  Whether it&apos;s a{" "}
                  <span className="font-medium text-white">voice agent</span>, a
                  multi-tenant <span className="font-medium text-white">SaaS</span>, or a
                  cinematic marketing site, I care about clean architecture, thoughtful UX,
                  and shipping things that perform.
                  <span className="text-gradient">
                    {" "}
                    For me, building software is where creativity and problem-solving meet.
                  </span>
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
