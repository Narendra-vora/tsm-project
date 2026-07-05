
// // "use client";
// // import Link from "next/link";
// // import Image from "next/image";

// // const stats = [
// //   { value: "50+", label: "Years of Manufacturing" },
// //   { value: "3", label: "Generations of Expertise" },
// //   { value: "Patent", label: "Integrex System Technology" },
// //   { value: "CDSCO", label: "Registered Medical Device Maker" },
// //   { value: "ISO 13485", label: "Quality Management Certified" },
// // ];

// // export default function HeroSection() {
// //   return (
// //     <section className="relative w-1280px overflow-hidden" style={{ minHeight: "936px" }}>

// //       {/* Background image */}
// //       <div className="absolute inset-0 z-0">
// //         <Image
// //           src="/hero-bg.png"
// //           alt="Medical Gas Plant Room"
// //           fill
// //           className="object-cover object-center"
// //           priority
// //         />
// //         {/* Dark blue overlay */}
// //         <div className="absolute inset-0" style={{ background: "rgba(8, 32, 60, 0.72)" }} />
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 flex flex-col justify-between" style={{ minHeight: "92vh", padding: "0" }}>

// //         {/* Main content */}
// //         <div className="flex-1 flex items-center">
// //           <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", padding: "80px 48px 40px" }}>

// //             {/* Badge */}
// //             <div style={{
// //               display: "inline-flex",
// //               alignItems: "center",
// //               gap: 8,
// //               background: "rgba(230, 92, 0, 0.15)",
// //               border: "1px solid rgba(230, 92, 0, 0.5)",
// //               borderRadius: 20,
// //               padding: "6px 16px",
// //               marginBottom: 28,
// //             }}>
// //               <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E05A36" }} />
// //               <span style={{ fontSize: 11, fontWeight: 700, color: "#E05A36", letterSpacing: 2, textTransform: "uppercase" }}>
// //                 Specialists in MGPS Plant Room Equipment
// //               </span>
// //             </div>

// //             {/* Headline */}
// //             <h1 style={{
// //               fontSize: "clamp(40px, 5vw, 68px)",
// //               fontWeight: 700,
// //               color: "#ffffff",
// //               lineHeight: 1.1,
// //               margin: "0 0 8px",
// //               maxWidth: 620,
// //             }}>
// //               Medical Gas<br />
// //               Pipeline Systems<br />
// //               <span style={{ color: "#E05A36" }}>for Hospitals</span>
// //             </h1>

// //             {/* Description */}
// //             <p style={{
// //               fontSize: 15,
// //               color: "rgba(255,255,255,0.75)",
// //               lineHeight: 1.8,
// //               margin: "24px 0 36px",
// //               maxWidth: 440,
// //             }}>
// //               We design and manufacture source equipment for Medical Gas Pipeline Systems (MGPS), including medical air compressors, medical vacuum pumps, oxygen generators, and anaesthetic gas scavenging systems (AGSS).
// //             </p>

// //             {/* Buttons */}
// //             <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
// //               <Link href="/products" style={{
// //                 display: "inline-flex", alignItems: "center", gap: 8,
// //                 background: "#E05A36",
// //                 color: "#fff",
// //                 padding: "14px 28px",
// //                 borderRadius: 30,
// //                 fontSize: 14,
// //                 fontWeight: 700,
// //                 textDecoration: "none",
// //                 letterSpacing: 0.3,
// //               }}>
// //                 Explore Products
// //               </Link>
// //               <Link href="/contact" style={{
// //                 display: "inline-flex", alignItems: "center", gap: 8,
// //                 background: "transparent",
// //                 color: "#fff",
// //                 padding: "14px 28px",
// //                 borderRadius: 30,
// //                 fontSize: 14,
// //                 fontWeight: 600,
// //                 textDecoration: "none",
// //                 border: "1.5px solid rgba(255,255,255,0.5)",
// //               }}>
// //                 Discuss Your Project
// //               </Link>
// //             </div>

// //           </div>
// //         </div>

// //         {/* Stats bar — bottom */}
// //         <div style={{
// //           width: "100%",
// //           background: "rgba(8, 32, 60, 0.85)",
// //           borderTop: "1px solid rgba(255,255,255,0.08)",
// //           padding: "24px 48px",
// //         }}>
// //           <div style={{
// //             maxWidth: 1300,
// //             margin: "0 auto",
// //             display: "flex",
// //             alignItems: "center",
// //             gap: 0,
// //           }}>
// //             {stats.map((s, i) => (
// //               <div key={i} style={{
// //                 flex: 1,
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 gap: 4,
// //                 paddingRight: i < stats.length - 1 ? 32 : 0,
// //                 borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
// //                 marginRight: i < stats.length - 1 ? 32 : 0,
// //               }}>
// //                 <span style={{
// //                   fontSize: 22,
// //                   fontWeight: 800,
// //                   color: "#ffffff",
// //                   lineHeight: 1,
// //                 }}>{s.value}</span>
// //                 <span style={{
// //                   fontSize: 11,
// //                   color: "rgba(255,255,255,0.50)",
// //                   fontWeight: 500,
// //                   letterSpacing: 0.3,
// //                 }}>{s.label}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import Link from "next/link";
// import Image from "next/image";

