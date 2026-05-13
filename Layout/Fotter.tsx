"use client";


const complianceLinks = [
  "Audit & Assurance",
  "GST & Income Tax",
  "Accounting & Bookkeeping",
  "Litigation Support",
  "NRI & Cross-Border Services",
  "All Types of Registrations",
];

const advisoryLinks = [
  "Company Incorporation",
  "DPIIT & Pitch Deck Advisory",
  "Business Structuring",
  "Valuations",
  "Portfolio Management",
  "Project Report & CMA",
  "Advisory Services",
];

const companyLinks = [
  "About Us",
  "Startup Launchpad",
  "How It Works",
  "Pricing",
  "Book Consultation",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a0a14] text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">

            <div className="mb-5">
              <img
                src="/Fotter_ANIX.png"
                alt="Anax Imperium"
                className="h-50 w-auto object-contain"
              />
            </div>
            {/* <p className="text-gray-400 text-sm leading-relaxed">
              Complete Business Solutions. Comprehensive compliance and advisory
              services for startups, MSMEs, and global enterprises across India.
              Operating from Gurugram, Haryana.
            </p> */}
          </div>

          {/* Compliance & Audit */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Compliance &amp; Audit
            </h4>
            <ul className="space-y-3">
              {complianceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#D0185A] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory & Finance */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Advisory &amp; Finance
            </h4>
            <ul className="space-y-3">
              {advisoryLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#D0185A] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 mb-7">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#D0185A] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-1.5">
              <p className="text-gray-400 text-sm">Gurugram, Haryana, India</p>
              <a
                href="tel:+917667448894"
                className="block text-[#D0185A] text-sm hover:text-pink-400 transition-colors duration-200"
              >
                +91 766 744 8894
              </a>
              <a
                href="mailto:anaximeriumsolutions@gmail.com"
                className="block text-[#D0185A] text-sm hover:text-pink-400 transition-colors duration-200 break-all"
              >
                anaximeriumsolutions@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}

    </footer>
  );
}