import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

type Rose = {
  id: number;
  top: number;
  left: number;
};

const TinyRose: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
  >
    <g>
      <path
        fill="#25AE5F"
        d="M72.964 65.034s-6.233-2.373-8.61 0l-3.588 3.58a6.062 6.062 0 0 0-.729 7.702L52 83.777V55h-4v66h4V86.508l9.432-8.758c2.385 1.789 5.774 1.623 7.944-.543l3.588-3.58c2.378-2.373 0-8.593 0-8.593z"
      />
      <path fill="#C03A2B" d="M30 33h20L40 21 30 33zm30-12L50 33h20L60 21z" />
      <path
        fill="#1F8B4D"
        d="M48 57h4v4h-4v-4zm16.354 8.034l-3.588 3.58a6.062 6.062 0 0 0-.729 7.702l-.018.016.844.803 12.101-12.101s-6.234-2.373-8.61 0z"
      />
      <path
        fill="#E64B3C"
        d="M70 21v17c0 11.046-8.954 20-20 20s-20-8.954-20-20V21l9.958 10 10.018-10 9.965 10L70 21z"
      />
      <path
        fill="#EB675A"
        d="M50 21.023V58c11.046 0 20-8.954 20-20V21L59.941 31 50 21.023z"
      />
    </g>
  </svg>
);

const TinyRoses: React.FC = () => {
  const [roses, setRoses] = useState<Rose[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateRandomPosition = (): { top: number; left: number } => ({
    top: Math.random() * 80 + 10,
    left: Math.random() * 80 + 10,
  });

  useEffect(() => {
    const initialRoses: Rose[] = Array.from({ length: 100 }, () => ({
      id: Date.now() + Math.random(),
      ...generateRandomPosition(),
    }));
    setRoses(initialRoses);

    const interval = setInterval(() => {
      const newRose: Rose = {
        id: Date.now() + Math.random(),
        ...generateRandomPosition(),
      };
      setRoses((prev) => [...prev, newRose]);

      setTimeout(() => {
        setRoses((prev) => prev.filter((rose) => rose.id !== newRose.id));
      }, 5000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".tiny-rose",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.05,
      }
    );
  }, [roses]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {roses.map((rose) => (
        <div
          key={rose.id}
          className="tiny-rose absolute"
          style={{
            top: `${rose.top}%`,
            left: `${rose.left}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <TinyRose />
        </div>
      ))}
    </div>
  );
};

export default TinyRoses;
