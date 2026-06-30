'use client'
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram, Phone, MapPin, type LucideIcon } from "lucide-react";
import { contactlinks, type ContactKind } from "@/constants/contactLinks";
import SlideIn from "./SlideIn";

const iconFor: Record<ContactKind, LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  phone: Phone,
  location: MapPin,
};

// Icon links shown on the right of the card (everything with a link).
const iconLinks = contactlinks.filter((link) => link.href);

function Contact() {
  const year = 2026;

  return (
    <footer id="contact" className="px-5 pb-12 pt-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SlideIn direction="bottom">
          {/* Header */}
          <div className="mb-7 flex items-center justify-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <Mail className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl font-bold">
              <span className="text-gradient">Get in touch!</span>
            </span>
          </div>

          {/* Single card: email on the left, contact icons on the right */}
          <div className="glass relative overflow-hidden rounded-3xl p-8 transition-colors duration-300 hover:border-emerald-400/30">
            <div className="accent-glow pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <span className="text-xs font-medium tracking-wide text-neutral-400">
                  Reach out to me <span aria-hidden="true">→</span>
                </span>
                <br />
                <Link href="mailto:enochhenyo@gmail.com">
                  <span className="font-display text-xl font-semibold tracking-wide text-gradient transition-opacity hover:opacity-80">
                    enochhenyo@gmail.com
                  </span>
                </Link>
              </div>

              <div className="flex flex-row items-center gap-3">
                {iconLinks.map((link, index) => {
                  const Icon = iconFor[link.kind];
                  return (
                    <Link
                      key={link.kind}
                      href={link.href!}
                      aria-label={link.title}
                      title={`${link.title} · ${link.value}`}
                      {...(link.href!.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-emerald-300 transition-all duration-300 hover:scale-110 hover:border-emerald-400/40 hover:text-emerald-200"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? -(index + 1) * 2 : (index + 1) * 2}deg)`,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Footer line */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 text-sm text-neutral-500 sm:flex-row">
          <span className="font-display font-semibold text-neutral-300">Enoch Henyo</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Accra, Ghana · © {year}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
