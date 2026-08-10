"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      {/* =========================
          DESKTOP NAVBAR
      ========================== */}
      <nav
        className="
          mx-auto hidden w-fit
          items-center
          rounded-full
          border border-white/10
          bg-gray-700
          px-2 py-2
          shadow-lg shadow-black/10
          backdrop-blur-xl
          md:flex
        "
      >
        {navItems.map((item, index) => (
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
                index === 0
                  ? "bg-[#f5b51b] text-[#080b12]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            {item.label}
          </a>
        ))}
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
          {navItems.map((item, index) => (
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
                  index === 0
                    ? "bg-[#f5b51b] text-[#080b12]"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
