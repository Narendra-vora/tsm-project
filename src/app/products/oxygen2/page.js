"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const features = [
    {
        title: "Ultra-Quiet Operation",
        desc: "Engineered with an advanced acoustic enclosure that minimizes noise and vibration, ideal for ICUs, NICUs, and OTs without disturbing patients.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5 6 9H2v6h4l5 4V5Z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
            </svg>
        ),
    },
    {
        title: "Universal Compatibility",
        desc: "Designed to work with all major brands of ventilators and anaesthesia workstations, ensuring reliable air delivery for any respiratory device.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
    {
        title: "100% Oil-Free Air",
        desc: "Oil-free compressor for clean, dry, contaminant-free medical air suitable for direct patient ventilation.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
            </svg>
        ),
    },
    {
        title: "Integrated Drying",
        desc: "An electronic dryer and multi-stage filtration help reduce moisture, particulates, and contaminants before air is delivered.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69s-5 5.6-5 9.31a5 5 0 0 0 10 0c0-3.71-5-9.31-5-9.31Z" />
            </svg>
        ),
    },
    {
        title: "Stable Flow & Pressure",
        desc: "Maintains stable 4-bar pressure with high flow rates, meeting peak inspiratory requirements for adult, paediatric, and neonatal patients.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 12 16 8" /><path d="M12 12v-2" />
            </svg>
        ),
    },
    {
        title: "Continuous Operation",
        desc: "Designed for 24/7 continuous operation, ensuring uninterrupted medical air supply for as long as the connected ventilator remains active.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-3-6.7" /><polyline points="21 3 21 9 15 9" />
            </svg>
        ),
    },
    {
        title: "Mounting Compatibility",
        desc: "Available with a dedicated mobile trolley or ventilator-specific mounting bracket for space-saving integration.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="8" width="16" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" />
            </svg>
        ),
    },
    {
        title: "Responsive Support",
        desc: "24/7 assistance, proactive preventive maintenance, immediate breakdown response, and affordable spares.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
        ),
    },
];

const specs = [
    ["Design", "Oil-free"],
    ["Pressure Output", "4 bar (≈ 60 psi)"],
    ["Continuous Flow", "40 LPM"],
    ["Peak Flow", "200 LPM"],
    ["Dryer", "Peltier based, electronic dryer"],
    ["Filtration", "Down to 0.01 microns"],
    ["Noise Level", "≤ 55 dB(A) at 1 m"],
    ["Motor Rating", "0.75 HP (≈ 550 Watts)"],
    ["Power Supply", "230 V, 50 Hz, 1 Phase"],
    ["Dimensions", "50 × 32 × 32 cm approx."],
    ["Weight", "Approx. 40 kgs"],
];

const scopeIncludes = [
    "100% oil-free compressor assembly",
    "After-cooler & Peltier-based electronic dryer",
    "Multi-stage filtration assembly",
    "Outlet pressure regulation and indication",
    "Control system with thermal protection",
    "Medical air outlet connection point(s)",
    "Acoustic enclosure / cabinet for bedside use",
    "Power cable and necessary accessories",
];

const optionalAccessories = [
    "Trolley with wheels",
    "Ventilator mount trolley with wheels",
    "Standby function with wall supply inlet",
    "Dual outlet configuration & Hoses",
];

const faqs = [
    {
        q: "What is a Medical Ventilator Air Compressor?",
        a: "It is a standalone, oil-free compressor that supplies clean, dry, medical-grade compressed air to a single ventilator or respiratory device where a centralized medical air pipeline is unavailable or impractical.",
    },
    {
        q: "Standalone vs. Centralized system?",
        a: "A standalone unit serves one device directly at the bedside, while a centralized system supplies medical air to multiple outlets across a facility through a piped network. Standalone units are ideal for isolated locations or backup use.",
    },
    {
        q: "Is the compressor compatible with all ventilator brands?",
        a: "Yes, the unit is designed to work with all major brands of ventilators and anaesthesia workstations, regardless of manufacturer.",
    },
    {
        q: "What type of air quality does it deliver?",
        a: "It delivers 100% oil-free, dry, filtered air, treated through multi-stage filtration and an electronic dryer to meet medical air quality standards.",
    },
    {
        q: "Is it safe for neonatal and pediatric patients?",
        a: "Yes, the stable flow and pressure output, combined with pristine air quality, make it suitable for adult, paediatric, and neonatal patients alike.",
    },
    {
        q: "Can one compressor serve more than one device?",
        a: "Each unit is designed to serve one respiratory device at a time. For multiple devices, a dual-outlet configuration or a centralized system is recommended.",
    },
    {
        q: "How noisy is the standalone compressor?",
        a: "The unit operates at or below 55 dB(A) at 1 metre, thanks to its acoustic enclosure, making it suitable for use at the bedside without disturbing patients.",
    },
];

