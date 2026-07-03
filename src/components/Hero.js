import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full lg:h-[calc(100vh-80px)] min-h-[700px] lg:min-h-0 bg-white overflow-hidden mb-6">
      <div className="w-full h-full px-6 sm:px-10 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full py-12 lg:py-0">

          {/* Left Column: Text & Content */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center text-left relative pr-0 lg:pr-8 h-full">

            {/* Pill Badge */}
            <div className="inline-block bg-[#eef5fc] text-[#0d4c82] px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-[#e0ecf8]">
              SPECIALISTS IN MGPS PLANT ROOM EQUIPMENT
            </div>

            {/* Main Heading — bigger */}
            <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[56px] font-bold text-[#0b477b] leading-[1.12] tracking-tight">
              Medical <br className="hidden sm:inline" />
              Pipeline System <br />
              for Hospitals
            </h1>

            {/* Short Underline */}
            <div className="w-20 h-1 bg-[#0b477b] mt-4 mb-7 rounded-full" />

            {/* Description — bigger */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-9">
              We design and manufacture source equipment for Medical Gas
              Pipeline Systems (MGPS), including medical air compressors,
              medical vacuum pumps, oxygen generators, and anaesthetic
              gas scavenging systems (AGSS).
            </p>

            {/* Action Buttons — bigger */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/products"
                className="bg-[#0b477b] hover:bg-[#0d599b] text-white text-center px-9 py-3.5 rounded-full text-base font-semibold shadow-md transition-all duration-200 hover:scale-[1.02]"
                style={{ textDecoration: "none" }}
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 hover:border-[#0b477b] text-gray-800 hover:text-[#0b477b] bg-white text-center px-9 py-3.5 rounded-full text-base font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ textDecoration: "none" }}
              >
                Discuss Your Project
              </Link>
            </div>

          </div>

          {/* Right Column — full bleed image */}
          <div className="lg:col-span-7 relative w-full h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-full lg:w-[60vw] lg:ml-auto overflow-hidden">

              {/* Curve overlay */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full fill-white pointer-events-none z-10 hidden lg:block"
              >
                <path d="M0,0 L48,0 C30,16 12,55 0,100 Z" />
              </svg>

              {/* Image — fills full height, no gaps */}
              <Image
                src="/mguc.png"
                alt="Medical Gas Pipeline System (MGPS) equipment"
                fill
                priority
                sizes="(max-width: 1026px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}