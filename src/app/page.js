import React from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Wind, ArrowDownUp, Syringe, ShieldCheck, Heart, Settings } from "lucide-react";
// ─── Color tokens ───────────────────────────────────────────
const C = {
  navy: "#0a2d5e",
  navyMid: "#1a3a5c",
  blue: "#1565c0",
  blueBright: "#1976d2",
  accent: "#e65c00",
  white: "#ffffff",
  offWhite: "#f4f7fb",
  lightGrey: "#eef1f7",
  grey: "#6b7a99",
  dark: "#111827",
  green: "#2e7d32",
  cardBorder: "#dde3f0",
};

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: C.white, color: C.dark }}>

      {/* Hero — already exists */}
      <Hero />

      {/* ── 1. TRADITIONAL vs PURPOSE BUILT ── */}
      <section style={{ background: C.offWhite, padding: "48px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

          {/* LEFT SIDE */}
          <div style={{ padding: "0 40px 0 0" }}>
            <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-[#e0ecf8]">
              WHY HOSPITAL NEED BETTER MGPS SOLUTIONS
            </div>
            <h2 style={{ fontSize: 42, fontWeight: 700, color: "#0b477b", lineHeight: 1.3, margin: "0 0 16px" }}>
              Traditional MGPS Systems<br /> Are Costing <br />Hospitals More Than <br />They Should
            </h2>
            <div style={{
              width: 68, height: 3,
              background: "#0b477b",
              borderRadius: 2,
              margin: "10px 0 12px"
            }} />
            <p style={{ fontSize: 19, color: "#494a4bff", lineHeight: 1.8, margin: 0 }}>
              For decades, hospitals have accepted medical gas equipment<br /> that is noisy, bulky, and energy-intensive. It does not have to<br /> be this way.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div style={{
            padding: "44px 40px 44px 40px",
            background: "#0b477b",
            borderRadius: 20,
          }}>
            <h2 style={{ fontSize: 40, fontWeight: 600, color: C.white, lineHeight: 1.3, margin: "0 0 14px" }}>
              Purpose-Built for Hospital<br /> Operations
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: "0 0 28px" }}>
              Every component and architecture is selected with a deep<br /> understanding of clinical applications and how<br /> hospital plant rooms actually operate.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 24px" }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  ),
                  title: "Energy Efficient",
                  desc: "Lower electricity consumption over years of operation"
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  ),
                  title: "Quiet Operation",
                  desc: "Engineered to run quietly with minimal vibration"
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  title: "Modular & Scalable",
                  desc: "Flexible architecture designed to grow with your hospital"
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
                    </svg>
                  ),
                  title: "Compact Footprint",
                  desc: "Modular designs that free up valuable plant room space"
                },
              ].map((f) => (
                <div key={f.title} style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 14,
                }}>
                  {/* Icon circle */}
                  <div style={{
                    width: 42, height: 42,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {f.icon}
                  </div>

                  {/* Text */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.white, lineHeight: 1.3, marginBottom: 5 }}>
                      {f.title}
                    </div>
                    <div style={{
                      width: 32, height: 2,
                      background: "rgba(255,255,255,0.45)",
                      borderRadius: 4,
                      marginBottom: 6,
                    }} />
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.70)", lineHeight: 1.55 }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. OUR MEDICAL GAS SYSTEMS ── */}
      <section style={{ background: C.white, padding: "60px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#0b477b", letterSpacing: 1, marginBottom: 6 }}>Our Medical Gas Systems</div>
              <h2 style={{ fontSize: 19, fontWeight: 500, color: "#565758ff", margin: 0 }}>Smart solutions for systems of every size and speciality</h2>
            </div>
            <Link href="/products" style={{ fontSize: 13, color: C.blue, fontWeight: 600, textDecoration: "none" }}>
              View all products →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              {
                name: "Medical Air\nCompressor System",
                image: "/product-Air.png",
                topIcon: Wind,
                features: [
                  { label: "Patent Granted", icon: ShieldCheck },
                  { label: "100% Oil-Free", icon: Heart },
                  { label: "Modular & Scalable", icon: Settings },
                ],
                slug: "medical-air-compressor"
              },
              {
                name: "Medical Vacuum\nPum System",
                image: "/product_vacuum_pump.png",
                topIcon: ArrowDownUp,
                features: [
                  { label: "Silent & Vibration-Free", icon: ShieldCheck },
                  { label: "Skid-Mounted Package", icon: Heart },
                  { label: "Fully Automatic", icon: Settings },
                ],
                slug: "medical-vacuum-pump"
              },
              {
                name: "Anaesthetic Gas\nScavenging System",
                image: "/product-agss.png",
                topIcon: Syringe,
                features: [
                  { label: "OT Safety", icon: ShieldCheck },
                  { label: "Active Scavenging", icon: Heart },
                  { label: "Workstation-Compatible", icon: Settings },
                ],
                slug: "agss"
              },
            ].map((p) => (
              <div key={p.name} style={{

                height: "100%",
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${C.cardBorder}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                background: "#0b477b",
                display: "flex",
                flexDirection: "column"
              }}>
                {/* Top white curved section */}
                <div style={{
                  background: C.white,
                  padding: "28px 28px 36px",
                  borderRadius: "0 0 60px 0",
                }}>
                  {/* Icon */}
                  <div style={{
                    width: 46, height: 46,
                    background: "#eef5fc",
                    border: "1px solid #d0e4f5",
                    borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16
                  }}>
                    <p.topIcon size={24} color="#0b477b" strokeWidth={2} />
                  </div>
                  {/* Title */}
                  <h3 style={{
                    fontSize: 32,
                    fontWeight: 750,
                    color: "#0b477b",
                    margin: 0,
                    lineHeight: 1.2,
                    whiteSpace: "pre-line"
                  }}>{p.name}</h3>
                </div>

                {/* Middle navy — features left, image right */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "24px 22px",
                  flex: 1
                }}>
                  {/* Features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                    {p.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 38, height: 38,
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.2)",
                          background: C.white,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0
                        }}>
                          <f.icon size={22} color="#0b477b" strokeWidth={2} />
                        </div>
                        <span style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: C.white,
                          lineHeight: 1.3,
                          maxWidth: 100,
                          display: "inline-block"
                        }}>{f.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Product Image */}
                  <div style={{
                    width: 160, height: 210,
                    flexShrink: 0,
                    position: "relative"
                  }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center"
                      }}
                    />
                  </div>
                </div>

                {/* Bottom — Learn More button */}
                <div style={{ padding: "0 22px 22px" }}>
                  <Link href={`/products/${p.slug}`} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderRadius: 14,
                    padding: "16px",
                    fontSize: 15,
                    fontWeight: 400,
                    color: C.white,
                    textDecoration: "none",
                    boxSizing: "border-box"
                  }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Also in our Portfolio strip */}
          <div style={{
            maxWidth: 1300,
            margin: "38px auto 0",
            marginTop: 32,
            border: `1px solid ${C.cardBorder}`,
            borderRadius: 12,
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
            flex: 1,
            justifyContent: "center",
            background: C.white,
            boxShadow: "0 1px 6px rgba(0,0,0,0.05)"
          }}>
            {/* Left — Icon + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
              <div style={{
                width: 52, height: 52,
                background: "#0b477b",
                borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: C.grey600, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", }}>ALSO IN OUR</div>
                <div style={{ fontSize: 20, fontWeight: 500, color: C.navy, lineHeight: 1 }}>PORTFOLIO</div>
                <div style={{ width: 28, height: 3, background: "#0b477b", borderRadius: 2, marginTop: 4 }} />
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 40, background: C.cardBorder, flexShrink: 0 }} />

            {/* Right — Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
              {[
                "Reciprocating Vacuum Pump",
                "Oxygen Generator (PSA)",
                "MGPS Design Services",
              ].map((item) => (
                <Link key={item} href="/products" style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 13.5, fontWeight: 600,
                  color: C.navy, textDecoration: "none"
                }}>
                  <span style={{ color: C.blue, fontWeight: 700 }}>→</span> {item}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. WHY HOSPITALS CHOOSE US ── */}

      <section style={{ background: C.offWhite, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: C.black, margin: "0 0 10px" }}>
              Built for the way <em style={{ color: "#0b477b", fontStyle: "italic" }}>hospitals actually run</em>
            </h2>
            <p style={{ fontSize: 18, color: C.navy, margin: 0 }}>
              Lower noise, smaller footprint, and higher energy efficiency -
              <br /> engineered for 24/7 reliability
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                ),
                title: "Low Noise",
                desc: "Significantly quieter than MGPS plant rooms with traditional oil-free medical air compressors."
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                title: "Minimal Vibration",
                desc: "Operates with low vibration — further reducing noise and eliminating the need for dedicated foundations."
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
                  </svg>
                ),
                title: "Compact Footprint",
                desc: "Smaller, space-efficient designs that free up valuable space, making hospital planning easier."
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                title: "Energy Efficient",
                desc: "Lower electricity consumption that translates to substantial savings across the lifetime of the equipment."
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
                title: "Modular & Scalable",
                desc: "Modular architecture allows staged expansion and flexible capacity planning as hospitals grow."
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="7" width="10" height="10" rx="1" />
                    <path d="M9 7V4M12 7V4M15 7V4" />
                    <path d="M9 20v-3M12 20v-3M15 20v-3" />
                    <path d="M20 9h-3M20 12h-3M20 15h-3" />
                    <path d="M7 9H4M7 12H4M7 15H4" />
                  </svg>
                ),
                title: "BMS-Ready Controls",
                desc: "Fully automatic controls for easy operation and monitoring, with BMS compatibility as a standard."
              },
            ].map((f) => (
              <div key={f.title} style={{
                background: "#0b477b",
                borderRadius: 10,
                padding: "24px 20px",
                border: "1px solid rgba(255,255,255,0.12)",
              }}>
                {/* Icon in circle */}
                <div style={{
                  width: 48, height: 48,
                  background: "white",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.55)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                }}>
                  {f.icon}
                </div>

                <div style={{ fontSize: 16, fontWeight: 600, color: "#F3F3FA", marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.80)", lineHeight: 1.8 }}>{f.desc}</div>

                {/* Divider */}
                <div style={{
                  width: 42, height: 3,
                  background: "white",
                  borderRadius: 2,
                  margin: "14px 0 0 0"
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHO WE WORK WITH ── */}
      <section style={{ background: C.white, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0b477b", margin: "0 0 36px", textAlign: "center" }}>Who we work with</h2>
          <p style={{ fontSize: 18, fontWeight: 400, color: "#0b477b", margin: "0 0 48px", textAlign: "center" }}>
            From hospital promoters to plant room operators, every Technik Spirits system is designed<br /> around the needs of the people who plan, specify, operate, and maintain hospital <br />infrastructure.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              {
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E05A36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
                title: "Hospital Owners & Promoters",
                desc: "Systems that reduce long-term operating costs and protect your infrastructure investment over its full lifecycle."
              },
              {
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E05A36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ),
                title: "Hospital Architects & Planners",
                desc: "Design support and capacity calculations from concept through to detailed specifications for every specialty."
              },
              {
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E05A36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
                  </svg>
                ),
                title: "Biomedical Engineers",
                desc: "Easy serviceability and PLC-controlled automatic operation with built-in alarm management and dependable support."
              },
              {
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E05A36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "MGPS Contractors & Dealers",
                desc: "Patented systems that add clear differentiation to your proposals, backed by dependable technical support."
              },
            ].map((w) => (
              <div key={w.title}>
                {/* Orange icon with rounded background */}
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  background: "#fdeee9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16
                }}>
                  {w.icon}
                </div>

                {/* Title */}
                <div style={{
                  fontSize: 17.5,
                  fontWeight: 600,
                  color: "#0b477b",
                  marginBottom: 14,
                  lineHeight: 1.4
                }}>{w.title}</div>

                {/* Desc */}
                <div style={{
                  fontSize: 15,
                  color: C.grey,
                  lineHeight: 1.7
                }}>{w.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. CERTIFICATIONS ── */}

      <section style={{ background: C.offWhite, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0b477b", margin: "0 0 55px" }}>Certifications & Recognized Standards</h2>
          {/* <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0b477b", margin: "0 0 48px" }}>Recognized Standards</h2> */}

          {/* 4 Circle Icons */}
          <div style={{ display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap", marginBottom: 58 }}>
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
                title: "CDSCO REGISTERED"
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                ),
                title: "ISO 13485"
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M9 11l3-3 3 3" />
                    <path d="M12 8v4" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                ),
                title: "PATENT GRANTED"
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <polyline points="9 21 9 9" />
                    <path d="M13 13l2 2 4-4" />
                  </svg>
                ),
                title: "Exclusive MGPS Focus"
              },
            ].map((cert) => (
              <div key={cert.title} style={{ textAlign: "center" }}>
                {/* White circle with blue icon */}
                <div style={{
                  width: 70, height: 70,
                  borderRadius: "50%",
                  background: "#ffffff",
                  boxShadow: "0 4px 20px rgba(11,71,123,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px"
                }}>{cert.icon}</div>
                <div style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#0b477b",
                  letterSpacing: 0.5,

                }}>{cert.title}</div>
              </div>
            ))}
          </div>

          {/* Dark Navy Bar */}
          <div style={{
            background: "#0b477b",
            borderRadius: 14,
            padding: "28px 40px",
          }}>
            {/* Top label */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                background: "#90caf9",
                color: "#0b477b",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                border: "1px solid rgba(144,202,249,0.3)",
                borderRadius: 20,
                padding: "6px 17px"
              }}>
                DESIGNED WITH REFERENCE TO RECOGNISED STANDARDS
              </span>
            </div>

            {/* 3 Standards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr 1px 1fr", alignItems: "center", gap: 0 }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ),
                  title: "HTM 02-01",
                  sub: "UK standard for Medical gas pipeline system in healthcare facilities "
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                  title: "ISO 7396",
                  sub: "International standard on Medical gas pipeline systems in healthcare facilities"
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                  title: "ISO 80601",
                  sub: "Anesthetic workstation and related applications"
                },
              ].map((std, i) => (
                <React.Fragment key={std.title}>
                  <div style={{
                    display: "flex",
                    alignItems: "center", gap: 16, justifyContent: "center", padding: "0 20px"
                  }}>
                    <div style={{
                      width: 44, height: 50,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0
                    }}>{std.icon}</div>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 17, fontWeight: 500, color: C.white }}>{std.title}</div>
                      <div style={{ fontSize: 14, fontWeight: 300, color: C.white, letterSpacing: 0.8, marginTop: 2, marginBottom: 24 }}>{std.sub}</div>
                    </div>
                  </div>
                  {i < 2 && (
                    <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.15)" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section style={{ background: C.white, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0b477b", margin: 0, letterSpacing: 1 }}>WHAT OUR CLIENTS SAY</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                stars: 5,
                text: "We embarked on a new hospital project. Siddharth had the total confidence of the Board — and the order was issued without considering any other alternative.",
                name: "Mr. Kandarp Mankad",
                role: "Executive Director",
                address: "Gokulam Hospital (Gokulam Lifescience Pvt. Ltd.), Rajkot",
                initials: "MK",
              },
              {
                stars: 5,
                text: "We replaced our 10-year-old traditional oil-free air compressor system with the integrex Medical Air Generator. Our decision was made confidently in a single meeting. The system is incredibly compact, with minimal noise and vibration — creating a more peaceful environment in our Level 3 NICU.",
                name: "Dr. Vaibhav Patel",
                role: "MD Pediatrics, IAP Fellow in Neonatology",
                address: "Hasya New Born Care Center, Palanpur",
                initials: "VP",
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: 12,
                padding: "28px 28px 24px",
                border: `1px solid ${C.cardBorder}`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}>
                {/* Top row: stars left, 99 right */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 3 }}>
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <svg key={si} width="18" height="18" viewBox="0 0 24 24" fill="#0b477b" stroke="#0b477b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  {/* 99 quote mark */}
                  <div style={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: "rgba(11,71,123,0.08)",
                    lineHeight: 1,
                    marginTop: -10,
                    fontFamily: "Georgia, serif",
                    userSelect: "none",
                  }}>
                    99
                  </div>
                </div>

                {/* Quote text */}
                <p style={{
                  fontSize: 14,
                  color: "#2c2c2c",
                  lineHeight: 1.8,
                  margin: "0 0 24px",
                  flex: 1,
                }}>"{t.text}"</p>

                {/* Divider */}
                <div style={{ width: "100%", height: 1, background: C.cardBorder, marginBottom: 16 }} />

                {/* Avatar + Name */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Initials circle */}
                  <div style={{
                    width: 42, height: 42,
                    borderRadius: "50%",
                    background: "#0b477b",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: 0.5 }}>{t.initials}</span>
                  </div>

                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0b477b" }}>{t.name}</div>
                    <div style={{ fontSize: 11.5, color: C.grey, lineHeight: 1.5 }}>{t.role}</div>
                    <div style={{ fontSize: 11.5, color: C.grey, lineHeight: 1.5 }}>{t.address}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 7. HAVE A QUESTION ── */}
      <section style={{ background: C.offWhite, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }}>

          {/* LEFT */}
          <div style={{ paddingTop: 8 }}>
            <h2 style={{ fontSize: 36, fontWeight: 600, color: "#0b477b", margin: "0 0 4px", lineHeight: 1.15 }}>
              HAVE A QUESTION?
            </h2>
            <h3 style={{ fontSize: 28, fontWeight: 400, color: "#0b477b", margin: "0 0 20px" }}>
              WE ARE HERE TO HELP!
            </h3>
            <p style={{ fontSize: 16, color: C.grey600, lineHeight: 1.8, margin: "0 0 38px", maxWidth: 500 }}>
              Reach out to us to know what solution fits your needs the best. We are available 24x7 for support.
            </p>

            {/* Contact Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "EMAIL US",
                  value: "sales@tsmtech.in",
                  href: "mailto:sales@tsmtech.in"
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                    </svg>
                  ),
                  label: "CALL OR WHATSAPP",
                  value: "+91 90330 09328",
                  href: "tel:+919033009328"
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "LOCATION",
                  value: "Ahmedabad, Gujarat, India",
                  href: null
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  {/* Circle icon */}
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    border: `1.5px solid ${C.cardBorder}`,
                    background: C.white,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)"
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: C.grey, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: 14.5, fontWeight: 700, color: "#0b477b", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: 15.5, fontWeight: 700, color: "#0b477b" }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div style={{
            maxWidth: 700,

            background: C.white,
            borderRadius: 16,
            padding: "32px 32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: `1px solid ${C.cardBorder}`
          }}>

            {/* Name + Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
              <div>
                <div style={labelStyle}>Full Name</div>
                <input type="text" placeholder="John Doe" style={inputStyle} />
              </div>
              <div>
                <div style={labelStyle}>Phone</div>
                <input type="tel" placeholder="+91 00000 00000" style={inputStyle} />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 18 }}>
              <div style={labelStyle}>Email Address</div>
              <input type="email" placeholder="john@hospital.com" style={inputStyle} />
            </div>

            {/* Subject dropdown */}
            <div style={{ marginBottom: 18 }}>
              <div style={labelStyle}>Subject</div>
              <select style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7a99' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", cursor: "pointer" }}>
                <option>Product Inquiry</option>
                <option>Technical Support</option>
                <option>General Enquiry</option>
                <option>Get a Quote</option>
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 24 }}>
              <div style={labelStyle}>Message</div>
              <textarea rows={4} placeholder="How can we assist you?" style={{ ...inputStyle, resize: "vertical", height: 110 }} />
            </div>

            {/* Submit */}
            <button style={{
              width: "100%",
              background: "#E05A36",
              color: C.white,
              border: "none",
              borderRadius: 10,
              padding: "15px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              letterSpacing: 0.3
            }}>
              Send Inquiry <span style={{ fontSize: 18 }}>➤</span>
            </button>
          </div>
        </div>
      </section>

    </main >

  );
}
const labelStyle = {
  fontSize: 13,
  fontWeight: 600,
  color: "#4a5270",
  marginBottom: 7
};

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  border: "1.5px solid #dde3f0",
  borderRadius: 10,
  fontSize: 14,
  color: "#111827",
  background: "#f9fafc",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit"
};