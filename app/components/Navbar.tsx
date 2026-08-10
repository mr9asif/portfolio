"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =========================
      ACTIVE SECTION
  ========================== */

  useEffect(() => {
    // If we're not on the home page, don't try to detect
    // home-page sections.
    if (window.location.pathname !== "/") {
      return;
    }

    const sections = navItems
      .map((item) => {
        const sectionId = item.href.split("#")[1];
        const element = document.getElementById(sectionId);

        return element;
      })
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
        fixed
        left-1/2
        top-4
        z-50
        w-[calc(100%-2rem)]
        max-w-xl
        -translate-x-1/2
        rounded-full
        border
        border-white/10
        bg-gray-600
        px-2
        py-2
        shadow-xl
        shadow-black/10
        backdrop-blur-xl
      "
    >
      {/* =========================
          DESKTOP NAVBAR
      ========================== */}

      <nav className="hidden items-center justify-center md:flex">
        {navItems.map((item) => {
          const sectionId = item.href.split("#")[1];
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`
                rounded-full
                px-4 py-2.5
                text-sm font-medium
                transition-all duration-200
                lg:px-5
                ${
                  isActive
                    ? "bg-[#c28a07] text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* =========================
          MOBILE NAVBAR
      ========================== */}

      <div className="flex items-center justify-between md:hidden">
        {/* Brand */}
        <a
          href="#home"
          className="
            text-lg
            font-semibold
            tracking-tight
            text-white
          "
        >
          mr9asif<span className="text-[#f5b51b]">.</span>
        </a>

        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#10141d]/90
            text-slate-300
            shadow-lg
            shadow-black/10
            backdrop-blur-xl
            transition
            hover:border-white/20
            hover:text-white
          "
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}

      {isOpen && (
        <div
          className="
            absolute
            left-4
            right-4
            top-[4.5rem]
            rounded-2xl
            border
            border-white/10
            bg-[#10141d]/95
            p-2
            shadow-2xl
            shadow-black/30
            backdrop-blur-xl
            md:hidden
          "
        >
          {navItems.map((item) => {
            const sectionId = item.href.split("#")[1];
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavigation}
                className={`
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition
                  ${
                    isActive
                      ? "bg-[#f5b51b] text-[#080b12]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
