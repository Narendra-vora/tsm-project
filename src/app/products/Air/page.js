import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { ArrowDownToLine, ArrowRight, BadgeCheck, Cpu, Gauge, HardHat, Leaf, Power, ShieldCheck, Sparkles, Users2 } from "lucide-react";
import { CalendarDays, CirclePlus } from "lucide-react";
import {
    BriefcaseBusiness,
    Grid2x2,
    VolumeX,
    Zap,
    Wrench,
    SlidersHorizontal,
    Network,
    Headset,
} from "lucide-react";
import {
    Server,
    Wind,
    Filter,
    Check,
    Briefcase,
    Monitor,
    Microchip,
} from "lucide-react";


// import FAQAccordion from "./faq-accordion";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export const metadata = {
    title: "integrex™ Medical Air Compressor System",
    description: "Premium medical air compressor system designed for hospitals and critical-care environments.",
};

const performanceItems = [
    { value: "Up to 80%", label: "Less Audible" },
    { value: "Up to 80%", label: "Less Vibration" },
    { value: "Up to 80%", label: "Less Space" },
    { value: "Up to 70%", label: "Lower Electricity" },
];



const steps = [
    {
        icon: "/icons/generation.svg",
        isSvg: true,
        title: "1. Generation",
        text: "Oil-free compression via scroll or tooth-tech starts the clean air cycle.",
    },
    {
        icon: Server,
        isSvg: false,
        title: "2. Storage",
        text: "Internal receivers store reserve air and smooth the response.",
    },
    {
        icon: Wind,
        isSvg: false,
        title: "3. Drying",
        text: "Twin-tower desiccant dryers reduce moisture.",
    },
    {
        icon: Filter,
        isSvg: false,
        title: "4. Filtration",
        text: "Removing oil, particles and bacteria.",
    },
    {
        icon: SlidersHorizontal,
        isSvg: false,
        title: "5. Regulation",
        text: "Dual-stage regulation maintains pressure.",
    },
    {
        icon: "/icons/plc-control.svg",
        isSvg: true,
        title: "6. PLC-Control",
        text: "Master controller balances system load.",
    },
];

const philosophyCards = [
    {
        icon: ShieldCheck,
        title: "Smart redundancy",
        description:
            "The engineering approach uses a scalable redundant architecture to support high-demand medical use.",
        bullets: ["Seamless standby behavior", "Automatic load balance"],
    },
    {
        icon: Briefcase,
        title: "Easy scalability",
        description:
            "Plug-and-play expansion lets hospitals scale capacity without disrupting an existing layout.",
        bullets: ["Flexible expansion", "Phased capacity growth"],
    },
    {
        icon: Monitor,
        title: "Capacity control",
        description:
            "Variable-speed and monitoring logic maintain performance while reducing energy waste.",
        bullets: ["Real-time demand matching", "Predictive maintenance alerts"],
    },
];

const purityBullets = [
    {
        icon: "/icons/oil-free.svg",
        title: "100% Oil-Free",
        text: "Guaranteed dry compression ensures zero hydrocarbon contamination.",
    },
    {
        icon: "/icons/precision-dry.svg",
        title: "Precision Dry",
        text: "Maintains consistent -40°C pressure dew point for zero moisture.",
    },
    {
        icon: "/icons/clinical-clean.svg",
        title: "Clinical Clean",
        text: "Multi-stage HEPA and activated carbon filtration for air clarity.",
    },
];




const featureTiles = [
    {
        icon: BriefcaseBusiness,
        title: "Purpose-Built",
        text: "...",
    },
    {
        icon: Grid2x2,
        title: "Modular Architecture",
        text: "...",
    },
    {
        icon: VolumeX,
        title: "Ultra-Quiet",
        text: "...",
    },
    {
        icon: Zap,
        title: "Energy Savings",
        text: "...",
    },
    {
        icon: Wrench,
        title: "Skid-Mounted Package",
        text: "...",
    },
    {
        icon: SlidersHorizontal,
        title: "Advanced Control",
        text: "...",
    },
    {
        icon: Network,
        title: "Unified Ecosystem",
        text: "...",
    },
    {
        icon: Headset,
        title: "24/7 Support",
        text: "...",
    },
];

const specs = [
    ["Design", "Oil-free"],
    ["Pressure Output", "4 bar (= 60 psi) & 7 bar (= 100 psi)"],
    ["Flow Capacity", "300 LPM (~10 CFM) to virtually unlimited capacity"],
    ["Dryer", "Integrated"],
    ["Filtration", "Integrated four-stage filtration, down to 0.01 micron"],
    ["Air Receiver Capacity", "300 to 5000+ litres"],
    ["Power Supply", "415 V, 50 Hz, 3 Phase"],
];

