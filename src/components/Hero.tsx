"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = [
    "Fullstack Web Developer",
    "Front End Developer",
    "Backend Web Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && typedText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <div id="home" className="bg-light relative overflow-hidden">
      {/* Yellow paint splash in top-left corner */}
      <img
        src="/images/bg-header.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-64 md:w-80 lg:w-96 h-auto pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-5 items-center min-h-[80vh]">
          <div className="py-20 pb-12 lg:py-32">
            <h3 className="text-primary mb-3 font-semibold tracking-wide uppercase text-sm">Hello, I&apos;m</h3>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-dark mb-4 tracking-tight">Jude <br />Clottey.</h1>
            <h2 className="text-2xl md:text-3xl text-dark/70 font-light mb-8 h-10">
              <span className="font-medium text-primary">{typedText}</span>
              <span className="animate-pulse text-dark/50">|</span>
            </h2>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                Let&apos;s Talk
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1pRMj4OS9WrJqTxfhLjGL4ghfqxTyhGzB"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-dark border border-gray-200 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-1"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            {/* Professional abstract code window instead of human photo */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-8 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative w-4/5 bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-white/10 flex flex-col transform hover:scale-105 transition-transform duration-500 z-10">
                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 text-xs text-white/40 font-mono">developer.ts</div>
                </div>
                <div className="p-8 font-mono text-sm leading-relaxed text-[#d4d4d4] flex-1 flex flex-col">
                  <p><span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">developer</span> <span className="text-[#d4d4d4]">=</span> {'{'}</p>
                  <p className="pl-6"><span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">'Jude Clottey'</span>,</p>
                  <p className="pl-6"><span className="text-[#9cdcfe]">role</span>: <span className="text-[#ce9178]">'Fullstack Web Developer'</span>,</p>
                  <p className="pl-6"><span className="text-[#9cdcfe]">skills</span>: [</p>
                  <p className="pl-12 text-[#ce9178]">'React', 'Node.js',</p>
                  <p className="pl-12 text-[#ce9178]">'TypeScript', 'Next.js'</p>
                  <p className="pl-6">],</p>
                  <p className="pl-6"><span className="text-[#9cdcfe]">passion</span>: <span className="text-[#ce9178]">'Building scalable solutions'</span></p>
                  <p>{'};'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
