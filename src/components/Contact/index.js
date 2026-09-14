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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Opportunity",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    "Full-Time Opportunity",
    "Freelance Project",
    "Collaboration",
    "Just Saying Hi",
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-cyan-400" size={20} />,
      label: "Email",
      value: "dineshkumar.ramaraj@gmail.com",
      action: "copy",
    },
    {
      icon: <FaPhoneAlt className="text-indigo-400" size={18} />,
      label: "Phone / WhatsApp",
      value: "+91 98765 43210",
      action: "call",
    },
    {
      icon: <FaMapMarkerAlt className="text-purple-400" size={20} />,
      label: "Location",
      value: "Tamil Nadu, India",
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
      icon: <FaCheckCircle className="text-cyan-400" />,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate clean submission with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully.", {
        duration: 4000,
        icon: <FaCheckCircle className="text-emerald-400" />,
      });
      setFormData({
        name: "",
        email: "",
        subject: "Full-Time Opportunity",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-6 sm:px-12 lg:px-24">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Let's Connect
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, an opportunity to discuss, or simply want to say hello? My inbox is always open.
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
                Feel free to reach out directly through any of the channels below. I typically respond within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between group hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{info.label}</p>
                        <p className="text-sm font-semibold text-slate-200">{info.value}</p>
                      </div>
                    </div>

                    {info.action === "copy" && (
                      <button
                        type="button"
                        onClick={() => copyEmail(info.value)}
                        className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all"
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
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/50 to-slate-900 border border-indigo-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-semibold text-emerald-400">Status: Ready to Hire</span>
                </div>
                <p className="text-xs text-slate-300">
                  Open to full-time engineering roles, frontend developer positions, and high-impact web development teams.
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
                    className="flex-1 py-3 px-4 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
                  >
                    <FaLinkedin size={16} />
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
              Fill out the form below and I'll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Inquiry Type selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  Subject / Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, subject: type }))}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        formData.subject === type
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                          : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200"
                      }`}
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details about your project, opportunity, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
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
