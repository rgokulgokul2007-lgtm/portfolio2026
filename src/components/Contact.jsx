import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Terminal, ArrowUpRight, Mail, MessageSquare, User, RefreshCw } from 'lucide-react';
import { Github } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or agency identifier.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a project or challenge description.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate network telemetry latency (1.2s)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-28 bg-[#07090D] overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-[#00D9FF]/4 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/8 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF] tracking-widest uppercase mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Section // 05</span>
              <span className="text-white/20">—</span>
              <span className="text-[#8C99AA]">INITIATE PROTOCOL</span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7FB] tracking-tight">
              Have an idea? Let's engineer it.
            </h2>
          </div>
          <div className="text-xs font-mono text-[#8C99AA] md:text-right">
            <span>DIRECT CHANNEL</span>
            <div className="text-[#00D9FF]">HARDWARE • SOFTWARE • LOCAL AI</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & GitHub Link */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-[#8C99AA] font-sans leading-relaxed">
              Have a technical challenge, collaboration idea, or project in mind? Let's turn it into something meaningful.
            </p>

            {/* Direct GitHub Profile Card */}
            <div className="p-6 rounded-2xl bg-[#111722]/80 border border-white/8 hover:border-[#00D9FF]/30 transition-all backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#00D9FF] tracking-wider uppercase">
                  PRIMARY CODE FORGE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#151D29] border border-white/10 flex items-center justify-center text-[#F4F7FB]">
                  <Github className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div>
                  <h4 className="font-space font-bold text-base text-[#F4F7FB]">
                    rgokulgokul2007-lgtm
                  </h4>
                  <p className="text-xs font-mono text-[#8C99AA]">
                    Open-source repositories & active forks
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/rgokulgokul2007-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#00D9FF]/10 hover:bg-[#00D9FF] text-[#00D9FF] hover:text-[#07090D] font-mono text-xs font-semibold tracking-wider border border-[#00D9FF]/30 transition-all duration-300"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Technical Readiness Indicators */}
            <div className="p-5 rounded-2xl bg-[#111722]/40 border border-white/6 space-y-2.5 text-xs font-mono text-[#8C99AA]">
              <div className="flex items-center justify-between">
                <span className="text-[#F4F7FB]">AVAILABILITY</span>
                <span className="text-[#00D9FF]">COLLABORATION READY</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#F4F7FB]">LOCATION</span>
                <span>COIMBATORE, TN, INDIA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#F4F7FB]">TIMEZONE</span>
                <span>IST (UTC+05:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#111722]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Simulated Submission Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-8 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF] text-[#00D9FF] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,217,255,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="font-mono text-xs text-[#00D9FF] uppercase tracking-wider block mb-1">
                        TRANSMISSION LOGGED // SIMULATED
                      </span>
                      <h3 className="font-space text-2xl font-bold text-[#F4F7FB]">
                        Transmission Received.
                      </h3>
                      <p className="text-sm text-[#8C99AA] max-w-md mx-auto mt-2 font-sans">
                        Thank you, <span className="text-[#F4F7FB] font-medium">{formData.name}</span>. Your parameters have been verified and processed by the frontend test dispatch runner.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07090D] border border-white/8 text-left max-w-md mx-auto text-xs font-mono space-y-1.5">
                      <div className="text-[#8C99AA]">SENDER: <span className="text-[#F4F7FB]">{formData.email}</span></div>
                      <div className="text-[#8C99AA]">STATUS: <span className="text-[#00D9FF]">200 OK (CLIENT-SIDE SIMULATION)</span></div>
                      <div className="text-[#8C99AA] text-[10px] pt-1 border-t border-white/6">
                        * Note: This portfolio operates in simulated client dispatch mode without an external SMTP gateway. For urgent correspondence, connect directly via GitHub.
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151D29] hover:bg-white/10 text-[#F4F7FB] text-xs font-mono tracking-wider border border-white/12 transition-all"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-[#00D9FF]" />
                        <span>Reset Transmission Form</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Active Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/8 text-xs font-mono text-[#8C99AA]">
                      <span className="flex items-center gap-1.5 text-[#F4F7FB]">
                        <Terminal className="w-3.5 h-3.5 text-[#00D9FF]" />
                        FORM // DISPATCH_INTERFACE
                      </span>
                      <span className="text-[10px] text-[#00D9FF]">READY</span>
                    </div>

                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono text-[#F4F7FB] tracking-wide">
                        YOUR NAME / AGENCY <span className="text-[#00D9FF]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Alex Vance / Roboticist"
                          className={`w-full px-4 py-3 rounded-xl bg-[#0B0F16] border text-sm font-sans text-[#F4F7FB] placeholder-[#8C99AA]/40 focus:outline-none transition-all ${
                            errors.name
                              ? 'border-red-400 focus:border-red-400'
                              : 'border-white/10 focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                          }`}
                        />
                        <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#8C99AA]/40 pointer-events-none" />
                      </div>
                      {errors.name && (
                        <p className="text-xs font-mono text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-[#F4F7FB] tracking-wide">
                        EMAIL ADDRESS <span className="text-[#00D9FF]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="engineer@domain.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#0B0F16] border text-sm font-sans text-[#F4F7FB] placeholder-[#8C99AA]/40 focus:outline-none transition-all ${
                            errors.email
                              ? 'border-red-400 focus:border-red-400'
                              : 'border-white/10 focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                          }`}
                        />
                        <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-[#8C99AA]/40 pointer-events-none" />
                      </div>
                      {errors.email && (
                        <p className="text-xs font-mono text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-mono text-[#F4F7FB] tracking-wide">
                        PROJECT SPECIFICATION / MESSAGE <span className="text-[#00D9FF]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Outline the scope, embedded hardware, or software stack you are planning..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0F16] border text-sm font-sans text-[#F4F7FB] placeholder-[#8C99AA]/40 focus:outline-none transition-all resize-none ${
                          errors.message
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-white/10 focus:border-[#00D9FF] focus:shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs font-mono text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00D9FF] text-[#07090D] font-mono text-xs font-bold tracking-wider hover:bg-[#80E5FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING TELEMETRY...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>DISPATCH MESSAGE</span>
                        </>
                      )}
                    </button>

                    <div className="text-[10px] font-mono text-[#8C99AA] text-center pt-1">
                      CLIENT-SIDE VALIDATED • ZERO DATA HARVESTING
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
