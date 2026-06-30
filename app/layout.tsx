import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const siteUrl = "https://henyo-enoch.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Enoch Henyo — Software Engineer",
  description:
    "Enoch Henyo is a software engineer in Accra, Ghana, building AI agents and scalable full-stack web applications.",
  keywords: [
    "Enoch Henyo",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Accra",
    "Ghana",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Enoch Henyo" }],
  openGraph: {
    title: "Enoch Henyo — Software Engineer",
    description:
      "Building AI agents and scalable full-stack web applications from Accra, Ghana.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Enoch Henyo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enoch Henyo — Software Engineer",
    description:
      "Building AI agents and scalable full-stack web applications from Accra, Ghana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#070708] font-sans text-neutral-200 antialiased">
        {children}
      </body>
    </html>
  );
}
