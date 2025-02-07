import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import BloomingRose from "./BloomingRose";
import TinyRoses from "./TinyRoses";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      setName(inputRef.current.value);
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (submitted && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50, scale: 0.8, rotation: -10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [submitted]);

  return (
    <div className="relative min-h-screen w-full bg-[#FAA0A0] p-4 flex flex-col">
      <TinyRoses />
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        {!submitted ? (
          <div className="relative z-20 bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <label htmlFor="name" className="mb-2 text-xl sm:text-2xl">
                Enter your name:
              </label>
              <input
                ref={inputRef}
                id="name"
                type="text"
                className="p-2 border border-gray-300 rounded mb-4 w-full"
                placeholder="Your name..."
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <>
            <div
              ref={textRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-red-500"
            >
              Happy Rose Day {name}!
            </div>
            <div className="mt-4 w-full max-w-md mx-auto">
              <BloomingRose />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
