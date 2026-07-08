"use client";
import Link from "next/link";
import { FadeUp, HoverCard } from "@/components/Animations";

export default function PressMediaPage() {
    return (
        <main className="font-sans bg-gray-50 min-h-screen">

            {/* ── HERO ── */}
            <section className="relative bg-white overflow-hidden min-h-[420px] flex items-center">

                {/* Right — image with left fade */}
                <div className="absolute right-0 top-0 h-full w-[75%]">
                    <div
                        className="absolute left-0 top-0 h-full w-48 z-10"
                        style={{ background: "linear-gradient(to right, white, transparent)" }}
                    />
                    <img
                        src="/press-media.png"
                        alt="Media"
                        className="w-full h-full object-cover object-left"
                    />
                </div>

                {/* Left — text */}
                <div className="relative z-10 max-w-[1360px] mx-auto px-6 py-16 w-full">
                    <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-[#e0ecf8]">
                        TECHNIK SPIRITS MEDIA RESOURCE
                    </div>
                    <h1 className="text-4xl font-bold text-[#0b477b] leading-tight mb-4">
                        Press & Media Center
                    </h1>
                    <p className="text-md text-gray-500 leading-relaxed max-w-lg">
                        Your central hub for official news, company background, and media resources for Technik Spirits MedTech's healthcare engineering innovations.
                    </p>
                </div>

            </section>



            {/* ── ABOUT SECTION ── */}
            <section className="max-w-[1360px] mx-auto px-6 py-14">
                <div className="grid grid-cols-2 gap-12 items-start">

                    {/* Left */}
                    <div>
                        <FadeUp><h2 className="text-3xl font-semibold text-[#0b477b] mb-6">About Technik Spirits MedTech</h2></FadeUp>
                        <div className="w-12 h-1 bg-[#0b477b] rounded mb-7" />

                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            Technik Spirits MedTech Private Limited (formerly Technik Spirits Inc.) is a premier healthcare engineering and manufacturing company with an exclusive focus on hospital medical gas plant-room systems.
                        </p>


                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            Our portfolio includes advanced medical air compressors, medical vacuum pump systems, oxygen generators, and anaesthetic gas scavenging systems (AGSS), all engineered to exceed ISO 13485 standards.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed mb-6">
                            Our work is driven by clinical understanding, engineering rigor, and long-term operational performance in life-critical environments. Media coverage and industry recognition reflect our commitment to quiet, efficient, and purpose-built medical gas solutions designed for modern hospitals.
                        </p>
                    </div>

                    {/* Right — image with 20+ card overlapping bottom-right */}
                    {/* Right — image with 20+ card overlapping bottom-right */}
                    <div className="relative w-full">
                        {/* Full image */}
                        <div className="rounded-2xl overflow-hidden" style={{ height: "320px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80"
                                alt="About"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* 20+ stat card — bottom RIGHT corner */}
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,           // ← right corner
                            background: "#0b477b",
                            borderRadius: "16px 0 16px 0",
                            padding: "20px 24px",
                            width: 180,
                        }}>
                            <div style={{ fontSize: 36, fontWeight: 900, color: "#fff", lineHeight: 1 }}>20+</div>
                            <div style={{ fontSize: 12, color: "#93c5fd", marginTop: 6 }}>Years of Engineering</div>
                        </div>
                    </div>


                </div>
            </section>

            {/* ── IN THE NEWS ── */}
            <section className="max-w-[1360px] mx-auto px-6 pb-14">
                <div className="flex items-center justify-between mb-9">
                    <div>
                        <FadeUp><h2 className="text-3xl font-semibold text-[#0b477b]">In the News</h2></FadeUp>

                        <p className="text-md text-gray-500 mt-1">
                            Stay updated with our latest technical breakthroughs and corporate announcements.
                        </p>

                    </div>
                    <Link href="#" className="text-md text-[#0b477b] font-semibold flex items-center gap-1" style={{ textDecoration: "none" }}>
                        View Archive →
                    </Link>
                </div>

                <div className="grid grid-cols-4 h-[380px] gap-5">

                    {/* Card 1 — with image, red tag */}
                    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col bg-white">
                        <div className="relative h-32 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                                alt="Patent News"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 text-[9px] font-bold text-white px-2 py-1 rounded bg-red-600 uppercase tracking-wide">
                                PATENT NEWS
                            </span>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <div className="text-[10px] text-blue-500 font-semibold mb-1.5">ANI News</div>
                            <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-3">
                                Securing Patent for Oxygen Concentrator Valve
                            </h3>
                            <p className="text-md text-gray-500 leading-relaxed mb-3 flex-1">
                                Technik Spirits Inc. secures global patent for their modular high-pressure valve system,...
                            </p>
                            <Link href="#" className="text-md font-bold text-[#0b477b] flex items-center gap-1" style={{ textDecoration: "none" }}>
                                Read More <span className="text-[10px]">↗</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 — with image, blue tag */}
                    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col bg-white">
                        <div className="relative h-32 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                                alt="Industry Update"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 text-[9px] font-bold text-white px-2 py-1 rounded bg-blue-500 uppercase tracking-wide">
                                INDUSTRY UPDATE
                            </span>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <div className="text-[10px] text-blue-500 font-semibold mb-1.5">Medical Buyer</div>
                            <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-2">
                                Revolutionizing Medical Gas Infrastructure
                            </h3>
                            <p className="text-md text-gray-500 leading-relaxed mb-3 flex-1">
                                Technik Spirits' innovative gas systems are now the standard for three major hospital chains in...
                            </p>
                            <Link href="#" className="text-xs font-bold text-[#0b477b] flex items-center gap-1" style={{ textDecoration: "none" }}>
                                Read More <span className="text-[10px]">↗</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 — no image, green top border */}
                    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col bg-white border-t-4" style={{ borderTopColor: "#22c55e" }}>
                        <div className="p-5 flex flex-col flex-1">
                            <span className="inline-block text-[9px] font-bold text-gray-500 border border-gray-200 px-2 py-1 rounded mb-3 uppercase tracking-wide w-fit">
                                PRESS RELEASE
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-2">
                                Scaling Operations: Expansion into MENA Markets
                            </h3>
                            <p className="text-md text-gray-500 leading-relaxed mb-4 flex-1">
                                Building on domestic success, we are proud to announce our strategic roadmap for distribution centers across the MENA region
                            </p>
                            <Link href="#" className="text-xs font-bold text-[#0b477b] flex items-center gap-1" style={{ textDecoration: "none" }}>
                                Full Article <span className="text-[10px]">›</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card 4 — no image, navy top border */}
                    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col bg-white border-t-4" style={{ borderTopColor: "#0b477b" }}>
                        <div className="p-5 flex flex-col flex-1">
                            <span className="inline-block text-[9px] font-bold text-gray-500 border border-gray-200 px-2 py-1 rounded mb-3 uppercase tracking-wide w-fit">
                                FACTORY NEWS
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-2">
                                Ahmedabad Facility Production Capacity Doubled
                            </h3>
                            <p className="text-md text-gray-500 leading-relaxed mb-4 flex-1">
                                To support the increasing number of hospital projects, our manufacturing unit has integrated AI-driven supply chain
                            </p>
                            <Link href="#" className="text-xs font-bold text-[#0b477b] flex items-center gap-1" style={{ textDecoration: "none" }}>
                                Full Article <span className="text-[10px]">›</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── MEDIA CONTACT ── */}
            <section className="max-w-[1360px] mx-auto px-6 pb-14">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-50 border-b border-gray-200 px-8 py-8 text-center">
                        <FadeUp><h2 className="text-3xl font-semibold text-[#0b477b]">Media Contact</h2></FadeUp>
                        <p className="text-md text-gray-500 mt-2">
                            For press enquiries, interviews, or additional information, please contact our <br />dedicated relations team.
                        </p>
                    </div>

                    {/* Contact card */}
                    <div className="px-8 py-8 max-w-lg mx-auto">
                        <div className="text-center mb-6">
                            <div className="text-lg font-semibold text-[#0b477b]">Technik Spirits MedTech - Media Relations</div>
                        </div>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="relative border border-gray-200 rounded-2xl p-5 bg-white flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0b477b] flex-shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Email Address</div>
                                    <a href="mailto:portals@ts11.in" className="text-sm font-medium text-[#0b477b]" style={{ textDecoration: "none" }}>
                                        portals@ts11.in
                                    </a>
                                </div>
                            </div>

                            {/* Press Portal */}
                            <div className="relative border border-gray-200 rounded-2xl p-5 bg-white flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0b477b] flex-shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Official Press Portal</div>
                                    <a href="https://www.technikspirits.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#0b477b]" style={{ textDecoration: "none" }}>
                                        www.technikspirits.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="text-xs text-gray-400 mb-3 text-center tracking-widest">FOLLOW OUR SOCIAL CHANNELS</div>
                            <div className="flex justify-center gap-4">
                                {[
                                    {
                                        icon: (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="18" cy="5" r="3" />
                                                <circle cx="6" cy="12" r="3" />
                                                <circle cx="18" cy="19" r="3" />
                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                            </svg>
                                        ),
                                        href: ""
                                    },
                                    {
                                        icon: (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                                <circle cx="12" cy="20" r="1" fill="#0b477b" />
                                            </svg>
                                        ),
                                        href: ""
                                    },
                                    {
                                        icon: (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                                <polyline points="2 17 12 22 22 17" />
                                                <polyline points="2 12 12 17 22 12" />
                                            </svg>
                                        ),
                                        href: ""
                                    },
                                ].map((s, i) => (
                                    <Link
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center hover:bg-[#eef5fc] hover:border-[#0b477b] transition-colors"
                                    >
                                        {s.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}