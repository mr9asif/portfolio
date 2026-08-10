"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingRole() {
  return (
    <h2
      className="
        mb-5
        text-xl
        font-semibold
        text-gray-400
        sm:mb-6
        sm:text-2xl
        md:text-3xl
      "
    >
      <Typewriter
        words={[
          "Full-Stack Developer </>",
          "MERN Stack Developer 🖥️",
          "Software Engineer 💻",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1800}
      />
    </h2>
  );
}
