import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-[#0b477b] text-white w-full">
            <div className="w-full mx-auto px-6 py-4">

                {/* Top grid */}
                <div className="grid grid-cols-4 gap-4">

                    {/* Col 1 — Logo + tagline */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Link href="/" className="flex items-center gap-3 group">

                                <img
                                    src="/Technik Spirit Medtech_logo.png"
                                    alt="Technik Spirits MedTech"
                                    style={{ height: 48, width: "auto" }}
                                />
                            </Link>
                            <div>
                                <div className="text-md font-black text-white leading-tight">Technik Spirits</div>
                                <div className="text-md font-black text-white leading-tight">MedTech</div>
                                <div className="text-md font-black text-white leading-tight">Pvt. Ltd.</div>
                            </div>
                        </div>
                        <p className="text-sm text-blue-200 leading-relaxed">
                            Manufacturers of MGPS equipment for <br />hospitals since 1971. Delivering precision-<br />engineered medical air and gas solutions<br /> worldwide.
                        </p>
                    </div>

                    {/* Col 2 — Products */}
                    <div>
                        <h3 className="text-xl text-white mb-2 tracking-wide ">Products</h3>
                        <div className="w-64 h-[2px] bg-white/15 mb-3 rounded-full" />
                        <ul className="space-y-1.5">
                            {[
                                "Integrex Medical Air Compressor",
                                "Medical Vacuum Pump System – Rotary Vane",
                                "Medical Oxygen Generator",
                                "Anaesthetic Gas Scavenging System (AGSS)",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/products"
                                        className="text-sm text-blue-200 hover:text-white transition-colors leading-snug"
                                        style={{ textDecoration: "none" }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Also in Our Portfolio */}
                    <div>
                        <h3 className="text-xl text-white mb-2 tracking-wide ">Also in Our Portfolio</h3>
                        <div className="w-64 h-[2px] bg-white/15 mb-3 rounded-full" />
                        <ul className="space-y-1.5">
                            {[
                                "Medical Vacuum Pump System – Reciprocating",
                                "Medical Ventilator Air Compressor",
                                "MGPS Design Services",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/products"
                                        className="text-sm text-blue-200 hover:text-white transition-colors leading-snug"
                                        style={{ textDecoration: "none" }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Contact & Location */}
                    <div>
                        <h3 className="text-xl text-white mb-2 tracking-wide ">Contact & Location</h3>
                        <div className="w-64 h-[2px] bg-white/15 mb-3 rounded-full" />
                        <ul className="space-y-1.5">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-300 mt-0.5 text-xs">📍</span>
                                <span className="text-sm text-blue-200 leading-snug">Ahmedabad, Gujarat, India</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-300 mt-0.5 text-xs">✉️</span>
                                <a
                                    href="mailto:sales@ts11.in"
                                    className="text-sm text-blue-200 hover:text-white transition-colors"
                                    style={{ textDecoration: "none" }}
                                >
                                    sales@ts11.in
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-300 mt-0.5 text-xs">📞</span>
                                <a
                                    href="tel:+919033009328"
                                    className="text-sm text-blue-200 hover:text-white transition-colors"
                                    style={{ textDecoration: "none" }}
                                >
                                    +91 90330 09328
                                </a>
                            </li>
                        </ul>

                        {/* Social icons */}
                        <div className="flex gap-2 mt-4">
                            {[
                                { icon: "𝕏", href: "#", label: "Twitter" },
                                { icon: "f", href: "#", label: "Facebook" },
                                { icon: "in", href: "#", label: "LinkedIn" },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-7 h-7 rounded-full border border-blue-400/40 bg-white/10 flex items-center justify-center text-xs font-bold text-white hover:bg-white/20 transition-colors"
                                    style={{ textDecoration: "none" }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/15 mt-6 pt-4 flex items-center justify-between">
                    <div className="flex gap-5">
                        <Link
                            href="/private-policy"
                            className="text-xs text-blue-300 hover:text-white transition-colors"
                            style={{ textDecoration: "none" }}
                        >
                            Private Policy
                        </Link>
                        <Link
                            href="/sitemap"
                            className="text-xs text-blue-300 hover:text-white transition-colors"
                            style={{ textDecoration: "none" }}
                        >
                            Sitemap
                        </Link>
                    </div>
                    <p className="text-xs text-blue-300">
                        © 2024 Technik Spirits. ISO Certified Medical Engineering.
                    </p>
                </div>

            </div>
        </footer>
    );
}