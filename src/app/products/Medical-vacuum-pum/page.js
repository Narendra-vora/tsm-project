'use client';

import Link from "next/link";
import Image from "next/image";

export default function MedicalVacuumPumps() {
    return (
        <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-b from-[#eaf3fb] to-[#d9ecf9]">
            {/* Background image with waves */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/mgps_plant.png"
                    alt="MGPS Design"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb]/80 via-[#eaf3fb]/60 to-[#d9ecf9]/80" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-semibold text-[#0b477b] mb-5 leading-tight">
                    MGPS Design & Consulting
                    <br />
                    Services
                </h1>

                <p className="text-sm sm:text-base text-[#0b477b]/80 leading-relaxed mb-12 max-w-2xl mx-auto">
                    Medical gas pipeline system design, plant room planning,
                    and compliance support for hospitals. We provide
                    evidence-based engineering aligned with ISO 7396-1 and
                    HTM 02-01.
                </p>

                <Link
                    href="/contact"
                    className="inline-block bg-[#0b2d4e] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
                    style={{ textDecoration: "none" }}
                >
                    Discuss Your Project
                </Link>
            </div>
        </section>
    );
}