export default function VentilatorCompressorPage() {
    const [openFaq, setOpenFaq] = useState(null);
    return (
        <main className="bg-white min-h-screen">

            {/* ── HERO ── */}
            <section className="px-6 py-16">
                <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="inline-block bg-blue-50 text-[#0b477b] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
                            Clinical Grade
                        </span>
                        <h1 className="text-5xl font-bold text-[#0b477b] leading-tight mb-5">
                            Medical Ventilator Air<br />Compressor
                        </h1>
                        <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                            Technik Spirits manufactures standalone medical ventilator air
                            compressors for clinical situations where a centralized medical air
                            pipeline is unavailable, not accessible, or not practical for a
                            specific location. The system is designed to provide oil-free, dry,
                            filtered compressed air to one respiratory device at a time,
                            including ventilators, anaesthesia workstations, CPAP/BiPAP
                            systems, HFNC devices, and similar respiratory care equipment.
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#0b477b] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors"
                                style={{ textDecoration: "none" }}
                            >
                                Talk to Our Engineers →
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 bg-white text-[#0b2d4e] text-sm font-semibold px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                                style={{ textDecoration: "none" }}
                            >
                                Explore Centralized Systems
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[340px] lg:h-[420px] rounded-2xl overflow-hidden">
                        <Image
                            src="/ventilator-compressor-hero.png"
                            alt="Medical Ventilator Air Compressor"
                            fill
                            className="object-contain object-center drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ── HOW THE SYSTEM WORKS ── */}
            <section className="bg-[#f7f9fb] px-6 py-16">
                <div className="max-w-[1360px] mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-[#0b477b] mb-6">How the System Works</h2>
                    <div className="w-16 h-1 rounded-full bg-[#0b477b] mx-auto mb-9" />

                    <p className="text-[22px] text-gray-500 max-w-3xl mx-auto mb-6 leading-relaxed">
                        The medical ventilator air compressor is designed to serve one respiratory
                        device at a time.
                    </p>
                    <p className="text-[20px] text-gray-500 max-w-4xl mx-auto leading-relaxed">
                        A 100% oil-free compressor generates compressed air, which is cooled via an
                        after-cooler. An integrated Peltier-based electronic dryer reduces moisture to
                        help prevent condensation in the breathing circuit. Multi-stage filtration
                        removes water, particulates, and microorganisms. A built-in control unit
                        manages operation and provides thermal protection against voltage/
                        temperature fluctuations. The assembly is housed in a mobile enclosure with
                        castors and a ventilator mount.
                    </p>
                </div>
            </section>

            {/* ── KEY FEATURES & BENEFITS ── */}
            <section className="bg-[#fdf6f2] px-6 py-16">
                <div className="max-w-[1360px] mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-semibold text-[#0b477b] mb-3">Key Features & Benefits</h2>
                        <p className="text-md text-gray-500">
                            Engineered for reliability, quiet operation, and pristine air quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {features.map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-gray-50">
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0b477b] mb-2 leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TYPICAL TECHNICAL SPECIFICATIONS + STANDARD SCOPE OF SUPPLY ── */}
            <section className="bg-[#f7f9fb] px-6 py-16">
                <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* Left — Specs table */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#0b2d4e] mb-5">
                            Typical Technical Specifications
                        </h2>
                        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#0b477b]">
                                        <th className="text-left text-xs font-semibold text-white px-6 py-3 uppercase tracking-wide">Parameter</th>
                                        <th className="text-left text-xs font-semibold text-white px-6 py-3 uppercase tracking-wide">Specifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specs.map(([param, spec], i) => (
                                        <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                            <td className="text-sm font-semibold text-[#0b2d4e] px-6 py-3.5">{param}</td>
                                            <td className="text-sm text-gray-500 px-6 py-3.5">{spec}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right — Scope of Supply */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#0b2d4e] mb-5">
                            Standard Scope of Supply
                        </h2>
                        <div className="bg-[#0b477b] rounded-2xl p-9">
                            <p className="text-md text-blue-100 leading-relaxed mb-5">
                                Every Technik Spirits standalone medical ventilator air compressor
                                is supplied as a ready-to-use system. The standard package includes:
                            </p>
                            <ul className="flex flex-col gap-3 mb-7">
                                {scopeIncludes.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7fd4a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-md font-semibold text-white mb-3">Optional Accessories</h3>
                            <ul className="flex flex-col gap-3">
                                {optionalAccessories.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-blue-100">
                                        <span className="text-blue-200 shrink-0">+</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── FREQUENTLY ASKED QUESTIONS ── */}
            <section className="bg-[#f7f9fb] px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#0b2d4e] text-center mb-10">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, i) => (
                            <div key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span className="text-sm font-semibold text-[#0b2d4e]">
                                        {faq.q}
                                    </span>
                                    <svg
                                        className={`w-4 h-4 text-[#0b477b] transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {openFaq === i && (
                                    <div className="px-6 pb-5">
                                        <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* product range banner  */}
            <section className="bg-gray-100 px-6 py-14">
                <div className="max-w-[1360px] mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-[#0b477b] mb-6 max-w-[750px] mx-auto">Need a standalone medical air compressor for your ventilators?</h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-[750px] mx-auto">
                        Our engineering team can help you determine the right configuration - standalone bedside compressors, centralized medical air, or a combination - based on your facility's clinical requirements
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <Link href="/contact" className="inline-block bg-[#0b477b] border border-white/30 text-white text-sm font-bold px-6 py-4 rounded-full transition-colors">
                            Talk Discuss Your Requiremento Our Engineers
                        </Link>
                        <Link href="#" className="inline-block bg-[#E05A36] text-white text-sm font-bold px-6 py-4 rounded-full transition-colors">
                            Explore Integrex medical Air Compressor System
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}