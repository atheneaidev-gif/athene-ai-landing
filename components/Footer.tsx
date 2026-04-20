'use client';

import React from 'react';
import Link from 'next/link';
import { ATHENE } from '@/lib/theme';
import { Logo } from '@/components/Navbar';

export function Footer() {
  return (
    <footer style={{
      marginTop: 0, padding: '36px 56px',
      borderTop: `1px solid ${ATHENE.hair}`,
      background: 'rgba(255,255,255,0.5)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 24, flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Logo />
        <span style={{ fontSize: 13, color: ATHENE.inkFaint, fontWeight: 500 }}>
          © 2026 Athene AI .
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 13.5, fontWeight: 500, color: ATHENE.inkMuted }}>
        <Link href="/privacy" className="nav-link-hover" style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>Privacy</Link>
        <Link href="/terms"   className="nav-link-hover" style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>Terms</Link>
        <a href="https://linkedin.com/company/atheneai" target="_blank" rel="noreferrer" className="nav-link-hover" style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: ATHENE.inkFaint }}>
          <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
          All systems operational
        </span>
      </div>
    </footer>
  );
}
