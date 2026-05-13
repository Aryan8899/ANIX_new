"use client";

import { useState } from "react";

const services = [
  {
    category: "CORE COMPLIANCE & AUDIT",
    catColor: "#E8184A",
    title: "Audit & Assurance",
    description:
      "Comprehensive audit and assurance services designed to identify risks and strengthen financial controls.",
    emoji: "🏛️",
  },
  {
    category: "CORE COMPLIANCE & AUDIT",
    catColor: "#E8184A",
    title: "GST & Income Tax",
    description:
      "End-to-end GST management and income tax planning that minimises liability and maximises compliance.",
    emoji: "📊",
  },
  {
    category: "CORE COMPLIANCE & AUDIT",
    catColor: "#E8184A",
    title: "Accounting & Bookkeeping",
    description:
      "Accurate, real-time bookkeeping and accounting reports with meticulously maintained strategies.",
    emoji: "📒",
  },
  {
    category: "STARTUP ADVISORY",
    catColor: "#E8184A",
    title: "Company Incorporation",
    description:
      "Fast-track Pvt Ltd, LLP, OPC, or HUF setup with complete end-to-end compliance and ROC filings.",
    emoji: "🏢",
  },
  {
    category: "STARTUP ADVISORY",
    catColor: "#E8184A",
    title: "DPIIT & Pitch Deck Advisory",
    description:
      "Investor-aligned pitch decks and DPIIT recognition that optimises your startup's positioning.",
    emoji: "💡",
  },
  {
    category: "STARTUP ADVISORY",
    catColor: "#E8184A",
    title: "Business Structuring",
    description:
      "Architecting your legal and financial frameworks for optimum tax efficiency and operational clarity.",
    emoji: "🦅",
  },
  {
    category: "ADVISORY & GLOBAL",
    catColor: "#E8184A",
    title: "Litigation Support",
    description:
      "Expert representation in tax disputes, assessment proceedings, tribunals, and DRI submissions.",
    emoji: "⚖️",
  },
  {
    category: "ADVISORY & GLOBAL",
    catColor: "#E8184A",
    title: "NRI & Cross-Border Services",
    description:
      "FEMA compliance, NRI registrations, and definitive business setup for global clients worldwide.",
    emoji: "🌐",
  },
  {
    category: "INSURANCE & FINANCE",
    catColor: "#E8184A",
    title: "Valuations",
    description:
      "Independent business, equity, and royalty valuations for ESOP, restructuring, and due diligence.",
    emoji: "💰",
  },
  {
    category: "INSURANCE & FINANCE",
    catColor: "#E8184A",
    title: "Portfolio Management",
    description:
      "Strategic oversight on investment portfolios — risk assessment, objective guidance, performance reviews.",
    emoji: "📈",
  },
  {
    category: "INSURANCE & FINANCE",
    catColor: "#E8184A",
    title: "Project Report & CMA",
    description:
      "Professionally prepared project reports and CMA sheets for securing capital from banks and FIs.",
    emoji: "📋",
  },
  {
    category: "ADVISORY & CONSULTING",
    catColor: "#E8184A",
    title: "Advisory Services",
    description:
      "Strategic advisory covering financial planning, compliance regularisation, and risk management.",
    emoji: "🎯",
  },
];

