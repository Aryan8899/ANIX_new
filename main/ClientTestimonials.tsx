"use client";


import { useEffect, useRef } from "react";

const testimonials = [
  {
    initial: "R",
    name: "Rohan Gupta",
    role: "Proprietor",
    quote:
      "Anax Imperium completely overhauled our compliance architecture. Their technical grasp on our statutory audit saved us immense time and identified critical areas we'd overlooked entirely.",
  },
  {
    initial: "M",
    name: "Mannat Kaur",
    role: "Founder",
    quote:
      "From our initial pitch deck structuring to our DPIIT recognition, the team's strategic insight was invaluable. They didn't just file paperwork — they shaped our entire financial foundation.",
  },
];

export default function ClientTestimonials() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
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
    <section className="relative w-full bg-pink-50 py-24 px-6 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#D0185A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            The Architecture of Success.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group relative bg-white border border-pink-100 rounded-2xl p-8 min-h-[220px] flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 opacity-0 translate-y-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hover ring */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-pink-200 transition-all duration-300 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-[#D0185A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="flex-1 mb-7">
                <span className="text-[#D0185A] text-3xl font-serif leading-none mr-1 select-none">
                  "
                </span>
                <p className="inline text-gray-700 text-[15px] leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#D0185A] flex items-center justify-center shadow-md shadow-pink-200 flex-shrink-0">
                  <span className="text-white text-sm font-bold">{t.initial}</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[#D0185A] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}