const supplyIncluded = [
    "Oil-free air compressor module",
    "Air receiver with auto drain valve",
    "Integrated dryer for moisture removal",
    "Multi-stage filtration assembly",
    "Pressure regulation and instrumentation",
    "PLC-based monitoring and controls",
    "Heavy-duty enclosure for low-noise operation",
];

const supplyOptional = [
    "Duplex / multi-dryer and filtration assemblies",
    "Dew point analyzer for dryer monitoring",
    "CO, CO2, and other gas analyzers for air quality monitoring",
    "Duplex / multi air receiver packages",
];


const faqItems = [
    {
        question: "What is the integrex™ Modular Medical Air Compressor System?",
        answer:
            "The integrex™ is a patent-granted, centralized medical air system designed to deliver high-quality, oil-free, and contaminant-free air to a hospital's MGPS network. It is purpose-built for critical care, supplying medical-grade air for ventilators, anesthesia workstations, and other respiratory equipment.",
    },
    {
        question: "What makes integrex different from traditional duplex compressors?",
        answer:
            "Unlike traditional duplex systems, the integrex™ features a patent modular design that integrates compressors, dryers, filters, and controls into a single, sleek package. It offers up to 80% less noise and vibration, a 70% reduction in space, and significantly higher energy efficiency through demand-based control.",
    },
    {
        question: "Does the system meet ISO 8573-1 Class 0 oil-free standards?",
        answer:
            "Yes. The system is strictly oil-free and delivers ultra-high-quality medical air that is dry and contaminant-free. It includes high-performance dryers and integrated four-stage filtration down to 0.01 micron.",
    },
    {
        question: "How quiet is integrex medical air compressor system compared to conventional systems?",
        answer:
            "The integrex™ operates with up to 80% less noise than traditional oil-free medical compressors. Its vibration-control mechanism and acoustic enclosure make it ideal for hospitals.",
    },
    {
        question: "How compact is integrex™ and how does it save space?",
        answer:
            "Integrex™ combines compressors, dryers, filtration, controls and receivers into one engineered skid, reducing plant-room space by up to 80%.",
    },
];

