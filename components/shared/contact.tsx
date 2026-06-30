'use client'
import Link from "next/link";
import { Mail, Linkedin, Phone, MapPin, type LucideIcon } from "lucide-react";
import { contactlinks, type ContactKind } from "@/constants/contactLinks";
import SlideIn from "./SlideIn";

const iconFor: Record<ContactKind, LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  phone: Phone,
  location: MapPin,
};

function Contact() {
  const year = 2026;

  return (
    <footer id="contact" className="px-5 pb-12 pt-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SlideIn direction="bottom">
          <div className="glass relative overflow-hidden rounded-[2rem] p-9 md:p-14">
            {/* Ambient glow */}
            <div className="accent-glow animate-glow-pan pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full opacity-25 blur-3xl" />

            <div className="relative text-center">
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-300/80">
                Get in touch
              </span>
              <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Let&apos;s build something <span className="text-gradient">worth shipping</span>.
              </h2>
              <Link
                href="mailto:enochhenyo@gmail.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-emerald-200 transition-colors duration-300 hover:bg-emerald-400/20"
              >
                <Mail className="h-4 w-4" /> enochhenyo@gmail.com
              </Link>
            </div>

            {/* Contact details */}
            <div className="relative mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactlinks.map((link) => {
                const Icon = iconFor[link.kind];
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-emerald-400/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-neutral-500">
                        {link.title}
                      </p>
                      <p className="truncate text-neutral-200">{link.value}</p>
                    </div>
                  </div>
                );

                return link.href ? (
                  <Link
                    key={link.kind}
                    href={link.href}
                    {...(link.kind === "linkedin"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={link.kind}>{inner}</div>
                );
              })}
            </div>
          </div>
        </SlideIn>

        {/* Footer line */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 text-sm text-neutral-500 sm:flex-row">
          <span className="font-display font-semibold text-neutral-300">Enoch Henyo</span>
          <span>© {year} · Built in Accra, Ghana</span>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
