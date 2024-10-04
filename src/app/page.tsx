import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
    </div>
  );
}
