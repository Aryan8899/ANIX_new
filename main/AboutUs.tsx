const highlights = [
  "Gurugram-headquartered, nationally serving",
  "Specialists in GST, Income Tax & ROC filings",
  "DPIT recognition & startup advisory experts",
  "NRI & cross-border tax compliance",
];

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{ background: "#fce8f1" }}
    >
      {/* Faint dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(232,0,107,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* ── LEFT CARD ── */}
        <div className="relative rounded-3xl p-8 md:p-10 bg-white shadow-sm overflow-hidden">
          {/* Watermark text */}
          <span
            className="pointer-events-none absolute -top-2 -left-3 text-[7rem] md:text-[9rem] font-black leading-none select-none"
            style={{ color: "rgba(232,0,107,0.07)", letterSpacing: "-0.04em" }}
            aria-hidden="true"
          >
            AMAX
          </span>

          {/* Body copy */}
          <div className="relative space-y-4 mb-8">
            <p className="text-gray-500 text-sm leading-relaxed">
              Amax Imperium Business Solutions is a comprehensive business consultancy firm committed
              to simplifying compliance across India. Operating from the corporate hub of{" "}
              <span className="font-bold text-gray-800">
                Gurugram
              </span>
              , we bridge the gap between complex Indian regulatory frameworks and seamless business
              operations.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Whether you are an early-stage startup needing a bulletproof foundation or an
              established enterprise requiring rigorous statutory audits, we deliver end-to-end,
              legally sound solutions.
            </p>
          </div>

          {/* Mission & Vision pills */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Mission */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(232,0,107,0.08)" }}
            >
              <p
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2"
                style={{ color: "#e8006b" }}
              >
                Our Mission
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                To democratize access to elite, professional financial compliance for every visionary
                enterprise in India.
              </p>
            </div>

            {/* Vision */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(232,0,107,0.08)" }}
            >
              <p
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2"
                style={{ color: "#e8006b" }}
              >
                Our Vision
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                To be the structural backbone of India's most successful businesses through
                transparent pricing and flawless execution.
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT CONTENT ── */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <p
            className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#e8006b" }}
          >
            About Us
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-5">
            Built on Expertise.
            <br />
            Driven by Your Growth.
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg">
            We don't just file the paperwork — we architect your compliance foundation so you can
            focus entirely on building what matters.
          </p>

          {/* Checkmark list */}
          <ul className="mb-10 divide-y divide-pink-200/60">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-3 py-3">
                <span
                  className="flex-shrink-0 text-sm font-bold"
                  style={{ color: "#e8006b" }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div>
            <button
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md"
              style={{
                background: "linear-gradient(135deg,#c8005a,#e8006b,#ff3d8e)",
              }}
            >
              Talk to Our Experts
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}