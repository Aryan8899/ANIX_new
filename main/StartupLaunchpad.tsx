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

  return (
    <section className="bg-[#fdf4f6] w-full px-6 py-14 md:px-14 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="text-base leading-none">🚀</span>
            <span className="text-[#e91e63] text-[11px] font-bold tracking-[0.22em] uppercase">
              Startup Launchpad
            </span>
          </div>

          {/* Headline — no forced break, large enough to sit on one line */}
          <h1 className="text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            We Launch &amp; Scale India&apos;s Next Great Ventures.
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-[13.5px] leading-relaxed max-w-lg">
            From the seed of an idea to a fully compliant, investor-ready enterprise —
            Anax Imperium is the structural backbone every ambitious founder needs.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-[10px] mt-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-[10px] text-gray-700 text-[13.5px]">
                <span className="text-[#e91e63] font-bold text-sm leading-5 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-1">
            <button className="bg-[#e91e63] hover:bg-[#c2185b] active:scale-95 text-white font-semibold text-[13px] px-7 py-[11px] rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
              Launch Your Business →
            </button>
          </div>

          {/* Pricing Card — full width of left column, no max-w constraint */}
          <div className="mt-2 w-full rounded-2xl border border-[#F3A9C3] bg-[#F8D8E5] px-8 py-7 text-center">
            <p className="text-[#e91e63] text-[2rem] font-extrabold tracking-tight leading-none">
              ₹19,999
            </p>
            <p className="text-gray-400 text-[12.5px] mt-2">
              Incorporation Suite — Starting Price Onwards
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Roadmap Card ── */}
        <div className="w-full lg:w-[520px] flex-shrink-0 bg-white rounded-3xl border border-pink-100 shadow-sm px-7 py-8 flex flex-col gap-4">

          {/* Card header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[18px] leading-none">🏁</span>
            <h2 className="text-gray-900 font-bold text-[17px]">Your Startup Roadmap</h2>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-[10px]">
            {roadmapSteps.map((step) => (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`flex items-center gap-4 rounded-xl px-4 py-[14px] border transition-all duration-200 cursor-default
                  ${hoveredStep === step.id
                    ? "bg-pink-50 border-pink-200 shadow-sm"
                    : "bg-[#fdf4f6] border-transparent"
                  }`}
              >
                {/* Number bubble */}
                <span className="w-[30px] h-[30px] rounded-full bg-[#e91e63] text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0">
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
  );
}