"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, HoverCard } from "@/components/Animations";


const C = {
    navy: "#0b477b",
    navyDark: "#082d52",
    blue: "#1565c0",
    accent: "#e65c00",
    white: "#ffffff",
    offWhite: "#f4f7fb",
    lightGrey: "#eef1f7",
    grey: "#6b7a99",
    cardBorder: "#dde3f0",
    dark: "#111827",
};

const stats = [
    { icon: "📄", value: "500+", label: "Technical Papers", color: "#eef5fc", iconColor: "#0b477b" },
    { icon: "✅", value: "15+", label: "Safety Standards", color: "#e6f4ea", iconColor: "#137333" },
    { icon: "🏥", value: "Healthcare Focused", label: "Built for Care", color: "#e8f0fe", iconColor: "#1a73e8" },
    { icon: "💡", value: "Expert Insights", label: "By Industry Experts", color: "#fef7e0", iconColor: "#b06000" },
];

const tags = ["All", "Technical Guide", "Expert Insight", "Technical Paper", "Healthcare Focus"];

function BlogPage() {
    return (
        <main style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: C.offWhite, minHeight: "100vh" }}>

            {/* ── HERO ── */}
            <section style={{
                background: C.white,
                padding: "80px 24px 60px",
                overflow: "hidden",
                position: "relative",
                borderBottom: `1px solid ${C.lightGrey}`
            }}>
                {/* Decorative Dot Grid */}
                <div style={{
                    position: "absolute",
                    right: 40,
                    top: 40,
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 8,
                    opacity: 0.25,
                    zIndex: 1
                }}>
                    {[...Array(15)].map((_, i) => (
                        <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: C.navy }} />
                    ))}
                </div>

                <div style={{ maxWidth: 1360, margin: "0 auto", position: "relative", zIndex: 2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[50px] items-center">

                    {/* Left Column: Text Content */}
                    <div>
                        <div style={{
                            display: "inline-block",
                            fontSize: 11, fontWeight: 700, color: C.navy,
                            letterSpacing: 1.2, textTransform: "uppercase",
                            background: "#eef5fc",
                            borderRadius: 20, padding: "6px 14px", marginBottom: 20,
                            border: "1px solid #e0ecf8"
                        }}>
                            EXPERTS IN MEDICAL GAS SYSTEMS
                        </div>

                        <h1 style={{ fontWeight: 700, color: "#0b477b", margin: "0 0 20px", lineHeight: 1.19, maxWidth: 500 }} className="text-4xl sm:text-5xl lg:text-6xl">
                            MEDICAL GAS<br />
                            <span style={{ color: "#0b477b", maxWidth: 320 }}>BLOG & GUIDES</span>
                        </h1>

                        <p style={{ fontSize: 18, color: "#414446", lineHeight: 1.85, margin: "0 0 12px", maxWidth: 600 }}>
                            Welcome to the Technic Spirits Resource Hub. We publish practical articles, technical guides, and expert insights on Medical Gas Pipeline Systems (MGPS), with a focus on <span style={{ color: "#0b477b", fontWeight: 600 }}>the safe, compliant and efficient</span> delivery of medical gases in healthcare environments.
                        </p>
                        <p style={{ fontSize: 16, color: "#414446", lineHeight: 1.85, margin: "0 0 32px", maxWidth: 500 }}>
                            Whether you are planning a new project, upgrading an existing facility, or ensuring compliance, our resources are here to help.
                        </p>
                        {/* CTA Buttons */}
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <a href="#guides" style={{
                                display: "flex", alignItems: "center", gap: 8,
                                background: C.navy, color: C.white,
                                padding: "12px 24px", borderRadius: 30,
                                fontSize: 13, fontWeight: 700, textDecoration: "none",
                                boxShadow: "0 4px 14px rgba(11, 71, 123, 0.25)",
                                transition: "all 0.2s"
                             }}>
                                📖 EXPLORE THE GUIDES

                            </a>
                            <a href="/contact-us" style={{
                                display: "flex", alignItems: "center", gap: 8,
                                background: C.white, color: C.navy,
                                padding: "12px 24px", borderRadius: 30,
                                fontSize: 13, fontWeight: 700, textDecoration: "none",
                                border: `1px solid ${C.navy}`,
                                transition: "all 0.2s"
                            }}>
                                ⬇ DOWNLOAD WHITEPAPER
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Styled Image */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                    }}>
                        {/* Soft Glow Behind Image */}
                        <div style={{
                            position: "absolute",
                            width: "90%",
                            height: "90%",
                            background: "radial-gradient(circle, rgba(11, 71, 123, 0.15) 0%, rgba(255,255,255,0) 70%)",
                            filter: "blur(20px)",
                            zIndex: -1
                        }} />

                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: 340,
                            borderRadius: 24,
                            overflow: "hidden",
                            boxShadow: "0 20px 40px rgba(11, 71, 123, 0.12)",
                            border: `1px solid ${C.cardBorder}`
                        }}>
                            <Image
                                src="/mgps_plant.png"
                                alt="Medical Gas Solutions"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                            {/* Overlay Badge */}
                            <div style={{
                                position: "absolute",
                                bottom: 20,
                                right: 20,
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(4px)",
                                padding: "8px 16px",
                                borderRadius: 8,
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                fontSize: 11,
                                fontWeight: 700,
                                color: C.navy,
                                letterSpacing: 0.5
                            }}>
                                MEDICAL GAS SOLUTIONS
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Stats Bar */}
            <div 
                style={{
                    maxWidth: 1360,
                    margin: "-28px auto 40px",
                    background: C.white,
                    borderRadius: 24,
                    border: `1px solid ${C.cardBorder}`,
                    boxShadow: "0 10px 30px rgba(11, 71, 123, 0.04)",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 10
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 mx-4 sm:mx-6 lg:mx-auto"
            >
                {stats.map((s, i) => (
                    <div key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "20px 24px"
                    }}>
                        <div style={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            background: s.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 20,
                            flexShrink: 0
                        }}>
                            {s.icon}
                        </div>
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 700, color: C.navy, lineHeight: 1.2 }}>{s.value}</div>
                            <div style={{ fontSize: 12, color: C.grey, marginTop: 4, lineHeight: 1.2 }}>{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>


        </main>
    );
}

export default BlogPage;