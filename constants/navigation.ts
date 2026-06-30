// Navigation items. `external` links open in a new tab.
export type NavItem = { name: string; href: string; external?: boolean };

const RESUME_HREF = "/resume/Enoch-Henyo-CV.docx";

export const navigationOnLargeScreen: NavItem[] = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: RESUME_HREF, external: true },
    { name: "Contact", href: "#contact" },
];

export const navigationOnMobile: NavItem[] = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Resume", href: RESUME_HREF, external: true },
    { name: "Contact", href: "#contact" },
];
