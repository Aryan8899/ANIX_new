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

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-white border rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 overflow-hidden
        ${hovered ? "border-pink-200 shadow-xl -translate-y-1" : "border-gray-100 shadow-sm"}`}
    >
      {/* Subtle hover tint */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${hovered ? "opacity-[0.03]" : "opacity-0"}`}
        style={{ backgroundColor: service.catColor }}
      />

      {/* Category label */}
      <span
        className="text-[10px] font-bold tracking-[0.18em] uppercase flex items-center gap-1"
        style={{ color: service.catColor }}
      >
        {service.category}
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </span>

      {/* Emoji icon */}
      <div className="text-4xl leading-none select-none">{service.emoji}</div>

      {/* Title + description */}
      <div>
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2">
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
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Header — stacked layout matching image 1 */}
      <div className="mb-10">
        <p className="text-[11px] font-bold tracking-[0.2em] text-[#E8184A] uppercase mb-3">
          What We Do
        </p>
        <h2 className="text-[28px] md:text-[36px] font-extrabold text-gray-950 leading-[1.15] tracking-tight max-w-xl mb-4">
          End-to-End Solutions for Every Stage of Business.
        </h2>
        <p className="text-[13.5px] text-gray-500 leading-relaxed max-w-xs">
          Comprehensive, legally sound services delivered with precision and expertise.
        </p>
      </div>

      {/* 3-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}

        {/* Wide registration card — full width */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex-1">
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#E8184A] flex items-center gap-1 mb-3">
              REGISTRATIONS & CERTIFICATIONS
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-[16px] font-bold text-gray-900 mb-2">
              All Types of Registrations
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-2xl">
              GST Registration, PAN/TAN, Digital Signature Certificate (DSC), MSME/Udyam, IEC (Import
              Export Code), Shops & Establishment, Professional Tax, Trade License, and all other
              regulatory registrations. We handle the paperwork, you focus on business.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-[#E8184A] hover:bg-[#c91240] text-white text-[13px] font-bold px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer">
              Get a Custom Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}