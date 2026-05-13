"use client";

import { useEffect, useState } from "react";

const coreServices = [
  "Audit & Assurance",
  "GST & Income Tax",
  "Company Incorporation",
  "DPIIT Advisory",
  "Accounting & Bookkeeping",
  "NRI & Cross-Border",
  "Litigation Support",
  "Business Structuring",
  "Valuations",
  "CMA & Project Report",
];

const stats = [
  { value: "7+", label1: "Years of", label2: "Expertise" },
  { value: "100%", label1: "On-Time", label2: "Filings" },
  { value: "200+", label1: "Clients", label2: "Served" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // small delay so CSS transitions fire after paint
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes dotDrift {
          0%   { background-position: 0 0; }
          100% { background-position: 26px 26px; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0   rgba(233,30,140,0.22); }
          50%       { box-shadow: 0 0 0 10px rgba(233,30,140,0); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(233,30,140,0.35); }
          50%       { border-color: rgba(233,30,140,0.75); }
        }

        /* entrance helpers */
        .hero-fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1),
                      transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .hero-slide-right {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s cubic-bezier(.22,1,.36,1),
                      transform 0.6s cubic-bezier(.22,1,.36,1);
        }
        .hero-scale-in {
          opacity: 0;
          transform: scale(0.93);
          transition: opacity 0.8s cubic-bezier(.22,1,.36,1),
                      transform 0.8s cubic-bezier(.22,1,.36,1);
        }
        .hero-tag {
          opacity: 0;
          transform: translateY(10px) scale(0.95);
          transition: opacity 0.4s ease, transform 0.4s ease,
                      border-color 0.18s, color 0.18s, background 0.18s;
        }

        /* visible states (added once mounted) */
        .hero-in .hero-fade-up,
        .hero-in .hero-slide-right,
        .hero-in .hero-scale-in,
        .hero-in .hero-tag {
          opacity: 1;
          transform: none;
        }

        /* delay ladder */
        .hero-in .d1  { transition-delay: 0.10s; }
        .hero-in .d2  { transition-delay: 0.25s; }
        .hero-in .d3  { transition-delay: 0.40s; }
        .hero-in .d4  { transition-delay: 0.55s; }
        .hero-in .d5  { transition-delay: 0.45s; } /* card */
        .hero-in .d6  { transition-delay: 0.70s; }
        .hero-in .d7  { transition-delay: 0.85s; }
        .hero-in .d8  { transition-delay: 1.00s; }

        /* tag stagger: d-t0 … d-t9 */
        ${coreServices
          .map((_, i) => `.hero-in .d-t${i} { transition-delay: ${0.7 + i * 0.07}s; }`)
          .join("\n")}

        /* shimmer headline */
        .shimmer-text {
          background: linear-gradient(90deg, #E91E8C, #ff6eb4, #E91E8C);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* floating blobs */
        .blob-1 { animation: floatBlob 7s ease-in-out infinite; }
        .blob-2 { animation: floatBlob 9s ease-in-out infinite reverse; }

        /* dot grid drift */
        .dot-grid { animation: dotDrift 8s linear infinite; }

        /* CTA pulse */
        .cta-primary { animation: pulseRing 2.5s ease-in-out infinite; }

        /* border glow on outline button */
        .cta-outline { animation: borderGlow 2.5s ease-in-out infinite; }

        /* services card hover lift */
        .services-card {
          transition: transform 0.3s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.3s cubic-bezier(.22,1,.36,1);
        }
        .services-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(233,30,140,0.15),
                      0 4px 16px rgba(0,0,0,0.06) !important;
        }

        /* tag hover */
        .service-tag:hover {
          border-color: #f0a0cc !important;
          color: #E91E8C !important;
          background: #fff5f9 !important;
          transform: scale(1.05);
        }
      `}</style>

      <section
        className={`${mounted ? "hero-in" : ""} relative w-full min-h-screen overflow-hidden flex items-center`}
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white z-0" />

        {/* Blobs */}
        <div className="blob-1 absolute top-[-8%] right-[-4%] w-[520px] h-[520px] rounded-full bg-pink-200 opacity-50 blur-3xl pointer-events-none z-0" />
        <div className="blob-2 absolute bottom-[-8%] left-[-4%] w-[420px] h-[420px] rounded-full bg-pink-300 opacity-20 blur-3xl pointer-events-none z-0" />

        {/* Dot grid */}
        <div
          className="dot-grid absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e91e8c 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* ── Main grid ── */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ════ LEFT ════ */}
          <div className="flex flex-col gap-5">

            {/* Location badge */}
            <div className="hero-slide-right d1 inline-flex items-center w-fit gap-2 px-4 py-1.5 rounded-full border border-pink-300 bg-white/70 backdrop-blur-sm">
              <span className="text-[#E91E8C] text-xs font-bold">·</span>
              <span className="text-[0.7rem] font-semibold tracking-[0.13em] text-gray-500 uppercase">
                Gurugram · Serving India &amp; Globally
              </span>
            </div>

            {/* Headline */}
            <div className="hero-fade-up d2 leading-[1.02] mt-1">
              <h1 className="text-[3.6rem] sm:text-[4.5rem] lg:text-[5.2rem] font-black uppercase tracking-tight text-gray-900">
                Compliance
                <br />
                Made
              </h1>
              <h1 className="text-[3.6rem] sm:text-[4.5rem] lg:text-[5.2rem] font-black uppercase tracking-tight text-[#E91E8C]">
                Effortless.
              </h1>
            </div>

            {/* Subtext */}
            <p className="hero-fade-up d3 text-[0.9rem] text-gray-500 leading-relaxed max-w-[500px]">
              Trusted, mission-critical financial compliance services for
              startups, MSMEs, and enterprises — engineered for reliability,
              speed, and absolute legal precision.
            </p>

            {/* CTA buttons */}
            <div className="hero-fade-up d4 flex flex-wrap items-center gap-3 mt-1">
              <a
                href="#book"
                className="cta-primary inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E91E8C] text-white font-semibold text-[0.88rem] hover:bg-[#c9167a] active:scale-[0.97] transition-colors duration-200 shadow-lg shadow-pink-300/40"
              >
                Book Free Consultation →
              </a>
              <a
                href="#services"
                className="cta-outline inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#E91E8C]/40 text-[#E91E8C] font-semibold text-[0.88rem] hover:border-[#E91E8C] hover:bg-pink-50 transition-colors duration-200 bg-white/50 backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-start gap-10 mt-4 pt-5 border-t border-pink-100">
              {stats.map((stat, i) => (
                <div
                  key={stat.value}
                  className={`hero-fade-up d${6 + i} flex flex-col`}
                >
                  <span className="text-[2.4rem] font-black leading-none text-[#E91E8C]">
                    {stat.value}
                  </span>
                  <span className="text-[0.74rem] text-gray-400 leading-snug mt-1.5 font-medium">
                    {stat.label1}
                    <br />
                    {stat.label2}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — Core Services Card ════ */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="services-card hero-scale-in d5 w-full max-w-[500px] bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-6"
              style={{
                boxShadow:
                  "0 8px 40px rgba(233,30,140,0.10), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Card header */}
              <h2 className="text-[1.05rem] font-semibold text-gray-800">
                Our{" "}
                <span className="text-[#E91E8C] font-bold">Core Services</span>
              </h2>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {coreServices.map((service, i) => (
                  <span
                    key={service}
                    className={`service-tag hero-tag d-t${i} px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-[0.76rem] font-medium text-gray-600 cursor-default`}
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Startup Package row */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.95rem] font-semibold text-gray-800">
                    Startup Package
                  </p>
                  <p className="text-[0.78rem] text-gray-400 mt-0.5">
                    Starting ₹19,999 onwards
                  </p>
                </div>
                <a
                  href="#startup"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E91E8C] text-white font-semibold text-[0.83rem] hover:bg-[#c9167a] active:scale-[0.97] transition-colors duration-200 shadow-md shadow-pink-200 whitespace-nowrap"
                >
                  Launch Now →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}