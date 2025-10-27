import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";

// Lazy load sections below the fold
const About = lazy(() => import("@/components/About").then(module => ({ default: module.About })));
const Skills = lazy(() => import("@/components/Skills").then(module => ({ default: module.Skills })));
const Projects = lazy(() => import("@/components/Projects").then(module => ({ default: module.Projects })));
const Experience = lazy(() => import("@/components/Experience").then(module => ({ default: module.Experience })));
const Education = lazy(() => import("@/components/Education").then(module => ({ default: module.Education })));
const Certifications = lazy(() => import("@/components/Certifications").then(module => ({ default: module.Certifications })));
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const Index = () => {
  return (
    <div className="bg-background">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
