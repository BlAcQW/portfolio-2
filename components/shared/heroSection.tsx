import { FloatingDockDemo } from "./Dock";
import SlideIn from "./SlideIn";

function HeroSection() {
  return (
    <SlideIn direction="top">
      <header className="relative cursor-default overflow-x-clip">
        {/* Concentric accent rings */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="size-[850px] hero-ring" />
          <div className="size-[1050px] hero-ring" />
          <div className="size-[1250px] hero-ring" />
          <div className="size-[1450px] hero-ring" />
        </div>

        {/* Ambient glows */}
        <div className="accent-glow animate-glow-pan pointer-events-none absolute left-1/2 top-24 -z-0 size-[560px] -translate-x-1/2 rounded-full opacity-30 blur-2xl" />
        <div className="accent-glow-2 pointer-events-none absolute right-[12%] top-48 -z-0 size-[320px] rounded-full opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 pb-28 pt-40 text-center md:pt-44">
          {/* Monogram + availability */}
          <div className="flex flex-col items-center gap-5">
            <div className="animate-float glass flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-semibold text-emerald-200 shadow-[0_0_40px_-12px] shadow-emerald-400/40">
              <span className="font-display">EH</span>
            </div>
            <div className="glass inline-flex items-center rounded-full px-4 py-2 text-xs font-light tracking-wide text-neutral-300">
              <span className="relative mr-2 flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </div>
          </div>

          {/* Name */}
          <h1 className="font-display mt-9 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Enoch <span className="text-gradient">Henyo</span>
          </h1>

          <p className="mt-4 text-sm font-medium uppercase tracking-[0.35em] text-emerald-300/80">
            Software Engineer · Full-Stack &amp; AI
          </p>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-xl tracking-wide text-neutral-400">
            I build{" "}
            <span className="font-semibold text-neutral-200">AI agents</span> and
            scalable{" "}
            <span className="font-semibold text-neutral-200">
              full-stack applications
            </span>{" "}
            from{" "}
            <span className="bg-gradient-to-r from-red-500 via-yellow-300 to-green-500 bg-clip-text font-bold text-transparent">
              Accra, Ghana
            </span>{" "}
            — turning ideas into products that perform.
          </p>

          <div className="hidden md:block">
            <FloatingDockDemo />
          </div>
        </div>
      </header>
    </SlideIn>
  );
}

export default HeroSection;
