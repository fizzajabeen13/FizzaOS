"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition duration-300"
      style={{
        background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(215, 221, 232, 0.12), transparent 45%)`,
      }}
    />
  );
}