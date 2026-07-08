"use client";
import { FadeUp, HoverCard } from "@/components/Animations";

export default function PrivacyPolicyPage() {
    return (

        <main style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: "#f7f8fa", minHeight: "100vh", padding: "40px 16px" }}>

            <div style={{ maxWidth: 720, margin: "0 auto" }}>

                {/* Header Card */}
                <div style={{
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                    padding: "32px 36px 24px",
                    marginBottom: 20,
                    textAlign: "center",
                    border: "1px solid #e8eaf0"
                }}>
                    <FadeUp><h1 style={{ fontSize: 28, fontWeight: 700, color: "#1a2340", margin: "0 0 6px" }}>Privacy Policy</h1></FadeUp>
                    <p style={{ color: "#5a6280", fontSize: 14, margin: "0 0 20px" }}>Technik Spirits MedTech Private Limited</p>

                    {/* Info Bar */}
                    <div style={{
                        display: "inline-flex",
                        background: "#1a3a5c",
                        borderRadius: 8,
                        overflow: "hidden",
                        fontSize: 12,
                        color: "#fff"
                    }}>
                        <div style={{ padding: "10px 20px", borderRight: "1px solid rgba(255,255,255,0.15)" }}>
                            <div style={{ opacity: 0.7, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>Website</div>
                            <div style={{ fontWeight: 600 }}>https://tsmtech.in</div>
                        </div>
                        <div style={{ padding: "10px 20px", borderRight: "1px solid rgba(255,255,255,0.15)" }}>
                            <div style={{ opacity: 0.7, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>Effective Date</div>
                            <div style={{ fontWeight: 600 }}>1 June 2026</div>
                        </div>
                        <div style={{ padding: "10px 20px", background: "#1e4a72" }}>
                            <div style={{ opacity: 0.7, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>Last Updated</div>
                            <div style={{ fontWeight: 600 }}>25 June 2026</div>
                        </div>
                    </div>
                </div>

                {/* Section 1 */}
                <Section icon="ℹ️" number="1" title="Introduction">
                    <p style={p}>
                        Technik Spirits MedTech Private Limited ("we", "our", or "us") operates the website{" "}
                        <a href="https://tsmtech.in" style={{ color: "#e05a2b" }}>https://tsmtech.in</a>.
                        This Privacy Policy explains how we collect and use information when you visit our website.
                    </p>
                </Section>

                {/* Section 2 */}
                <Section icon="🗄️" number="2" title="Information We Collect">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
                        <InfoCard
                            icon="👤"
                            title="Directly Provided"
                            text="When you contact us or submit an enquiry, you may provide your name, email address, phone number, and location."
                        />
                        <InfoCard
                            icon="⚙️"
                            title="Automatically Collected"
                            text="When you visit our website, certain information is collected automatically, including your IP address, browser type, and pages visited. This is used solely to analyse and improve our website."
                        />
                    </div>
                </Section>

                {/* Section 3 */}
                <Section icon="🔧" number="3" title="How We Use Your Information">
                    <p style={{ ...p, marginBottom: 14 }}>We use the information we collect to:</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        {[
                            "Respond to your enquiries and provide product information.",
                            "Analyse website usage to improve our content and user experience.",
                            "Send product updates or communications where you have opted in.",
                            "Maintain compliance with medical data regulations.",
                        ].map((item, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13.5, color: "#3a4460" }}>
                                <span style={{ color: "#e05a2b", marginTop: 1, flexShrink: 0 }}>✔</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Section 4 */}
                <Section icon="📊" number="4" title="Analytics and Tracking">
                    <p style={p}>
                        We use Google Analytics and Zoho PageSense to analyse website traffic. These tools collect anonymised data subject to their respective privacy policies:
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
                        {[
                            { name: "Google Analytics", url: "https://policies.google.com/privacy" },
                            { name: "Zoho PageSense", url: "https://www.zoho.com/privacy.html" },
                        ].map((tool) => (
                            <a
                                key={tool.name}
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "12px 16px",
                                    background: "#f0f3f8",
                                    borderRadius: 7,
                                    fontSize: 13.5,
                                    color: "#1a2340",
                                    fontWeight: 500,
                                    textDecoration: "none",
                                    border: "1px solid #e0e4ef",
                                }}
                            >
                                {tool.name}
                                <span style={{ fontSize: 15, opacity: 0.5 }}>↗</span>
                            </a>
                        ))}
                    </div>
                </Section>

                {/* Section 5 */}
                <Section icon="📢" number="5" title="Advertising">
                    <p style={p}>
                        We run advertising campaigns through Google Ads and Meta Ads. These platforms may use cookies or pixel tracking to serve relevant ads. For details, refer to their privacy policies at{" "}
                        <a href="https://policies.google.com/privacy" style={{ color: "#e05a2b" }}>Google Privacy</a>{" "}
                        and{" "}
                        <a href="https://www.facebook.com/privacy/policy/" style={{ color: "#e05a2b" }}>Meta Privacy</a>.
                    </p>
                </Section>

                {/* Section 6 */}
                <Section icon="🍪" number="6" title="Cookies">
                    <p style={p}>
                        Our website uses cookies to support analytics and advertising functions. You may configure your browser to refuse cookies; however, some website features may not function correctly as a result.
                    </p>
                </Section>
                {/* Section 7 - Contact Us */}
                <div style={{
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                    padding: "24px 28px",
                    marginBottom: 16,
                    border: "1px solid #e8eaf0"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span style={{ fontSize: 18 }}>📞</span>
                        <FadeUp><h2 style={{ fontSize: 16.5, fontWeight: 700, color: "#1a2340", margin: 0 }}>7. Contact Us</h2></FadeUp>
                    </div>
                    <div style={{ borderTop: "1px dashed #e0e4ef", paddingTop: 16 }}>
                        <p style={{ fontSize: 13.5, color: "#4a5270", margin: "0 0 16px", lineHeight: 1.75 }}>
                            For any questions regarding this Privacy Policy, please contact us:
                        </p>

                        {/* Dark Blue Box */}
                        <div style={{
                            background: "#1a3a5c",
                            borderRadius: 10,
                            padding: "22px 24px",
                            display: "flex",
                            gap: 20,
                            alignItems: "flex-start"
                        }}>
                            {/* Left - Company Info */}
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 14 }}>
                                    TSM Tech Private Limited
                                </div>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                    <span style={{ color: "#a0b4c8", fontSize: 14, marginTop: 2 }}>📍</span>
                                    <p style={{ fontSize: 13, color: "#a0b4c8", margin: 0, lineHeight: 1.7 }}>
                                        123, Tech Park, Prahlad Nagar,<br />
                                        Ahmedabad, Gujarat – 380015, India
                                    </p>
                                </div>
                            </div>

                            {/* Right - Email + Support cards */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 260 }}>
                                <a href="mailto:info@tsmtech.in" style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    background: "#224d73", borderRadius: 8, padding: "12px 16px",
                                    textDecoration: "none"
                                }}>
                                    <span style={{ fontSize: 16 }}>✉️</span>
                                    <div>
                                        <div style={{ fontSize: 11, color: "#a0b4c8", marginBottom: 2 }}>Email</div>
                                        <div style={{ fontSize: 13.5, color: "#fff", fontWeight: 600 }}>info@tsmtech.in</div>
                                    </div>
                                </a>
                                <a href="https://tsmtech.in/contact/" target="_blank" rel="noopener noreferrer" style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    background: "#224d73", borderRadius: 8, padding: "12px 16px",
                                    textDecoration: "none"
                                }}>
                                    <span style={{ fontSize: 16 }}>🌐</span>
                                    <div>
                                        <div style={{ fontSize: 11, color: "#a0b4c8", marginBottom: 2 }}>Support</div>
                                        <div style={{ fontSize: 13.5, color: "#fff", fontWeight: 600 }}>tsmtech.in/contact/</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 8 - Changes to This Policy */}
                <div style={{
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                    padding: "24px 28px",
                    marginBottom: 16,
                    border: "1px solid #e8eaf0"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span style={{ fontSize: 18 }}>🕐</span>
                        <FadeUp><h2 style={{ fontSize: 16.5, fontWeight: 700, color: "#1a2340", margin: 0 }}>8. Changes to This Policy</h2></FadeUp>
                    </div>
                    <div style={{ borderTop: "1px dashed #e0e4ef", paddingTop: 16 }}>
                        <p style={{ fontSize: 13.5, color: "#4a5270", margin: 0, lineHeight: 1.75 }}>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
                        </p>
                    </div>
                </div>

                {/* Section 7 */}
                <Section icon="🔒" number="7" title="Data Security">
                    <p style={p}>
                        We take reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, or misuse. However, no internet transmission is entirely secure.
                    </p>
                </Section>

                {/* Section 8 */}
                <Section icon="👥" number="8" title="Third-Party Links">
                    <p style={p}>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
                    </p>
                </Section>

                {/* Section 9 */}
                <Section icon="📬" number="9" title="Contact Us">
                    <p style={p}>
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div style={{
                        marginTop: 14,
                        background: "#f0f3f8",
                        borderRadius: 8,
                        padding: "16px 20px",
                        fontSize: 13.5,
                        color: "#3a4460",
                        lineHeight: 1.9,
                        border: "1px solid #e0e4ef"
                    }}>
                        <div><strong>TSM Tech Private Limited</strong></div>
                        <div>📧 <a href="mailto:privacy@tsmtech.in" style={{ color: "#e05a2b" }}>privacy@tsmtech.in</a></div>
                        <div>🌐 <a href="https://tsmtech.in" style={{ color: "#e05a2b" }}>https://tsmtech.in</a></div>
                    </div>
                </Section>

            </div>
        </main>
    );
}

/* Reusable Section wrapper */
function Section({ icon, number, title, children }) {
    return (
        <div style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
            padding: "24px 28px",
            marginBottom: 16,
            border: "1px solid #e8eaf0"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 18 }}>{icon}</span>
                <FadeUp><h2 style={{ fontSize: 16.5, fontWeight: 700, color: "#1a2340", margin: 0 }}>
                    {number}. {title}
                </h2></FadeUp>
            </div>
            <div style={{ borderTop: "1px dashed #e0e4ef", paddingTop: 16 }}>
                {children}
            </div>
        </div>
    );
}

/* Two-column info card */
function InfoCard({ icon, title, text }) {
    return (
        <div style={{
            background: "#f7f9fc",
            borderRadius: 8,
            padding: "14px 16px",
            border: "1px solid #e8eaf0"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1a2340" }}>{title}</span>
            </div>
            <p style={{ fontSize: 13, color: "#5a6280", margin: 0, lineHeight: 1.7 }}>{text}</p>
        </div>
    );
}

const p = {
    fontSize: 13.5,
    color: "#4a5270",
    margin: 0,
    lineHeight: 1.75
};
