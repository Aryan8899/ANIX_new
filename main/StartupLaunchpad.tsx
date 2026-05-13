"use client";

import { useState } from "react";

const roadmapSteps = [
  {
    id: 1,
    title: "Ideation & Structure",
    description: "Business model, legal form, and tax strategy",
  },
  {
    id: 2,
    title: "Incorporation",
    description: "Pvt Ltd / LLP / OPC registered in days",
  },
  {
    id: 3,
    title: "DPIIT Recognition",
    description: "Unlock tax exemptions & government benefits",
  },
  {
    id: 4,
    title: "Pitch Deck & Investor Readiness",
    description: "Compelling decks that raise capital",
  },
  {
    id: 5,
    title: "Ongoing Compliance",
    description: "GST, ROC, filings, payroll handled for you",
  },
];

const features = [
  "End-to-end company registration & ROC compliance",
  "DPIIT recognition and startup tax exemptions",
  "Investor-ready pitch deck development",
  "Business structuring for maximum tax efficiency",
  "Ongoing compliance tracking dashboard",
];

export default function StartupLaunchpad() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      {/* ── Keyframes ── move to globals.css if preferred */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          70%  { transform: scale(1.3) rotate(4deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes pricePulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.04); }
        }
        @keyframes stepSlide {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes rocketBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>

      <section className="bg-[#fdf4f6] w-full px-6 py-14 md:px-14 lg:px-20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* Badge */}
            <div
              className="flex items-center gap-2"
              style={{ animation: "fadeUp 0.5s ease both", animationDelay: "0.05s", opacity: 0 }}
            >
              <span
                className="text-base leading-none"
                style={{ animation: "rocketBounce 1.8s ease-in-out infinite", display: "inline-block" }}
              >
                🚀
              </span>
              <span className="text-[#e91e63] text-[11px] font-bold tracking-[0.22em] uppercase">
                Startup Launchpad
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] font-extrabold text-gray-900 leading-[1.12] tracking-tight"
              style={{ animation: "fadeUp 0.55s ease both", animationDelay: "0.13s", opacity: 0 }}
            >
              We Launch &amp; Scale India&apos;s Next Great Ventures.
            </h1>

            {/* Subtext */}
            <p
              className="text-gray-500 text-[13.5px] leading-relaxed max-w-lg"
              style={{ animation: "fadeUp 0.55s ease both", animationDelay: "0.21s", opacity: 0 }}
            >
              From the seed of an idea to a fully compliant, investor-ready enterprise —
              Anax Imperium is the structural backbone every ambitious founder needs.
            </p>

            {/* Feature list — each item staggered */}
            <ul className="flex flex-col gap-[10px] mt-1">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-[10px] text-gray-700 text-[13.5px]"
                  style={{
                    animation: "fadeRight 0.5s ease both",
                    animationDelay: `${0.3 + idx * 0.08}s`,
                    opacity: 0,
                  }}
                >
                  <span
                    className="text-[#e91e63] font-bold text-sm leading-5 flex-shrink-0"
                    style={{
                      animation: "checkPop 0.4s ease both",
                      animationDelay: `${0.32 + idx * 0.08}s`,
                      display: "inline-block",
                      opacity: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div
              className="mt-1"
              style={{ animation: "fadeUp 0.5s ease both", animationDelay: "0.72s", opacity: 0 }}
            >
              <button
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                className="text-white font-semibold text-[13px] px-7 py-[11px] rounded-full cursor-pointer border-none"
                style={{
                  background: btnHovered ? "#c2185b" : "#e91e63",
                  transform: btnHovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
                  boxShadow: btnHovered
                    ? "0 8px 24px -4px rgba(233,30,99,0.38)"
                    : "0 4px 12px -2px rgba(233,30,99,0.22)",
                  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
              >
                Launch Your Business →
              </button>
            </div>

            {/* Pricing Card */}
            <div
              className="mt-2 w-full rounded-2xl border border-[#F3A9C3] bg-[#F8D8E5] px-8 py-7 text-center"
              style={{ animation: "fadeUp 0.55s ease both", animationDelay: "0.8s", opacity: 0 }}
            >
              <p
                className="text-[#e91e63] text-[2rem] font-extrabold tracking-tight leading-none"
                style={{ animation: "pricePulse 2.4s ease-in-out 1.4s infinite" }}
              >
                ₹19,999
              </p>
              <p className="text-gray-400 text-[12.5px] mt-2">
                Incorporation Suite — Starting Price Onwards
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Roadmap Card ── */}
          <div
            className="w-full lg:w-[520px] flex-shrink-0 bg-white rounded-3xl border border-pink-100 shadow-sm px-7 py-8 flex flex-col gap-4"
            style={{ animation: "fadeLeft 0.6s ease both", animationDelay: "0.2s", opacity: 0 }}
          >
            {/* Card header */}
            <div
              className="flex items-center gap-2 mb-2"
              style={{ animation: "fadeUp 0.5s ease both", animationDelay: "0.35s", opacity: 0 }}
            >
              <span className="text-[18px] leading-none">🏁</span>
              <h2 className="text-gray-900 font-bold text-[17px]">Your Startup Roadmap</h2>
            </div>

            {/* Steps — staggered */}
            <div className="flex flex-col gap-[10px]">
              {roadmapSteps.map((step, i) => (
                <div
                  key={step.id}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="flex items-center gap-4 rounded-xl px-4 py-[14px] border cursor-default"
                  style={{
                    background: hoveredStep === step.id ? "#fdf2f8" : "#fdf4f6",
                    borderColor: hoveredStep === step.id ? "#f9a8d4" : "transparent",
                    boxShadow: hoveredStep === step.id ? "0 2px 12px rgba(233,30,99,0.08)" : "none",
                    transform: hoveredStep === step.id ? "translateX(4px)" : "translateX(0)",
                    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.22s",
                    animation: "stepSlide 0.5s ease both",
                    animationDelay: `${0.4 + i * 0.09}s`,
                    opacity: 0,
                  }}
                >
                  {/* Number bubble */}
                  <span
                    className="w-[30px] h-[30px] rounded-full bg-[#e91e63] text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0"
                    style={{
                      transform: hoveredStep === step.id ? "scale(1.15)" : "scale(1)",
                      transition: "transform 0.2s",
                    }}
                  >
                    {step.id}
                  </span>

                  {/* Text */}
                  <p className="text-gray-800 text-[13.5px] leading-snug">
                    <span className="font-semibold">{step.title}</span>
                    <span className="text-gray-400 font-normal"> — {step.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}