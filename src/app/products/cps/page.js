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
            <span className="inline-block text-[10px] font-bold bg-[#E05A36] text-white px-3 py-1 rounded-full uppercase tracking-widest mb-5">
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
      <section className="max-w-[1360px] mx-auto px-6 py-14">
        <h2 className="text-xl font-semibold text-[#0b477b] mb-1">Supply of Compressors and Pumps</h2>
        <div className="w-16 h-0.5 bg-[#0b477b] mb-8" />

        <div className="grid grid-cols-3 gap-5">
          {/* Left card — 2 cols */}
          <div className="col-span-2 border border-gray-200 rounded-2xl p-6">
            <div className="w-9 h-9 bg-[#eef5fc] rounded-lg flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-navy mb-2">Complete Units & Custom Systems</h3>
            <p className="text-md text-gray-500 leading-relaxed mb-6  w-[660px]">
              Direct supply of genuine Thomas and Gast compressors and pumps for new installations or replacement of aging equipment. Fully engineered systems configured to your application, available with desiccant or refrigeration dryers, filtration, and integrated automation controls.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Thomas E160NA2" },
                { name: "Gast 87R" },
              ].map((p) => (
                <div key={p.name} className="border border-gray-200 rounded-xl p-3">
                  <div className="text-md font-semibold text-[#0b477b] mb-1">{p.name}</div>
                  <a href="#" className="text-[12px] text-[#0b477b] font-semibold flex items-center gap-1 hover:underline">
                    ↓ Download Datasheet
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right card — navy */}
          <div className="bg-[#0b477b] rounded-2xl p-6 flex flex-col">
            <div className="w-10 h-10 bg-[#E05A36] rounded-lg flex items-center justify-center mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">Stock Availability</h3>
            <p className="text-md text-blue-200 leading-relaxed mb-10 flex-1">
              Fast-moving Thomas and Gast models are held<br /> in local inventory for quick turnaround on new and replacement requirements.
            </p>
            <button className="bg-[#E05A36] text-white text-md font-semibold px-2 py-3 rounded-3xl hover:bg-[#c94d2c] transition-colors ">
              Check Inventory
            </button>
          </div>
        </div>
      </section>

      {/* ── SPARE PARTS ── */}
      <section className="max-w-[1360px] mx-auto px-6 pb-14">
        <h2 className="text-xl font-semibold text-[#0b477b] mb-3">Spare Parts and Service Kits</h2>

        <div className="grid grid-cols-3 gap-5">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <p className="text-md text-gray-500 leading-relaxed">
              We stock genuine Thomas and Gast spare parts to maintain the long-term performance and reliability of your vacuum and pressure systems.
            </p>
            <div className="border border-gray-200 rounded-2xl p-4 mt-2 bg-gray-100">
              <div className="w-8 h-8 bg-[#eef5fc] rounded-lg flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <div className="text-md font-bold text-[#0b477b] mb-1">Need a specific part?</div>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Provide your model number and serial for an immediate availability quote.
              </p>
            </div>
          </div>

          {/* Right — accordion items */}
          <div className="col-span-2 flex flex-col gap-3">
            {[
              {
                num: "01", title: "Service Kits",
                tags: ["Suction/Inlet Filter Elements", "Piston Cup Covers", "Piston Rings", "Tom Fasteners", "Flap Valve Sets", "Ancillaries"]
              },
              {
                num: "02", title: "Internal Components",
                tags: ["Pistons", "Connecting Rods", "Bearings", "Valve Plates", "O-Rings", "Seals", "Fan Covers"]
              },
              {
                num: "03", title: "Ancillary Components",
                tags: ["Non-Return Valves", "Anti-Vibration Mounts", "Mufflers", "Starting Capacitors", "Cooling Fans", "Pressure Switches"]
              },
            ].map((item) => (
              <div key={item.num} className="border border-gray-200 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-md font-semibold text-[#0b477b] bg-[#eef5fc] px-2 py-1 rounded-2xl">{item.num}</span>
                  <span className="text-md font-semibold text-[#0b477b]">{item.title}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[12px] text-gray-700 bg-[#eef5fc] border border-[#eef5fc] px-5 py-1 rounded-xl">
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
            <h2 className="text-2xl font-semibold text-[#0b477b] mb-4">Repairing and Overhauling Services</h2>
            <p className="text-sm text-gray-500 max-w-[550px] mx-auto leading-relaxed ">
              Restoring your Thomas & Gast equipment to reliable operating conditions with manufacturer-approved precision.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5">
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
                <h3 className="text-lg font-semibold text-navy-100 mb-2">{card.title}</h3>
                <p className="text-md text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}