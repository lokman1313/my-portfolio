"use client";
import { useEffect, useState } from "react";

const roles = [
  "Welcome to My Portfolio.....",
  "MERN Stack Developer & UI Designer...",
];

export default function TypeLoop() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
  const current = roles[index];

  let speed = isDeleting ? 90 : 180; 
  const timer = setTimeout(() => {
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));

      if (text === current) {
        setIsDeleting(true);
        speed = 5500; 
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
}, [text, isDeleting, index]);

  return (
    <h2 className="text-gray-500 text-xl md:text-2xl mt-4 font-medium ">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}