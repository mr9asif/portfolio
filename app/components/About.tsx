import { ArrowUpRight } from "lucide-react";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-5
        py-28
        sm:px-8
        sm:py-32
        lg:px-12
        lg:py-40
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-yellow-600">01</span>

            <span className="h-px w-8 bg-[#f5b51b]/50" />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              About Me
            </span>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-600 sm:block">
            Get to know me
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          {/* Left */}

          <div>
            <h2
              className="
      max-w-4xl
      text-2xl
      font-semibold
      leading-[1.2]
      tracking-tight
      text-white
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
    "
            >
              Building, learning,
              <span className="text-slate-500"> and solving problems </span>
              with
              <span className="text-yellow-600"> technology.</span>
            </h2>

            <div
              className="
      mt-10
      max-w-2xl
      space-y-5
      text-base
      leading-8
      text-slate-400
      sm:text-md

    "
            >
              <p>
                I&apos;m a Computer Science &amp; Technology diploma graduate
                with a strong interest in building software and understanding
                how things work under the hood.
              </p>

              <p>
                Currently, I&apos;m focused on full-stack development, with a
                particular interest in Node.js-based backend systems,
                infrastructure, APIs, databases, and scalable application
                architecture.
              </p>

              <p>
                I&apos;m an aspiring software engineer, problem solver, and
                curious learner. I&apos;m especially interested in AI and
                emerging technologies, and I enjoy exploring new tools, ideas,
                and technologies through hands-on projects.
              </p>

              <p>
                Right now, I&apos;m looking for good opportunities where I can
                contribute to real-world projects, keep learning from
                experienced people, and grow as a software engineer.
              </p>
            </div>

            {/* Personal Details */}
            <div
              className="
      mt-12
      grid
      max-w-2xl
      grid-cols-2
      border-y
      border-white/10
      py-6
      sm:grid-cols-3
    "
            >
              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                  Background
                </p>

                <p className="text-sm font-medium text-white">CSE Diploma</p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                  Focus
                </p>

                <p className="text-sm font-medium text-white">
                  Full-Stack / Backend
                </p>
              </div>

              <div className="mt-6 sm:mt-0">
                <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                  Exploring
                </p>

                <p className="text-sm font-medium text-white">
                  AI &amp; Emerging Tech
                </p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="lg:pt-2">
            <div className="mb-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f5b51b]">
                Currently working with
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Technologies I use to turn ideas into functional products.
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-0">
              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-4
                    transition-colors
                    hover:border-[#f5b51b]/40
                  "
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        text-base
                        font-medium
                        text-slate-300
                        transition-colors
                        group-hover:text-white
                      "
                    >
                      {technology}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="
                      text-slate-600
                      transition-all
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#f5b51b]
                    "
                  />
                </div>
              ))}
            </div>

            {/* Resume Link */}
            <a
              href="/resume.pdf"
              download
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:text-[#f5b51b]
              "
            >
              View my resume
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

        {/* Bottom Quote */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
            &quot;Good software is not only about making things work. It&apos;s
            about making them understandable, maintainable, and genuinely
            useful.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
