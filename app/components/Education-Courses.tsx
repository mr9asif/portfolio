import { ArrowUpRight, Award, BookOpen, GraduationCap } from "lucide-react";

import type { ElementType } from "react";

const education = [
  {
    number: "01",
    title: "Diploma in Computer Science & Technology",
    institution: "Dinajpur Polytechnic Institute",
    period: "2023 — 2026",
    description:
      "Studied programming, databases, data structures, computer architecture, networking, and software development.",
    icon: GraduationCap,
    image: "/education/dinajpur-polytechnic.png",
  },
  {
    number: "02",
    title: "Secondary School Certificate",
    institution: "Boropukur Nekmord Foridpara High School",
    period: "2020 — 2022",
    description: "Completed secondary education with a GPA of 5.00.",
    icon: GraduationCap,
    image: "/education/boropukur-school.png",
  },
];

const courses = [
  {
    number: "01",
    title: "Complete Web Development",
    provider: "Programming Hero",
    period: "December 2023 — June 2024",
    status: "Completed",
    icon: BookOpen,
    image: "/courses/programming-hero-level-1.png",
    certificate: "#",
  },
  {
    number: "02",
    title: "DSA & Web Development",
    provider: "Apna College",
    period: "March 2025 — February 2026",
    status: "Completed",
    icon: BookOpen,
    image: "/courses/apna-college.png",
    certificate: "#",
  },
  {
    number: "03",
    title: "AI-Driven Web Development",
    provider: "Programming Hero",
    period: "May 2026 — Present",
    status: "In progress",
    icon: BookOpen,
    image: "/courses/programming-hero-level-2.png",
    certificate: "#",
  },
];

function EntryImage({
  image,
  icon: Icon,
  alt,
}: {
  image?: string;
  icon: ElementType;
  alt: string;
}) {
  return (
    <div
      className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
      "
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-contain p-2"
        />
      ) : (
        <Icon size={19} strokeWidth={1.7} className="text-[#f5b51b]" />
      )}
    </div>
  );
}

export default function EducationCourses() {
  return (
    <section
      id="education"
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

        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="text-sm font-medium text-[#f5b51b]">04</span>

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
            Education & Courses
          </span>
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
            The foundation behind
            <span className="text-slate-500"> what I build.</span>
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
            My academic background and the courses that have shaped the way I
            approach software development.
          </p>
        </div>

        {/* =========================
            EDUCATION + COURSES
        ========================== */}

        <div
          className="
            mt-20
            grid
            gap-20
            md:grid-cols-2
            md:gap-0
          "
        >
          {/* =================================
              EDUCATION
          ================================== */}

          <div
            className="
              relative
              md:border-r
              md:border-white/10
              md:pr-16
            "
          >
            {/* Education heading */}
            <div className="mb-12 flex items-center gap-3">
              <GraduationCap
                size={17}
                strokeWidth={1.7}
                className="text-[#f5b51b]"
              />

              <h3
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Education
              </h3>
            </div>

            {/* Education Timeline Line */}
            <div
              className="
                absolute
                right-0
                top-12
                hidden
                h-[calc(100%-48px)]
                w-px
                bg-white/10
                md:block
              "
            />

            <div className="space-y-14">
              {education.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.number} className="group relative">
                    {/* Timeline Dot */}
                    <span
                      className="
                        absolute
                        -right-[70px]
                        top-1
                        hidden
                        h-3
                        w-3
                        rounded-full
                        border-[3px]
                        border-[#09193f]
                        bg-[#f5b51b]
                        md:block
                      "
                    />

                    {/* Entry */}
                    <div className="flex items-start gap-4">
                      <EntryImage
                        image={item.image}
                        icon={Icon}
                        alt={item.institution}
                      />

                      <div className="min-w-0">
                        <span
                          className="
                            text-xs
                            font-medium
                            text-[#f5b51b]
                          "
                        >
                          {item.number}
                        </span>

                        <h4
                          className="
                            mt-1
                            text-xl
                            font-semibold
                            leading-snug
                            text-white
                            transition-colors
                            duration-200
                            group-hover:text-slate-200
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            font-medium
                            text-slate-300
                          "
                        >
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="ml-[60px] mt-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-slate-500">
                          {item.period}
                        </span>

                        {item.title.includes("Secondary") && (
                          <>
                            <span className="text-slate-700">•</span>

                            <span
                              className="
                                text-xs
                                font-medium
                                text-[#f5b51b]
                              "
                            >
                              GPA 5.00
                            </span>
                          </>
                        )}
                      </div>

                      <p
                        className="
                          mt-4
                          max-w-md
                          text-sm
                          leading-6
                          text-slate-500
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* =================================
              COURSES
          ================================== */}

          <div
            className="
              relative
              md:pl-16
            "
          >
            {/* Courses heading */}
            <div className="mb-12 flex items-center gap-3">
              <Award size={17} strokeWidth={1.7} className="text-[#f5b51b]" />

              <h3
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Courses & Certifications
              </h3>
            </div>

            {/* Courses Timeline Line */}
            <div
              className="
                absolute
                left-0
                top-12
                hidden
                h-[calc(100%-48px)]
                w-px
                bg-white/10
                md:block
              "
            />

            <div className="space-y-14">
              {courses.map((course) => {
                const Icon = course.icon;

                return (
                  <article key={course.number} className="group relative">
                    {/* Timeline Dot */}
                    <span
                      className="
                        absolute
                        -left-[70px]
                        top-1
                        hidden
                        h-3
                        w-3
                        rounded-full
                        border-[3px]
                        border-[#09193f]
                        bg-[#f5b51b]
                        md:block
                      "
                    />

                    {/* Entry */}
                    <div className="flex items-start gap-4">
                      <EntryImage
                        image={course.image}
                        icon={Icon}
                        alt={course.provider}
                      />

                      <div className="min-w-0">
                        <span
                          className="
                            text-xs
                            font-medium
                            text-[#f5b51b]
                          "
                        >
                          {course.number}
                        </span>

                        <h4
                          className="
                            mt-1
                            text-xl
                            font-semibold
                            leading-snug
                            text-white
                            transition-colors
                            duration-200
                            group-hover:text-slate-200
                          "
                        >
                          {course.title}
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            font-medium
                            text-slate-300
                          "
                        >
                          {course.provider}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="ml-[60px] mt-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-slate-500">
                          {course.period}
                        </span>

                        <span className="text-slate-700">•</span>

                        <span
                          className={`
                            text-xs
                            font-medium
                            ${
                              course.status === "In progress"
                                ? "text-[#f5b51b]"
                                : "text-slate-400"
                            }
                          `}
                        >
                          {course.status}
                        </span>
                      </div>

                      {/* Certificate */}
                      <a
                        href={course.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-5
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.02]
                          px-3.5
                          py-2
                          text-xs
                          font-medium
                          text-slate-400
                          transition-all
                          duration-200
                          hover:border-[#f5b51b]/40
                          hover:bg-[#f5b51b]/5
                          hover:text-[#f5b51b]
                        "
                      >
                        View certificate
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <div
          className="
            mt-20
            border-t
            border-white/10
            pt-7
          "
        >
          <p
            className="
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
            "
          >
            Learning never really stops. Each course has been another step
            toward becoming a better software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
