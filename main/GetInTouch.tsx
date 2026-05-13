"use client";


import { useState } from "react";

const contactCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#D0185A]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call / WhatsApp",
    lines: ["+91 766 744 8894", "Mon – Sat, 9 AM – 7 PM IST"],
    bg: "bg-pink-50",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#D0185A]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    lines: ["anaximeriumsolutions@gmail.com", "We respond within 24 hours"],
    bg: "bg-pink-50",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#D0185A]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Base Location",
    lines: ["Gurugram, Haryana", "Serving clients across India & globally"],
    bg: "bg-pink-50",
  },
];

const services = [
  "Income Tax Return",
  "GST Compliance",
  "Incorporation Suite",
  "Statutory Audit",
  "Other",
];

export default function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-pink-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ── Left Column ── */}
        <div>
          {/* Header */}
          <p className="text-[#D0185A] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Let's Build Your Financial<br />Architecture Together.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
            Whether you're a startup founder, a growing MSME, or a global enterprise —
            reach out for a free, no-obligation consultation.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="flex items-start gap-4 bg-white border border-pink-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[#D0185A] text-xs font-bold tracking-wide uppercase mb-0.5">
                    {card.label}
                  </p>
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Payment Modes */}
            <div className="bg-white border border-pink-200 rounded-2xl px-5 py-4 shadow-sm">
              <p className="text-[#D0185A] text-xs font-bold tracking-wide uppercase mb-3">
                🔒 Accepted Payment Modes
              </p>
              <div className="flex gap-3 mb-3">
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  UPI
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
                  </svg>
                  Net Banking
                </span>
              </div>
              <p className="text-gray-400 text-[11px] leading-snug">
                Secure transfers only. Payment details shared post-consultation and service agreement.
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Column — Form ── */}
        <div className="bg-white rounded-3xl shadow-md border border-pink-100 px-8 py-9">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D0185A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Enquiry Sent!</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thank you! We'll reach out to schedule your free consultation within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                className="mt-2 text-[#D0185A] text-sm font-semibold underline underline-offset-2 cursor-pointer"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Book a Free Consultation</h3>
              <p className="text-gray-400 text-sm mb-7">
                Tell us about your business and we'll reach out to schedule at a time that works for you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                    Your Name <span className="text-[#D0185A]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0185A]/30 focus:border-[#D0185A] transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                    Phone / WhatsApp <span className="text-[#D0185A]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0185A]/30 focus:border-[#D0185A] transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0185A]/30 focus:border-[#D0185A] transition"
                />
              </div>

              {/* Service */}
              <div className="mb-5">
                <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                  Service You Need
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D0185A]/30 focus:border-[#D0185A] transition bg-white appearance-none"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-7">
                <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                  Brief Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us briefly about your business and what you need help with..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0185A]/30 focus:border-[#D0185A] transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#D0185A] hover:bg-[#b01248] text-white font-semibold text-sm py-3.5 rounded-full transition-colors duration-200 cursor-pointer mb-4"
              >
                Send My Enquiry →
              </button>

              <p className="text-center text-gray-400 text-[11px]">
                🔒 We respect your privacy. Your details are never shared.
              </p>
            </>
          )}
        </div>

      </div>
    </section>
  );
}