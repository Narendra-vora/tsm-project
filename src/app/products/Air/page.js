'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AirCompressorPage() {
    const [openFaq, setOpenFaq] = useState(null);
    return (
        <main className="bg-white">

            {/* ══════════════════════ HERO ══════════════════════ */}
            <section className="relative overflow-hidden py-14 px-4">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/air-hero-bg.jpg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white/15" />
                </div>

                <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#eef5fc] text-[#0d4c82] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border border-[#e0ecf8]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0d4c82]" />
                            Patented Medical Technology
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-semibold text-[#0b477b] mb-5 leading-[1.2]">
                            Integrex™ Medical<br />Air Compressor <br />System
                        </h1>

                        <p className="text-md text-[#0b477b] leading-relaxed mb-7 max-w-lg">
                            Advanced centralized medical air compressor system for modern hospitals: silent, compact & oil-free. Engineered for maximum reliability and patient safety.
                        </p>
                        <div className="flex gap-3.5 flex-wrap">

                            <a
                                href="#guides"
                                className="inline-flex items-center gap-2 bg-[#0b477b] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#0d3d68] transition-colors"
                                style={{ textDecoration: "none" }}
                            >
                                Talk to Our Engineers
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>

                            </a>

                            <a
                                href="/contact-us"
                                className="inline-flex items-center gap-2 bg-white text-[#0b2d4e] text-sm font-semibold px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                                style={{ textDecoration: "none" }}
                            >
                                Download Brochure (PDF)
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0b2d4e"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-full max-w-[460px] h-[420px]">
                            <img
                                src="/product-Air.png"
                                alt="Integrex Medical Air Compressor System"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* ══════════════════ PERFORMANCE THAT BENEFITS ══════════════════ */}
            < section className="bg-[#f4f7fb] px-6 py-12" >
                <div className="max-w-[1360px] mx-auto">
                    <h2 className="text-3xl font-semibold text-[#0b477b] text-center tracking-wide mb-8">
                        PERFORMANCE THAT BENEFITS
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                        {[
                            { value: "Up to 80%", label: "Less Noise" },
                            { value: "Up to 80%", label: "Less Vibration" },
                            { value: "Up to 80%", label: "Less Space" },
                            { value: "Up to 70%", label: "Lower Electricity" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-white border border-gray-200 rounded-2xl py-6 px-4 text-center shadow-sm"
                            >
                                <div className="text-4xl font-semibold text-[#0b477b] mb-1">{stat.value}</div>
                                <div className="text-sm  text-[#0b477b]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ══════════════════ HOW THE SYSTEM WORKS ══════════════════ */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-[1360px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-semibold text-[#0b477b] mb-5">How the System Works?</h2>
                        <div className="w-16 h-[3px] bg-[#0b477b] rounded-full mb-6 mx-auto" />
                        <p className="text-lg text-gray-800 max-w-5xl mx-auto leading-relaxed">
                            The Integrex™ Medical Air Compressor System delivers clean, dry, medical-grade air through a fully integrated and automated solution. Featuring oil-free compressors, advanced filtration, moisture removal, and intelligent PLC controls, it ensures a reliable, efficient, and uninterrupted air supply for critical hospital areas.
                        </p>
                    </div>
                </div>
            </section>
            {/* ══════════════════ MODULAR DESIGN PHILOSOPHY ══════════════════ */}
            <section className="bg-[#f4f7fb] px-6 py-16">
                <div className="max-w-[1360px] mx-auto">

                    {/* Top row — text left, image right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
                        <div>
                            <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-12 border border-[#e0ecf8]">
                                Our Approach
                            </div>
                            <h2 className="text-3xl md:text-5xl font-semibold text-[#0b477b] mb-7 leading-tight">
                                Modular Design<br />Philosophy
                            </h2>
                            <div className="w-10 h-[3px] bg-[#0b477b] rounded-full mb-6" />
                            <p className="text-md text-gray-500 leading-relaxed max-w-md">
                                Our engineering approach moves beyond traditional fixed-capacity systems. By utilizing a modular architecture, we provide a scalable, redundant, and highly efficient medical air solution that grows with your facility.
                            </p>
                        </div>

                        {/* Right — image placeholder (fixed height/width) */}
                        <div className="relative w-full max-w-[500px] h-[380px] mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                            <Image
                                src="/air_page.jpg"
                                alt="Modular design concept — traditional vs Integrex"
                                fill
                                sizes="420px"
                                className="object-cover object-center rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Bottom 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                ),
                                title: "Smart Redundancy",
                                desc: "True N+1 approach. If one module requires service, others automatically ramp up to maintain 100% demand without intervention.",
                                points: ["Hot-swappable modules", "Autonomous load failover"],
                            },
                            {
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="8" width="16" height="12" rx="2" />
                                        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                                    </svg>
                                ),
                                title: "Easy Scalability",
                                desc: "Start with current needs. Our 'Plug-and-Expand' architecture allows for phased capacity expansion as your hospital grows.",
                                points: ["Zero downtime expansion", "Phased capital investment"],
                            },
                            {
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="6" width="20" height="12" rx="2" />
                                        <path d="M9 10v4" /><path d="M13 10v4" /><path d="M17 10v4" />
                                    </svg>
                                ),
                                title: "Capacity Control",
                                desc: "VRV/VRF-style matching. Only necessary modules run, drastically reducing wear-and-tear and energy waste.",
                                points: ["Real-time demand matching", "Predictive maintenance alerts"],
                            },
                        ].map((card) => (
                            <div key={card.title} className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm">
                                <div className="w-11 h-11 rounded-xl bg-[#eef5fc] border border-[#d0e4f5] flex items-center justify-center mb-5">
                                    {card.icon}
                                </div>
                                <h3 className="text-md font-bold text-[#0b477b] uppercase tracking-wide mb-2">{card.title}</h3>
                                <div className="w-8 h-[4px] bg-[#0b477b] rounded-full mb-4" />
                                <p className="text-md text-gray-500 leading-relaxed mb-8">{card.desc}</p>
                                <div className="flex flex-col gap-2.5">
                                    {card.points.map((point) => (
                                        <div key={point} className="flex items-center gap-3">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                                <circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5L16 9.5" />
                                            </svg>
                                            <span className="text-sm font-semibold text-gray-700 ">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ══════════════════ ULTRA-HIGH PURITY MEDICAL AIR ══════════════════ */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-semibold text-[#0b477b] mb-6 max-w-xl">Ultra-High Purity Medical Air</h2>
                        <p className="text-md text-gray-500 leading-relaxed mb-7 max-w-lg">
                            Patient safety starts with the quality of the air they breathe. Integrex™ system exceeds HTM 02-01 and ISO 7396-1 standards for breathing air quality.
                        </p>
                        <div className="flex flex-col gap-5">
                            {[
                                {
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
                                        </svg>
                                    ),
                                    title: "100% Oil-Free",
                                    desc: "Guaranteed dry-compression ensures zero hydrocarbon contamination.",
                                },
                                {
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z" />
                                        </svg>
                                    ),
                                    title: "Precision Dry",
                                    desc: "Maintains a consistent -40°C pressure dew point for zero moisture.",
                                },
                                {
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" />
                                        </svg>
                                    ),
                                    title: "Clinical Clean",
                                    desc: "Multi-stage HEPA and activated carbon filtration for air clarity.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#eef5fc] border border-[#d0e4f5] flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-md font-bold text-[#0b477b] mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-full max-w-[460px] h-[420px]">
                            <img
                                src="/product-Air.png"
                                alt="Integrex Medical Air Compressor"
                                className="w-full h-full object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════ FEATURES & CRITICAL BENEFITS ══════════════════ */}
            <section className="bg-[#eef5fc] px-6 py-16">
                <div className="max-w-[1360px] mx-auto">
                    <h2 className="text-3xl font-semibold text-[#0b477b] text-center mb-16">Features & Critical Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                                title: "Purpose-Built",
                                desc: "Built solely for clinical medical gas applications, not industrial.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
                                title: "Modular Architecture",
                                desc: "Easily add capacity or maintain without system shutdown.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="17" y1="9" x2="21" y2="15" /><line x1="21" y1="9" x2="17" y2="15" /></svg>,
                                title: "Ultra-Quiet",
                                desc: "Silent operation allows placement near patient wards.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
                                title: "Energy Savings",
                                desc: "Intelligent sequencing reduces power up to 70% off-peak.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /></svg>,
                                title: "Skid-Mounted Package",
                                desc: "Pre-piped and pre-wired for rapid, error-free installation.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V14" /><path d="M4 10V3" /><path d="M12 21V12" /><path d="M12 8V3" /><path d="M20 21V16" /><path d="M20 12V3" /><path d="M2 14h4" /><path d="M10 8h4" /><path d="M18 16h4" /></svg>,
                                title: "Advanced Control",
                                desc: "Touchscreen HMI with remote monitoring and BMS support.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
                                title: "Unified Ecosystem",
                                desc: "Single interface for compressors, dryers, and filtration.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" /></svg>,
                                title: "24/7 Support",
                                desc: "Backed by Technik Spirits' expert global service teams.",
                            },
                        ].map((f) => (
                            <div
                                key={f.title}
                                className="bg-white border-2 border-gray-200 rounded-xl p-5 flex flex-col items-start hover:border-[#0b477b] hover:shadow-md transition-all duration-200"
                            >
                                <div className="w-14 h-14 flex items-center justify-start mb-2">
                                    {f.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-navy-800 mb-1.5">{f.title}</h4>
                                <p className="text-[15px] text-gray-700 leading-relaxed mb-4">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════ TECHNICAL SPECIFICATIONS ══════════════════ */}
            <section className="max-w-[1360px] mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold text-[#0b477b] text-center mb-8">Technical Specifications</h2>
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#0b477b]">
                                <th className="text-left text-md font-bold text-white px-6 py-4">Parameter</th>
                                <th className="text-left text-md font-bold text-white px-6 py-4">integrex™ Standard Configuration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Design", "Oil-free"],
                                ["Pressure Output", "4 bar (60 psi) & 7 bar (≈ 100 psi)"],
                                ["Flow Capacity", "300 LPM (≈ 10 CFM) to virtually unlimited capacity"],
                                ["Dryer", "Integrated"],
                                ["Filtration", "Integrated four-stage filtration; down to 0.01 micron"],
                                ["Air Receiver Capacity", "300 to 5000+ Litres"],
                                ["Power Supply", "415 V, 50 Hz, 3 Phase"],

                            ].map(([param, spec], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="text-md font-semibold text-[#0b477b] px-7 py-5">{param}</td>
                                    <td className="text-md text-gray-500 px-6 py-5">{spec}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ══════════════════ STANDARD SCOPE OF SUPPLY ══════════════════ */}
                <section className="bg-white px-6 py-16">
                    <div className="max-w-[1360px] mx-auto">
                        <h2 className="text-4xl font-semibold text-[#0b477b] mb-16">Standard Scope of Supply</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Included Components */}
                            <div className="bg-[#fdf3f0] border border-gray-200 rounded-2xl p-7">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E05A36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="8" y="2" width="8" height="4" rx="1" />
                                        <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <h3 className="text-md font-semibold text-[#1a2a3a]">Included Components</h3>
                                </div>
                                <ul className="flex flex-col gap-2.5">
                                    {[
                                        "Oil-free air compressor modules",
                                        "Air receiver(s) with auto drain valve",
                                        "Integrated dryer(s) for moisture removal",
                                        "Multi-stage filtration assembly",
                                        "Pressure regulation assembly for 4 bar or 7 bar MGPS delivery",
                                        "PLC-based, BMS-ready, control system",
                                        "All necessary accessories and ancillaries for complete system integration",
                                    ].map((item) => (
                                        <li key={item} className="text-md text-gray-600 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Optional Accessories */}
                            <div className="bg-[#fdf3f0] border border-gray-200 rounded-2xl p-7">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E05A36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                    <h3 className="text-md font-semibold text-[#1a2a3a]">Optional Accessories</h3>
                                </div>
                                <ul className="flex flex-col gap-2.5">
                                    {[
                                        "Duplex / multi dryer and filtration assemblies for enhanced reliability",
                                        "Dew point analyzer for dryer switching and moisture monitoring",
                                        "CO, CO2, and other gas analyzer for Medical air quality monitoring",
                                        "Duplex / multi air receivers (parallel)",
                                    ].map((item) => (
                                        <li key={item} className="text-md text-gray-600 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* ══════════════════ TECHNICAL FAQ ══════════════════ */}
            <section className="bg-[#eceef0] px-6 py-16">
                <div className="max-w-[850px] mx-auto">
                    <h2 className="text-3xl font-bold text-[#0b477b] text-center mb-10">Technical FAQ</h2>
                    <div className="flex flex-col gap-4">
                        {[
                            {
                                q: "What is the Integrex™ Modular Medical Air Compressor System?",
                                a: "It is a scalable, oil-free medical air compressor system engineered for hospitals, combining compression, drying, filtration, and control into a single modular skid-mounted package.",
                            },
                            {
                                q: "What makes Integrex different from traditional duplex compressors?",
                                a: "Unlike fixed duplex systems, Integrex uses independent modules that can be added, serviced, or replaced without shutting down the entire supply, ensuring true N+1 redundancy.",
                            },
                            {
                                q: "Does the system meet ISO 8573-1 Class 0 oil-free standards?",
                                a: "Yes, Integrex is certified oil-free and meets ISO 8573-1 Class 0, guaranteeing zero hydrocarbon contamination in the medical air supply.",
                            },
                            {
                                q: "How quiet is Integrex medical air compressor system compared to conventional systems?",
                                a: "Integrex operates significantly quieter than conventional industrial compressors, allowing installation closer to patient wards without additional acoustic enclosures.",
                            },
                            {
                                q: "How compact is Integrex™, and how does it save space?",
                                a: "Its modular skid-mounted design reduces the plant room footprint substantially compared to traditional systems of equivalent capacity, freeing up valuable hospital space.",
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-full overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span className="text-sm font-semibold text-[#1a2a3a]">
                                        {i + 1}. {faq.q}
                                    </span>
                                    <svg
                                        className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {faq === i && (
                                    <div className="px-7 pb-5">
                                        <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="bg-white px-6 py-14">
                <div className="max-w-[1360px] mx-auto text-center">
                    <h2 className="text-5xl font-semibold text-[#0b477b] mb-5 max-w-[800px] mx-auto">Ready to upgrade your medical air?</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-[650px] mx-auto">
                        Let's find the right integrex medical air compressor system configuration for your hospital project. Our engineering team is ready to assist with sizing and custom layouts
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/contact" className="inline-block bg-[#0b477b] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#0a3d6a] transition-colors">
                            Talk to Our Engineers
                        </Link>
                        <Link href="#" className="inline-block bg-[#E05A36] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#c94d2c] transition-colors">
                            Download Brochure
                        </Link>
                    </div>
                </div>
            </section>

        </main >
    );
}
