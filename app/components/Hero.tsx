import { SiGithub } from "@icons-pack/react-simple-icons";
import { Download, Mail } from "lucide-react";
import TypingRole from "./typing-role";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-5
        pb-16
        pt-28
        sm:px-8
        sm:pt-32
        lg:px-12
        lg:pb-20
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-950/20
          blur-[130px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-6xl
          items-center
          gap-12
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-16
        "
      >
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="order-2 max-w-3xl lg:order-1">
          {/* Intro */}
          <p
            className="
              mb-4
              text-base
              text-slate-400
              sm:mb-5
              sm:text-lg
            "
          >
            Welcome! I&apos;m
          </p>

          {/* Name + Social */}
          <div
            className="
              mb-5
              flex
              flex-col
              items-start
              gap-4
              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >
            <h1
              className="
    text-5xl
    font-bold
    tracking-tight
    text-white
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
  "
            >
              Asif Ali
            </h1>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/5
                  text-slate-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0-4.12ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/5
                  text-slate-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <SiGithub size={18} />
              </a>

              {/* Email */}
              <a
                href="#"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/5
                  text-slate-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Role */}
          <TypingRole />
          {/* Description */}
          <p
            className="
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            I build modern web applications with clean architecture, scalable
            backend systems, and thoughtful user experiences. I enjoy turning
            ideas into reliable, real-world products.
          </p>

          {/* Resume */}
          <div className="mt-7 sm:mt-9">
            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-3
                rounded-lg
                border
                border-[#f5b51b]
                px-5
                py-3
                text-sm
                font-medium
                text-[#f5b51b]
                transition-all
                duration-200
                hover:bg-[#f5b51b]
                hover:text-[#080b12]
                sm:px-6
                sm:py-3.5
              "
            >
              Resume
              <Download size={17} />
            </a>
          </div>
        </div>

        {/* =========================
            RIGHT / PROFILE IMAGE
        ========================== */}
        <div
          className="
            order-1
            flex
            justify-center
            lg:order-2
          "
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-[2rem]
                bg-[#f5b51b]/10
                blur-3xl
              "
            />

            {/* Image */}
            <div
              className="
                relative
                h-[280px]
                w-[240px]
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#10141d]
                sm:h-[340px]
                sm:w-[290px]
                sm:rounded-[2rem]
                lg:h-[390px]
                lg:w-[330px]
              "
            >
              <img
                src="/profile.jpeg"
                alt="Your Name"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
