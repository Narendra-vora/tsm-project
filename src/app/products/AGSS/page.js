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
      <section className="bg-[#0b2d4e] px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-[10px] font-bold bg-[#E05A36]/20 text-[#E05A36] border border-[#E05A36]/30 px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              Precision Engineering
            </span>
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              Anaesthetic Gas<br />Scavenging System<br />(AGSS)
            </h1>
            <p className="text-sm text-blue-200 leading-relaxed mb-7">
              A critical active gas scavenging system engineered to protect operating theatre staff from anaesthetic waste gases and regulatory compliance with Technik Spirits' validated safety architecture.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-block bg-[#0b477b] border border-white/30 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#0a3d6a] transition-colors">
                Talk to our Engineers →
              </Link>
              <Link href="#" className="inline-block bg-transparent border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                ↓ Download Datasheet (PDF)
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden relative" style={{ height: "280px" }}>
            <Image src="/product-agss.png" alt="AGSS System" fill className="object-contain object-center" />
          </div>
        </div>
      </section>

      {/* ── HOW THE SYSTEM WORKS ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-[#0b477b] text-center mb-2">How the System Works</h2>
        <p className="text-sm text-gray-500 text-center mb-10">A centralised active scavenging designed to remove waste anaesthetic gases (WAGs) directly from the source.</p>
        <div className="grid grid-cols-3 gap-5">
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
            <div key={item.num} className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#eef5fc] rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-xs font-black text-gray-300">{item.num}</span>
              </div>
              <h3 className="text-sm font-bold text-[#0b477b] mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY HOSPITALS NEED AGSS ── */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden relative" style={{ height: "300px" }}>
            <Image src="/product-agss.png" alt="AGSS" fill className="object-contain object-center bg-gray-50" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#0b477b] mb-4">Why Hospitals Need AGSS</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              In operating theatres without active scavenging, waste anaesthetic gases accumulate continuously through the OT during procedures, and may not degrade to correct safe levels of safe occupational exposure levels. Even with modern anaesthesia workstations, small amounts of waste gas leakage during use and procedure are an increasing clinical concern to occupancy, indeed.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              OT floor continuous exposure can create long-term occupational health risks for theatre staff, and some of OT regulatory requirements now require active AGSS for every OT under commissioning. In addition, making good results from the anaesthetic dispensation of the OT ventilation systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES & BENEFITS ── */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b477b] text-center mb-10">Key Features & Benefits</h2>

          {/* Top 2 wide cards */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#eef5fc] rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-[#0b477b]">Designed with Reference to International Standards</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Engineered to meet ISO 80601-2-13, EN ISO 11.5, and HTM 02-01 — ensuring this system does not interfere with anaesthesia workstation operation while effectively scavenging waste gases.
              </p>
            </div>
            <div className="bg-[#0b477b] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white">Universal Compatibility</span>
              </div>
              <p className="text-xs text-blue-200 leading-relaxed">
                Supports a broad range of anaesthesia workstations including all major high and low flow gas workstations.
              </p>
            </div>
          </div>

          {/* Bottom 3 cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                title: "Complete System",
                desc: "We supply everything from central plant units to terminal units as a scavenging works package."
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><circle cx="12" cy="10" r="3" /></svg>,
                title: "Advanced Control",
                desc: "Native PLC-based system with full BMS connectivity for remote hospital monitoring.",
                dark: true
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" /></svg>,
                title: "24/7 Support",
                desc: "Response after initial support with proactive preventive maintenance and breakout response."
              },
            ].map((card, i) => (
              <div key={i} className={`rounded-2xl p-5 border ${card.dark ? "bg-[#0b477b] border-[#0b477b]" : "bg-white border-gray-200"}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${card.dark ? "bg-white/15" : "bg-[#eef5fc]"}`}>
                  {card.dark
                    ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><circle cx="12" cy="10" r="3" /></svg>
                    : card.icon}
                </div>
                <h3 className={`text-sm font-bold mb-2 ${card.dark ? "text-white" : "text-[#0b477b]"}`}>{card.title}</h3>
                <p className={`text-xs leading-relaxed ${card.dark ? "text-blue-200" : "text-gray-500"}`}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARD SCOPE OF SUPPLY ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#0b477b] mb-4">Standard Scope<br />of Supply</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every Technik Spirits system is delivered as a plug and play, pre-tested, and as-commissioned solution.
            </p>
          </div>
          {/* Plant Package */}
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">PLANT PACKAGE</div>
            <ul className="flex flex-col gap-3">
              {["AGSS vacuum pump(s)", "Non-return valves", "Manifold manifolds", "PLC-based control system"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-[#0b477b] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* OT Package */}
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">OT PACKAGE</div>
            <ul className="flex flex-col gap-3">
              {["AGSS terminal (balancer)", "Transfer tubing & hoses", "AGSS remote switches", "Tel-BMS Frequency Drive"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b477b] text-center mb-10">Technical FAQ</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-[#0b477b]">{faq.q}</span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-[#0b477b] text-center mb-8">Technical Specifications</h2>
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0b477b]">
                <th className="text-left text-xs font-bold text-white px-6 py-3">Parameter</th>
                <th className="text-left text-xs font-bold text-white px-6 py-3">Specification</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Design", "Oil-free centrifugal, air-cooled"],
                ["Drive", "Direct drive"],
                ["Maximum Vacuum", "280 mbar"],
                ["Flow Capacity", "500–2000 l/hour per unit"],
                ["OTs Served", "2 to 20+ (configurable)"],
                ["Power Supply", "415V, 3-Ph, 50 Hz/230V, 1-Phase"],
              ].map(([param, spec], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="text-xs font-semibold text-gray-600 px-6 py-3">{param}</td>
                  <td className="text-xs text-gray-500 px-6 py-3">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0b2d4e] px-6 py-14">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Let's find the right AGSS configuration for your hospital's OT complex.</h2>
          <p className="text-sm text-blue-200 mb-8 max-w-xl mx-auto">
            Whether you are installing new operation theatres or evaluating AGSS for an existing facility, we can help you select the right configuration, sizing, and system integration.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="inline-block bg-[#0b477b] border border-white/30 text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#0a3d6a] transition-colors">
              Talk to our Engineers
            </Link>
            <Link href="#" className="inline-block bg-[#E05A36] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#c94d2c] transition-colors">
              Download Datasheet (PDF)
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}