function SectionTitle({ eyebrow, title, description, center = false }) {
    return (
        <div className={`space-y-3 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">{eyebrow}</p> : null}
            <h2 className="text-2xl font-semibold tracking-tight text-[#1f5d8c] sm:text-3xl">{title}</h2>
            {description ? <p className="text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
        </div>
    );
}

function LightCard({ children, className = "" }) {
    return <div className={`rounded-[18px] border border-slate-200 bg-white shadow-[0_12px_28px_rgba(31,93,140,0.08)] ${className}`}>{children}</div>;
}

function FeatureTile({ icon: Icon, title, text }) {
    return (
        <LightCard className="h-full p-5">
            <Icon className="h-5 w-5 text-[#1f5d8c]" />
            <div className="mt-4 text-sm font-semibold text-[#1f5d8c]">{title}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
        </LightCard>
    );
}

function CheckList({ items }) {
    return (
        <div className="space-y-3">
            {items.map((item) => (
                <div key={item.title} className="flex gap-3 text-sm text-slate-600">
                    <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#1f5d8c]/10 bg-[#1f5d8c]/10 text-[11px] font-semibold leading-none text-[#1f5d8c]">•</div>
                    <div>
                        <div className="font-semibold text-slate-800">{item.title}</div>
                        <div className="mt-1 leading-6">{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ConceptDiagram() {
    return (
        <div className="rounded-[20px] bg-[#f3562b] p-5 text-white shadow-[0_18px_40px_rgba(243,86,43,0.25)]">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/85">The Concept</div>
            <div className="mt-5 grid gap-5 sm:grid-cols-[120px_1fr]">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md border-4 border-white bg-[#60d17c]" />
                        <span className="text-xs font-semibold">100% Operational</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md border-4 border-white bg-white" />
                        <span className="text-xs font-semibold">100% Redundancy</span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-2 rounded-[18px] bg-white/10 p-4">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <div key={index} className={`h-5 w-5 rounded-full border-2 ${index % 2 === 0 ? "border-[#1f5d8c] bg-[#60d17c]" : "border-white bg-white"}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                <div className="rounded-lg bg-white/10 px-3 py-2 text-center">Traditional Systems</div>
                <div className="rounded-lg bg-white/10 px-3 py-2 text-center">Integrex</div>
            </div>
        </div>
    );
}


function FAQCard({ number, question, answer }) {
    return (
        <LightCard className="w-[82%] mx-auto rounded-xl py-3 px-4">
            <div className="pt-1 text-sm font-semibold text-[#1f5d8c]">
                {number}. {question}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
                {answer}
            </p>
        </LightCard>
    );
}


export default function AirPage() {
    return (
        <div className={`${poppins.className} bg-[#eef4fb] text-slate-800`}>
            <section className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)]">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-10">
                    <div className="max-w-2xl pt-2 lg:pt-8">
                        <div className="inline-flex rounded-full border border-[#1f5d8c]/15 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1f5d8c] shadow-sm">
                            Patented medical technology
                        </div>
                        <h1 className="mt-5 max-w-xl text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#1f5d8c] sm:text-[54px] lg:text-[60px]">
                            <span className="block">integrex™ Medical</span>
                            <span className="block">Air</span>
                            <span className="block">Compressor System</span>
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                            Advanced centralized medical air compressor system for modern hospitals - silent, compact, oil-free, and engineered for maximum reliability and patient safety.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#1f5d8c] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_14px_32px_rgba(31,93,140,0.25)] transition hover:-translate-y-0.5 hover:bg-[#18486c] sm:text-sm">
                                Talk to Our Engineers
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link href="#specs" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-[#1f5d8c]/30 hover:text-[#1f5d8c] sm:text-sm">
                                Download Brochure (PDF)
                                <ArrowDownToLine className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-x-12 bottom-3 top-8 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(138,194,247,0.35),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(31,93,140,0.15),transparent_42%)] blur-2xl" />
                        <div className="relative aspect-[1.15] overflow-hidden rounded-[26px] ">
                            <Image
                                src="/product-Air.png"
                                alt="integrex medical air compressor system"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 52vw"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className="border-b border-slate-200 bg-[#f4f8fd]">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                    <SectionTitle
                        center
                        title="Performance that benefits"

                    />
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {performanceItems.map((item) => (
                            <LightCard key={item.label} className="px-6 py-4 text-center">
                                <div className="text-[24px] font-semibold leading-none text-[#1f5d8c]">{item.value}</div>
                                <div className="mt-2 text-xs text-slate-500">{item.label}</div>
                            </LightCard>
                        ))}
                    </div>
                </div>
            </section>



            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-[34px] font-bold text-[#154b7d]">
                            How the System Works?
                        </h2>

                        <div className="mx-auto mt-3 h-[4px] w-[85px] rounded-full bg-[#1b5d90]" />

                        <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-slate-500">
                            A seamless six-stage technical flow ensuring the highest medical air
                            purity and reliability.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-6">

                        {steps.map((step, index) => {

                            const Icon = step.isSvg ? null : step.icon;

                            return (

                                <div
                                    key={step.title}
                                    className="relative flex flex-col items-center text-center"
                                >

                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-[88%] top-[24px] hidden lg:block">
                                            <span className="text-[22px] font-light text-[#c3c8d1]">
                                                →
                                            </span>
                                        </div>
                                    )}
                                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#d2d7df] bg-[#f7f8fa] shadow-sm">

                                        {step.isSvg ? (

                                            <img
                                                src={step.icon}
                                                alt={step.title}
                                                className="h-6 w-6 object-contain"
                                            />

                                        ) : (

                                            <Icon
                                                className="h-6 w-6 text-[#165483]"
                                                strokeWidth={1.8}
                                            />

                                        )}

                                    </div>

                                    <h3
                                        className="mt-4 text-[15px] font-semibold text-[#1b5b8f]"
                                    >
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 max-w-[150px] text-[12px] font-normal leading-[20px] text-[#4E5B69]">
                                        {step.text}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>
            </section>

            <section className="border-b border-slate-200 bg-[#f3f7fc]">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-16">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                            Our approach
                        </p>

                        <h2 className="mt-3 max-w-xl text-[38px] font-semibold tracking-tight text-[#1f5d8c] sm:text-[50px]">
                            Modular Design Philosophy
                        </h2>

                        <div className="mt-4 h-[4px] w-16 rounded-full bg-[#1f5d8c]" />

                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            Our engineering approach moves beyond traditional hard-capacity systems
                            by offering a modular architecture, redundant control, and a highly
                            efficient medical air solution that grows with your facility.
                        </p>

                        <Link
                            href="/products"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#d9e3ec] bg-white px-5 py-3 text-sm font-semibold text-[#184d7d] shadow-sm transition hover:border-[#1f5d8c]"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#184d7d]">
                                <ShieldCheck size={16} className="text-white" />
                            </div>

                            <span>The Integrex Advantage</span>

                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="w-full max-w-[360px] lg:mt-10">
                        <img src="/concept-diagram.png" alt="" /> // this section me image add karna baki hai
                    </div>
                </div>

                <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-14 sm:px-6 lg:grid-cols-3 lg:px-8">
                    {philosophyCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <LightCard
                                key={card.title}
                                className="flex h-full flex-col rounded-[18px] border border-[#dbe5ef] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(31,93,140,0.12)]"
                            >
                                {/* Top Icon */}

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef5fd]">
                                    <Icon
                                        size={18}
                                        strokeWidth={1.8}
                                        className="text-[#184d7d]"
                                    />
                                </div>

                                {/* Title */}

                                <h3 className="mt-3 text-[16px] font-bold uppercase tracking-[0.02em] text-[#184d7d]">
                                    {card.title}
                                </h3>

                                {/* Blue Line */}

                                <div className="mt-2 h-[3px] w-10 rounded-full bg-[#1f5d8c]" />

                                {/* Description */}

                                <p className="mt-3 text-[13px] leading-6 text-[#616c7a]">
                                    {card.description}
                                </p>

                                {/* Bullet */}

                                <ul className="mt-4 space-y-2">
                                    {card.bullets.map((bullet) => (
                                        <li
                                            key={bullet}
                                            className="flex items-center gap-2.5 text-[13px] text-[#4b5563]"
                                        >
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#2b6b9b]">
                                                <Check
                                                    size={11}
                                                    strokeWidth={3}
                                                    className="text-[#2b6b9b]"
                                                />
                                            </span>

                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </LightCard>
                        );
                    })}
                </div>
            </section>






            <section className="border-b border-[#e6edf5] bg-white">
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">

                    {/* Left Content */}
                    <div className="max-w-xl">

                        <h2 className="text-[32px] font-bold leading-tight text-[#184d7d]">
                            Ultra-High Purity Medical Air
                        </h2>

                        <div className="mt-3 h-[4px] w-16 rounded-full bg-[#1b5d90]" />

                        <p className="mt-5 text-[14px] leading-7 text-[#616c7a]">
                            Patient safety starts with the quality of the air they breathe. The
                            integrex™ system delivers medical air purity that complies with
                            stringent healthcare standards for reliability and performance.
                        </p>

                        <div className="mt-10 space-y-7">

                            {(() => {
                                const iconMap = {
                                    "100% Oil-Free": Sparkles,
                                    "Precision Dry": Wind,
                                    "Clinical Clean": ShieldCheck,
                                };

                                return purityBullets.map((item) => {
                                    const Icon = iconMap[item.title];

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex items-start gap-4"
                                        >
                                            {/* Icon */}

                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5fc]">

                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.8}
                                                    className="text-[#184d7d]"
                                                />

                                            </div>

                                            {/* Text */}

                                            <div>

                                                <h4 className="text-[15px] font-semibold text-[#184d7d]">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-1 text-[13px] leading-6 text-[#616c7a]">
                                                    {item.text}
                                                </p>

                                            </div>
                                        </div>
                                    );
                                });
                            })()}

                        </div>

                    </div>

                    {/* Right Image */}

                    <div className="flex items-center justify-center">

                        <div className="relative h-[480px] w-full max-w-[500px]">

                            <Image
                                src="/product-Air.png"
                                alt="Medical Air Purity System"
                                fill
                                priority
                                className="object-contain"
                                sizes="(max-width:1024px)100vw,50vw"
                            />

                        </div>

                    </div>

                </div>
            </section>

            <section className="border-b border-slate-200 bg-[#f4f8fd]">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                    <SectionTitle center title="Features & Critical Benefits" description="A focused set of cards that highlight the qualities most important to a medical air installation." />
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {featureTiles.map((tile) => (
                            <FeatureTile key={tile.title} {...tile} />
                        ))}
                    </div>
                </div>
            </section>


            <section id="specs" className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                    <SectionTitle center title="Technical Specifications" />

                    <div className="mt-8 overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(31,93,140,0.08)]">

                        {/* Table Header */}
                        <div className="bg-[#1f5d8c] px-6 py-4 text-sm font-semibold text-white">
                            <div className="grid grid-cols-[1.05fr_1.95fr]">
                                <div>Parameter</div>
                                <div>integrex™ Standard Configuration</div>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-slate-200">
                            {specs.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-[1.05fr_1.95fr] text-sm"
                                >
                                    {/* Left Column (Off White) */}
                                    <div className="bg-stone-50 border-r border-slate-200 px-6 py-4 font-semibold text-slate-700">
                                        {label}
                                    </div>

                                    {/* Right Column (White) */}
                                    <div className="bg-white px-6 py-4 text-slate-600">
                                        {value}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>




            <section className="border-b border-slate-200 bg-[#f4f8fd]">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                    <SectionTitle title="Standard Scope of Supply" />

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Included */}
                        <LightCard className="rounded-2xl border border-[#d9dde3] bg-white p-6 shadow-none min-h-[230px]">
                            <div className="flex items-center gap-2">

                                <CalendarDays
                                    size={15}
                                    strokeWidth={1.8}
                                    className="text-[#F15A29] flex-shrink-0"
                                />

                                <h3 className="text-sm font-semibold text-[#1f5d8c]">
                                    Included Components
                                </h3>
                            </div>

                            <ul className="mt-4 space-y-1 text-[13px] leading-5 text-slate-600">
                                {supplyIncluded.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#1f5d8c]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </LightCard>

                        {/* Optional */}
                        <LightCard className="rounded-2xl border border-[#d9dde3] bg-white p-6 shadow-none min-h-[230px]">
                            <div className="flex items-center gap-2">

                                <CirclePlus
                                    size={15}
                                    strokeWidth={1.8}
                                    className="text-[#F15A29] flex-shrink-0"
                                />
                                <h3 className="text-sm font-semibold text-[#1f5d8c]">
                                    Optional Accessories
                                </h3>
                            </div>

                            <ul className="mt-4 space-y-1 text-[13px] leading-5 text-slate-600">
                                {supplyOptional.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#f3562b]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </LightCard>
                    </div>
                </div>
            </section>



            {/* <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionTitle center title="Technical FAQ" />
          <div className="mt-8 grid gap-4">
            {faqItems.map((item, index) => (
              <FAQCard key={item.question} number={index + 1} {...item} />
            ))}
          </div>
        </div>
      </section> */}


            <section className="border-b border-[#e6edf5] bg-[#f8fbfe]">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

                    {/* Heading */}

                    <div className="text-center">
                        <h2 className="text-[34px] font-bold text-[#184d7d]">
                            Technical FAQ
                        </h2>

                        <div className="mx-auto mt-3 h-[4px] w-[82px] rounded-full bg-[#1b5d90]" />
                    </div>

                    {/* FAQ */}

                    <div className="mt-12 space-y-5">

                        {faqItems.map((item, index) => (

                            <div
                                key={index}
                                className="group overflow-hidden rounded-2xl border border-[#dfe7ef] bg-white transition-all duration-300 hover:shadow-xl"
                            >

                                {/* Question */}

                                <div className="flex items-center justify-between px-7 py-6 cursor-pointer">

                                    <h3 className="text-[15px] font-semibold text-[#1d1d1d]">
                                        {index + 1}. {item.question}
                                    </h3>

                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d7e3ef] text-[20px] font-light text-[#1b5d90] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#1b5d90] group-hover:text-white">
                                        +
                                    </div>

                                </div>

                                {/* Answer */}

                                <div
                                    className="
              grid
              grid-rows-[0fr]
              transition-all
              duration-500
              ease-in-out
              group-hover:grid-rows-[1fr]
            "
                                >

                                    <div className="overflow-hidden">

                                        <div className="px-7 pb-6">

                                            <div className="mb-5 h-px bg-[#edf2f7]" />

                                            <p className="text-[13px] leading-7 text-[#5c6776]">
                                                {item.answer}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            <section className=" pb-14">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                    <div className="rounded-[24px]  px-6 py-10 text-center sm:px-10 sm:py-12">
                        <h2 className="text-3xl font-semibold tracking-tight text-[#1f5d8c] sm:text-4xl">Ready to upgrade your medical air?</h2>
                        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                            Let’s find the right integrex medical air compressor system configuration for your hospital project. Our engineering team is ready to assist with sizing and custom layouts.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#f3562b] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(243,86,43,0.28)] transition hover:-translate-y-0.5 hover:bg-[#e24d20]">
                                Request a Custom Proposal
                            </Link>
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#1f5d8c] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(31,93,140,0.25)] transition hover:-translate-y-0.5 hover:bg-[#18486c]">
                                Schedule a Technical Call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}