"use client";
import Link from "next/link";
import Image from "next/image";

export default function CPSage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden min-h-[420px] flex items-center">
        <div className="max-w-[1360px] mx-auto grid grid-cols-2 gap-10 items-center">
          <div>
            {/* <span className="inline-block text-[10px] font-bold bg-[#E05A36] text-white px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              Engineering Excellence
            </span> */}
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0b477b] px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 bg-white/70 border border-[#0b477b]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b477b]" />
              Engineering Excellence
            </span>
            <h1 className="text-5xl font-semibold text-[#0b477b] mb-4 leading-tight">
              Compressors, Pumps & <br /> Spares
            </h1>
            <p className="text-sm text-[#0b477b] leading-relaxed mb-7 w-[650px]">
              Genuine Thomas & Gast compressors, vacuum pumps, spare parts, and <br /> maintenance services. Technical precision meets industrial reliability for<br /> medical and laboratory applications.
            </p>
            <Link href="/contact" className="inline-block bg-[#0b477b] text-white text-sm font-semibold px-6 py-3 rounded-3xl hover:bg-[#0b477b] transition-colors">
              Get in Touch
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden w-full h-58 relative">
              <Image src="/Thomas_F47_E160N42-.png
              " alt="Compressor" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPLY OF COMPRESSORS ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="text-3xl font-semibold text-[#0b477b] mb-3">Supply of Compressors and Pumps</h2>
          <div className="w-16 h-1 bg-[#0b477b] mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left card — 2 cols */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between gap-6 shadow-sm">
              <div>
                <div className="mb-4 text-[#0b477b]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20" />
                    <path d="M5 17V8l4 4V8l4 4V8l6 5v4H5z" />
                    <rect x="6" y="11" width="2" height="2" />
                    <rect x="10" y="11" width="2" height="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#1a2a3a] mb-4">Complete Units & Custom Systems</h3>
                <p className="text-md text-gray-500 leading-relaxed mb-6 max-w-[720px]">
                  Direct supply of genuine Thomas and Gast compressors and pumps for new installations or replacement of aging equipment. Fully engineered systems configured to your application, available with desiccant or refrigeration dryers, filtration, and integrated automation controls.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Thomas E160N42" },
                  { name: "Gast 87R" },
                ].map((p) => (
                  <div key={p.name} className="border border-gray-200 bg-[#f4f6f8]/80 rounded-2xl p-5 flex flex-col gap-2">
                    <div className="text-lg font-semibold text-[#0b477b]">{p.name}</div>
                    <a href="#" className="text-sm text-[#0b477b] font-medium flex items-center gap-2 hover:underline">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download Datasheet
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card — navy */}
            <div className="bg-[#0b477b] rounded-3xl p-8 flex flex-col justify-between gap-6 shadow-sm min-h-[360px]">
              <div>
                <div className="mb-8 text-[#E05A36]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Stock Availability</h3>
                <p className="text-md text-blue-200/90 leading-relaxed">
                  Fast-moving Thomas and Gast models are held in local inventory for quick turnaround on new and replacement requirements.
                </p>
              </div>
              <button className="w-full bg-[#E05A36] text-white text-md font-semibold py-3.5 rounded-full hover:bg-[#c94d2c] transition-colors mt-auto">
                Check Inventory
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPARE PARTS ── */}
      <section className="  max-w-[1350px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-[#0b477b] leading-tight">Spare Parts and Service Kits</h2>
            <p className="text-md text-gray-500 leading-relaxed">
              We stock genuine Thomas and Gast spare parts to maintain the long-term performance and reliability of your vacuum and pressure systems.
            </p>
            <div className="border border-gray-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#0b477b]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-bold text-[#0b2d4e] mb-1">Need a specific part?</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Provide your model number and serial for an immediate availability quote.
                </p>
              </div>
            </div>
          </div>

          {/* Right — accordion items */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                num: "01", title: "Service Kits",
                tags: ["Suction/Inlet Filter Elements", "Piston Cup Covers", "Piston Rings", "Torx Fasteners", "Flap Valve Sets", "Ancillaries"]
              },
              {
                num: "02", title: "Internal Components",
                tags: ["Pistons", "Connecting Rods", "Bearings", "Valve Plates", "O-Rings", "seals", "Fan Covers"]
              },
              {
                num: "03", title: "Ancillary Components",
                tags: ["Non-Return Valves", "Anti-Vibration Mounts", "Mufflers", "Starting Capacitors", "cooling fans", "Pressure Switches"]
              },
            ].map((item) => (
              <div key={item.num} className="border border-gray-200 bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#eef5fc] flex items-center justify-center text-sm font-semibold text-[#0b477b]">{item.num}</span>
                  <span className="text-lg font-semibold text-[#0b477b]">{item.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[13px] text-gray-700 bg-[#eef5fc]/60 border border-[#eef5fc]/40 px-4 py-1.5 rounded-full whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPAIRING & OVERHAULING ── */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-[#0b477b] mb-4">Repairing and Overhauling Services</h2>
            <p className="text-md text-gray-500 max-w-[570px] mx-auto leading-relaxed ">
              Restoring your Thomas & Gast equipment to reliable operating conditions with manufacturer-approved precision.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-7">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
                title: "Repair and Overhauling",
                desc: "Onsite or offsite overhaul services. All critical components are inspected, refurbished, or replaced as required to restore peak performance."
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M9 16l2 2 4-4" />
                  </svg>
                ),
                title: "One-Off Maintenance",
                desc: "Scheduled servicing on an as-needed basis, designed to prevent performance degradation and avoid unexpected failures in critical systems."
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                title: "Annual Maintenance (AMC)",
                desc: "Comprehensive AMC coverage for complete systems including compressors, pumps, dryers and control panels with structured preventive care."
              },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="w-9 h-9 bg-[#eef5fc] rounded-lg flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0b477b] mb-2">{card.title}</h3>
                <p className="text-md text-gray-500 leading-relaxed mb-10">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FINAL CTA ── */}
      <section className="bg-gray-100 px-6 py-14">
        <div className="max-w-[1360px] mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0b477b] mb-5 max-w-[800px] mx-auto">Looking for Thomas & Gast Spares?</h2>
          <p className="text-md text-greyt-100 mb-8 max-w-[650px] mx-auto">
            Whether you need a replacement compressor, a service kit, or ongoing AMC coverage for your equipment, our team is ready to assist.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">

            <Link href="#" className="inline-block bg-[#E05A36] text-white text-sm font-bold px-7 py-3.5 rounded-full transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}