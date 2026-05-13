const highlights = [
  "Gurugram-headquartered, nationally serving",
  "Specialists in GST, Income Tax & ROC filings",
  "DPIT recognition & startup advisory experts",
  "NRI & cross-border tax compliance",
];

const animStyles = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideRight {
    from { opacity: 0; transform: translateX(-28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes floatWatermark {
    0%, 100% { transform: translateY(0px) rotate(-2deg); }
    50%       { transform: translateY(-10px) rotate(-2deg); }
  }
  @keyframes dotPulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.5; }
  }
  @keyframes pillFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes listItemIn {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes btnPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(232,0,107,0.4); }
    50%       { box-shadow: 0 0 0 10px rgba(232,0,107,0); }
  }

  .amax-card {
    animation: fadeSlideRight 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both;
  }
  .amax-right {
    animation: fadeSlideLeft 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both;
  }
  .amax-watermark {
    animation: floatWatermark 5s ease-in-out infinite;
    transform-origin: center;
    rotate: -2deg;
  }
  .amax-dotgrid {
    animation: dotPulse 6s ease-in-out infinite;
  }
  .amax-body-text {
    animation: fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.4s both;
  }
  .amax-pill-1 {
    animation: pillFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) 0.6s both;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .amax-pill-2 {
    animation: pillFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) 0.75s both;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .amax-pill-1:hover,
  .amax-pill-2:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(232,0,107,0.18);
  }
  .amax-eyebrow {
    animation: fadeSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.3s both;
  }
  .amax-headline {
    animation: fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.42s both;
  }
  .amax-subtext {
    animation: fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.54s both;
  }
  .amax-list-item-0 { animation: listItemIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.65s both; }
  .amax-list-item-1 { animation: listItemIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.75s both; }
  .amax-list-item-2 { animation: listItemIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.85s both; }
  .amax-list-item-3 { animation: listItemIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.95s both; }
  .amax-cta {
    animation: fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) 1.05s both;
  }
  .amax-btn {
    animation: btnPulse 2.4s ease-in-out 1.6s infinite;
    transition: transform 0.2s ease, filter 0.2s ease;
  }
  .amax-btn:hover {
    transform: scale(1.05) translateY(-1px);
    filter: brightness(1.1);
    animation: none;
    box-shadow: 0 8px 28px rgba(232,0,107,0.4);
  }
  .amax-btn:active {
    transform: scale(0.97);
  }
  .amax-checkmark {
    transition: transform 0.2s ease;
  }
  li:hover .amax-checkmark {
    transform: scale(1.3) rotate(-10deg);
  }
`;

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{ background: "#fce8f1" }}
    >
      <style>{animStyles}</style>

      {/* Faint dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 amax-dotgrid"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(232,0,107,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* ── LEFT CARD ── */}
        <div className="relative rounded-3xl p-8 md:p-10 bg-white shadow-sm overflow-hidden amax-card">
          {/* Watermark text */}
          <span
            className="pointer-events-none absolute -top-2 -left-3 text-[7rem] md:text-[9rem] font-black leading-none select-none amax-watermark"
            style={{ color: "rgba(232,0,107,0.07)", letterSpacing: "-0.04em" }}
            aria-hidden="true"
          >
            AMAX
          </span>

          {/* Body copy */}
          <div className="relative space-y-4 mb-8 amax-body-text">
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
              className="rounded-2xl p-5 amax-pill-1"
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
              className="rounded-2xl p-5 amax-pill-2"
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
        <div className="flex flex-col justify-center amax-right">
          {/* Eyebrow */}
          <p
            className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 amax-eyebrow"
            style={{ color: "#e8006b" }}
          >
            About Us
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-5 amax-headline">
            Built on Expertise.
            <br />
            Driven by Your Growth.
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg amax-subtext">
            We don't just file the paperwork — we architect your compliance foundation so you can
            focus entirely on building what matters.
          </p>

          {/* Checkmark list */}
          <ul className="mb-10 divide-y divide-pink-200/60">
            {highlights.map((item, i) => (
              <li key={i} className={`flex items-center gap-3 py-3 amax-list-item-${i}`}>
                <span
                  className="flex-shrink-0 text-sm font-bold amax-checkmark"
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
          <div className="amax-cta">
            <button
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold shadow-md amax-btn"
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