"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setSent(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    formData.append("subject", `Portfolio Contact: ${formData.get("subject")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to send your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        scroll-mt-24
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
          <span className="text-sm font-medium text-[#f5b51b]">05</span>

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
            Get in touch
          </span>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div
          className="
            mt-16
            grid
            gap-16
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-24
          "
        >
          {/* =========================
              LEFT
          ========================== */}

          <div>
            <h2
              className="
                max-w-xl
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Let&apos;s build something
              <span className="text-slate-500"> worth building.</span>
            </h2>

            <p
              className="
                mt-7
                max-w-md
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              Have a project in mind, an opportunity to discuss, or simply want
              to say hello? I&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              {/* Email */}
              <a
                href="mailto:your@email.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-slate-500
                    transition-all
                    group-hover:border-[#f5b51b]/30
                    group-hover:text-[#f5b51b]
                  "
                >
                  <Mail size={16} />
                </span>

                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-600">
                    Email
                  </span>

                  <span className="mt-1 block">your@email.com</span>
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801XXXXXXXXX"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-slate-500
                    transition-all
                    group-hover:border-[#f5b51b]/30
                    group-hover:text-[#f5b51b]
                  "
                >
                  <Phone size={16} />
                </span>

                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-600">
                    Phone
                  </span>

                  <span className="mt-1 block">+880 1XXX-XXXXXX</span>
                </span>
              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-slate-400
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-slate-500
                  "
                >
                  <MapPin size={16} />
                </span>

                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-600">
                    Location
                  </span>

                  <span className="mt-1 block">Bangladesh</span>
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-slate-500
                  transition-all
                  hover:border-white/20
                  hover:bg-white/[0.03]
                  hover:text-white
                "
              >
                <SiGithub size={17} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
      flex h-10 w-10 items-center justify-center
      rounded-full border border-white/10
      text-slate-500
      transition-all
      hover:border-white/20
      hover:bg-white/[0.03]
      hover:text-white
    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[17px] w-[17px]"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>

              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-slate-500
                  transition-all
                  hover:border-[#f5b51b]/30
                  hover:bg-[#f5b51b]/5
                  hover:text-[#f5b51b]
                "
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT — FORM
          ========================== */}

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#10141d]/60
              p-6
              sm:p-8
            "
          >
            <div className="mb-8">
              <p className="text-sm font-medium text-white">
                Send me a message
              </p>

              <p className="mt-2 text-sm text-slate-500">
                I&apos;ll get back to you as soon as I can.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-700
                    transition-all
                    focus:border-[#f5b51b]/40
                    focus:bg-white/[0.03]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-700
                    transition-all
                    focus:border-[#f5b51b]/40
                    focus:bg-white/[0.03]
                  "
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What would you like to talk about?"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-700
                    transition-all
                    focus:border-[#f5b51b]/40
                    focus:bg-white/[0.03]
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me a little about your project..."
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-slate-700
                    transition-all
                    focus:border-[#f5b51b]/40
                    focus:bg-white/[0.03]
                  "
                />
              </div>

              {/* Status */}
              {sent && (
                <p className="text-sm text-emerald-400">
                  Message sent successfully. Thank you!
                </p>
              )}

              {error && <p className="text-sm text-red-400">{error}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  inline-flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#f5b51b]
                  px-6
                  text-sm
                  font-medium
                  text-[#080b12]
                  transition-all
                  duration-200
                  hover:bg-[#ffc533]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSending ? "Sending..." : "Send message"}

                {!isSending && (
                  <Send
                    size={15}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* =========================
            FOOTER LINE
        ========================== */}

        <div
          className="
            mt-24
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <a
            href="#home"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              text-slate-600
              transition-colors
              hover:text-[#f5b51b]
            "
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
