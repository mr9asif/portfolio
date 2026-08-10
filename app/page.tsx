import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <Hero />

      {/* Temporary sections */}
      <section id="about" className="min-h-screen px-6 py-32">
        <h2 className="text-4xl font-bold">About</h2>
      </section>

      <section id="skills" className="min-h-screen px-6 py-32">
        <h2 className="text-4xl font-bold">Skills</h2>
      </section>

      <section id="projects" className="min-h-screen px-6 py-32">
        <h2 className="text-4xl font-bold">Projects</h2>
      </section>

      <section id="experience" className="min-h-screen px-6 py-32">
        <h2 className="text-4xl font-bold">Experience</h2>
      </section>

      <section id="contact" className="min-h-screen px-6 py-32">
        <h2 className="text-4xl font-bold">Contact</h2>
      </section>
    </main>
  );
}