// const stats = [
//   { value: "50+", label: "Years of Manufacturing" },
//   { value: "3", label: "Generations of Expertise" },
//   { value: "Patent", label: "Integrex System Technology" },
//   { value: "CDSCO", label: "Registered Medical Device Maker" },
//   { value: "ISO 13485", label: "Quality Management Certified" },
// ];

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-[650px] flex flex-col overflow-hidden">

//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/hero-bg.png"
//           alt="Medical Gas Plant Room"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//         {/* Dark blue overlay */}
//         <div className="absolute inset-0" style={{ background: "rgba(8, 32, 60, 0.72)" }} />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col flex-1">

//         {/* Main content */}
//         <div className="flex-1 flex items-center">
//           <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-12 py-16 sm:py-20">

//             {/* Badge */}
//             <div
//               className="inline-flex items-center gap-2 rounded-full mb-7"
//               style={{
//                 background: "rgba(230, 92, 0, 0.15)",
//                 border: "1px solid rgba(230, 92, 0, 0.5)",
//                 padding: "6px 16px",
//               }}
//             >
//               <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E05A36" }} />
//               <span
//                 className="text-[11px] font-bold uppercase"
//                 style={{ color: "#E05A36", letterSpacing: 2 }}
//               >
//                 Specialists in MGPS Plant Room Equipment
//               </span>
//             </div>

//             {/* Headline */}
//             <h1
//               className="font-bold text-white mb-2"
//               style={{
//                 fontSize: "clamp(40px, 5vw, 68px)",
//                 lineHeight: 1.1,
//                 maxWidth: 620,
//               }}
//             >
//               Medical Gas<br />
//               Pipeline Systems<br />
//               <span style={{ color: "#E05A36" }}>for Hospitals</span>
//             </h1>

//             {/* Description */}
//             <p
//               className="text-[15px] leading-[1.8]"
//               style={{
//                 color: "rgba(255,255,255,0.75)",
//                 margin: "24px 0 36px",
//                 maxWidth: 440,
//               }}
//             >
//               We design and manufacture source equipment for Medical Gas Pipeline Systems (MGPS), including medical air compressors, medical vacuum pumps, oxygen generators, and anaesthetic gas scavenging systems (AGSS).
//             </p>

//             {/* Buttons */}
//             <div className="flex gap-3.5 flex-wrap">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center gap-2 text-white rounded-full text-sm font-bold"
//                 style={{
//                   background: "#E05A36",
//                   padding: "14px 28px",
//                   letterSpacing: 0.3,
//                 }}
//               >
//                 Explore Products
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 text-white rounded-full text-sm font-semibold"
//                 style={{
//                   background: "transparent",
//                   padding: "14px 28px",
//                   border: "1.5px solid rgba(255,255,255,0.5)",
//                 }}
//               >
//                 Discuss Your Project
//               </Link>
//             </div>

//           </div>
//         </div>

//         {/* Stats bar — stays pinned to bottom of hero, inside the section */}
//         <div
//           className="w-full"
//           style={{
//             background: "rgba(8, 32, 60, 0.85)",
//             borderTop: "1px solid rgba(255,255,255,0.08)",
//           }}
//         >
//           <div className="max-w-[1300px] mx-auto flex flex-wrap items-center px-6 sm:px-12 py-6">
//             {stats.map((s, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col gap-1"
//                 style={{
//                   flex: "1 1 33%",
//                   minWidth: 140,
//                   paddingRight: i < stats.length - 1 ? 32 : 0,
//                   borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
//                   marginRight: i < stats.length - 1 ? 32 : 0,
//                   marginBottom: 12,
//                 }}
//               >
//                 <span className="text-[22px] font-extrabold text-white leading-none">
//                   {s.value}
//                 </span>
//                 <span
//                   className="text-[11px] font-medium"
//                   style={{ color: "rgba(255,255,255,0.50)", letterSpacing: 0.3 }}
//                 >
//                   {s.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
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
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link
                href="/products"
                className="bg-[#0b477b] hover:bg-[#0d599b] text-white text-center px-10 py-4 rounded-full text-base font-semibold shadow-md transition-all duration-500 hover:scale-[1.02]"
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