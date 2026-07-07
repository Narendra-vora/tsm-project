import Link from "next/link";
import Image from "next/image";

const C = {
    navy: "#0b477b",
    navyDark: "#082d52",
    accent: "#e65c00",
    white: "#ffffff",
    offWhite: "#f4f7fb",
    grey: "#6b7a99",
    dark: "#1a2340",
    cardBorder: "#dde3f0",
};

export default function OxygenGeneratorPage() {
    return (
        <main style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: C.white }}>

            {/* ── HERO ── */}
            <section style={{
                position: "relative",
                overflow: "hidden",
                padding: "56px 16px",
            }}>
                {/* Background image with gradient overlay */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <img
                        src="/oxygen-hero-bg.jpg"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                    />
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(90deg, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.15) 100%)"
                    }} />
                </div>

                <div style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: 1360,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 40,
                    alignItems: "center",
                }}>

                    {/* Left */}
                    <div>
                        <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border border-[#e0ecf8]">
                            ISO 13485 & ISO 9001 CERTIFIED
                        </div>

                        <h1 style={{ fontSize: 40, fontWeight: 600, color: "#0b477b", margin: "0 0 20px", lineHeight: 1.25 }}>
                            Medical Oxygen Generator:<br />
                            On-Site Life Support <br />Engineering.
                        </h1>

                        <p style={{ fontSize: 15, color: "#0b477b", lineHeight: 1.85, margin: "0 0 28px", maxWidth: 600 }}>
                            Engineered for clinical safety and absolute reliability. Our PSA oxygen systems deliver high-purity medical-grade oxygen directly to your hospital pipeline, eliminating logistical risks and oxygen shortages.
                        </p>

                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <a href="#guides" style={{
                                display: "flex", alignItems: "center", gap: 8,
                                background: "#0b477b", color: "#ffffff",
                                padding: "12px 24px", borderRadius: 30,
                                fontSize: 13, fontWeight: 500, textDecoration: "none",
                                boxShadow: "0 4px 14px rgba(11, 45, 78, 0.25)",
                                transition: "all 0.2s"
                            }}>
                                Talk to Our Engineers
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>

                            </a>
                            <a href="/contact-us" style={{
                                display: "flex", alignItems: "center", gap: 8,
                                background: "#ffffff", color: "#0b477b",
                                padding: "12px 24px", borderRadius: 30,
                                fontSize: 13, fontWeight: 600, textDecoration: "none",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                transition: "all 0.2s"
                            }}>
                                Download Brochure (PDF) ⬇
                            </a>
                        </div>
                    </div>

                    {/* Right — Product image, no box, floating */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ position: "relative", width: "100%", maxWidth: 460, height: 420 }}>
                            <img
                                src="/product_oxygen_generator.png"
                                alt="Medical Oxygen Generator System"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.25))"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW THE SYSTEM WORKS ── */}

            <section className="bg-white px-6 py-16">
                <div className="max-w-[1360px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-semibold text-[#0b477b] mb-7">How the System Works?</h2>
                        <div className="w-16 h-[3px] bg-[#0b477b] rounded-full mb-8 mx-auto" />
                        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
                            A Medical Oxygen Generator is a centralized on-site system that produces high-purity medical oxygen for the hospital MGPS network. Using PSA (Pressure Swing Adsorption) technology, compressed air is purified, oxygen is separated from nitrogen through Zeolite Molecular Sieves, and delivered at the required pressure. A PLC-based control system ensures continuous, automated, and reliable oxygen supply with real-time purity monitoring.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHY ON-SITE OXYGEN GENERATION ── */}
            {/* <section style={{ background: C.white, padding: "56px 16px" }}> */}
            <section style={{ background: "#eef0f3", padding: "56px 16px" }}>
                <div style={{ maxWidth: 1360, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "start" }}>

                    {/* Left text */}
                    <div>
                        <h2 style={{ fontSize: 34, fontWeight: 700, color: C.navy, margin: "0 0 18px" }}>Why On-Site Oxygen Generation?</h2>
                        <p style={{ fontSize: 14, color: C.grey500, lineHeight: 1.85, margin: "0 0 16px", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
                            Hospital oxygen supply has traditionally depended on cylinders or liquid oxygen. Both models can work, but they also bring operational dependencies: ordering, transportation, refilling, storage, vendor coordination, pressure management, and emergency planning.
                        </p>
                        <p style={{ fontSize: 14, color: "#1a2a3a", fontWeight: 700, lineHeight: 1.85, margin: "0 0 16px", marginLeft: "auto", marginRight: "auto" }}>
                            On-site oxygen generation changes the operating model.
                        </p>
                        <p style={{ fontSize: 14, color: C.grey500, lineHeight: 1.85, margin: "0 0 16px" }}>
                            Instead of depending only on delivered oxygen, the hospital generates oxygen within its own premises from atmospheric air and supplies it directly to the MGPS network. For facilities with medium to high and consistent oxygen demand, this can materially reduce oxygen procurement cost, simplify logistics, and improve long-term supply control.
                        </p>
                        <p style={{ fontSize: 14, color: C.grey500, lineHeight: 1.85, margin: 0 }}>
                            This is especially relevant for hospitals where oxygen usage is regular across ICUs, wards, operation theatres, emergency areas, and respiratory care applications.
                        </p>
                    </div>

                    {/* Right — bordered card with 3 features */}
                    <div style={{
                        background: "white",
                        border: `1px solid ${C.cardBorder}`,
                        borderRadius: 16,
                        padding: "32px 28px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 26,
                    }}>
                        {[
                            {
                                icon: (
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="1" y="6" width="14" height="10" rx="1" /><path d="M15 9h4l3 3v4h-7z" />
                                        <circle cx="6" cy="18" r="1.5" /><circle cx="17" cy="18" r="1.5" />
                                    </svg>
                                ),
                                title: "Zero Logistics",
                                desc: "Eliminate the need for frequent cylinder deliveries and vendor coordination."
                            },
                            {
                                icon: (
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h4" />
                                    </svg>
                                ),
                                title: "Cost Control",
                                desc: "Significant reduction in procurement costs by generating oxygen from free atmospheric air."
                            },
                            {
                                icon: (
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v20M4.5 6l15 12M19.5 6l-15 12" />
                                    </svg>
                                ),
                                title: "Supply Security",
                                desc: "Continuous on-site production ensures you never run out during peak demand or emergencies."
                            },
                        ].map((f) => (
                            <div key={f.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                                {f.icon}
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: "#1a2a3a", marginBottom: 4 }}>{f.title}</div>
                                    <div style={{ fontSize: 13, color: C.grey, lineHeight: 1.6 }}>{f.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PSA TECHNOLOGY ── */}
            <section style={{ background: C.White, padding: "56px 16px" }}>
                <div style={{ maxWidth: 1360, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 50, alignItems: "start" }}>

                    {/* Left — image */}
                    <div>
                        <div style={{
                            borderRadius: 14, overflow: "hidden",
                            background: C.navyDark,
                            height: 220, display: "flex", alignItems: "center", justifyContent: "center",
                            marginBottom: 14
                        }}>
                            <img
                                src="/product_oxygen_generator.png"
                                alt="PSA Plant Visualisation"
                                style={{ width: "60%", height: "auto", objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* Right text */}
                    <div>
                        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0b477b", margin: "0 0 18px" }}>
                            Pressure Swing Adsorption (PSA)   <br /> The Technology
                        </h2>
                        <p style={{ fontSize: 16.5, color: C.grey, lineHeight: 1.75, margin: "0 0 18px", maxWidth: 700 }}>
                            PSA is a well-established gas separation technology used in medical oxygen generation worldwide. The principle is straightforward: selective adsorption of nitrogen from compressed air using a material called Zeolite, also known as molecular sieve.
                        </p>
                        <p style={{ fontSize: 16.5, color: C.grey, lineHeight: 1.75, margin: "0 0 18px", maxWidth: 700 }}>
                            The system uses two Zeolite-filled adsorption towers. At any given time, compressed air flows through one tower. The Zeolite selectively traps nitrogen molecules in its nanometre-sized pores, while allowing oxygen molecules to pass through unaffected.
                        </p>
                        <p style={{ fontSize: 16.5, color: C.grey, lineHeight: 1.75, margin: "0 0 18px", maxWidth: 700 }}>
                            When the Zeolite in the active tower becomes saturated with nitrogen, the system automatically switches the compressed air flow to the second tower, which continues the oxygen separation without interruption. Meanwhile, the saturated tower is regenerated through depressurisation and oxygen flushing — releasing the trapped nitrogen back into the atmosphere and restoring the Zeolite's adsorption capacity.
                        </p>
                        <p style={{ fontSize: 16.5, color: C.grey, lineHeight: 1.75, margin: 0, maxWidth: 700 }}>
                            This alternating cycle repeats continuously and automatically, producing a steady supply of medical-grade oxygen at the required purity level.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── KEY FEATURES & BENEFITS ── */}
            <section style={{ background: C.offWhite, padding: "56px 16px" }}>
                <div style={{ maxWidth: 1360, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0b477b", margin: "0 0 10px" }}>Key Features & Benefits</h2>
                        <p style={{ fontSize: 14.5, color: C.grey, marginBottom: 60 }}>
                            Engineered for reliability, efficiency, and seamless integration into hospital infrastructure.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {[
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16" /><path d="M7 20V8l5-4 5 4v12" /><path d="M10 20v-5h4v5" /><path d="M12 8v4" /></svg>, title: "On-Site, On-Demand Oxygen Production", desc: "Generates medical-grade oxygen directly from ambient air, reducing dependence on external cylinder or liquid oxygen supply and removing supply instability for the hospital." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9h4" /><path d="M7 13h10" /><path d="M15 9h2" /></svg>, title: "Reduced Oxygen Cost", desc: "Produces oxygen in-house at a fraction of the recurring cost. Hospitals typically see active 50% reduction in total oxygen expenditure." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M6 15l3-3 3 2 6-7" /><path d="M17 7h1v1" /></svg>, title: "Consistent Purity with Continuous Monitoring", desc: "Delivers oxygen at 93% ± 3% purity, with continuous oxygen analyser providing continuous monitoring with automated alarms if levels deviate." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3" /><path d="M12 19v3" /><path d="M4.93 4.93l2.12 2.12" /><path d="M16.95 16.95l2.12 2.12" /><path d="M2 12h3" /><path d="M19 12h3" /><path d="M4.93 19.07l2.12-2.12" /><path d="M16.95 7.05l2.12-2.12" /></svg>, title: "Fully Automatic, Unattended Operation", desc: "PLC-based controls manage the entire process — compression, drying, adsorption, PSA tower cycling, and oxygen alarms — without manual intervention." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 6v12" /><path d="M10 10h4" /><path d="M10 14h6" /></svg>, title: "Integrated, Skid-Mounted Package", desc: "Factory-assembled, pre-piped, and pre-wired onto a single skid frame. Reduces site installation time and minimises commissioning time." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 14-5" /><path d="M18 4v4h-4" /><path d="M20 12a8 8 0 0 1-14 5" /><path d="M6 20v-4h4" /></svg>, title: "Auto Changeover to Backup Supply", desc: "Automatically switches to the backup cylinder manifold if oxygen purity falls below threshold, ensuring uninterrupted clinical oxygen delivery." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M6 15l4-4 3 3 5-6" /><path d="M15 8h3v3" /></svg>, title: "Advanced Control & Integration", desc: "PLC-based control system with optional BMS connectivity for centralised hospital monitoring and standard onsite alarm display." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 4v4" /><path d="M4 12h4" /><path d="M16 12h4" /><path d="M12 16v4" /></svg>, title: "Unified Ecosystem Integration", desc: "Designed to work in harmony with the complete Technik Spirits MGPS portfolio, including air compressors and vacuum systems." },
                            { icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-4 7-10V6l-7-3-7 3v6c0 6 7 10 7 10Z" /><path d="M9 12l2 2 4-4" /></svg>, title: "Responsive After-Sales Support", desc: "24x7 technical support, preventive maintenance contracts, and spare parts availability ensure continuous reliable oxygen supply." },
                        ].map((f) => (
                            <div key={f.title} style={{
                                background: C.white,
                                border: `1px solid ${C.cardBorder}`,
                                borderRadius: 12,
                                padding: "16px 16px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                            }}>
                                <div style={{
                                    width: 28, height: 28, borderRadius: 8,
                                    // background: "#eef5fc", border: "1px solid #d0e4f5",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: C.navy, marginBottom: 12
                                }}>{f.icon}</div>
                                <div style={{ fontSize: 16, fontWeight: 700, color: C.navy600, marginBottom: 8, lineHeight: 1.35 }}>{f.title}</div>
                                <div style={{ fontSize: 14, color: C.grey, lineHeight: 1.65 }}>{f.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ENGINEERED FOR PERFORMANCE + TECHNICAL SPECS ── */}
            <section style={{ background: "#eef0f3", padding: "56px 16px" }}>
                <div style={{ maxWidth: 1360, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

                    {/* Left — Technical Specifications table */}
                    <div style={{
                        background: C.white,
                        borderRadius: 14,
                        overflow: "hidden",
                        border: `1px solid ${C.cardBorder}`,
                        minHeight: 620,
                    }}>
                        <div style={{ background: C.navy, padding: "18px 24px" }}>
                            <h3 style={{ fontSize: 17, fontWeight: 700, color: C.white, margin: 0 }}>Technical Specifications</h3>
                        </div>
                        <div>
                            {[
                                ["Technology", "Pressure Swing Adsorption (PSA)"],
                                ["Adsorbent", "High-grade Zeolite Molecular Sieve (ZMS)"],
                                ["Standard Oxygen Purity", "93% ± 3%"],
                                ["Standard Flow Rate", "50-1700 LPM (≈ 3-100 m3/h)"],
                                ["Standard Pressure Output", "4.5 bar (≈ 65 psi)"],
                                ["Filtration", "Four Stage filtration; down to 0.01 micron"],
                                ["Oxygen Receiver Capacity", "300-5000+ Litres"],
                                ["Power Supply", "415 V, 50 Hz, 3 Phase"],
                            ].map(([label, value], i) => (
                                <div key={label} style={{
                                    display: "flex",
                                    padding: "16px 24px",
                                    background: i % 2 === 0 ? C.white : "#f7f8fa",
                                }}>
                                    <div style={{ flex: "0 0 40%", fontSize: 13, fontWeight: 700, color: "#1a2a3a" }}>{label}</div>
                                    <div style={{ flex: 1, fontSize: 13, color: C.grey }}>{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Engineered for Performance */}
                    <div>
                        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#1a2a3a", margin: "0 0 20px" }}>Engineered for Performance</h2>

                        {/* Top 2 small cards */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
                            <div style={{ background: C.white, border: `1px solid ${C.cardBorder}`, borderRadius: 12, padding: "18px 18px" }}>
                                <div style={{ width: 24, height: 24, borderRadius: 6, background: "#eef5fc", border: "1px solid #d0e4f5", display: "flex", alignItems: "center", justifyContent: "center", color: C.navy, marginBottom: 8 }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 9h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1" />
                                        <path d="M3 12v3a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H9a4 4 0 0 0-2.83 1.17L3 9" />
                                        <circle cx="15" cy="11" r="0.5" fill="currentColor" />
                                        <path d="M9 5V3.5" />
                                        <path d="M3 9l-1.5-1" />
                                    </svg>
                                </div>
                                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a3a", marginBottom: 4 }}>50% Operational Savings</div>
                                <div style={{ fontSize: 12, color: C.grey, lineHeight: 1.5 }}>Eliminate oxygen cylinder rentals and transport costs entirely.</div>
                            </div>
                            <div style={{ background: C.white, border: `1px solid ${C.cardBorder}`, borderRadius: 12, padding: "18px 18px" }}>
                                <div style={{ width: 24, height: 24, borderRadius: 6, background: "#eef5fc", border: "1px solid #d0e4f5", display: "flex", alignItems: "center", justifyContent: "center", color: C.navy, marginBottom: 8 }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
                                        <path d="M21 14a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3z" />
                                        <path d="M3 14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H3z" />
                                        <path d="M13 17.5a3.5 3.5 0 0 1-3.5 3.5" />
                                    </svg>
                                </div>
                                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2a3a", marginBottom: 4 }}>24/7 Global Support</div>
                                <div style={{ fontSize: 12, color: C.grey, lineHeight: 1.5 }}>Expert engineering response for any technical requirement worldwide.</div>
                            </div>
                        </div>

                        {/* Complete Scope of Supply — navy box */}
                        <div style={{ background: C.navy, borderRadius: 14, padding: "24px 26px", marginBottom: 16 }}>
                            <h3 style={{ fontSize: 18, fontWeight: 600, color: C.white, margin: "0 0 16px" }}>Complete Scope of Supply</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
                                {/* Left column */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    {[
                                        "Air compressor",
                                        "Air receiver(s)",
                                        "PSA oxygen generator",
                                        "Oxygen filtration",
                                        "Pressure regulator for MGPS delivery",
                                        "All required accessories and ancillaries",
                                    ].map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                                                <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
                                            </svg>
                                            <span style={{ fontSize: 12.5, color: "#dceaf7", lineHeight: 1.5 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Right column */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    {[
                                        "Compressed air dryer(s)",
                                        "Four-stage compressed air filtration assembly",
                                        "Oxygen receiver",
                                        "Oxygen analyser with continuous purity monitoring",
                                        "PLC-based, BMS-ready, control system",
                                    ].map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                                                <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
                                            </svg>
                                            <span style={{ fontSize: 12.5, color: "#dceaf7", lineHeight: 1.5 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Optional Accessories — light gray box */}
                        <div style={{ background: "#e4e7ec", borderRadius: 14, padding: "22px 26px" }}>
                            <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1a2a3a", margin: "0 0 14px" }}>Optional Accessories</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {[
                                    "IIOT-connected digital medical oxygen gas flow meter",
                                    "Two Stage PSA oxygen generator system for < 99% oxygen purity",
                                    "High pressure booster compressor for cylinder filling",
                                    "Duplex air compressor, dryer and filter set",
                                ].map((item) => (
                                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                                            <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
                                        </svg>
                                        <span style={{ fontSize: 12.5, color: "#3d4a5c", lineHeight: 1.5 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section style={{ background: C.white, padding: "56px 16px" }}>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    <h2 style={{ fontSize: 24, fontWeight: 700, color: "0b477b", textAlign: "center", margin: "0 0 32px" }}>
                        Frequently Asked Questions
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {[
                            { q: "What is an on-site Medical Oxygen Generator?", a: "An on-site Medical Oxygen Generator is a PSA-based system that produces medical-grade oxygen directly at the hospital from ambient air, eliminating dependence on external cylinder or liquid oxygen suppliers." },
                            { q: "How does it ensure clinical safety?", a: "The system features continuous oxygen purity monitoring, automated alarms for any deviation, and an automatic changeover to a backup cylinder manifold if purity drops below the safe threshold." },
                            { q: "Is the oxygen USP-compliant?", a: "Yes, the system is engineered to consistently deliver oxygen at 93% ± 3% purity, meeting USP and pharmacopoeia requirements for medical oxygen." },
                            { q: "What are the space requirements?", a: "The system is supplied as a compact, skid-mounted package designed for efficient plant room space utilisation. Exact footprint depends on the flow rate and capacity selected." },
                        ].map((item, i) => (
                            <details key={i} style={{
                                background: C.offWhite,
                                borderRadius: 10,
                                border: `1px solid ${C.cardBorder}`,
                                padding: "16px 20px",
                            }}>
                                <summary style={{
                                    fontSize: 14, fontWeight: 600, color: C.dark,
                                    cursor: "pointer", listStyle: "none",
                                    display: "flex", alignItems: "center", justifyContent: "space-between"
                                }}>
                                    {item.q}
                                    <span style={{ color: C.grey, fontSize: 14 }}>⌄</span>
                                </summary>
                                <p style={{ fontSize: 13, color: C.grey, lineHeight: 1.7, margin: "12px 0 0" }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="bg-white px-6 py-14">
                <div className="max-w-[1360px] mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-[#0b477b] mb-5 max-w-[800px] mx-auto">Ready to Engineer Your Future?</h2>
                    <p className="text-md text-[#0b477b] mb-8 max-w-[450px] mx-auto">
                        Consult with our engineering team to design your medical gas infrastructure.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/contact" className="inline-block bg-[#0b2d4e] text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#0a3d6a] transition-colors">
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