// Add this to your global CSS or tailwind config:
// If using Tailwind, add the keyframes in tailwind.config.js under theme.extend.keyframes
// OR just drop the <style> block below into your layout/global CSS file.
//
// @keyframes fadeUp {
//   from { opacity: 0; transform: translateY(28px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// @keyframes shimmer {
//   0%   { transform: translateX(-100%) skewX(-12deg); }
//   100% { transform: translateX(220%) skewX(-12deg); }
// }
// @keyframes ring {
//   0%   { transform: scale(1); opacity: .6; }
//   100% { transform: scale(2.2); opacity: 0; }
// }
// .animate-fadeUp { animation: fadeUp 0.55s ease both; }
// .animate-shimmer { animation: shimmer 0.65s ease forwards; }
// .animate-ring    { animation: ring 0.55s ease-out forwards; }

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white border rounded-2xl p-6 flex flex-col gap-4 cursor-pointer overflow-hidden"
      style={{
        borderColor: hovered ? "#fda4af" : "#f0f0f0",
        boxShadow: hovered
          ? "0 12px 36px -6px rgba(232,24,74,0.12)"
          : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        // Staggered entrance animation
        animation: `fadeUp 0.55s ease both`,
        animationDelay: `${0.05 + index * 0.07}s`,
        opacity: 0, // starts hidden, fadeUp brings it in
      }}
    >
      {/* Shimmer sweep on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)",
          animation: hovered ? "shimmer 0.65s ease forwards" : "none",
          pointerEvents: "none",
        }}
      />

      {/* Subtle hover tint */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          backgroundColor: service.catColor,
          opacity: hovered ? 0.03 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Category label */}
      <span
        className="text-[10px] font-bold tracking-[0.18em] uppercase flex items-center gap-1 relative z-10"
        style={{ color: service.catColor }}
      >
        {service.category}
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{
            transform: hovered ? "translateX(3px)" : "translateX(0)",
            transition: "transform 0.2s",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>

      {/* Emoji with pulse ring */}
      <div className="relative w-12 h-12 flex items-center justify-center z-10">
        <span
          className="text-4xl leading-none select-none block"
          style={{
            transform: hovered ? "scale(1.18) rotate(-4deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.25s",
          }}
        >
          {service.emoji}
        </span>
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full border-2 pointer-events-none"
          style={{
            borderColor: "#E8184A",
            animation: hovered ? "ring 0.55s ease-out forwards" : "none",
            opacity: hovered ? undefined : 0,
          }}
        />
      </div>

      {/* Title + description */}
      <div className="relative z-10">
        <h3
          className="text-[15px] font-bold leading-snug mb-2"
          style={{
            color: hovered ? "#E8184A" : "#111",
            transition: "color 0.2s",
          }}
        >
          {service.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      {/* ── Keyframe styles ── inject once globally if possible, else keep here */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
        @keyframes ring {
          0%   { transform: scale(1); opacity: .6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>

      <section className="bg-white py-16 px-6 md:px-12">
        {/* Header — staggered fade-up */}
        <div className="mb-10">
          <p
            className="text-[11px] font-bold tracking-[0.2em] text-[#E8184A] uppercase mb-3"
            style={{ animation: "fadeUp 0.5s ease both", animationDelay: "0.05s", opacity: 0 }}
          >
            What We Do
          </p>
          <h2
            className="text-[28px] md:text-[36px] font-extrabold text-gray-950 leading-[1.15] tracking-tight max-w-xl mb-4"
            style={{ animation: "fadeUp 0.55s ease both", animationDelay: "0.15s", opacity: 0 }}
          >
            End-to-End Solutions for Every Stage of Business.
          </h2>
          <p
            className="text-[13.5px] text-gray-500 leading-relaxed max-w-xs"
            style={{ animation: "fadeUp 0.55s ease both", animationDelay: "0.25s", opacity: 0 }}
          >
            Comprehensive, legally sound services delivered with precision and expertise.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}

          {/* Wide registration card */}
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden relative"
            style={{
              animation: `fadeUp 0.55s ease both`,
              animationDelay: `${0.05 + services.length * 0.07}s`,
              opacity: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              transition: "box-shadow 0.2s",
            }}
          >
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#E8184A] flex items-center gap-1 mb-3">
                REGISTRATIONS & CERTIFICATIONS
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                All Types of Registrations
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed max-w-2xl">
                GST Registration, PAN/TAN, Digital Signature Certificate (DSC), MSME/Udyam, IEC
                (Import Export Code), Shops & Establishment, Professional Tax, Trade License, and
                all other regulatory registrations. We handle the paperwork, you focus on business.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                className="text-white text-[13px] font-bold px-7 py-3 rounded-full whitespace-nowrap cursor-pointer border-none"
                style={{
                  background: btnHovered ? "#c91240" : "#E8184A",
                  transform: btnHovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: btnHovered
                    ? "0 8px 24px -4px rgba(232,24,74,0.35)"
                    : "none",
                  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
              >
                Get a Custom Quote →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}