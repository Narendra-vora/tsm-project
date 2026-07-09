import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-[#0b477b] text-white w-full">
            <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 py-10">

                {/* Top grid — 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[230px_1fr_1fr_1fr] gap-8 items-start">

                    {/* Col 1 — Logo + tagline */}
                    <div>
                        <div className="flex items-center gap-3 mb-0">
                            <Link href="/" className="flex items-center gap-3 group">
                                <img
                                    src="/Technik-Spirit-logo.png"
                                    alt="Technik Spirits MedTech"
                                    style={{ height: 110, width: "auto" }}
                                />
                            </Link>
                        </div>
                        <p className="text-base text-blue-200 leading-relaxed max-w-[280px]">
                            Manufacturers of MGPS equipment for hospitals since 1971. Delivering precision-engineered medical air and gas solutions worldwide.
                        </p>
                    </div>

                    {/* Col 2 — Products */}
                    <div className="mt-0 lg:mt-9">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#E05A36] mb-1.5 tracking-wide">Products</h3>
                        <div className="w-24 h-[1px] bg-white/25 mb-3 rounded-full" />
                        <ul className="space-y-3">
                            {[
                                "integrex Medical Air Compressor",
                                "Medical Vacuum Pump System — Rotary Vane",
                                "Medical Oxygen Generator",
                                "Anaesthetic Gas Scavenging System (AGSS)",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/products"
                                        className="text-base text-blue-200 hover:text-white max-w-[210px] transition-colors leading-snug"
                                        style={{ textDecoration: "none" }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Also in Our Portfolio */}
                    <div className="mt-0 lg:mt-9">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#E05A36] mb-1.5 tracking-wide">Also in Our Portfolio</h3>
                        <div className="w-24 h-[1px] bg-white/25 mb-3 rounded-full" />
                        <ul className="space-y-3">
                            {[
                                "Medical Vacuum Pump System — Reciprocating",
                                "Medical Oxygen Generator",
                                "Medical Ventilator Air Compressor",
                                "MGPS Design Services",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/products"
                                        className="text-base text-blue-200 hover:text-white transition-colors leading-snug"
                                        style={{ textDecoration: "none" }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Contact & Location */}
                    <div className="mt-0 lg:mt-9">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#E05A36] mb-1.5 tracking-wide">Contact & Location</h3>
                        <div className="w-24 h-[1px] bg-white/25 mb-3 rounded-full" />
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-300 mt-0.5 text-sm">📍</span>
                                <span className="text-base text-blue-200 leading-snug">Ahmedabad, Gujarat, India</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-300 mt-0.5 text-sm">✉️</span>
                                <a
                                    href="mailto:sales@ts11.in"
                                    className="text-base text-blue-200 hover:text-white transition-colors"
                                    style={{ textDecoration: "none" }}
                                >
                                    sales@ts11.in
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-300 mt-0.5 text-sm">📞</span>
                                <a
                                    href="tel:+919033009328"
                                    className="text-base text-blue-200 hover:text-white transition-colors"
                                    style={{ textDecoration: "none" }}
                                >
                                    +91 90330 09328
                                </a>
                            </li>
                        </ul>

                        {/* Social icons */}
                        <div className="flex gap-2.5 mt-6">
                            {[
                                {
                                    href: "https://wa.me/919033009328",
                                    label: "WhatsApp",
                                    color: "#25D366",
                                    svg: (
                                        <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
                                            <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.354.687 4.548 1.872 6.396L4 29l7.789-1.83A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818a9.78 9.78 0 0 1-4.994-1.367l-.358-.213-4.622 1.087 1.234-4.5-.233-.37A9.77 9.77 0 0 1 6.182 15c0-5.42 4.4-9.818 9.819-9.818S25.818 9.58 25.818 15 21.42 24.818 16.001 24.818zm5.377-7.34c-.294-.147-1.741-.859-2.011-.957-.27-.098-.467-.147-.663.147-.196.294-.76.957-.932 1.153-.171.196-.343.221-.637.074-.294-.147-1.242-.457-2.366-1.457-.874-.78-1.464-1.743-1.636-2.037-.171-.294-.018-.453.129-.6.132-.132.294-.343.441-.514.147-.171.196-.294.294-.49.098-.196.049-.368-.025-.514-.074-.147-.663-1.598-.909-2.189-.24-.575-.484-.497-.663-.507l-.564-.01c-.196 0-.514.074-.784.368-.27.294-1.03 1.006-1.03 2.454 0 1.447 1.055 2.846 1.202 3.042.147.196 2.077 3.17 5.033 4.444.703.303 1.252.484 1.68.62.706.225 1.348.193 1.856.117.566-.085 1.741-.712 1.986-1.4.245-.688.245-1.277.171-1.4-.074-.123-.27-.196-.564-.343z" />
                                        </svg>
                                    ),
                                },
                                {
                                    href: "https://www.facebook.com/TechnikSpiritsInc",
                                    label: "Facebook",
                                    color: "#1877F2",
                                    svg: (
                                        <svg viewBox="0 0 320 512" width="14" height="14" fill="currentColor">
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                        </svg>
                                    ),
                                },
                                {
                                    href: "https://in.linkedin.com/company/technikspiritsmedtech",
                                    label: "LinkedIn",
                                    color: "#0A66C2",
                                    svg: (
                                        <svg viewBox="0 0 448 512" width="14" height="14" fill="currentColor">
                                            <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.9 0 53.19a53.19 53.19 0 0 1 106.38 0c0 29.71-24.1 53.81-53.9 53.81zM447.9 448h-92.68V302.4c0-34.7-.7-79.34-48.34-79.34-48.35 0-55.75 37.75-55.75 76.78V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                        </svg>
                                    ),
                                },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.label === "WhatsApp" ? "_blank" : undefined}
                                    rel={s.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                                    aria-label={s.label}
                                    style={{ textDecoration: "none", color: s.color }}
                                    className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                                >
                                    {s.svg}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom bar — lighter strip */}
            <div className="bg-[#1e5a94] w-full">
                <div className="w-full mx-auto px-6 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                    <div className="flex gap-5">
                        <Link
                            href="/privacy-policy"
                            className="text-sm text-blue-200 hover:text-white transition-colors"
                            style={{ textDecoration: "none" }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/sitemap"
                            className="text-sm text-blue-200 hover:text-white transition-colors"
                            style={{ textDecoration: "none" }}
                        >
                            Sitemap
                        </Link>
                    </div>
                    <p className="text-sm text-blue-200">
                        © 2024 Technik Spirits. ISO Certified Medical Engineering.
                    </p>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://api.whatsapp.com/send?phone=+919825888788"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                style={{ textDecoration: "none" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="30"
                    height="30"
                    fill="white"
                >
                    <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.354.687 4.548 1.872 6.396L4 29l7.789-1.83A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818a9.78 9.78 0 0 1-4.994-1.367l-.358-.213-4.622 1.087 1.234-4.5-.233-.37A9.77 9.77 0 0 1 6.182 15c0-5.42 4.4-9.818 9.819-9.818S25.818 9.58 25.818 15 21.42 24.818 16.001 24.818zm5.377-7.34c-.294-.147-1.741-.859-2.011-.957-.27-.098-.467-.147-.663.147-.196.294-.76.957-.932 1.153-.171.196-.343.221-.637.074-.294-.147-1.242-.457-2.366-1.457-.874-.78-1.464-1.743-1.636-2.037-.171-.294-.018-.453.129-.6.132-.132.294-.343.441-.514.147-.171.196-.294.294-.49.098-.196.049-.368-.025-.514-.074-.147-.663-1.598-.909-2.189-.24-.575-.484-.497-.663-.507l-.564-.01c-.196 0-.514.074-.784.368-.27.294-1.03 1.006-1.03 2.454 0 1.447 1.055 2.846 1.202 3.042.147.196 2.077 3.17 5.033 4.444.703.303 1.252.484 1.68.62.706.225 1.348.193 1.856.117.566-.085 1.741-.712 1.986-1.4.245-.688.245-1.277.171-1.4-.074-.123-.27-.196-.564-.343z" />
                </svg>
            </a>
        </footer>
    );
}