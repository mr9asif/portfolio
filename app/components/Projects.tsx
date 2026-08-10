import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, ExternalLink } from "lucide-react";

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
      "Express",
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
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
    ],
    github: "https://github.com/mr9asif/Esomaz",
    live: "https://esomaz.vercel.app/",
  },
  {
    number: "03",
    title: "Tech Quiz",
    description:
      "An interactive quiz platform designed to help users test and improve their technical knowledge through topic-based questions and scoring.",
    image: "/projects/tech-quiz.png",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mr9asif/Tech-Quize-Application",
    live: "https://tech-quize-app.netlify.app/",
  },
  {
    number: "04",
    title: "EmpowerManagement",
    description:
      "A management-focused web application designed to organize workflows, manage information, and provide a structured experience for users and administrators.",
    image: "/projects/empower-management.png",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/mr9asif/Employee-Management",
    live: "https://thunderous-brioche-852547.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        px-5
        py-28
        sm:px-8
        sm:py-32
        lg:px-12
        lg:py-40
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* =========================
            HEADER
        ========================== */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-5
          "
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-yellow-600">03</span>

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
              Selected Work
            </span>
          </div>

          {/* Desktop View All */}
          <a
            href="/projects"
            className="
              hidden
              items-center
              gap-2
              text-xs
              uppercase
              tracking-[0.15em]
              text-slate-500
              transition-colors
              hover:text-yellow-600
              sm:flex
            "
          >
            View all
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* =========================
            INTRO
        ========================== */}
        <div className="mt-16 max-w-3xl">
          <h2
            className="
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            A few things I&apos;ve
            <span className="text-slate-500"> built </span>
            along the way.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            A selection of projects where I&apos;ve explored ideas, solved
            problems, and turned concepts into working software.
          </p>
        </div>

        {/* =========================
            PROJECT GRID
        ========================== */}
        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {projects.map((project) => (
            <article
              key={project.number}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#10141d]/60
                transition-all
                duration-300
                hover:border-[#f5b51b]/30
                hover:bg-[#10141d]
              "
            >
              {/* =========================
                  IMAGE
              ========================== */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  block
                  overflow-hidden
                  border-b
                  border-white/10
                  bg-[#10141d]
                "
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                {/* Image Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/35
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-yellow-600
                      text-[#080b12]
                      shadow-xl
                      shadow-black/20
                    "
                  >
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </a>

              {/* =========================
                  CONTENT
              ========================== */}
              <div className="p-6 sm:p-7">
                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-xs
                        font-medium
                        text-yellow-600
                      "
                    >
                      {project.number}
                    </span>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        tracking-tight
                        text-white
                        sm:text-2xl
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-slate-500
                      transition-all
                      duration-200
                      hover:border-[#f5b51b]/40
                      hover:bg-[#f5b51b]/10
                      hover:text-yellow-600
                    "
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  {project.description}
                </p>

                {/* =========================
                    TECHNOLOGIES
                ========================== */}
                <div className="mt-6">
                  <p
                    className="
                      mb-3
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-slate-600
                    "
                  >
                    Built with
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          border-white/10
                          bg-white/[0.035]
                          px-2.5
                          py-1.5
                          text-[11px]
                          font-medium
                          text-slate-300
                          transition-colors
                          duration-200
                          group-hover:border-white/15
                          group-hover:text-slate-200
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* =========================
                    LINKS
                ========================== */}
                <div
                  className="
                    mt-7
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    pt-5
                  "
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-slate-500
                      transition-colors
                      hover:text-white
                    "
                  >
                    <SiGithub size={14} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-yellow-600
                      transition-colors
                      hover:text-yellow-600
                    "
                  >
                    Live project
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            VIEW ALL
        ========================== */}
        <div className="mt-20 flex justify-center">
          <a
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              border-b
              border-white/20
              pb-2
              text-sm
              font-medium
              text-slate-400
              transition-all
              duration-200
              hover:border-[#f5b51b]
              hover:text-white
            "
          >
            View all projects
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}
