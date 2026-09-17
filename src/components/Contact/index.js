import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaCopy
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";


const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
const EMAIL_ADDRESS = process.env.REACT_APP_EMAIL;
const PHONE_NUMBER = process.env.REACT_APP_PHONE;

const Contact = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Freelance Project",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    "Freelance Project",
    "Full-Time Role",
    "AI / ML Solution",
    "Web App Development",
    "Consultation",
  ];

  const contactInfo = [
    ...(EMAIL_ADDRESS
      ? [
        {
          icon: <FaEnvelope style={{ color: theme.secondary }} size={20} />,
          label: "Email",
          value: EMAIL_ADDRESS,
          action: "copy",
          href: `mailto:${EMAIL_ADDRESS}`,
        },
      ]
      : []),
    ...(PHONE_NUMBER
      ? [
        {
          icon: <FaPhoneAlt style={{ color: theme.primary }} size={18} />,
          label: "Phone / WhatsApp",
          value: PHONE_NUMBER,
          action: "call",
          href: `tel:${PHONE_NUMBER.replace(/\s+/g, "")}`,
        },
      ]
      : []),
    {
      icon: <FaMapMarkerAlt className="text-rose-400" size={20} />,
      label: "Location",
      value: "India 🇮🇳",
      action: null,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmail = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Email copied to clipboard!", {
      icon: <FaCheckCircle style={{ color: theme.primary }} />,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    console.log("Access: ", ACCESS_KEY)

    if (!ACCESS_KEY) {
      toast.error(
        "Web3Forms Access Key is not configured yet. Please check your .env file.",
        { duration: 5000 }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Inquiry [${formData.subject}] from ${formData.name}`,
          from_name: formData.name,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thank you! Your message has been delivered to Dinesh.", {
          duration: 5000,
          icon: <FaCheckCircle style={{ color: theme.primary }} />,
        });
        setFormData({
          name: "",
          email: "",
          subject: "Freelance Project",
          message: "",
        });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(
        EMAIL_ADDRESS
          ? `Network error. Please try sending directly to ${EMAIL_ADDRESS}`
          : "Network error. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-6 sm:px-12 lg:px-24">
      {/* Background ambient lighting */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow1 }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow2, animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold ${theme.badgeBg}`}>
            Available For Freelance & Full-Time
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Looking for a freelance engineer, an AI/ML developer, or have an open role? Let’s connect and make it happen.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl space-y-6 border border-slate-800 shadow-xl">
              <h2 className="text-2xl font-display font-bold text-white">
                Contact Information
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you need a custom Machine Learning pipeline, an LLM/RAG app, or a modern full-stack web application, feel free to reach out.
              </p>

              <div className="space-y-4 pt-2">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between group hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-slate-800">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>

                    {info.action === "copy" && (
                      <button
                        type="button"
                        onClick={() => copyEmail(info.value)}
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                        title="Copy to clipboard"
                        aria-label="Copy email"
                      >
                        <FaCopy size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Status Card */}
              <div
                className="p-4 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  borderColor: `${theme.primary}40`,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.primary }}></span>
                  <span className="text-xs font-semibold" style={{ color: theme.primary }}>
                    Status: Open for Freelance & Full-Time
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Ready to collaborate on contract gigs, freelance projects, and full-time software engineering roles.
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Find Me Online
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/DineshRamaraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-600 flex items-center justify-center gap-2 transition-all hover:scale-105"
                  >
                    <FaGithub size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dineshkumar-ramaraj-b1275a228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all hover:scale-105"
                    style={{ borderColor: `${theme.primary}30` }}
                  >
                    <FaLinkedin size={16} style={{ color: theme.secondary }} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Send a Message
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Share details about your freelance idea, company project, or inquiry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Inquiry Type selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  Project Type / Subject
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, subject: type }))}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${formData.subject === type
                        ? "text-white font-semibold shadow-sm"
                        : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200"
                        }`}
                      style={
                        formData.subject === type
                          ? {
                            backgroundColor: `${theme.primary}25`,
                            borderColor: `${theme.primary}60`,
                            color: theme.accent,
                            borderWidth: "1px",
                          }
                          : {}
                      }
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Message / Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project scope, requirements, or role..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${theme.buttonGradient} hover:opacity-95 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60`}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={13} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
