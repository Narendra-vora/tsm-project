'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



/* ─── Product Data ─────────────────────────────────────────────── */
const products = [
  {
    id: 1,
    name: 'Medical Air Compressor System',
    slug: 'medical-air-compressor',
    icon: "M9.59 4.59A2 2 0 1 1 11 8H2 M12.59 11.59A2 2 0 1 1 14 15H2 M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2",

    image: '/product-Air.png',
    badge: 'MGPS SOURCE EQUIPMENT',
    features: [
      { label: 'Patent Granted', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { label: '100% Oil Free', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Modular & Scalable', icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z' },
    ],
    description: 'Delivering reliable, oil-free medical compressed air meeting HTM02-01 and NFPA99 standards for hospital MGPS infrastructure.',
    category: 'Compressors',
  },
  {
    id: 2,
    name: 'Medical Vacuum Pum System',
    slug: 'medical-vacuum-pump',
    icon: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",

    image: '/product_vacuum_pump.png',
    badge: 'MGPS SOURCE EQUIPMENT',
    features: [
      { label: 'Silent & Vibration-Free', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { label: 'Skid-Mounted Package', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
      { label: 'Fully Automatic', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    ],
    description: 'High-performance medical vacuum systems providing reliable suction for surgical, anaesthetic, and clinical waste applications.',
    category: 'Vacuum Systems',
  },
  {
    id: 3,
    name: 'Anaesthetic Gas Scavenging System',
    slug: 'agss',
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",

    image: '/product-agss.png',
    badge: 'PATIENT SAFETY',
    features: [
      { label: 'OT Safety', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { label: 'Active Scavenging', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Workstation Compatible', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    ],
    description: 'Protecting theatre staff from waste anaesthetic gases with our patented Integrex™ AGSS meeting all UK, EU, and international standards.',
    category: 'AGSS',
  },
  {
    id: 4,
    name: 'Medical Oxygen Generator (PSA)',
    slug: 'oxygen-concentrator',
    icon: "M9.59 4.59A2 2 0 1 1 11 8H2 M12.59 11.59A2 2 0 1 1 14 15H2 M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2",

    image: '/product_air_compressor.png',
    badge: 'MGPS SOURCE EQUIPMENT',
    features: [
      { label: '', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { label: '', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: '', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    ],
    description: 'On-site medical oxygen generation using Pressure Swing Adsorption technology, reducing cylinder dependency and operational costs.',
    category: 'Oxygen Systems',
  },
  {
    id: 5,
    name: 'Medical Ventilator Air Compressor',
    slug: 'medical-vacuum-pump-2',
    icon: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",

    image: '/product-rotary vacuum pum.png',
    badge: 'MGPS SOURCE EQUIPMENT',
    features: [
      { label: '', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { label: '', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
      { label: '', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    ],
    description: 'High-performance medical vacuum systems providing reliable suction for surgical, anaesthetic, and clinical waste applications.',
    category: 'Vacuum Systems',
  },
  {
    id: 6,
    name: 'Compressor Pumps & Spares',
    slug: 'agss-2',
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",


    image: '/product_agss.png',
    badge: 'PATIENT SAFETY',
    features: [
      { label: '', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { label: '', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: '', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    ],
    description: 'Protecting theatre staff from waste anaesthetic gases with our patented Integrex™ AGSS meeting all UK, EU, and international standards.',
    category: 'AGSS',
  },
];

const categories = ['All', 'Compressors', 'Vacuum Systems', 'Oxygen Systems', 'AGSS'];

const heroFeatures = [
  { label: 'Reliable', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'High Performance', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'Patient Safety', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { label: 'Industry Standard', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
];

const subjectOptions = ['Product Inquiry', 'Technical Support', 'General Query', 'Partnership', 'Other'];

export default function ProductsPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', subject: 'Product Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ fullName: '', phone: '', email: '', subject: 'Product Inquiry', message: '' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative w-full min-h-[1280px] lg:min-h-[480px] overflow-hidden flex items-center bg-white">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full">
          <Image
            src="/products.png"
            alt="Hospital medical gas pipeline system"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent lg:from-white lg:via-white/40 lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
          {/* <p className="text-[#0b477b] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#0b477b] inline-block" />
            MEDICAL GAS SOLUTIONS
          </p> */}
          <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-[#e0ecf8]">
            SPECIALISTS IN MGPS PLANT ROOM EQUIPMENT
          </div>
          <h1 className="text-3sxl sm:text-5xl lg:text-[58px] font-semibold text-[#1a2a3a] leading-[1.05] tracking-tight mb-5">
            Our <span className="text-[#0b477b]">Products</span>
          </h1>
          <div className="w-14 h-[3px] bg-[#0b477b] rounded-full mb-5" />
          <p className="text-gray-600 text-base max-w-lg leading-relaxed mb-10">
            Delivering reliable, high-performance medical gas pipeline systems designed to exceed industry standards and ensure absolute patient safety.
          </p>
          <div className="flex items-start gap-6">
            {heroFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-11 h-11 rounded-xl bg-[#eef5fc] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0b477b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">{f.label}</span>
                </div>
                {i !== heroFeatures.length - 1 && (
                  <div className="w-px h-10 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ PRODUCT GRID SECTION ════════════════════════ */}
      <section id="products" className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b477b]">
              Comprehensive Product Range
            </h2>
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow text-[#0b477b]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3A1.5 1.5 0 0115 10.5v3A1.5 1.5 0 0113.5 15h-3A1.5 1.5 0 019 13.5v-3z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow text-[#0b477b]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${activeCategory === cat
                  ? 'bg-[#0b477b] text-white border-[#0b477b] shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#0b477b] hover:text-[#0b477b]'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {viewMode === 'list' && (
            <div className="flex flex-col gap-5">
              {filtered.map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════ CONTACT SECTION ════════════════════════ */}
      <section id="contact" className="py-20 lg:py-28 bg-[#f0f6fc]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold uppercase text-[#0b477b] leading-tight mb-3">HAVE A QUESTION?</h2>
              <p className="text-2xl  text-[#0b477b] uppercase tracking-wider mb-4">WE ARE HERE TO HELP!</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-10">
                Reach out to us to know what solution fits your needs the best. We are available 24×7 for support.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'EMAIL US', value: 'sales@ts11.in', href: 'mailto:sales@ts11.in' },
                  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'CALL OR WHATSAPP', value: '+91 90330 03328', href: 'tel:+919033003328' },
                  { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'LOCATION', value: 'Ahmedabad, Gujarat, India', href: 'https://maps.google.com/?q=Ahmedabad,Gujarat,India' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0b477b] shadow-sm shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-gray mb-0.5">{c.label}</p>
                      <a href={c.href} className="text-sm font-semibold text-[#0b477b] hover:text-[#0b477b] transition-colors" style={{ textDecoration: "none" }}>{c.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2a3a] mb-2">Inquiry Sent!</h3>
                  <p className="text-gray-500 text-sm">We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Full Name</label>
                      <input name="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="John Doe" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Phone</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 90000 00000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@hospital.com" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Subject</label>
                    <div className="relative">
                      <select name="subject" value={form.subject} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all appearance-none">
                        {subjectOptions.map(o => <option key={o}>{o}</option>)}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="How can we assist you?" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b477b]/30 focus:border-[#0b477b] transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#0b477b] hover:bg-[#0d599b] text-white py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2 group">
                    Send Inquiry
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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

/* ─── Product Card (Grid View) — NEW DESIGN ────────────────────── */
function ProductCard({ product }) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-[#0b477b] flex flex-col">

      {/* Top white section — icon + title */}
      <div className="bg-white px-6 pt-5 pb-6" style={{ borderRadius: "0 0 40px 0" }}>
        <div className="w-12 h-12 rounded-xl bg-[#eef5fc] border border-[#d0e4f5] flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-[#0b477b]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={product.icon} />
          </svg>
        </div>
        <h3 className="text-[#0b477b] font-semibold text-3xl leading-tight min-h-[64px] line-clamp-2">
          {product.name}
        </h3>
      </div>

      {/* Middle navy — features left, image right */}
      <div className="flex items-center gap-4 px-6 py-4 flex-1">
        <div className="flex flex-col gap-4 flex-1">
          {product.features.map((f, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="w-9 h-9 rounded-full border border-white/20 bg-white flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0b477b]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </div>
              <span className="text-white text-xs font-semibold  leading-tight flex mt-2 w-20">
                {f.label}
              </span>
            </div>
          ))
          }

        </div>
        <div className="relative w-42 h-46 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="176px"
            className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom — Learn More button */}
      <div className="px-6 pb-4">
        <Link
          href={`/products/${product.slug}`}
          className="flex items-center justify-center gap-2 w-full border-2 border-white/30 hover:border-white text-white text-sm py-3.5 rounded-2xl transition-all duration-200 hover:bg-white/10"
          style={{ textDecoration: "none" }}
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
/* ─── Product List Item (List View) ────────────────────────────── */
function ProductListItem({ product }) {
  return (
    <div className="group flex flex-col sm:flex-row items-stretch gap-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="relative w-full sm:w-40 h-40 shrink-0 bg-[#f0f6fc] rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="160px"
          className="object-contain object-center p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="inline-block w-fit text-[10px] font-bold tracking-widest uppercase text-[#0b477b] bg-[#eef5fc] px-3 py-1 rounded-full mb-2">
          {product.badge}
        </span>
        <h3 className="text-lg font-semibold text-[#1a2a3a] mb-1.5">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {product.features.filter(f => f.label).map((f, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0b477b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
              </svg>
              <span className="text-xs font-medium text-gray-600">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action */}
      <div className="flex items-center sm:pl-4 shrink-0">
        <Link
          href={`/products/${product.slug}`}
          className="flex items-center justify-center gap-2 whitespace-nowrap border-2 border-[#0b477b]/20 hover:border-[#0b477b] text-[#0b477b] text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 hover:bg-[#0b477b] hover:text-white"
          style={{ textDecoration: "none" }}
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
