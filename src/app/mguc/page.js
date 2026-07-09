"use client";
import { useState } from "react";
import Link from "next/link";
import { FadeUp, HoverCard } from "@/components/Animations";
// ── Conversion Data ──────────────────────────────────────────
const pressureRows = [
    { from: "1 bar", to: "14.5038 psi" },
    { from: "1 bar", to: "0.98694 atm" },
    { from: "1 bar", to: "100 kPa" },
];

const vacuumRows = [
    { from: "1 mmHg", to: "0.03937 in Hg" },
    { from: "1 mmHg", to: "1.333 mbar" },
    { from: "1 mbar", to: "0.750 mm Hg" },
];

const flowRows = [
    { from: "1 L/min", to: "0.03531 CFM" },
    { from: "1 CFM", to: "28.318 LPM" },
    { from: "1 LPM", to: "0.00 m³/hour" },
];

export default function ConverterPage() {
    const [o2liquid, setO2liquid] = useState("");
    const [o2cylinders, setO2cylinders] = useState("");

    const liquidLitersPerDay = o2liquid
        ? (parseFloat(o2liquid) * 24 * 1.251).toFixed(1)
        : "";
    const cylindersPerDay = o2cylinders
        ? (parseFloat(o2cylinders) * 24 / 6.8).toFixed(1)
        : "";

    return (
        <main className="font-sans bg-gray-50 min-h-screen">

            {/* ── HERO ── */}
            <section className="relative w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] flex items-center overflow-hidden">

                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/mguc.png"
                        alt="Medical Gas Unit Converter"
                        className="w-full h-full object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </div>

                {/* Text content */}
                <div className="relative z-10 w-full pl-5 sm:pl-14 lg:pl-20 pr-5 sm:pr-6 py-10 sm:py-14">
                    <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-5 py-2 rounded-full text-xs font-semibold tracking-wider mb-6 border border-[#e0ecf8]">
                        ENGINEERING TOOLS
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b477b] leading-tight mb-4">
                        Medical Gas Unit<br />Converters
                    </h1>
                    <p className="text-md text-gray-500 leading-relaxed max-w-lg mb-10">
                        Hospital teams, consultants, and engineers routinely work across multiple units. Accurate conversion is critical for MGPS design, equipment sizing, and tender evaluation.
                    </p>

                    {/* 3 badges */}
                    <div className="flex gap-6 sm:gap-10 flex-wrap mt-4">
                        {[
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="5" y="2" width="14" height="20" rx="2" />
                                        <line x1="9" y1="7" x2="15" y2="7" />
                                        <line x1="9" y1="11" x2="15" y2="11" />
                                        <line x1="9" y1="15" x2="12" y2="15" />
                                    </svg>
                                ),
                                title: "Accurate", sub: "Calculations"
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                ),
                                title: "Industry", sub: "Standard"
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                ),
                                title: "Trusted by", sub: "Professionals"
                            },
                        ].map((b) => (
                            <div key={b.title} className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-lg bg-[#eef5fc] flex items-center justify-center flex-shrink-0">
                                    {b.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-[#0b477b]">{b.title}</div>
                                    <div className="text-xs font-semibold text-[#0b477b]">{b.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── 3 CONVERTER CARDS ── */}
            <section className="max-w-[1360px] mx-auto px-4 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-13">

                    {/* Pressure */}
                    <HoverCard>
                        <div className="bg-[#0b477b] rounded-2xl p-5 shadow-lg">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="20" x2="18" y2="10" />
                                        <line x1="12" y1="20" x2="12" y2="4" />
                                        <line x1="6" y1="20" x2="6" y2="14" />
                                        <line x1="2" y1="20" x2="22" y2="20" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-base">Pressure</h3>
                            </div>
                            <div className="space-y-2 mb-4">
                                {pressureRows.map((r, i) => (
                                    <div key={i} className="flex justify-between bg-white/10 rounded-lg px-3 py-2.5">
                                        <span className="text-blue-200 text-xs">{r.from}</span>
                                        <span className="text-white font-semibold text-xs">{r.to}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-6 text-xs text-white font-semibold flex items-center gap-1 hover:text-white transition-colors mb-4">
                                View all conversions →
                            </button>
                        </div>
                    </HoverCard>

                    {/* Vacuum */}
                    <HoverCard>
                        <div className="bg-[#0b477b] rounded-2xl p-5 shadow-lg">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-base">Vacuum</h3>
                            </div>
                            <div className="space-y-2 mb-4">
                                {vacuumRows.map((r, i) => (
                                    <div key={i} className="flex justify-between bg-white/10 rounded-lg px-3 py-2.5">
                                        <span className="text-blue-200 text-xs">{r.from}</span>
                                        <span className="text-white font-semibold text-xs">{r.to}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-6 mb-4 text-xs text-white font-semibold flex items-center gap-1 hover:text-white transition-colors">
                                View all conversions →
                            </button>
                        </div>
                    </HoverCard>

                    {/* Flow Rate */}
                    <HoverCard>
                        <div className="bg-[#0b477b] rounded-2xl p-5 shadow-lg">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="23 4 23 10 17 10" />
                                        <polyline points="1 20 1 14 7 14" />
                                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-base">Flow Rate</h3>
                            </div>
                            <div className="space-y-2 mb-4">
                                {flowRows.map((r, i) => (
                                    <div key={i} className="flex justify-between bg-white/10 rounded-lg px-3 py-2.5">
                                        <span className="text-blue-200 text-xs">{r.from}</span>
                                        <span className="text-white font-semibold text-xs">{r.to}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-6 mt-4 text-xs text-white font-semibold flex items-center gap-1 hover:text-white transition-colors">
                                View all conversions →
                            </button>
                        </div>
                    </HoverCard>

                </div>

            </section>

            {/* ── MEDICAL OXYGEN CONVERSIONS ── */}
            <section className="max-w-[1360px] mx-auto px-4 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start justify-items-center md:justify-items-stretch">

                    {/* Left */}
                    <div className="bg-white rounded-2xl p-5 pb-8 border border-gray-200 shadow-sm w-full">
                        <h2 className="text-2xl sm:text-3xl text-[#0b477b] mb-2 font-semibold">Medical Oxygen Conversions</h2>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            Critical formulas for estimating daily liquid volume and cylinder requirements for hospital oxygen supply planning.
                        </p>
                        <div className="space-y-3">
                            <div className="space-y-3">
                                {/* Row 1 */}
                                <div className="bg-[#0b477b] rounded-xl px-5 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <div>
                                        <div className="text-md text-white/95 font-semibold">Liquid Consumption Estimate</div>
                                        <div className="text-xs text-white/70 mt-0.5">Nm³/h to Liquid Litres/Day</div>
                                    </div>
                                    <div className="text-white text-sm font-mono bg-white/10 px-3 py-1 rounded w-full sm:w-auto text-center">
                                        (Nm³/h × 24) × 1.251
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="bg-[#0b477b] rounded-xl px-5 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <div>
                                        <div className="text-md text-white/95 font-semibold">Storage Logistics Estimate</div>
                                        <div className="text-xs text-white/70 mt-0.5">Nm³/h to Cylinders/Day</div>
                                    </div>
                                    <div className="text-white text-sm font-mono bg-white/10 px-3 py-1 rounded w-full sm:w-auto text-center">
                                        (Nm³/h × 24) / 6.8
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — photo same height */}
                    <div className="rounded-xl overflow-hidden w-full max-w-[480px]">
                        <img
                            src="/products_hero.png"
                            alt="Medical Gas Pressure Gauges"
                            className="w-full h-full object-cover rounded-xl"
                            style={{ minHeight: "200px", maxHeight: "320px" }}
                        />
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="w-full bg-gray-100">
                <div className="w-full bg-white border border-gray-200 shadow-sm px-8 py-10 text-center">
                    <FadeUp>  <h2 className="text-3xl font-semibold  text-[#0b477b] mb-3">
                        Need technical assistance with your MGPS design?
                    </h2></FadeUp>
                    <p className="text-sm text-gray-500 mb-6 max-w-lg mx-auto leading-relaxed">
                        Our engineering team can help with load calculations, pipe sizing, and system architecture to ensure compliance and clinical safety.
                    </p>
                    <FadeUp>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#e65c00]  text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors"
                        >
                            Get Quote →
                        </Link>
                    </FadeUp>
                </div>
            </section>

        </main >
    );
}