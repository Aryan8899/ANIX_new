"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "7+", label: "Years of Expertise" },
  { value: "100%", label: "On-Time Filings" },
  { value: "Pan-India", label: "Reach & Global Clients" },
];

const features = [
  {
    icon: "⚖️",
    title: "Deep Professional Expertise",
    description:
      "Led by professionals with over 7 years of specialized experience in complex statutory audits, taxation, and financial structuring across industries.",
  },
  {
    icon: "🚀",
    title: "Startup & DPIT Specialists",
    description:
      "Expert guidance for new ventures, including pitch deck development, DPIT recognition, and tech-enabled compliance scaling from day one.",
  },
  {
    icon: "🔒",
    title: "Uncompromising Security",
    description:
      "Bank-grade data protection and absolute confidentiality for all your financial ledgers, sensitive filings, and business information.",
  },
  {
    icon: "⚡",
    title: "Proactive Turnarounds",
    description:
      "Time-bound, penalty-free filings managed through our seamless tracking architecture with proactive deadline alerts.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function WhyChooseUs() {
  const { ref: sectionRef, inView } = useInView();

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden font-sans"
    >
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #e8006b 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div
        className={`max-w-xl mb-14 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: "#e8006b" }}
        >
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
          A Compliance Partner{" "}
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #e8006b 0%, #ff4d9e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Built on
          </span>{" "}
          Absolute Trust.
        </h2>
        <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-sm">
          We merge technical precision with tech-enabled efficiency, ensuring your business stays
          ahead of every regulatory curve.
        </p>
      </div>

      {/* Stats Bar */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden mb-10 shadow-lg transition-all duration-700 delay-200 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ background: "linear-gradient(135deg, #c8005a 0%, #e8006b 50%, #ff4d9e 100%)" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-7 px-6 text-white relative"
            style={{
              background:
                i === 1
                  ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%)"
                  : "transparent",
            }}
          >
            {/* Divider lines between items on desktop */}
            {i > 0 && (
              <span className="hidden md:block absolute left-0 top-1/4 h-1/2 w-px bg-white/20" />
            )}
            <span className="text-3xl md:text-4xl font-black tracking-tight leading-none">
              {stat.value}
            </span>
            <span className="mt-1 text-sm font-medium text-white/75 tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`group relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-500 ease-out cursor-default overflow-hidden ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${300 + i * 100}ms` }}
          >
            {/* Hover accent */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(232,0,107,0.04) 0%, transparent 70%)",
              }}
            />

            {/* Left accent bar */}
            <div
              className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ background: "linear-gradient(180deg, #e8006b, #ff4d9e)" }}
            />

            <div className="relative">
              <span className="text-2xl mb-4 block">{feature.icon}</span>
              <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}