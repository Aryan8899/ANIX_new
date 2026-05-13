"use client";


import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Strategic Consultation",
    description:
      "We analyze your business in depth to identify compliance gaps, tax optimization opportunities, and structural improvements.",
  },
  {
    number: "02",
    title: "Secure Handoff",
    description:
      "Upload documents via our encrypted Client Portal. Bank-grade security ensures your sensitive information is always protected.",
  },
  {
    number: "03",
    title: "Expert Execution",
    description:
      "Our certified professionals handle all filings and regulatory submissions with precision — on time, every time, penalty-free.",
  },
  {
    number: "04",
    title: "Continuous Growth Partnership",
    description:
      "Proactive alerts, strategic advisory, a dedicated compliance dashboard, and a long-term partner invested in your growth.",
  },
];

export default function HowItWorks() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-24 px-6 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-pink-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D0185A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Your Journey to Frictionless{" "}
            <span className="text-[#D0185A]">Compliance.</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Four simple steps from consultation to complete compliance mastery.
          </p>
        </div>

        {/* Connector line (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[calc(50%+40px)] w-[calc(100%-160px)] h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent pointer-events-none" />

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-10 min-h-[120px] flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover accent */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-pink-200 transition-all duration-300 pointer-events-none" />

              {/* Number badge */}
              <div className="w-14 h-14 rounded-full bg-[#D0185A] flex items-center justify-center mb-8 shadow-md shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-sm font-bold tracking-wide">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-gray-900 font-bold text-lg mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Step indicator dot (bottom) */}
              <div className="mt-auto pt-8 flex items-center gap-1.5">
                {steps.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`block h-1 rounded-full transition-all duration-300 ${
                      dotIndex === i
                        ? "w-5 bg-[#D0185A]"
                        : "w-1.5 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}