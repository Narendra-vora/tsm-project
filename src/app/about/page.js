'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/* ─── Stats Bar Data ────────────────────────────────────────────── */
const stats = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="#ffffff" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
        ),
        value: '50+',
        label: 'YEARS EXPERIENCE',
    },
    {
        icon: (
             <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        ),
        value: '3',
        label: 'GENERATIONS OF FAMILY',
    },
    {
        icon: (
              <svg className="w-8 h-8" fill="none" stroke="#ffffff" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
        ),
        value: 'ISO 13485',
        label: '  EUALITY CERTIFIED',
    },
    {
        icon: (
           <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </svg>
        ),
        value: 'PATENTED',
        label: 'HITSREW TECHNOLOGY',
    },
];

/* ─── Timeline / Evolution data ─────────────────────────────────── */
const timeline = [
    {
        year: '1971',
        title: 'Our Modest Beginnings',
        body: 'Founded with a vision to revolutionise air compressors, we began as specialised manufacturers. That core engineering DNA still drives every product we build today — from the smallest manifold to the largest oxygen generator.',
        metrics: [
            { label: '1st', sub: 'Factory rooms' },
            { label: '100%', sub: 'Quality focus' },
        ],
    },
];

/* ─── Contact form ───────────────────────────────────────────────── */
const subjectOptions = [
    'Product Inquiry',
    'Technical Support',
    'General Query',
    'Partnership',
    'Other',
];

