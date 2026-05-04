"use client";
import { useEffect, useState } from "react";

const roles = [
  "Welcome to My Portfolio ",
  "MERN Stack Developer & UI Designer",
];

export default function TypeLoop() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = roles[index];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500); // pause time

      return () => clearTimeout(pauseTimer);
    }

    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setIsPaused(true);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, isPaused]);

  return (
    <h2 className="text-gray-400 text-xl md:text-2xl mt-4 font-medium">
      {text}
      <span className="ml-1 animate-blink">|</span>
    </h2>
  );
}