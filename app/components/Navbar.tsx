"use client";

import Image from "next/image";

const CALENDLY_LINK = "https://calendly.com/saksham-atheneai/30min";

interface NavbarProps {
  onWaitlistOpen: () => void;
}

export default function Navbar({ onWaitlistOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
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

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-950/70">
          <a href="#platform"      className="hover:text-blue-950 transition-colors">Platform</a>
          <a href="#architecture"  className="hover:text-blue-950 transition-colors">Architecture</a>
          <a href="#governance"    className="hover:text-blue-950 transition-colors">Governance</a>
          <a href="#teams"         className="hover:text-blue-950 transition-colors">Teams</a>
          <a href="#pricing"       className="hover:text-blue-950 transition-colors">Pricing</a>
          <a href="#internships"   className="hover:text-blue-950 transition-colors">Career</a>
          <a href="#faq"           className="hover:text-blue-950 transition-colors">FAQ</a>
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={onWaitlistOpen}
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
  );
}
