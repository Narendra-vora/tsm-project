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
                background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyDark} 100%)`,
                padding: "48px 16px 0",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", paddingBottom: 48 }}>

                    {/* Left */}
                    <div>
                        <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border border-[#e0ecf8]">
                            ISO 13485 & ISO 9001 CERTIFIED
                        </div>

                        <h1 style={{ fontSize: 36, fontWeight: 600, color: C.white, margin: "0 0 20px", lineHeight: 1.25 }}>
                            Medical Oxygen Generator:<br />
                            <span style={{ color: "#90caf9" }}>On-Site Life Support Engineering.</span>
                        </h1>

                        <p style={{ fontSize: 14, color: "#a0c0db", lineHeight: 1.85, margin: "0 0 20px", maxWidth: 435 }}>
                            Engineered for clinical safety and absolute reliability. Our PSA oxygen <br /> systems deliver high-purity medical-grade oxygen directly to your <br />hospital pipeline, eliminating logistical risks and oxygen shortages.
                        </p>

                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <a href="#guides" style={{
                                display: "flex", alignItems: "center", gap: 8,
                                background: [C.navy, C.navyDark], color: C.white,
                                padding: "12px 24px", borderRadius: 30,
                                fontSize: 12, fontWeight: 400, textDecoration: "none",
                                boxShadow: "0 4px 14px rgba(11, 71, 123, 0.25)",
                                transition: "all 0.2s"
                            }}>
                                Talk to Our Engineers 📖
                            </a>
                            <a href="/contact-us" style={{
                                display: "flex", alignItems: "center", gap: 8,
                                background: C.white, color: C.navy,
                                padding: "12px 24px", borderRadius: 30,
                                fontSize: 12, fontWeight: 400, textDecoration: "none",
                                border: `1px solid ${C.navy}`,
                                transition: "all 0.2s"
                            }}>
                                Download Brochure (PDF) ⬇
                            </a>
                        </div>
                    </div>

                    {/* Right — Product image */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{
                            width: "100%", maxWidth: 380, height: 280,
                            borderRadius: 16, overflow: "hidden",
                            position: "relative"
                        }}>
                            <img
                                src="/product_oxygen_generator.png"
                                alt="Medical Oxygen Generator System"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW THE SYSTEM WORKS ── */}
            <section style={{ background: C.offWhite, padding: "56px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0b477b", margin: "0 0 10px" }}>How the System Works</h2>
                        <p style={{ fontSize: 14, color: C.grey400, margin: 0 }}>
                            A medical oxygen generator operates as a centralised on-site oxygen generation system <br /> connected to the hospital MGPS network.
                        </p>
                    </div>

                    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, paddingTop: 12 }}>
                        <div style={{ position: "absolute", left: 0, right: 0, top: 18, height: 1, background: C.cardBorder }} />
                        {[
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v8" /><path d="M8.5 7.5 12 11l3.5-3.5" /><path d="M5 15h14" /><path d="M8 19h8" /></svg>, step: "01", title: "Air Compression", desc: "Atmospheric air is drawn and compressed to required pressure levels." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="7" height="16" rx="2" /><path d="M13 6h6" /><path d="M13 12h8" /><path d="M13 18h6" /></svg>, step: "02", title: "Drying", desc: "Refrigerated dryers remove moisture to ensure clean, dry air." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 7h12l-2 4H8z" /><path d="M10 11v6" /><path d="M14 11v6" /><circle cx="12" cy="18" r="2" /></svg>, step: "03", title: "Adsorption (DMD)", desc: "Zeolite molecular sieve (ZMS) adsorbs nitrogen, leaving concentrated medical oxygen." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12a8 8 0 1 1-2.34-5.66" /><path d="M20 4v5h-5" /></svg>, step: "04", title: "Regeneration", desc: "The ZMS bed regenerates by releasing adsorbed nitrogen into the atmosphere." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5.5" rx="6.5" ry="2.5" /><path d="M5.5 5.5v8c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-8" /><path d="M5.5 13.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" /></svg>, step: "05", title: "Surge Tank", desc: "Purified oxygen is stored in a surge tank to maintain stable downstream flow." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M7 14h3V9H7z" /><path d="M12 16h3V7h-3z" /><path d="M17 12h1" /></svg>, step: "06", title: "Monitoring", desc: "Continuous purity and pressure monitors ensure compliance throughout the supply." },
                        ].map((s) => (
                            <div key={s.step} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div style={{
                                    width: 56, height: 42, borderRadius: 6,
                                    background: C.navy,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: C.white,
                                    boxShadow: "0 6px 18px rgba(11,71,123,0.22)",
                                    position: "relative",
                                    zIndex: 1,
                                    marginBottom: -8,
                                    transform: "translateY(-6px)"
                                }}>
                                    {s.icon}
                                </div>
                                <div style={{
                                    width: "100%",
                                    marginTop: -8,
                                    background: C.white,
                                    borderRadius: 10,
                                    padding: "24px 12px 18px",
                                    textAlign: "center",
                                    border: `1px solid ${C.cardBorder}`,
                                    boxShadow: "0 1px 0 rgba(15,23,42,0.02)",
                                    minHeight: 116
                                }}>
                                    <div style={{ fontSize: 10, fontWeight: 700, color: C.dark, marginBottom: 6 }}>{s.step}</div>
                                    <div style={{ fontSize: 12.5, fontWeight: 700, color: C.navy, marginBottom: 6, lineHeight: 1.35 }}>{s.title}</div>
                                    <div style={{ fontSize: 11, color: C.grey, lineHeight: 1.5 }}>{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY ON-SITE OXYGEN GENERATION ── */}
            <section style={{ background: C.white, padding: "56px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "start" }}>

                    {/* Left text */}
                    <div>
                        <h2 style={{ fontSize: 24, fontWeight: 800, color: C.navy, margin: "0 0 18px" }}>Why On-Site Oxygen Generation?</h2>
                        <p style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.85, margin: "0 0 16px" }}>
                            Hospital oxygen supply has traditionally depended on cylinders or liquid oxygen — both methods involve transportation costs, refilling logistics, storage management, and emergency stock-out risk.
                        </p>
                        <p style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.85, margin: 0 }}>
                            On-site oxygen generation changes the operating model: instead of depending on a network of external suppliers, the hospital generates oxygen on demand, directly into the MGPS pipeline network. This means complete supply independence and immediate response to growth in bed capacity.
                        </p>
                    </div>

                    {/* Right — 3 features */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        {[
                            { icon: "📈", title: "Zero Logistics", desc: "Eliminates the need for frequent cylinder refill and exchange schedules." },
                            { icon: "💰", title: "Cost Control", desc: "Significant reduction in procurement spend by generating oxygen on-site instead of repurchasing." },
                            { icon: "🛡️", title: "Supply Security", desc: "Continuous on-site production ensures you never run out during demand surges." },
                        ].map((f) => (
                            <div key={f.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: 8,
                                    background: "#eef5fc", border: `1px solid #d0e4f5`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 16, flexShrink: 0
                                }}>{f.icon}</div>
                                <div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 4 }}>{f.title}</div>
                                    <div style={{ fontSize: 12.5, color: C.grey, lineHeight: 1.6 }}>{f.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PSA TECHNOLOGY ── */}
            <section style={{ background: C.offWhite, padding: "56px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 50, alignItems: "start" }}>

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
                        {/* <div style={{ textAlign: "center", fontSize: 11.5, color: C.grey, fontStyle: "italic" }}>
                            PSA Plant Tower Visualisation
                        </div> */}
                    </div>

                    {/* Right text */}
                    <div>
                        <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0b477b", margin: "0 0 18px" }}>
                            Pressure Swing Adsorption (PSA) —<br />The Technology
                        </h2>
                        <p style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.75, margin: "0 0 16px" }}>
                            PSA is a well-established gas separation technology used at medical oxygen generation<br /> worldwide. The principle of physical adsorption of nitrogen from compressed atmospheric air is<br /> using a material called Zeolite Molecular Sieve.
                        </p>
                        <p style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.75, margin: "0 0 16px" }}>
                            The system uses two Zeolite-filled adsorption towers. At any given time.<br /> compressed air flows through one tower. The Zeolite selectively traps<br />nitrogen molecules in its nanometre-sized pores, while allowing oxygen<br /> molecules to pass through unaffected.                        </p>
                        <p style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.75, margin: "0 0 16px" }}>
                            When the Zeolite in the active tower becomes saturated with nitrogen, the<br /> system automatically switches the compressed air flow to the second <br />tower, which continues the oxygen separation without interruption.<br /> Meanwhile, the saturated tower is regenerated through depressurisation<br /> and oxygen flushing releasing the trapped nitrogen back into the<br /> atmosphere and restoring the Zeolite's adsorption capacity.                        </p>
                        <p style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.75, margin: 0 }}>
                            This alternating cycle repeats continuously and automatically, producing a steady supply of medical-grade oxygen at the required purity level.                        </p>
                    </div>
                </div>
            </section>

            {/* ── KEY FEATURES & BENEFITS ── */}
            <section style={{ background: C.white, padding: "56px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0b477b", margin: "0 0 10px" }}>Key Features & Benefits</h2>
                        <p style={{ fontSize: 13.5, color: C.grey, margin: 0 }}>
                            Engineered for reliability, efficiency, and seamless integration into hospital infrastructure.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                        {[
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16" /><path d="M7 20V8l5-4 5 4v12" /><path d="M10 20v-5h4v5" /><path d="M12 8v4" /></svg>, title: "On-Site, On-Demand Oxygen Production", desc: "Generates medical-grade oxygen directly from ambient air, reducing dependence on external cylinder or liquid oxygen supply and removing supply instability for the hospital." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9h4" /><path d="M7 13h10" /><path d="M15 9h2" /></svg>, title: "Reduced Oxygen Cost", desc: "Produces oxygen in-house at a fraction of the recurring cost. Hospitals typically see active 50% reduction in total oxygen expenditure." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M6 15l3-3 3 2 6-7" /><path d="M17 7h1v1" /></svg>, title: "Consistent Purity with Continuous Monitoring", desc: "Delivers oxygen at 93% ± 3% purity, with continuous oxygen analyser providing continuous monitoring with automated alarms if levels deviate." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3" /><path d="M12 19v3" /><path d="M4.93 4.93l2.12 2.12" /><path d="M16.95 16.95l2.12 2.12" /><path d="M2 12h3" /><path d="M19 12h3" /><path d="M4.93 19.07l2.12-2.12" /><path d="M16.95 7.05l2.12-2.12" /></svg>, title: "Fully Automatic, Unattended Operation", desc: "PLC-based controls manage the entire process — compression, drying, adsorption, PSA tower cycling, and oxygen alarms — without manual intervention." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 6v12" /><path d="M10 10h4" /><path d="M10 14h6" /></svg>, title: "Integrated, Skid-Mounted Package", desc: "Factory-assembled, pre-piped, and pre-wired onto a single skid frame. Reduces site installation time and minimises commissioning time." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 14-5" /><path d="M18 4v4h-4" /><path d="M20 12a8 8 0 0 1-14 5" /><path d="M6 20v-4h4" /></svg>, title: "Auto Changeover to Backup Supply", desc: "Automatically switches to the backup cylinder manifold if oxygen purity falls below threshold, ensuring uninterrupted clinical oxygen delivery." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M6 15l4-4 3 3 5-6" /><path d="M15 8h3v3" /></svg>, title: "Advanced Control & Integration", desc: "PLC-based control system with optional BMS connectivity for centralised hospital monitoring and standard onsite alarm display." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 4v4" /><path d="M4 12h4" /><path d="M16 12h4" /><path d="M12 16v4" /></svg>, title: "Unified Ecosystem Integration", desc: "Designed to work in harmony with the complete Technik Spirits MGPS portfolio, including air compressors and vacuum systems." },
                            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-4 7-10V6l-7-3-7 3v6c0 6 7 10 7 10Z" /><path d="M9 12l2 2 4-4" /></svg>, title: "Responsive After-Sales Support", desc: "24x7 technical support, preventive maintenance contracts, and spare parts availability ensure continuous reliable oxygen supply." },
                        ].map((f) => (
                            <div key={f.title} style={{
                                background: C.white,
                                border: `1px solid ${C.cardBorder}`,
                                borderRadius: 12,
                                padding: "16px 16px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                            }}>
                                <div style={{
                                    width: 34, height: 34, borderRadius: 8,
                                    background: "#eef5fc", border: "1px solid #d0e4f5",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: C.navy, marginBottom: 12
                                }}>{f.icon}</div>
                                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 8, lineHeight: 1.35 }}>{f.title}</div>
                                <div style={{ fontSize: 12, color: C.grey, lineHeight: 1.65 }}>{f.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ENGINEERED FOR PERFORMANCE + TECHNICAL SPECS ── */}
            <section style={{ background: C.offWhite, padding: "56px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <h2 style={{ fontSize: 24, fontWeight: 800, color: C.navy, margin: "0 0 28px" }}>Engineered for Performance</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 24, alignItems: "start" }}>

                        {/* Left column — Technical Specifications table */}
                        <div style={{ background: C.white, borderRadius: 14, overflow: "hidden", border: `1px solid ${C.cardBorder}`, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                            <div style={{ background: C.navy, padding: "16px 20px" }}>
                                <div style={{ fontSize: 14, fontWeight: 700, color: C.white }}>Technical Specifications</div>
                            </div>
                            <div>
                                {[
                                    { label: "Technology", value: "Pressure Swing Adsorption (PSA)" },
                                    { label: "Adsorbent", value: "High-grade Zeolite Molecular Sieve (ZMS)" },
                                    { label: "Standard Oxygen Purity", value: "93% ± 3%" },
                                    { label: "Standard Flow Rate", value: "50–1700 LPM (× 3-100 m³/h)" },
                                    { label: "Standard Pressure Output", value: "4.5 bar (± 0.5 psi)" },
                                    { label: "Filtration", value: "Four Stage Filtration, down to 0.01 micron" },
                                    { label: "Oxygen Receiver Capacity", value: "300–5000+ Litres" },
                                    { label: "Power Supply", value: "415 V, 50 Hz, 3 Phase" },
                                ].map((row, i) => (
                                    <div key={row.label} style={{
                                        display: "flex", justifyContent: "space-between", gap: 10,
                                        padding: "16px 20px",
                                        background: i % 2 === 0 ? C.white : C.offWhite,
                                        borderBottom: i < 7 ? `1px solid ${C.cardBorder}` : "none"
                                    }}>
                                        <span style={{ fontSize: 12, color: C.grey, fontWeight: 600 }}>{row.label}</span>
                                        <span style={{ fontSize: 12, color: C.navy, fontWeight: 700, textAlign: "right" }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                            {/* Stats row */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                                <div style={{ background: C.white, borderRadius: 12, padding: "16px 18px", border: `1px solid ${C.cardBorder}` }}>
                                    <div style={{ width: 24, height: 24, borderRadius: 6, background: "#eef5fc", border: "1px solid #d0e4f5", display: "flex", alignItems: "center", justifyContent: "center", color: C.navy, marginBottom: 8 }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 20h16" />
                                            <path d="M7 20V8l5-4 5 4v12" />
                                            <path d="M10 20v-5h4v5" />
                                        </svg>
                                    </div>
                                    <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, lineHeight: 1.2 }}>50% Operational Savings</div>
                                    <div style={{ fontSize: 12, color: C.grey, marginTop: 4, lineHeight: 1.45 }}>Eliminates ongoing cylinder rentals and transport costs entirely.</div>
                                </div>
                                <div style={{ background: C.white, borderRadius: 12, padding: "16px 18px", border: `1px solid ${C.cardBorder}` }}>
                                    <div style={{ width: 24, height: 24, borderRadius: 6, background: "#eef5fc", border: "1px solid #d0e4f5", display: "flex", alignItems: "center", justifyContent: "center", color: C.navy, marginBottom: 8 }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 12a8 8 0 0 1 16 0" />
                                            <path d="M6 12v4" />
                                            <path d="M18 12v4" />
                                            <path d="M8 20h8" />
                                            <path d="M12 4c-2.2 0-4 1.8-4 4v2" />
                                        </svg>
                                    </div>
                                    <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, lineHeight: 1.2 }}>24/7 Global Support</div>
                                    <div style={{ fontSize: 12, color: C.grey, marginTop: 4, lineHeight: 1.45 }}>Expert engineering teams for round-the-clock technical support worldwide.</div>
                                </div>
                            </div>

                            {/* Complete Scope of Supply — navy box */}
                            <div style={{ background: C.navy, borderRadius: 14, padding: "26px 24px" }}>
                                <div style={{ fontSize: 16, fontWeight: 700, color: C.white, marginBottom: 16 }}>Complete Scope of Supply</div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                    {[
                                        "Air compressor unit",
                                        "Compressed air dryer(s)",
                                        "Air receiver tank",
                                        "Two-stage particulate / oil vapour filtration assembly",
                                        "PSA oxygen generator",
                                        "Oxygen receiver tank",
                                        "Oxygen analyser with continuous purity monitoring",
                                        "PLC control panel with HMI display",
                                        "All required interconnecting piping and wiring",
                                    ].map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                            <span style={{ width: 14, height: 14, borderRadius: 999, border: "1.5px solid #90caf9", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#90caf9", fontSize: 10, marginTop: 2, flexShrink: 0, lineHeight: 1 }}>✓</span>
                                            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Optional Accessories */}
                            <div style={{ background: C.white, borderRadius: 14, padding: "24px 24px", border: `1px solid ${C.cardBorder}` }}>
                                <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 14 }}>Optional Accessories</div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    {[
                                        "BOT oversized backup manifold reserve gas flow rates",
                                        "Two-stage PSA oxygen generators system for >99% oxygen purity",
                                        "High-pressure booster compressors for cylinder filling",
                                        "Explosion-proof options for harsh / explosive after sale",
                                    ].map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                            <span style={{ color: C.accent, fontSize: 13, marginTop: 1, flexShrink: 0 }}>○</span>
                                            <span style={{ fontSize: 12, color: C.grey, lineHeight: 1.5 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
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
            <section style={{ padding: "0 16px 56px" }}>
                <div style={{
                    maxWidth: 1100, margin: "0 auto",
                    background: C.navy,
                    borderRadius: 16,
                    padding: "32px 36px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    flexWrap: "wrap", gap: 20
                }}>
                    <div>
                        <div style={{ fontSize: 19, fontWeight: 800, color: C.white, marginBottom: 6 }}>Ready to Engineer Your Future?</div>
                        <div style={{ fontSize: 13, color: "#90caf9" }}>Connect with our engineering team to design your oxygen plant with confidence.</div>
                    </div>
                    <div style={{ display: "flex", gap: 12 }}>
                        <Link href="/contact" style={{
                            background: "#1565c0", color: C.white,
                            padding: "12px 24px", borderRadius: 8,
                            fontWeight: 700, fontSize: 13.5, textDecoration: "none"
                        }}>Schedule a Consultation</Link>
                        <Link href="/contact" style={{
                            background: C.white, color: C.navy,
                            padding: "12px 24px", borderRadius: 8,
                            fontWeight: 700, fontSize: 13.5, textDecoration: "none"
                        }}>Request a Quote</Link>
                    </div>
                </div>
            </section>

        </main>
    );
}