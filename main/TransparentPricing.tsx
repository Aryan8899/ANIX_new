"use client";

import { useEffect, useRef } from "react";

const plans = [
  {
    badge: null,
    category: "Individual & Business",
    icon: (
      <svg className="w-9 h-9 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: "Income Tax Return",
    price: "2,499",
    priceNote: "Starting price per filing",
    description: "Includes income computation, tax calculation, and e-filing with complete documentation.",
    cta: "Get Started →",
    ctaStyle: "filled",
    highlight: false,
  },
  {
    badge: "Most Popular",
    category: "Annual Compliance",
    icon: (
      <svg className="w-9 h-9 text-[#D0185A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: "GST Compliance",
    price: "19,999",
    priceNote: "Per year, all-inclusive",
    description: "Includes GSTR-9, standard reconciliations, monthly filings, and proactive compliance monitoring.",
    cta: "Get Started →",
    ctaStyle: "filled",
    highlight: true,
  },
  {
    badge: "Starting Price",
    category: "Startup Formation",
    icon: (
      <svg className="w-9 h-9 text-[#D0185A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Incorporation Suite",
    price: "19,999",
    priceNote: "Complete ROC setup",
    description: "Full company registration, ROC filings, digital signatures, and first-year compliance included.",
    cta: "Get Started →",
    ctaStyle: "filled",
    highlight: true,
  },
  {
    badge: null,
    category: "Enterprise Audit",
    icon: (
      <svg className="w-9 h-9 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "Statutory Audit",
    price: "14,999",
    priceNote: "Starting price*",
    description: "*May vary based on turnover, risk profile, asset/liability scale, and audit complexity.",
    cta: "Get Custom Quote →",
    ctaStyle: "outline",
    highlight: false,
  },
];

export default function TransparentPricing() {
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
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-24 px-4 xl:px-8 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-pink-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative w-full max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D0185A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Transparent Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Clear Pricing. No Surprises.
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Baseline pricing for standard volumes. Final quotes are tailored to your transaction bandwidth and turnover bracket.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group relative flex flex-col rounded-2xl p-8 min-h-[460px] w-full opacity-0 translate-y-8 transition-all duration-500 shadow-sm hover:shadow-lg hover:-translate-y-1
                ${plan.highlight
                  ? "bg-pink-50 border-2 border-[#D0185A]/30"
                  : "bg-white border border-gray-100"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3.5 right-5 bg-[#D0185A] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow">
                  {plan.badge}
                </span>
              )}

              {/* Icon */}
              <div className="mb-4">{plan.icon}</div>

              {/* Category */}
              <p className="text-[#D0185A] text-[11px] font-semibold tracking-widest uppercase mb-1 flex items-center gap-1">
                {plan.category}
                <span className="text-[#D0185A]">↗</span>
              </p>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-lg mb-4 leading-snug">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mb-1">
                <span className="text-[#D0185A] text-4xl font-extrabold tracking-tight">
                  <span className="text-2xl align-top mt-1 inline-block">₹</span>
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-5">{plan.priceNote}</p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {plan.description}
              </p>

              {/* CTA */}
              <div className="mt-7">
                {plan.ctaStyle === "filled" ? (
                  <button className="w-full bg-[#D0185A] hover:bg-[#b01248] text-white text-sm font-semibold py-3 rounded-full transition-colors duration-200 cursor-pointer">
                    {plan.cta}
                  </button>
                ) : (
                  <button className="w-full border border-[#D0185A] text-[#D0185A] hover:bg-pink-50 text-sm font-semibold py-3 rounded-full transition-colors duration-200 cursor-pointer">
                    {plan.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-400 text-xs mt-10">
          All prices are exclusive of applicable taxes.{" "}
          <a href="#" className="text-[#D0185A] underline underline-offset-2 hover:text-[#b01248] transition-colors">
            Contact us
          </a>{" "}
          for a tailored quote based on your specific needs.
        </p>
      </div>
    </section>
  );
}