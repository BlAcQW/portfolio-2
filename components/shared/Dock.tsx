'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

export function FloatingDockDemo() {
    const links = [
        {
            title: "LinkedIn",
            icon: <LinkedInLogoIcon className="h-full w-full text-emerald-300" />,
            href: "https://www.linkedin.com/in/henyo-enoch-59b487265/",
        },
        {
            title: "Email",
            icon: <EnvelopeClosedIcon className="h-full w-full text-cyan-300" />,
            href: "mailto:enochhenyo@gmail.com",
        },
    ];

    return (
        <div className="mt-8 flex w-full items-center justify-center">
            <FloatingDock items={links} />
        </div>
    );
}
