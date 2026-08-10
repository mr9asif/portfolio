import About from "./components/About";
import Contact from "./components/Contact";
import EducationCourses from "./components/Education-Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <Hero />

      {/* Temporary sections */}

      <About />
      <Skills />

      <Projects />

      <EducationCourses />
      <Contact />
    </main>
  );
}
