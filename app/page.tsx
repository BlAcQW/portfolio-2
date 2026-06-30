import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/heroSection";
import { Projects } from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import Experience from "@/components/shared/Experience";
import Education from "@/components/shared/Education";
import Contact from "@/components/shared/contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
