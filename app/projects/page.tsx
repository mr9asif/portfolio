"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import { SiGithub } from "@icons-pack/react-simple-icons";

const projects = [
  {
    number: "01",
    title: "GearUp",
    description:
      "A full-stack sports equipment rental platform with authentication, inventory management, provider dashboards, rental management, and online payments.",
    image: "/projects/gearup.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    github: "https://github.com/mr9asif/Gearup-Frontend",
    live: "https://gearup-frontend-alpha.vercel.app",
  },

  {
    number: "02",
    title: "eSomaz",
    description:
      "A social platform for sharing ideas, connecting with people, and interacting through posts, comments, reactions, bookmarks, and real-time chat.",
    image: "/projects/esomaz.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO"],
    github: "https://github.com/mr9asif/Esomaz",
    live: "https://esomaz.vercel.app/",
  },

  {
    number: "03",
    title: "Tech Quiz",
    description:
      "An interactive quiz platform designed to help developers test their technical knowledge through structured questions, categories, and scoring.",
    image: "/projects/tech-quiz.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/mr9asif/Tech-Quize-Application",
    live: "https://tech-quize-app.netlify.app/",
  },

  {
    number: "04",
    title: "EmpowerManagement",
    description:
      "An employee management platform focused on attendance, employee information, and streamlined management workflows.",
    image: "/projects/empower-management.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/mr9asif/Employee-Management",
    live: "https://thunderous-brioche-852547.netlify.app/",
  },

  {
    number: "05",
    title: "Traveler Website",
    description:
      "This is a Traveler Website where you can find your travel destination",
    image: "/projects/Travelar.png",
    technologies: ["Reactjs", "Tailwind CSS", "NodeJS", "MongoDB"],
    github: "https://github.com/mr9asif/Traveler-Website",
    live: "https://steady-baklava-3119cd.netlify.app/",
  },

  {
    number: "06",
    title: "Alpha Game",
    description: "This is a Alpha Game where you can test your typing skill.",
    image: "/projects/AlphaGame.png",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/mr9asif/Alphabet-Game-Fun",
    live: "https://mr9asif.github.io/Alphabet-Game-Fun/",
  },
];

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;

  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);

    // Go back to the beginning of the project grid
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#0a1d48] text-white">
      {/* =========================
          FIXED NAVBAR
      ========================== */}

      <Navbar />

      {/* =========================
          PROJECTS
      ========================== */}

      <section
        className="
          px-5
          pb-24
          pt-32
          sm:px-8
          sm:pb-32
          sm:pt-36
          lg:px-12
        "
      >
        <div className="mx-auto max-w-6xl">
          {/* Back */}

          <Link
            href="/#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              text-slate-500
              transition-colors
              hover:text-[#f5b51b]
            "
          >
            <ArrowLeft
              size={15}
              className="
                transition-transform
                duration-200
                group-hover:-translate-x-1
              "
            />
            Back to portfolio
          </Link>

          {/* Header */}

          <div className="mt-12 border-b border-white/10 pb-10">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-[#f5b51b]">03</span>

              <span className="h-px w-8 bg-[#f5b51b]/50" />

              <span
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Projects
              </span>
            </div>

            <div className="mt-9 max-w-3xl">
              <h1
                className="
                  text-4xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Things I&apos;ve
                <span className="text-slate-500"> built.</span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-slate-400
                  sm:text-lg
                "
              >
                A collection of projects where I&apos;ve turned ideas into
                working products and explored different ways of building
                software.
              </p>
            </div>
          </div>

          {/* =========================
              3 × 2 PROJECT GRID
          ========================== */}

          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {currentProjects.map((project) => (
              <article
                key={project.number}
                className="
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-[#10141d]/50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-[#10141d]/80
                "
              >
                {/* Image */}

                <div
                  className="
                    relative
                    aspect-[16/9]
                    overflow-hidden
                    border-b
                    border-white/10
                    bg-[#10141d]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0a1d48]/50
                      via-transparent
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      left-3
                      top-3
                      rounded-full
                      border
                      border-white/10
                      bg-[#0a1d48]/80
                      px-2.5
                      py-1
                      text-[10px]
                      font-medium
                      text-[#f5b51b]
                      backdrop-blur-md
                    "
                  >
                    {project.number}
                  </span>
                </div>

                {/* Content */}

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2
                      className="
                        text-lg
                        font-semibold
                        tracking-tight
                        text-white
                      "
                    >
                      {project.title}
                    </h2>

                    <ArrowUpRight
                      size={16}
                      className="
                        shrink-0
                        text-slate-600
                        transition-all
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#f5b51b]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-3
                      line-clamp-3
                      text-xs
                      leading-5
                      text-slate-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.02]
                          px-2.5
                          py-1
                          text-[10px]
                          font-medium
                          text-slate-400
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-4
                      border-t
                      border-white/10
                      pt-4
                    "
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-[11px]
                        font-medium
                        text-slate-500
                        transition-colors
                        hover:text-white
                      "
                    >
                      <SiGithub size={13} />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-[11px]
                        font-medium
                        text-slate-500
                        transition-colors
                        hover:text-[#f5b51b]
                      "
                    >
                      Live
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* =========================
              PAGINATION
          ========================== */}

          {totalPages > 1 && (
            <div
              className="
                mt-12
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {/* Previous */}

              <button
                type="button"
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-slate-400
                  transition-colors
                  hover:border-white/20
                  hover:text-white
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
                aria-label="Previous page"
              >
                <ArrowLeft size={14} />
              </button>

              {/* Page Numbers */}

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = currentPage === page;

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`
                        flex
                        h-9
                        min-w-9
                        items-center
                        justify-center
                        rounded-full
                        px-3
                        text-xs
                        font-medium
                        transition-all
                        ${
                          isActive
                            ? "bg-[#f5b51b] text-[#080b12]"
                            : "text-slate-500 hover:bg-white/5 hover:text-white"
                        }
                      `}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next */}

              <button
                type="button"
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-slate-400
                  transition-colors
                  hover:border-white/20
                  hover:text-white
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
                aria-label="Next page"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          )}

          {/* =========================
              CTA
          ========================== */}

          <div
            className="
              mt-16
              border-t
              border-white/10
              pt-8
            "
          >
            <Link
              href="/#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                text-slate-500
                transition-colors
                hover:text-[#f5b51b]
              "
            >
              Have a project in mind?
              <span className="text-white">Let&apos;s talk</span>
              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
