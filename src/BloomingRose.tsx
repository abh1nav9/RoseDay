import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const BloomingRose: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rosePaths = svgRef.current?.querySelectorAll("g[clip-path] > path");
    if (rosePaths) {
      gsap.fromTo(
        rosePaths,
        {
          scale: 0,
          rotation: -30,
          autoAlpha: 0,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          rotation: 0,
          autoAlpha: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      className="w-full h-auto max-w-xl mx-auto"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#EDF0F1"
        d="M50 0c27.613 0 50 22.386 50 50s-22.387 50-50 50C22.386 100 0 77.614 0 50S22.386 0 50 0z"
      />

      <defs>
        <circle id="a" cx="50" cy="50" r="50" />
      </defs>

      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>

      <g clipPath="url(#b)">
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
};

export default BloomingRose;
