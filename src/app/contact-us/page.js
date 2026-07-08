"use client";
import { useState } from "react";
import Image from "next/image";
import { MessageSquare, ChevronRight, Mail, Phone, Globe } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        youAre: "",
        salutation: "Dr",
        name: "",
        mobile: "",
        email: "",
        cityState: "",
        beds: "",
        speciality: "",
        requirement: "",
        robot: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handle = (field, value) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = () => {
        if (!formData.name || !formData.mobile || !formData.email) {
            alert("Please fill in Name, Mobile, and Email.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: "#f4f6f9", minHeight: "100vh" }}>

            {/* Hero Banner */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[340px] lg:h-[380px] flex items-center bg-white border-b border-gray-100 overflow-hidden">

                {/* Right — image full cover */}
                <div className="absolute right-0 top-0 h-full w-[55%]">
                    {/* Left fade blend */}
                    <div
                        className="absolute left-0 top-0 h-full w-40 z-10"
                        style={{ background: "linear-gradient(to right, white, transparent)" }}
                    />
                    <img
                        src="/contact.png"
                        alt="Contact"
                        className="w-full h-full object-cover object-left-top"
                    />
                </div>

                {/* Left — text */}
                <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-8">
                    <div className="max-w-sm">
                        <h1 className="text-7xl sm:text-6xl md:text-[66px] font-semibold text-[#0b477b] tracking-tight mb-4">
                            Contact Us
                        </h1>
                        <p className="text-[#3a536b] text-sm sm:text-md font-medium leading-relaxed max-w-[900px]">
                            Partner with India's leader in precision medical engineering and healthcare gas piping systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">

                    {/* LEFT - Column containing the contact cards */}
                    <div className="flex flex-col gap-6">

                        {/* WhatsApp Box */}
                        <a
                            href="https://api.whatsapp.com/send?phone=+919825888788"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-[#15C55D] hover:bg-[#12B052] transition-colors rounded-xl p-4 shadow-sm group"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="flex items-center gap-5">
                                <div className="text-white bg-white/20 p-2 rounded-lg">
                                    <MessageSquare className="w-7 h-5 fill-white text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-white/90 tracking-wider uppercase leading-none mb-1">
                                        QUICK CONTACT
                                    </span>
                                    <span className="text-base font-bold text-white leading-tight">
                                        WhatsApp Click to Chat
                                    </span>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                        </a>

                        {/* Company Address Card */}
                        <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                            <h2 className="text-[15px] font-bold text-[#1a2340] leading-snug">
                                Technik Spirits MedTech Private Limited
                            </h2>
                            <p className="text-[12px] text-[#8a94a8] mt-1 mb-6">
                                (Formerly Technik Spirits Inc.)
                            </p>

                            <div className="mb-6">
                                <h3 className="text-[11px] font-bold text-[#0b477b] uppercase tracking-wider mb-2">
                                    REGISTERED OFFICE
                                </h3>
                                <p className="text-[13px] text-[#5a6280] leading-relaxed">
                                    67, Vishala Industrial – 1 (East),<br />
                                    Kathwada, S.P. Ring Road, Ahmedabad – 382 430<br />
                                    Gujarat, India.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[11px] font-bold text-[#0b477b] uppercase tracking-wider mb-2">
                                    ALSO AT
                                </h3>
                                <p className="text-[13px] text-[#5a6280] leading-relaxed">
                                    Office No.: 9, Centre for Advancing and Launching Enterprises (CrAdLE),<br />
                                    Entrepreneurship Development Institute of India (EDII),<br />
                                    Bhat, Gandhinagar – 382 428,<br />
                                    Gujarat, India.
                                </p>
                            </div>
                        </div>

                        {/* Email & Phone Card */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col gap-4 p-5">
                            <div className="relative border border-gray-200 rounded-xl p-4 bg-white flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0b477b] flex-shrink-0">
                                    <Mail className="w-5 h-5 text-[#0b477b]" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold mb-0.5">Email</div>
                                    <a href="mailto:sales@ts11.in" className="text-[13.5px] font-semibold text-[#1a3a5c] hover:text-[#0b477b] transition-colors" style={{ textDecoration: 'none' }}>
                                        sales@ts11.in
                                    </a>
                                </div>
                            </div>

                            <div className="relative border border-gray-200 rounded-xl p-4 bg-white flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0b477b] flex-shrink-0">
                                    <Phone className="w-5 h-5 text-[#0b477b]" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold mb-0.5">Phone</div>
                                    <a href="tel:+919033009328" className="text-[13.5px] font-semibold text-[#1a3a5c] hover:text-[#0b477b] transition-colors" style={{ textDecoration: 'none' }}>
                                        +91 90330 09328
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Card */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4">
                            <div className="text-[10px] text-gray-400 uppercase tracking-widest text-center mb-3 font-semibold">Follow Us</div>
                            <div className="flex justify-center gap-4">
                                {[
                                    {
                                        Icon: () => <Globe className="w-4 h-4" />,
                                        label: "Website",
                                        href: "https://technikspirits.com/"
                                    },
                                    {
                                        Icon: () => (
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                        ),
                                        label: "Facebook",
                                        href: "https://www.facebook.com/TechnikSpiritsInc"
                                    },
                                    {
                                        Icon: () => (
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                            </svg>
                                        ),
                                        label: "LinkedIn",
                                        href: "https://in.linkedin.com/company/technikspiritsmedtech"
                                    },
                                ].map(({ Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={label}
                                        className="w-10 h-10 rounded-xl border border-gray-200 bg-gray-50 hover:bg-[#eef5fc] hover:border-[#0b477b] flex items-center justify-center text-[#0b477b] transition-colors"
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT - Form */}
                    <div style={{
                        background: "#fff",
                        borderRadius: 10,
                        padding: "24px 26px",
                        border: "1px solid #e0e4ef",
                        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                        alignSelf: "start",
                    }}>
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "60px 20px" }}>
                                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                                <h2 style={{ color: "#1a2340", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Inquiry Submitted!</h2>
                                <p style={{ color: "#5a6280", fontSize: 14 }}>Our team will get back to you within one working day.</p>
                            </div>
                        ) : (
                            <>
                                <p style={{ fontSize: 14, color: "#3a4460", margin: "0 0 20px", lineHeight: 1.6 }}>
                                    Leave us a message and our team will get back to you within one working day.
                                </p>

                                {/* You are */}
                                <div style={{ marginBottom: 16 }}>
                                    <Label>You are a:</Label>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 8 }}>
                                        {["End User", "Consultant", "Architect", "MGPS Contractor", "Other"].map((role) => (
                                            <label key={role} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#3a4460", cursor: "pointer" }}>
                                                <input
                                                    type="radio"
                                                    name="youAre"
                                                    value={role}
                                                    checked={formData.youAre === role}
                                                    onChange={() => handle("youAre", role)}
                                                    style={{ accentColor: "#1a3a5c" }}
                                                />
                                                {role}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Salutation + Name */}
                                <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 10, marginBottom: 14 }}>
                                    <div>
                                        <Label>Sal.</Label>
                                        <select
                                            value={formData.salutation}
                                            onChange={(e) => handle("salutation", e.target.value)}
                                            style={inputStyle}
                                        >
                                            {["Dr", "Mr", "Mrs", "Ms", "Prof"].map((s) => (
                                                <option key={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <Label>Name *</Label>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={(e) => handle("name", e.target.value)}
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                {/* Mobile + Email */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                                    <div>
                                        <Label>Mobile *</Label>
                                        <input
                                            type="text"
                                            placeholder="+91 00000 00000"
                                            value={formData.mobile}
                                            onChange={(e) => handle("mobile", e.target.value)}
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <Label>Email *</Label>
                                        <input
                                            type="email"
                                            placeholder="example@domain.com"
                                            value={formData.email}
                                            onChange={(e) => handle("email", e.target.value)}
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                {/* City, State */}
                                <div style={{ marginBottom: 14 }}>
                                    <Label>City, State</Label>
                                    <input
                                        type="text"
                                        placeholder="Ahmedabad, Gujarat"
                                        value={formData.cityState}
                                        onChange={(e) => handle("cityState", e.target.value)}
                                        style={inputStyle}
                                    />
                                </div>

                                {/* No. of Beds */}
                                <div style={{ marginBottom: 14 }}>
                                    <Label>No. of Beds:</Label>
                                    <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
                                        {["<50", "50-100", "100-300", ">300"].map((b) => (
                                            <label key={b} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#3a4460", cursor: "pointer" }}>
                                                <input
                                                    type="radio"
                                                    name="beds"
                                                    value={b}
                                                    checked={formData.beds === b}
                                                    onChange={() => handle("beds", b)}
                                                    style={{ accentColor: "#1a3a5c" }}
                                                />
                                                {b}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Speciality */}
                                <div style={{ marginBottom: 14 }}>
                                    <Label>Specialities:</Label>
                                    <input
                                        type="text"
                                        placeholder="Cardiology, Oncology, etc."
                                        value={formData.speciality}
                                        onChange={(e) => handle("speciality", e.target.value)}
                                        style={inputStyle}
                                    />
                                </div>

                                {/* Requirement */}
                                <div style={{ marginBottom: 16 }}>
                                    <Label>Briefly describe your requirement:</Label>
                                    <textarea
                                        rows={4}
                                        value={formData.requirement}
                                        onChange={(e) => handle("requirement", e.target.value)}
                                        style={{ ...inputStyle, resize: "vertical", height: 100 }}
                                    />
                                </div>

                                {/* Robot checkbox */}
                                <div style={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    border: "1px solid #d0d6e8", borderRadius: 7, padding: "10px 14px",
                                    marginBottom: 18, background: "#f7f9fc"
                                }}>
                                    <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#3a4460", cursor: "pointer" }}>
                                        <input
                                            type="checkbox"
                                            checked={formData.robot}
                                            onChange={(e) => handle("robot", e.target.checked)}
                                            style={{ width: 16, height: 16, accentColor: "#1a3a5c" }}
                                        />
                                        I'm not a robot
                                    </label>
                                    <div style={{ textAlign: "right" }}>
                                        <div style={{ fontSize: 18 }}>🔄</div>
                                        <div style={{ fontSize: 9, color: "#8a94a8" }}>reCAPTCHA</div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={handleSubmit}
                                    style={{
                                        width: "100%",
                                        background: "#1a3a5c",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 8,
                                        padding: "15px",
                                        fontSize: 15,
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        letterSpacing: 0.3
                                    }}
                                >
                                    Submit Inquiry
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Label({ children }) {
    return (
        <div style={{ fontSize: 12.5, fontWeight: 600, color: "#4a5270", marginBottom: 5 }}>
            {children}
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "9px 12px",
    border: "1px solid #d0d6e8",
    borderRadius: 7,
    fontSize: 13.5,
    color: "#1a2340",
    background: "#f9fafc",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit"
};
