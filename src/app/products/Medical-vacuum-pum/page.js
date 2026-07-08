// 'use client';

// import Link from "next/link";
// import Image from "next/image";

// export default function MedicalVacuumPumps() {
//     return (
//         <main className="bg-white min-h-screen">
//             <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-b from-[#eaf3fb] to-[#d9ecf9]">
//                 {/* Background image with waves */}
//                 <div className="absolute inset-0 z-0">
//                     <Image
//                         src="/mgps_plant.png"
//                         alt="MGPS Design"
//                         fill
//                         className="object-cover object-center opacity-40"
//                         priority
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb]/80 via-[#eaf3fb]/60 to-[#d9ecf9]/80" />
//                 </div>

//                 <div className="relative z-10 max-w-3xl mx-auto text-center">
//                     <h1 className="text-4xl sm:text-5xl font-semibold text-[#0b477b] mb-5 leading-tight">
//                         MGPS Design & Consulting
//                         <br />
//                         Services
//                     </h1>

//                     <p className="text-sm sm:text-base text-[#0b477b]/80 leading-relaxed mb-12 max-w-2xl mx-auto">
//                         Medical gas pipeline system design, plant room planning,
//                         and compliance support for hospitals. We provide
//                         evidence-based engineering aligned with ISO 7396-1 and
//                         HTM 02-01.
//                     </p>

//                     <Link
//                         href="/contact"
//                         className="inline-block bg-[#0b2d4e] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
//                         style={{ textDecoration: "none" }}
//                     >
//                         Discuss Your Project
//                     </Link>
//                 </div>
//             </section>
//             {/* niche ka section here */}
//             <section className="bg-[#eaf2fc] text-center px-6 py-16 md:py-20 mb-10">
//                 <h1 className="text-3xl md:text-4xl font-semibold text-[#0b477b] mb-4">
//                     Rotary Vane
//                 </h1>
//                 <div className="w-16 h-[3px] bg-[#0b477b] mx-auto my-4 rounded mb-12" />
//                 <p className=" text-lg md:text-lg mx-auto text-grey-100 leading-relaxed max-w-[800px]">
//                     The Rotary Vane Medical Vacuum Pump System is a centralized solution
//                     engineered for continuous hospital operation. With quiet
//                     performance, minimal vibration, and a compact skid-mounted design,
//                     it delivers reliable medical-grade suction while improving energy
//                     efficiency, installation flexibility, and long-term operational
//                     reliability.
//                 </p>
//             </section>
//             {/* SECTION 2: BOXES + IMAGE */}
//             <section className="bg-[#fdf7f4] px-6 py-16">
//                 <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch justify-center">
//                     {/* LEFT: 2 boxes */}
//                     <div className="flex flex-col gap-5 w-full md:w-[400px]">
//                         <div className="bg-[#1a4a73] text-[#eef4fa] rounded-2xl p-7 flex-1">
//                             <h2 className="text-xl font-bold mb-3">How the System Works?</h2>
//                             <p className="text-sm leading-relaxed text-[#dce8f2]">
//                                 The Rotary Vane Medical Vacuum Pump System is a fully
//                                 integrated, centralized solution that delivers reliable
//                                 medical-grade suction across the hospital MGPS network. Its
//                                 balanced rotary technology ensures quiet, low-vibration
//                                 operation, while advanced filtration and a PLC-based,
//                                 BMS-ready control system provide clean, consistent, and
//                                 dependable performance for continuous hospital use.
//                             </p>
//                         </div>

//                         <div className="bg-[#1a4a73] text-[#eef4fa] rounded-2xl p-7 flex-1">
//                             <h2 className="text-xl font-bold mb-3">Why Choose Rotary Vane?</h2>
//                             <p className="text-sm leading-relaxed text-[#dce8f2]">
//                                 Rotary vane technology provides quieter operation, minimal
//                                 vibration, and smooth, continuous suction compared to
//                                 conventional reciprocating systems. Its compact design,
//                                 reliable performance, and lower lifecycle costs make it an
//                                 ideal solution for modern centralized hospital vacuum
//                                 systems.
//                             </p>
//                         </div>
//                     </div>

//                     {/* RIGHT: image, same width/height as left column */}
//                     <div className="relative w-full md:w-[340px] rounded-2xl overflow-hidden bg-[#f3f3f3]">
//                         <Image
//                             src="/rotary-vane-pump.jpg" // apni image public/ folder me daal kar path update karo
//                             alt="Rotary Vane Pump System"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>
//             </section>


//         </main>
//     );
// }
"use client";
import Link from "next/link";
import Image from "next/image";

export default function RotaryVanePage() {
    return (
        <main className="bg-white min-h-screen">

            {/* ── HERO ── */}
            <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-b from-[#eaf3fb] to-[#d9ecf9]">
                {/* Background image with waves */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/mgps_plant.png"
                        alt="MGPS Design"
                        fill
                        className="object-cover object-center opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb]/80 via-[#eaf3fb]/60 to-[#d9ecf9]/80" />
                </div>

                <div className="relative z-10 w-full lg:max-w-4xl mx-auto text-center ">
                    <h1 className="text-4xl sm:text-5xl font-semibold text-[#0b477b] mb-14 leading-tight ">
                        MEDICAL VACUUM<br />PUMP SYSTEMS
                    </h1>

                    <div className="flex gap-3 flex-wrap justify-center mb-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#0b477b] text-white text-sm font-base px-6 py-3 rounded-full  transition-colors"
                            style={{ textDecoration: "none" }}
                        >
                            Talk to Our Engineers →
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2  text-[#0b477b] text-sm font-semibold px-6 py-3 rounded-full border border-[#0b477b]  transition-colors shadow-sm"
                            style={{ textDecoration: "none" }}
                        >
                            ⬇ Download Datasheet (PDF)
                        </Link>
                    </div>
                </div>
            </section>
            {/* ── ROTARY VANE INTRO ── */}
            <section className="max-w-[1500px] bg-[#f4f7fb] mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-semibold text-[#0b477b] mb-4">Rotary Vane</h2>
                <div className="w-16 h-1 rounded-full bg-[#0b477b] mx-auto mb-9" />
                <p className="text-[19px] text-gray-500 leading-relaxed max-w-4xl mx-auto">
                    The Rotary Vane Medical Vacuum Pump System is a centralized solution engineered for
                    continuous hospital operation. With quiet performance, minimal vibration, and a compact
                    skid-mounted design, it delivers reliable medical-grade suction while improving energy
                    efficiency, installation flexibility, and long-term operational reliability.
                </p>
            </section>

            {/* ── PHOTO LEFT / HOW IT WORKS + WHY CHOOSE RIGHT ── */}
            <section className="bg-[#f8f9fb] px-6 py-16">
                <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-16 items-stretch justify-start">

                    {/* LEFT: 2 boxes, slightly narrower */}
                    <div className="flex flex-col gap-7 w-full lg:max-w-[650px]">
                        <article className="bg-[#0b477b] text-white rounded-[18px] p-7 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-4 mt-3">How the System Works?</h3>
                            <p className="text-[18px] leading-7 text-[#c8d9ea]">
                                The Rotary Vane Medical Vacuum Pump System is a fully integrated, centralized
                                solution that delivers reliable medical-grade suction across the hospital MGPS
                                network. Its balanced rotary technology ensures quiet, low-vibration operation,
                                while advanced filtration and a PLC-based, BMS-ready control system provide clean,
                                consistent, and dependable performance for continuous hospital use.
                            </p>
                        </article>

                        <article className="bg-[#0b477b] text-white rounded-[18px] p-7 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-4 mt-4">Why Choose Rotary Vane?</h3>
                            <p className="text-[18px] leading-7 text-[#c8d9ea]">
                                Rotary vane technology provides quieter operation, minimal vibration, and smooth,
                                continuous suction compared to conventional reciprocating systems. Its compact
                                design, reliable performance, and lower lifecycle costs make it an ideal solution
                                for modern centralized hospital vacuum systems.
                            </p>
                        </article>
                    </div>

                    {/* RIGHT: image */}
                    <div className="relative w-full lg:w-[400px]  overflow-hidden ">
                        <Image
                            src="/rotary-vane-pump.jpg" // apni image public/ folder me daal kar path update karo
                            alt="Rotary Vane Pump System"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </section>

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

            {/* ══════════════════ FEATURES & CRITICAL BENEFITS ══════════════════ */}
            <section className="bg-[#eef5fc] px-6 py-16">
                <div className="max-w-[1360px] mx-auto">
                    <h2 className="text-3xl font-semibold text-[#0b477b] text-center mb-16">Features & Critical Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                                title: "Purpose-Built",
                                desc: "Designed for continuous hospital suction with stable performance and long service life.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
                                title: "High-Efficiency",
                                desc: "Provides smooth, reliable suction for OTs, ICUs, wards, and critical care areas.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="17" y1="9" x2="21" y2="15" /><line x1="21" y1="9" x2="17" y2="15" /></svg>,
                                title: "Low Noise & Minimal Vibration",
                                desc: "Quiet operation with reduced vibration for a better hospital environment.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
                                title: "Compact,Space-Efficient Layout",
                                desc: "Compact skid-mounted design saves space and simplifies installation.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /></svg>,
                                title: "Skid-Mounted Package",
                                desc: "Pre-wired and pre-piped system for faster installation and easy commissioning.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V14" /><path d="M4 10V3" /><path d="M12 21V12" /><path d="M12 8V3" /><path d="M20 21V16" /><path d="M20 12V3" /><path d="M2 14h4" /><path d="M10 8h4" /><path d="M18 16h4" /></svg>,
                                title: "Advanced Control",
                                desc: "PLC-based, BMS-ready controls ensure automatic and reliable operation.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
                                title: "Unified Ecosystem",
                                desc: "Seamlessly integrates with the complete hospital MGPS infrastructure.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" /></svg>,
                                title: "Responsive After-Sales Support",
                                desc: "24/7 technical support with preventive maintenance and fast response.",
                            },
                        ].map((f) => (
                            <div
                                key={f.title}
                                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-200"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#f9fafb] border border-gray-200 flex items-center justify-center text-[#0b477b] flex-shrink-0">
                                    {f.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#0b477b] mb-2 leading-snug">{f.title}</h4>
                                    <p className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#f5f1ec] py-10 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 items-stretch">

                    {/* Left — text box */}
                    <div className="bg-[#0b477b] rounded-3xl p-8 flex flex-col justify-center">
                        <h2 className="text-white text-2xl font-bold mb-4">
                            How the System Works?
                        </h2>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            A centralized safety ecosystem designed to remove wThe
                            Reciprocating Medical Vacuum Pump System delivers reliable
                            medical-grade suction through proven piston technology. Equipped
                            with advanced filtration and a PLC-based, BMS-ready control
                            system, it ensures clean, consistent, and dependable vacuum
                            performance for continuous hospital operation.aste anaesthetic
                            gases (WAGs) directly from the source.
                        </p>
                    </div>

                    {/* Right — image box */}
                    <div className="bg-white rounded-3xl p-6 flex items-center justify-center">
                        <img
                            src="/vacuum-pump.png"
                            alt="Reciprocating Medical Vacuum Pump System"
                            className="max-h-[280px] w-auto object-contain"
                        />
                    </div>

                </div>
            </section>


            {/* ── ROTARY VANE INTRO ── */}
            <section className="max-w-[1500px] bg-[#f4f7fb] mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-semibold text-[#0b477b] mb-4">Reciprocating</h2>
                <div className="w-16 h-1 rounded-full bg-[#0b477b] mx-auto mb-9" />
                <p className="text-[19px] text-gray-500 leading-relaxed max-w-4xl mx-auto">
                    The Reciprocating Medical Vacuum Pump System is a reliable, heavy-duty solution for centralized hospital suction. Designed for operating theatres, ICUs, and wards, it delivers dependable vacuum performance with PLC-based automatic controls, making it an ideal choice for hospitals seeking proven technology and cost-effective operation.
                </p>
            </section>

            {/* section add karvano baaki chhe */}

            {/* ══════════════════ FEATURES & CRITICAL BENEFITS ══════════════════ */}
            <section className="bg-[#eef5fc] px-6 py-16">
                <div className="max-w-[1360px] mx-auto">
                    <h2 className="text-3xl font-semibold text-[#0b477b] text-center mb-16">Features & Critical Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                                title: "Proven Technology",
                                desc: "Reliable vacuum generation for low to medium hospital suction applications.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
                                title: "Heavy-Duty Cast-Iron Construction",
                                desc: "Robust cast-iron build for long-lasting strength and durability.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="17" y1="9" x2="21" y2="15" /><line x1="21" y1="9" x2="17" y2="15" /></svg>,
                                title: "Stainless Steel Valves",
                                desc: "Quick-acting valves ensure smooth airflow and reliable performance.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
                                title: "Low Oil Consumption",
                                desc: "Optimized piston design reduces oil usage and maintenance needs.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /></svg>,
                                title: "Acoustic Enclosure (Optional)",
                                desc: "Optional noise-reducing enclosure for quieter hospital operation.",
                            },
                            {
                                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V14" /><path d="M4 10V3" /><path d="M12 21V12" /><path d="M12 8V3" /><path d="M20 21V16" /><path d="M20 12V3" /><path d="M2 14h4" /><path d="M10 8h4" /><path d="M18 16h4" /></svg>,
                                title: "Advanced Control",
                                desc: "PLC-based, BMS-ready controls ensure automatic and reliable operation.",
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
                                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-200"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#f9fafb] border border-gray-200 flex items-center justify-center text-[#0b477b] flex-shrink-0">
                                    {f.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#0b477b] mb-2 leading-snug">{f.title}</h4>
                                    <p className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── FINAL CTA ── */}
            <section className="bg-white px-6 py-14">
                <div className="max-w-[1360px] mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-[#0b477b] mb-9 max-w-[950px] mx-auto"> Let's find the right integrex medical Vacuum system for your hospital</h2>
                    <p className="text-md text-gray-700 mb-12 max-w-[800px] mx-auto">
                        Whether you're evaluating reciprocating or rotary vane vacuum technology - or need help determining which system suits your facility - our engineering team can help you select the right configuration.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/contact" className="inline-block bg-[#0b477b] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#0a3d6a] transition-colors">
                            Talk to Our Engineers
                        </Link>
                        <Link href="#" className="inline-block bg-[#E05A36] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#c94d2c] transition-colors">
                            Download Datasheets (PDF)
                        </Link>
                    </div>
                </div>
            </section>



        </main>
    );
}