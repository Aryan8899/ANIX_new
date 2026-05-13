"use client";

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
  { value: "500+", label1: "Clients", label2: "Served" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white z-0" />

      {/* Radial blobs */}
      <div className="absolute top-[-8%] right-[-4%] w-[520px] h-[520px] rounded-full bg-pink-200 opacity-50 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[-8%] left-[-4%] w-[420px] h-[420px] rounded-full bg-pink-300 opacity-20 blur-3xl pointer-events-none z-0" />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #e91e8c 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ════ LEFT ════ */}
        <div className="flex flex-col gap-5">

          {/* Location badge */}
          <div className="inline-flex items-center w-fit gap-2 px-4 py-1.5 rounded-full border border-pink-300 bg-white/70 backdrop-blur-sm">
            <span className="text-[#E91E8C] text-xs font-bold">·</span>
            <span className="text-[0.7rem] font-semibold tracking-[0.13em] text-gray-500 uppercase">
              Gurugram · Serving India &amp; Globally
            </span>
          </div>

          {/* Headline */}
          <div className="leading-[1.02] mt-1">
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
          <p className="text-[0.9rem] text-gray-500 leading-relaxed max-w-[500px]">
            Trusted, mission-critical financial compliance services for startups,
            MSMEs, and enterprises — engineered for reliability, speed, and
            absolute legal precision.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E91E8C] text-white font-semibold text-[0.88rem] hover:bg-[#c9167a] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-pink-300/40"
            >
              Book Free Consultation →
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#E91E8C]/40 text-[#E91E8C] font-semibold text-[0.88rem] hover:border-[#E91E8C] hover:bg-pink-50 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>

          {/* ── Stats ── plain pink numbers, no cards */}
          <div className="flex items-start gap-10 mt-4 pt-5 border-t border-pink-100">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col">
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
          <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col gap-6">

            {/* Card header */}
            <h2 className="text-[1.05rem] font-semibold text-gray-800">
              Our{" "}
              <span className="text-[#E91E8C] font-bold">Core Services</span>
            </h2>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2">
              {coreServices.map((service) => (
                <span
                  key={service}
                  className="px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-[0.76rem] font-medium text-gray-600 hover:border-pink-300 hover:text-[#E91E8C] hover:bg-pink-50 transition-all duration-150 cursor-default"
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
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E91E8C] text-white font-semibold text-[0.83rem] hover:bg-[#c9167a] active:scale-[0.97] transition-all duration-200 shadow-md shadow-pink-200 whitespace-nowrap"
              >
                Launch Now →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}