function AboutPage() {
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        subject: 'Product Inquiry',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ fullName: '', phone: '', email: '', subject: 'Product Inquiry', message: '' });
    };

    return (
        <main className="min-h-screen flex flex-col bg-white">


            {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
            <section className="relative w-full min-h-[520px] lg:h-[calc(100vh-80px)] overflow-hidden flex items-center">
                {/* Background Image */}
                <Image
                    src="/about_hero.png"
                    alt="Technik Spirits MedTech factory"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20" />

                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
                    {/* Breadcrumb */}
                    <p className="text-[#0b477b] text-xs font-semibold tracking-widest uppercase mb-5 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-[#0b477b] inline-block" />
                        Since 1971
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1a2a3a] leading-[1.1] tracking-tight max-w-2xl mb-6 ">
                        Company – A{' '}
                        <span className="text-[#0b477b]">Powerhouse</span>
                        <br />
                        of Innovation
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                        From a modest air compressor manufacturer to a global multi-disciplinary medical engineering
                        firm, our 50+ year journey is defined by unwavering precision and technical excellence.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="#evolution"
                        className="inline-flex items-center gap-2 bg-[#0b477b] hover:bg-[#0d599b] text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl group"
                    >
                        Our Heritage
                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ═══════════════════════════════ STATS BAR ═══════════════════════════════ */}
            <section className="bg-[#0b477b] text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
                        {stats.map((s, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:px-8 first:pl-0">
                                <div className="text-#0b477b shrink-0 rounded-2xl">{s.icon}</div>
                                <div>
                                    <p className="text-lg  tracking-tight">{s.value}</p>
                                    <p className="text-[10px]  tracking-[0.12em] text-white uppercase leading-tight mt-0.5">
                                        {s.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════ EVOLUTION ═══════════════════════════════ */}
            <section id="evolution" className="py-20 lg:py-28 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2a3a]">
                The Evolution of{' '}
                <span className="relative inline-block text-[#0b477b]">
                    Excellence
                </span>
            </h2>
            <p className="text-gray-500 mt-5 text-sm sm:text-base max-w-xl mx-auto">
                Over five decades of specialized medical sector focus and in-depth engineering mastery.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* ── Left Column ── */}
            <div className="lg:col-span-7 flex flex-col gap-0 border border-gray-200 rounded-2xl overflow-hidden">
                {/* 1971 Card */}
                <div className="p-7 bg-white relative overflow-hidden flex-1">
                    {/* large faded year watermark */}
                    <span className="absolute -top-3 right-4 text-[120px] font-black text-gray-100 select-none leading-none pointer-events-none">
                        1971
                    </span>
                    <div className="relative z-10">
                        <p className="text-2xl font-black text-[#1a2a3a] mb-1">1971</p>
                        <h3 className="text-lg font-bold text-[#1a2a3a] mb-4">Our Modest Beginnings</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                            Founded with a vision to revolutionize air compression, we began as specialized manufacturers.
                            That core engineering DNA still drives every product we build today, from the smallest manifold
                            to the largest oxygen generator.
                        </p>
                    </div>
                </div>

                {/* Factory image */}
                <div className="relative overflow-hidden h-52 group">
                    <Image
                        src="/mgps_plant.png"
                        alt="MGPS plant room equipment"
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d4e]/50 to-transparent" />
                </div>

                {/* Metrics Row */}
                <div className="flex items-center gap-0 bg-white border-t border-gray-100 px-6 py-4">
                    {/* 1st */}
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-9 h-9 rounded-lg bg-[#eef5fc] flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-[#0b477b]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-lg font-extrabold text-[#0b477b]">1<span className="text-xs font-semibold">st</span></p>
                            <p className="text-[11px] text-gray-400 font-medium">Factory in India</p>
                        </div>
                    </div>

                    {/* 100% */}
                    <div className="flex items-center gap-3 flex-1 border-l border-gray-100 pl-6">
                        <div>
                            <p className="text-lg font-extrabold text-[#0b477b]">100%</p>
                            <p className="text-[11px] text-gray-400 font-medium">Quality Focus</p>
                        </div>
                    </div>

                    {/* Circle check */}
                    <div className="flex items-center justify-end">
                        <div className="w-9 h-9 rounded-lg bg-[#eef5fc] flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#0b477b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Right Column: 2 separate boxes ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">

                {/* Box 1 — Medical Specialist (dark navy) */}
                <div className="bg-[#0b477b] text-white rounded-2xl p-7 relative overflow-hidden">
                    {/* decorative circles */}
                    <div className="absolute -top-8 -right-10 w-34  h-36 rounded-full bg-white/5" />
                    <div className="absolute top-16 -right-5 w-20 h-20 rounded-full bg-white/5" />
                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" />
                                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <line x1="12" y1="12" x2="12" y2="16" />
                                <line x1="10" y1="14" x2="14" y2="14" />
                            </svg>
                        </div>

                        {/* Title + underline */}
                        <h3 className="text-xl font-bold text-white mb-2">Medical Specialist</h3>
                        <div className="w-10 h-0.5 bg-[#90caf9] mb-4" />

                        <p className="text-[#93c5e9] text-sm leading-relaxed">
                            Exclusive focus on Medical Gas Pipeline Systems <br />(MGPS) and mission-critical hospital infrastructure.
                        </p>
                    </div>
                </div>

                {/* Box 2 — Integrex (white) */}
                <div className="border border-gray-200 rounded-2xl p-7 bg-white relative overflow-hidden">
                    {/* Large faded checkmark watermark */}
                    <div className="absolute -bottom-4 -right-4 opacity-[0.07]">
                        <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="#0b477b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        {/* Title + underline */}
                        <h3 className="text-xl font-bold text-[#1a2a3a] mb-2">Integrex™</h3>
                        <div className="w-10 h-0.5 bg-[#0b477b] mb-4" />

                        <p className="text-gray-500 text-sm leading-relaxed mb-5">
                            Our much-acclaimed brainchild based on a patented modular technology for maximum reliability.
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-1.5 text-[#0b477b] text-sm font-semibold hover:underline group"
                        >
                            Discover the Patent
                            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

            {/* ═══════════════════════════ CONTACT SECTION ═══════════════════════════ */}
            <section id="contact" className="py-20 lg:py-28 bg-[#f0f6fc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left: Contact info */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0b477b] leading-tight mb-3 ">
                                HAVE A QUESTION?
                            </h2>
                            <p className="text-2xl  text-[#0b477b] uppercase tracking-wider mb-4">
                                WE ARE HERE TO HELP!
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-10">
                                Reach out to us to know what solution fits your needs the best. We are available 24×7 for support.
                            </p>

                            {/* Contact details */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        ),
                                        label: 'EMAIL US',
                                        value: 'sales@ts11.in',
                                        href: 'mailto:sales@ts11.in',
                                    },
                                    {
                                        icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        ),
                                        label: 'CALL OR WHATSAPP',
                                        value: '+91 90330 09328',
                                        href: 'tel:+919033003328',
                                    },
                                    {
                                        icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ),
                                        label: 'LOCATION',
                                        value: 'Ahmedabad, Gujarat, India',
                                        // href: 'https://maps.google.com/?q=Ahmedabad,Gujarat,India',// add the location link
                                    },
                                ].map((c, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0b477b] shadow-sm shrink-0">
                                            {c.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">{c.label}</p>
                                            <a href={c.href} className="text-sm font-semibold text-[#0b477b] hover:text-[#0b477b] transition-colors">
                                                {c.value}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Inquiry form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1a2a3a] mb-2">Inquiry Sent!</h3>
                                    <p className="text-gray-500 text-sm">We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Full Name + Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Full Name</label>
                                            <input
                                                id="about-fullname"
                                                name="fullName"
                                                type="text"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Phone</label>
                                            <input
                                                id="about-phone"
                                                name="phone"
                                                type="tel"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+91 90000 00000"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Email Address</label>
                                        <input
                                            id="about-email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@hospital.com"
                                            required
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all"
                                        />
                                    </div>

                                    {/* Subject dropdown */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Subject</label>
                                        <div className="relative">
                                            <select
                                                id="about-subject"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all appearance-none"
                                            >
                                                {subjectOptions.map((o) => (
                                                    <option key={o}>{o}</option>
                                                ))}
                                            </select>
                                            <svg
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                                                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Message</label>
                                        <textarea
                                            id="about-message"
                                            name="message"
                                            rows={4}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="How can we assist you?"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        id="about-send-inquiry"
                                        className="w-full bg-[#0b477b] hover:bg-[#0d599b] text-white py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2 group"
                                    >
                                        Send Inquiry
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
