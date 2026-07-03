"use client";
import Link from "next/link";
import Image from "next/image";

export default function MGPSDesignPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-[#0b2d4e] px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-[10px] font-bold bg-[#E05A36] text-white px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              Specialized Engineering
            </span>
            <h1 className="text-4xl font-semibold text-white mb-4 leading-tight">
              MGPS Design &<br />Consulting<br />Services
            </h1>
            <p className="text-sm text-blue-200 leading-relaxed mb-7">
              Medical gas pipeline system design, plant room planning, and compliance support for hospitals. We provide evidence-based engineering aligned with ISO 7396-1 and HTM 02-01.
            </p>
            <Link href="/contact" className="inline-block bg-[#E05A36] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#c94d2c] transition-colors">
              Discuss Your Project
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden relative" style={{ height: "260px" }}>
            <Image src="/mgps_plant.png" alt="MGPS Design" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* ── WHY MGPS MATTERS ── */}
      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <h2 className="text-2xl font-semibold text-navy100 mb-3">Why MGPS design matters early in hospital planning</h2>
        <div className="w-12 h-0.5 bg-[#0b477b] mx-auto mb-5" />
        <p className="text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto mb-8">
          Medical gas decisions made during the planning stage affect the hospital for years. Incorrect load assumptions, oversized equipment,<br /> and weak service access create avoidable costs and maintenance issues. A well-planned design helps your team make better<br /> decisions before procurement begins.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {["ISO 7396-1 Aligned", "HTM 02-01 Compliant", "NABH/JCI Ready"].map((b) => (
            <div key={b} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#0b477b] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-[#0b477b]">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className="max-w-5xl mx-auto px-6 pb-14 pt-2">
        <h2 className="mb-1 text-[22px] font-semibold text-[#232323]">What We Deliver</h2>
        <p className="mb-7 text-sm text-[#6f6f6f]">Our MGPS design scope is structured, engineering-led, and execution-ready.</p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <article className="min-h-28 rounded-[18px] border border-[#d6dbe4] bg-[#0b477b] p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)] lg:col-span-2">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#dbeafe] text-[#0b477b]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="11" x2="15" y2="11" />
                <line x1="9" y1="15" x2="12" y2="15" />
              </svg>
            </div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight font-serif-display text-white">Demand &amp; Load Calculations</h3>
            <p className="max-w-2xl text-[13px] leading-6 text-[#c8d9ea]">Evidence-based consumption analysis for oxygen, medical air, vacuum, AGSS, and specialty gases-factoring specialty mix, bed strength, OT density, and future growth.</p>
          </article>

          <article className="min-h-28 rounded-[18px] border border-[#d6dbe4] bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#fde6df] text-[#e05a36]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <line x1="2" y1="20" x2="22" y2="20" />
              </svg>
            </div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight font-serif-display text-[#232323]">Plant Room Planning</h3>
            <p className="text-[13px] leading-6 text-[#6f6f6f]">Right-sizing equipment with clear zoning, service access, and heat dissipation planning.</p>
          </article>

          <article className="min-h-28 rounded-[18px] border border-[#d6dbe4] bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#e9edf5] text-[#374151]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight font-serif-display text-[#232323]">Routing &amp; Zoning</h3>
            <p className="text-[13px] leading-6 text-[#6f6f6f]">Optimized routing with pressure drop control and department-wise isolation strategy.</p>
          </article>

          <article className="min-h-28 rounded-[18px] border border-[#d6dbe4] bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#e9edf5] text-[#374151]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight font-serif-display text-[#232323]">Space Coordination</h3>
            <p className="text-[13px] leading-6 text-[#6f6f6f]">Integration with architectural and HVAC services to avoid on-site clashes.</p>
          </article>

          <article className="min-h-28 rounded-[18px] border border-[#0d5c96] bg-[#11558f] p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)] lg:col-start-3 lg:row-start-2">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3 className="mb-2 text-[24px] font-semibold leading-tight font-serif-display text-white">BoQ &amp; Specs</h3>
            <p className="text-[13px] leading-6 text-[#c8d9ea]">Detailed, construction-ready BoQs with technical specifications aligned to actual demand-not generic thumb rules.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#fcfbfa] px-6 pb-14 pt-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-[18px] font-semibold text-[#232323] lg:text-[20px]">Who This Is For</h2>
            <div className="flex flex-col gap-3">
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>, text: "Hospital promoters and owners planning new facilities" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, text: "Healthcare architects and MEP consultants" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>, text: "EPC contractors and project management teams" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>, text: "Hospitals upgrading or expanding existing MGPS infrastructure" },
              ].map((item, i) => (
                <div key={i} className="flex items-center rounded-lg bg-[#f2f4f7] px-4 py-3">
                  <div className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-[#0b477b] shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-[11px] leading-5 text-[#2d3138] lg:text-[12px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-[18px] lg:min-h-85">
            <Image src="/mgps_plant.png" alt="Who this is for" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* ── BENEFITS FOR HOSPITALS ── */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl  text-navy100 text-center mb-2">Benefits for Hospitals</h2>
          <div className="w-12 h-0.5 bg-[#0b477b] mx-auto mb-10" />
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { tag: "OPERATIONAL EFFICIENCY", title: "Right-Sizing Over Over-Engineering", desc: "Demand calculations are based on actual clinical loads—so you pay for the capacity you need without compromising safety." },
              { tag: "SITE EXECUTION", title: "Prevent Rework and Site Clashes", desc: "Integrated planning at the design stage avoids on-site delays, repeated design iterations, and costly modifications before they reach the site." },
              { tag: "TIMELINE SECURITY", title: "Prevent Project Delays", desc: "A ready-to-execute design package with a clear BoQ streamlines tendering and procurement, ensuring commissioning on schedule." },
            ].map((b) => (
              <div key={b.title} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="text-[9px] font-bold text-[#0b477b] uppercase tracking-widest mb-2">{b.tag}</div>
                <h3 className="text-xl font-semibold text-navy-100 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="text-[9px] font-bold text-[#0b477b] uppercase tracking-widest mb-2">EQUIPMENT CHOICE</div>
              <h3 className="text-xl font-semibold text-navy-100 mb-2">Objective Specifications</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Evaluate equipment options on a like-for-like basis, with grounded technical specifications based on real-world performance.</p>
            </div>
            <div className="col-span-2 bg-white border border-gray-200 rounded-2xl p-5">
              <div className="text-[9px] font-bold text-[#0b477b] uppercase tracking-widest mb-2">COMPLIANCE ASSURANCE</div>
              <h3 className="text-xl font-bold text-navy-100 mb-2">Accreditation and Audit Readiness</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Designs developed with reference to ISO, HTM, NABH and JCI requirements help ensure your facility is better prepared for accreditation audits from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TECHNIK SPIRITS ── */}
      <section className="bg-[#eef5fc] px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.95fr] lg:items-center">
          <div>
            <h2 className="mb-4 text-[22px] font-medium text-[#0b477b] lg:text-[24px]">Why Technik Spirits for MGPS Design</h2>
            <p className="mb-4 max-w-xl text-[13px] leading-6 text-[#3f6e9d]">
              Technik Spirits brings a different perspective. Our design support is grounded in direct manufacturing and engineering experience across medical air, vacuum, and oxygen systems.
            </p>
            <p className="mb-8 max-w-xl text-[13px] leading-6 text-[#3f6e9d]">
              We help teams evaluate real operating conditions-clinical demand, peak load, space constraints, and energy use-before critical project decisions are locked.
            </p>
            <div className="flex max-w-xl gap-3">
              <div className="flex-1 rounded-xl bg-[#dce8f5] px-4 py-4">
                <div className="text-[28px] font-semibold leading-none text-[#0b477b]">15+</div>
                <div className="mt-2 text-[11px] font-medium text-[#0b477b]">Years of Expertise</div>
              </div>
              <div className="flex-1 rounded-xl bg-[#dce8f5] px-4 py-4">
                <div className="text-[28px] font-semibold leading-none text-[#0b477b]">500+</div>
                <div className="mt-2 text-[11px] font-medium text-[#0b477b]">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 left-6 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#e95a2f] text-white shadow-md">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.5 8A3.5 3.5 0 0 0 4 11.5c0 1.94 1.56 3.5 3.5 3.5.17 0 .34-.01.5-.04A4.99 4.99 0 0 1 6.2 18H9c1.1 0 2-.9 2-2v-4.5A3.5 3.5 0 0 0 7.5 8Zm9 0A3.5 3.5 0 0 0 13 11.5c0 1.94 1.56 3.5 3.5 3.5.17 0 .34-.01.5-.04A4.99 4.99 0 0 1 15.2 18H18c1.1 0 2-.9 2-2v-4.5A3.5 3.5 0 0 0 16.5 8Z" />
              </svg>
            </div>
            <div className="rounded-[14px] bg-white px-6 py-6 shadow-[0_16px_34px_rgba(15,23,42,0.14)] ring-1 ring-black/5">
              <h3 className="mb-4 text-[18px] font-semibold text-[#232323]">The Outcome</h3>
              <p className="pb-5 text-[13px] leading-6 text-[#6f6f6f]">
                The outcome of good MGPS design is a system that is correctly sized, easier to execute, easier to maintain, and better aligned with the hospital's clinical and operational requirements.
              </p>
              <div className="mb-5 h-px bg-[#e5e7eb]" />
              <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-md bg-[#f05a2a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d94f24]">
                Discuss Your MGPS Design Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}