"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight, X, CheckCircle2, Calendar, Building2, User, Mail, Phone, Briefcase,
  Database, Cloud, Box, Network, ShieldCheck, Zap, ChevronDown, ChevronUp, Linkedin
} from "lucide-react";

// --- CONFIGURATION ---
const CALENDLY_LINK = "https://calendly.com/sakshamsharma614/30min";

export default function LandingPage() {
  // --- STATE MANAGEMENT ---
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // --- DYNAMIC WAITLIST COUNT ---
  const [waitlistCount, setWaitlistCount] = useState<number>(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/waitlist');
        if (res.ok) {
          const data = await res.json();
          setWaitlistCount(data.count);
        }
      } catch (error) {
        console.error("Failed to load waitlist count:", error);
      }
    };
    fetchCount();
  }, []);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", designation: ""
  });

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Optimistically update the count for the user immediately
        setWaitlistCount(prev => prev + 1);

        // Keep the success message open for 3 seconds before closing
        setTimeout(() => {
          setIsWaitlistOpen(false);
          setIsSuccess(false);
          setFormData({ name: "", email: "", phone: "", company: "", designation: "" });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData.error);
        alert(errorData.error || "Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      alert("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How long does setup take?",
      a: "Minutes. You connect your tools via secure OAuth. Because Athene uses Just-In-Time fetching, there are no massive databases to migrate or configure."
    },
    {
      q: "Is our private company data used to train your models?",
      a: "Never. We use zero-retention ephemeral memory. Your data is pulled in strictly to answer the immediate query, and then it is instantly purged from our servers."
    },
    {
      q: "How does the role-based access control sync with our current systems?",
      a: "Athene maps directly to your Identity Provider (like Okta or Google Workspace) to perfectly mirror your exact organizational chart and file permissions."
    }
  ];

  return (
    // PURE BRAND GRADIENT: No gray/slate. Just Sky Blue -> White -> Rose Pink.
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-rose-100 bg-fixed text-blue-950 font-sans selection:bg-sky-200">

      {/* --- 1. GLOBAL NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Image
              src="/athene-logo.png"
              alt="Athene AI Logo"
              width={160}
              height={45}
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-950/70">
            <a href="#platform" className="hover:text-blue-950 transition-colors">Platform</a>
            <a href="#architecture" className="hover:text-blue-950 transition-colors">Architecture</a>
            <a href="#governance" className="hover:text-blue-950 transition-colors">Governance</a>
            <a href="#faq" className="hover:text-blue-950 transition-colors">FAQ</a>
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="hidden sm:block text-sm font-bold text-blue-950 border-2 border-blue-900/10 hover:border-blue-900/30 px-4 py-2 rounded-lg transition-all bg-white/50"
            >
              Join Waitlist
            </button>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-950 hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-900/20"
            >
              Book Demo
            </a>
          </div>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 pt-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-sky-600 text-sm font-bold mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
              AI intelligence layer for business data
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-blue-950 leading-[1.1]">
              Where your data becomes your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-rose-400">
                intelligence.
              </span>
            </h1>

            <p className="text-lg text-blue-950/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Connect your stack in minutes. Deploy supervised agents that don't just find insights—they execute work. Zero migration required.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 hover:bg-blue-900 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" /> Book a Demo
              </a>
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/80 backdrop-blur-sm border-2 border-white hover:border-sky-200 text-blue-950 rounded-xl font-bold transition-all flex items-center justify-center shadow-sm"
              >
                Join the Waitlist
              </button>
            </div>

            {/* DYNAMIC COUNTER: Only shows if 100 or more rows exist in Supabase */}
            {waitlistCount >= 100 && (
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-sm font-bold text-emerald-600 mt-4 bg-emerald-50/80 px-3 py-1.5 rounded-full border border-emerald-100 w-fit mx-auto lg:mx-0">
                <CheckCircle2 className="w-4 h-4" /> Join {waitlistCount} enterprise companies on the waitlist
              </div>
            )}
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-2xl overflow-hidden">
              <div className="bg-sky-50/50 border-b border-blue-900/5 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400/30 border border-rose-400/60"></div>
                <div className="w-3 h-3 rounded-full bg-sky-400/30 border border-sky-400/60"></div>
                <p className="text-xs font-mono text-blue-950/40 ml-2">Athene Supervisor Agent</p>
              </div>
              <div className="p-6 space-y-4 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
                <div className="bg-blue-950 text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm font-medium w-fit ml-auto shadow-sm">
                  Give me a brief on the Athene deal.
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-rose-400 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex items-center gap-2 px-3 py-2 bg-sky-50 border border-sky-100 rounded-lg text-xs font-semibold text-sky-700 w-fit animate-pulse">
                      <Cloud className="w-3.5 h-3.5" /> [Salesforce] Fetching CRM records...
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-rose-50 border border-rose-100 rounded-lg text-xs font-semibold text-rose-700 w-fit">
                      <Box className="w-3.5 h-3.5" /> [Drive] Reading Pitch Deck...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SOCIAL PROOF --- */}
      <section className="py-10 bg-white/40 border-y border-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-950/40 uppercase mb-6">Integrates directly with your existing enterprise stack</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale mix-blend-multiply">
            <div className="flex items-center gap-2 font-bold text-xl text-blue-950"><Cloud className="w-6 h-6" /> Salesforce</div>
            <div className="flex items-center gap-2 font-bold text-xl text-blue-950"><Database className="w-6 h-6" /> Snowflake</div>
            <div className="flex items-center gap-2 font-bold text-xl text-blue-950"><Network className="w-6 h-6" /> GitHub</div>
            <div className="flex items-center gap-2 font-bold text-xl text-blue-950"><Box className="w-6 h-6" /> Zendesk</div>
          </div>
        </div>
      </section>

      {/* --- 4. PROBLEM STATEMENT --- */}
      <section id="platform" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">Stop managing data silos. <span className="text-sky-600">Start executing.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border border-white bg-white/60 backdrop-blur-md relative mt-4 md:mt-0 shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white border border-blue-900/10 rounded-full text-xs font-bold text-blue-950/60 uppercase tracking-wider">Before Athene</div>
              <ul className="space-y-5 mt-4">
                <li className="flex gap-3 text-blue-950/80 font-medium"><X className="w-5 h-5 text-rose-400 shrink-0" /> Hours spent hunting for context across 10 different tabs.</li>
                <li className="flex gap-3 text-blue-950/80 font-medium"><X className="w-5 h-5 text-rose-400 shrink-0" /> Days waiting for IT to grant database access.</li>
                <li className="flex gap-3 text-blue-950/80 font-medium"><X className="w-5 h-5 text-rose-400 shrink-0" /> Security risks from manually exporting CSVs to ChatGPT.</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border-2 border-sky-400 bg-white/90 backdrop-blur-md relative shadow-xl shadow-sky-900/5 mt-8 md:mt-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sky-500 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-md shadow-sky-500/20">With Athene AI</div>
              <ul className="space-y-5 mt-4">
                <li className="flex gap-3 text-blue-950 font-bold"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Instant multi-agent routing across your entire stack.</li>
                <li className="flex gap-3 text-blue-950 font-bold"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Unified command center with zero data migration required.</li>
                <li className="flex gap-3 text-blue-950 font-bold"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Answers synthesized in milliseconds with strict RBAC.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CORE ARCHITECTURE --- */}
      <section id="architecture" className="py-24 px-6 bg-white/40 backdrop-blur-sm border-y border-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6"><Zap className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">1. Zero-Copy Integration</h3>
              <p className="text-blue-950/80 leading-relaxed font-medium">Connect APIs without data migration or redundant storage costs. Your IP stays on your servers.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rose-100 text-rose-500 rounded-xl flex items-center justify-center mb-6"><Network className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">2. Supervised Agents</h3>
              <p className="text-blue-950/80 leading-relaxed font-medium">Deploy specialized agents for different tools, overseen by a Master Orchestrator that perfectly routes the query.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6"><ArrowRight className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">3. Actionable Execution</h3>
              <p className="text-blue-950/80 leading-relaxed font-medium">Go beyond chat. Enable agents to safely execute tasks and trigger automated workflows across your stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. ENTERPRISE GOVERNANCE --- */}
      <section id="governance" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-950 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/20"><ShieldCheck className="w-8 h-8" /></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">Least Privilege Intelligence.</h2>
            <p className="text-lg text-blue-950/80 max-w-2xl mx-auto font-medium">Enterprise security for the CTO. Safe scaling for the Admins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm">
              <h4 className="font-bold text-blue-950 text-lg mb-2">Role-Based Scoping</h4>
              <p className="text-blue-950/70 text-sm leading-relaxed">AI agents only access data strictly required for a specific user's role and departmental permissions.</p>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm">
              <h4 className="font-bold text-blue-950 text-lg mb-2">Data Masking</h4>
              <p className="text-blue-950/70 text-sm leading-relaxed">Strict mathematical boundaries prevent users from querying unauthorized cross-department databases.</p>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm">
              <h4 className="font-bold text-blue-950 text-lg mb-2">Admin in the Loop</h4>
              <p className="text-blue-950/70 text-sm leading-relaxed">Complete, immutable audit logs and usage quotas managed from a central command dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. FAQ --- */}
      <section id="faq" className="py-24 px-6 bg-white/40 backdrop-blur-sm border-y border-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-950 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md border border-white rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-blue-950">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-sky-500" /> : <ChevronDown className="w-5 h-5 text-blue-950/40" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-blue-950/80 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="bg-white/50 backdrop-blur-2xl pt-20 pb-10 px-6 text-center border-t border-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-4xl font-extrabold text-blue-950 mb-8">Ready to build your intelligence layer?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" /> Book a Demo
            </a>
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-blue-900/10 hover:border-blue-900/30 text-blue-950 rounded-xl font-bold transition-all flex items-center justify-center"
            >
              Join the Waitlist
            </button>
          </div>
        </div>

        <div className="border-t border-blue-900/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-7xl mx-auto text-blue-950/70 text-sm font-medium relative z-10">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/athene-logo.png"
              alt="Athene AI Logo"
              width={140}
              height={40}
              className="object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex justify-center text-center font-semibold text-blue-950">
            © 2026 Athene AI. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center">
            <a href="#" className="hover:text-sky-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Terms of Service</a>
            <a
              href="https://linkedin.com/company/atheneai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 transition-colors flex items-center gap-1.5 font-bold"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* --- WAITLIST MODAL --- */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm" onClick={() => setIsWaitlistOpen(false)}></div>
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900/10 bg-sky-50/50">
              <h3 className="text-lg font-extrabold text-blue-950">Apply for Pilot Access</h3>
              <button onClick={() => setIsWaitlistOpen(false)} className="text-blue-950/40 hover:text-blue-950 transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-blue-950/80">Full Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-3.5 text-blue-950/40" />
                        <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full pl-9 pr-4 py-2.5 bg-white border border-blue-900/10 rounded-lg text-sm font-medium focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all" placeholder="Jane Doe" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-blue-950/80">Work Email</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3.5 text-blue-950/40" />
                        <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full pl-9 pr-4 py-2.5 bg-white border border-blue-900/10 rounded-lg text-sm font-medium focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all" placeholder="jane@company.com" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-blue-950/80">Company Name</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 absolute left-3 top-3.5 text-blue-950/40" />
                      <input required type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full pl-9 pr-4 py-2.5 bg-white border border-blue-900/10 rounded-lg text-sm font-medium focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all" placeholder="Acme Corp" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-blue-950/80">Designation</label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 absolute left-3 top-3.5 text-blue-950/40" />
                        <input required type="text" value={formData.designation} onChange={e => setFormData({ ...formData, designation: e.target.value })} className="w-full pl-9 pr-4 py-2.5 bg-white border border-blue-900/10 rounded-lg text-sm font-medium focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all" placeholder="CTO, VP of Eng" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-blue-950/80">Phone Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-3.5 text-blue-950/40" />
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full pl-9 pr-4 py-2.5 bg-white border border-blue-900/10 rounded-lg text-sm font-medium focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-blue-950 hover:bg-blue-900 disabled:bg-blue-950/50 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
                    {isSubmitting ? "Submitting..." : "Secure My Spot"} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center flex flex-col items-center justify-center animate-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm"><CheckCircle2 className="w-8 h-8" /></div>
                  <h3 className="text-xl font-extrabold text-blue-950 mb-2">Application Received</h3>
                  <p className="text-blue-950/70 font-medium text-sm max-w-xs">Thank you, {formData.name.split(' ')[0]}. We have secured your spot and will be in touch shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}