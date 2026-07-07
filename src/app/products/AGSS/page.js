"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AGSSPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Why is AGSS required in hospital operation theatres?",
      a: "Passive scavenging is not safe in most modern OTs. Active AGSS systems correctly manage a low-point in-room connection and dedicated pipeline to safely remove waste anaesthetic gases, and is a requirement for modern safety and compliance standards."
    },
    {
      q: "How is an active AGSS different from passive scavenging?",
      a: "Passive scavenging relies on vents whereas active AGSS uses a dedicated vacuum pump with proper flow control, balancer units, and terminal units. It gives reliable removal regardless of operating conditions, and is required for modern safety and compliance standards."
    },
    {
      q: "Where is the exhaust gas generally go?",
      a: "Exhaust is safely vented to the atmosphere through the dedicated discharge line, routed away from fresh air intakes and public areas, typically terminating on a parapet or running away gases from in-service areas, as instructed by design."
    },
    {
      q: "Does AGSS planning work with existing hospital systems?",
      a: "No. All system designs by Technik Spirits are coordinated and installed without affecting any existing patient pipelines or terminal pressure installations — requiring only a point of reference for the anaesthetic gas dispensation of the OT ventilation systems."
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative px-6 py-16 overflow-hidden bg-gradient-to-br from-[#eef5fc] via-[#f4f9fd] to-[#e3eef8]">
        {/* Background ambient image (hospital interior blur) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hospital-bg.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef5fc] via-[#eef5fc]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0b477b] px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 bg-white/70 border border-[#0b477b]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b477b]" />
              Precision Engineering
            </span>
            <h1 className="text-5xl sm:text-6xl font-semibold text-[#0b2d4e] mb-5 leading-tight">
              Anaesthetic Gas<br />Scavenging System<br />(AGSS)
            </h1>
            <p className="text-lg text-[#3d5570] leading-relaxed mb-8 max-w-xl">
              Active anaesthetic gas scavenging system engineered for modern operation theatres. Ensure clinical safety and regulatory compliance with Technik Spirits' centralized safety infrastructure.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0b477b] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#0d3d68] transition-colors"
                style={{ textDecoration: "none" }}
              >
                Talk to Our Engineers →
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#0b2d4e] text-sm font-semibold px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                style={{ textDecoration: "none" }}
              >
                ⬇ Download Datasheet (PDF)
              </Link>
            </div>
          </div>

          <div className="relative h-[340px] lg:h-[420px]">
            <Image
              src="/product-agss.png"
              alt="AGSS System"
              fill
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── HOW THE SYSTEM WORKS ── */}
      <section className="max-w-[1360px] mx-auto px-6 py-14">
        <h2 className="text-3xl font-semibold text-[#0b477b] text-center mb-3">How the System Works</h2>
        <p className="text-md text-gray-500 text-center mb-16 max-w-xl mx-auto leading-relaxed">
          A centralized safety ecosystem designed to remove waste anaesthetic gases (WAGs) directly from the source.
        </p>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              num: "01",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" /></svg>,
              title: "Suction Generation",
              desc: "Centrally located active plant generates controlled suction, automatically managed by a PLC-based control system."
            },
            {
              num: "02",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
              title: "Dedicated Pipeline",
              desc: "Segregated vacuum network returns the system of used WAG scavenging to anaesthetic workstation gas point."
            },
            {
              num: "03",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>,
              title: "Terminal Units",
              desc: "Wall-outlet units at the workstations provide positive/negative flow monitors for gas capture."
            },
            {
              num: "04",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" /></svg>,
              title: "Balancer Unit",
              desc: "Integrated balancer controls airflow and airpressure equalize to protect the patient."
            },
            {
              num: "05",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
              title: "Patient Protection",
              desc: "Integrated relief mechanism enables scavenging without interfering with the anaesthetic performance."
            },
            {
              num: "06",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
              title: "Remote Control",
              desc: "Integrated monitoring and alarms run on remote service access or on alarm status panel in OT."
            },
          ].map((item) => (
            <div key={item.num} className="relative border border-gray-200 rounded-2xl p-5 bg-white">
              <span className="absolute top-4 right-5 text-3xl font-bold text-gray-300">{item.num}</span>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mb-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0b477b] mb-1">{item.title}</h3>
              <p className="text-md text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ── WHY HOSPITALS NEED AGSS ── */}
      <section className="max-w-[1360px] mx-auto px-8 py-14">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden relative" style={{ height: "300px" }}>
            <Image src="/product-agss.png" alt="AGSS" fill className="object-contain object-center" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#0b477b] mb-4">Why Hospitals Need AGSS</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-xl">
              In operating theatres without active scavenging, waste anaesthetic gases are removed only through the OT AHU's air changes, which are not designed to control these gases at safe occupational exposure levels. Even with modern anaesthesia workstations, small amounts of waste gases are released during every procedure, as no breathing circuit is completely sealed.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              Over time, continuous exposure can create long-term occupational health risks for anaesthesiologists, surgeons, nurses, and other OT staff. A properly designed AGSS provides a dedicated removal pathway that captures waste gases directly from the anaesthesia workstation and safely discharges them to the atmosphere, independent of the OT ventilation system.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES & BENEFITS ── */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="text-3xl font-semibold text-[#0b477b] text-center mb-14">Key Features & Benefits</h2>

          {/* Top 2 wide cards */}
          {/* Top 2 wide cards */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.35 8.75a1 1 0 0 1-.6 0C8.5 20.5 5 18 5 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C15.5 3.8 18 5 20 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-lg font-semibold text-[#0b477b]">Designed with Reference to International Standards</span>
              </div>
              <p className="text-md text-gray-500 leading-relaxed">
                Engineered in line with ISO 80601, ISO 7396-2, EN ISO 9170-2, and HTM 02-01— ensuring the system does not interfere with anaesthesia workstation operation while effectively scavenging waste gases.
              </p>
            </div>

            <div className="bg-[#0b477b] rounded-2xl p-5">
              <div className="mb-3">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="14" height="9" rx="2" />
                  <rect x="7" y="11" width="14" height="9" rx="2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Universal Compatibility</h3>
              <p className="text-md text-blue-200 leading-relaxed">
                Supports all major brands of anaesthesia workstations, regardless of high or low flow operation.
              </p>
            </div>
          </div>

          {/* Bottom 3 cards */}
          <div className="grid grid-cols-3 gap-5">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V14" /><path d="M4 10V3" /><path d="M12 21V12" /><path d="M12 8V3" /><path d="M20 21V16" /><path d="M20 12V3" /><path d="M2 14h4" /><path d="M10 8h4" /><path d="M18 16h4" /></svg>,
                title: "Complete System",
                desc: "We supply everything from central plants to remote switches as one engineered package."
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
                title: "Advanced Control",
                desc: "Native PLC-based system with full BMS compatibility for remote hospital monitoring.",
                dark: true
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>,
                title: "24/7 Support",
                desc: "Responsive after-sales support with proactive preventive maintenance and immediate response."
              },
            ].map((card, i) => (
              <div key={i} className={`rounded-2xl p-5 border ${card.dark ? "bg-[#0b477b] border-[#0b477b]" : "bg-white border-gray-200"}`}>
                <div className="mb-3">
                  {card.dark
                    ? <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    : card.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${card.dark ? "text-white" : "text-[#0b477b]"}`}>{card.title}</h3>
                <p className={`text-md leading-relaxed max-w-sm ${card.dark ? "text-blue-200" : "text-gray-500"}`}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARD SCOPE OF SUPPLY ── */}
      <section className="max-w-[1360px] mx-auto px-6 py-14">
        <div className="grid grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-4xl font-bold text-[#1a2a3a] mb-3 leading-tight">
              Standard Scope<br />of <span className="text-[#0b477b]">Supply</span>
            </h2>
            <div className="w-12 h-[5px] bg-[#0b477b] rounded-full mb-4" />
            <p className="text-md text-gray-500 leading-relaxed max-w-[350px]">
              Every Technik Spirits system is delivered as a plug-and-play, pre-wired, and pre-commissioned solution.
            </p>
          </div>

          {/* Plant Package */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[14px] font-semibold text-[#0b477b] uppercase tracking-widest whitespace-nowrap">PLANT PACKAGE</span>
              <div className="flex-1 h-px border-t border-dashed border-gray-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b477b] shrink-0" />
            </div>
            <ul className="flex flex-col gap-6">
              {["AGSS vacuum pump(s)", "Non-return valves", "Inlet/Outlet manifolds", "PLC-based control system"].map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-[#0b477b] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* OT Package */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[14px] font-semibold text-[#0b477b] uppercase tracking-widest whitespace-nowrap">OT PACKAGE</span>
              <div className="flex-1 h-px border-t border-dashed border-gray-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b477b] shrink-0" />
            </div>
            <ul className="flex flex-col gap-6">
              {["AGSS receivers (balancers)", "Transfer tubing & hoses", "AGSS remote switches", "Variable Frequency Drive"].map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#0b477b] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL FAQ ── */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b477b] text-center mb-10">Technical FAQ</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`text-sm font-semibold text-[#0b477b] ${openFaq === i ? "sm:w-48 shrink-0" : ""}`}>
                    {faq.q}
                  </span>

                  {openFaq === i && (
                    <p className="hidden sm:block flex-1 text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  )}

                  <svg
                    className={`w-4 h-4 text-[#0b477b] transition-transform flex-shrink-0 mt-0.5 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile fallback: answer below on small screens */}
                {openFaq === i && (
                  <div className="px-6 pb-5 sm:hidden">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className="max-w-[1360px] mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-[#0b477b] text-center mb-8">Technical Specifications</h2>
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0b477b]">
                <th className="text-left text-md font-bold text-white px-6 py-4">Parameter</th>
                <th className="text-left text-md font-bold text-white px-6 py-4">Specifications</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Design", "Oil-Free, centrifugal, air cooled"],
                ["Drive", "Direct drive"],
                ["Maximum Vacuum", "200 mbar"],
                ["Flow Capacity", "500–5000 LPM per unit"],
                ["OTs Served", "2 to 30+ (simultaneously)"],
                ["Power Supply", "415 V, 50 Hz, 3 Phase / 230 V, 1 Phase"],
              ].map(([param, spec], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="text-md font-semibold text-[#0b477b] px-6 py-5">{param}</td>
                  <td className="text-md text-gray-500 px-6 py-5">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 py-14">
        <div className="max-w-[1360px] mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#0b477b] mb-6 max-w-[850px] mx-auto">Let's find the right AGSS configuration for your hospital's OT complex.</h2>
          <p className="text-lg text-[#0b477b] mb-10 max-w-[650px] mx-auto">
            Whether you are installing new operation theatres or evaluating AGSS for an existing facility, we can help you select the right configuration, sizing, and system integration.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="inline-block bg-[#0b477b] border border-white/30 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#0a3d6a] transition-colors">
              Talk to our Engineers
            </Link>
            <Link href="#" className="inline-block bg-[#E05A36] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#c94d2c] transition-colors">
              Download Datasheet (PDF)
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}