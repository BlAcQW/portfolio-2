export type ContactKind = "email" | "linkedin" | "github" | "instagram" | "phone" | "location";

export type ContactLink = {
    kind: ContactKind;
    title: string;
    value: string;
    href?: string;
};

export const contactlinks: ContactLink[] = [
    {
        kind: "email",
        title: "Email",
        value: "enochhenyo@gmail.com",
        href: "mailto:enochhenyo@gmail.com",
    },
    {
        kind: "linkedin",
        title: "LinkedIn",
        value: "in/henyo-enoch",
        href: "https://www.linkedin.com/in/henyo-enoch-59b487265/",
    },
    {
        kind: "github",
        title: "GitHub",
        value: "github.com/BlAcQW",
        href: "https://github.com/BlAcQW",
    },
    {
        kind: "phone",
        title: "Phone",
        value: "+233 59 353 6814",
        href: "tel:+233593536814",
    },
    {
        kind: "location",
        title: "Location",
        value: "Accra, Ghana",
    },
];
