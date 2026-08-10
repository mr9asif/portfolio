import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { NetworkIcon } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "REST API", icon: null },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: null },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Foundations",
    skills: [
      { name: "Data Structures", icon: null },
      { name: "Algorithms", icon: null },
      { name: "SQL", icon: null },
      { name: "DBMS", icon: null },
      { name: "Networking", icon: NetworkIcon },
      { name: "Problem Solving", icon: null },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="text-sm font-medium text-[#f5b51b]">02</span>

          <span className="h-px w-8 bg-[#f5b51b]/50" />

          <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Skills
          </span>
        </div>

        {/* Intro */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Things I use to
            <span className="text-slate-500"> build, </span>
            <span className="text-[#f5b51b]">solve,</span>
            <span className="text-slate-500"> and </span>
            create.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            A growing toolkit shaped by real projects, curiosity, and a constant
            desire to learn better ways of building software.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-16">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="
                grid
                gap-5
                border-t
                border-white/10
                py-8
                md:grid-cols-[180px_1fr]
                md:items-start
                md:gap-10
              "
            >
              {/* Category */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#f5b51b]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-sm font-medium uppercase tracking-wider text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-3.5
                        py-2
                        text-sm
                        text-slate-400
                        transition-all
                        duration-200
                        hover:border-[#f5b51b]/40
                        hover:bg-[#f5b51b]/5
                        hover:text-white
                      "
                    >
                      {Icon ? (
                        <Icon
                          size={15}
                          color="currentColor"
                          className="
                            text-slate-500
                            transition-colors
                            duration-200
                            group-hover:text-[#f5b51b]
                          "
                        />
                      ) : (
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-slate-600
                            transition-colors
                            duration-200
                            group-hover:bg-[#f5b51b]
                          "
                        />
                      )}

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Exploring */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm text-slate-500">Currently exploring</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
            <span className="transition-colors hover:text-[#f5b51b]">AI</span>

            <span className="text-slate-700">•</span>

            <span className="transition-colors hover:text-[#f5b51b]">
              System Design
            </span>

            <span className="text-slate-700">•</span>

            <span className="transition-colors hover:text-[#f5b51b]">
              Backend Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
