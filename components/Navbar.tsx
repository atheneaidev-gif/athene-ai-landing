'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ATHENE } from '@/lib/theme';

export function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
      <Image
        src="/athene-icon.png"
        alt="Athene AI"
        width={36}
        height={36}
        style={{ objectFit: 'contain' }}
        priority
      />
      <span style={{
        fontFamily: `var(--font-lexend), sans-serif`,
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: -0.3,
        color: '#0f5f8a',
        lineHeight: 1,
      }}>
        Athene <span style={{ color: '#0f5f8a', opacity: 0.7 }}>AI</span>
      </span>
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const items = [
    { k: 'features', label: 'Features', href: '/features' },
    { k: 'pricing',  label: 'Pricing',  href: '/pricing'  },
    { k: 'team',     label: 'Team',     href: '/team'     },
  ];

  const active = (() => {
    if (pathname === '/features') return 'features';
    if (pathname === '/pricing')  return 'pricing';
    if (pathname === '/team')     return 'team';
    return 'home';
  })();

  return (
    <>
      <nav className="r-nav" style={{
        position: 'sticky', top: 0, zIndex: 50,
        padding: '16px 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: `1px solid ${ATHENE.hair}`,
      }}>
        <Logo />

        {/* Desktop nav links */}
        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {items.map(it => (
            <Link key={it.k} href={it.href} className="nav-link-hover" style={{
              fontSize: 14, fontWeight: 600,
              color: active === it.k ? ATHENE.navy : ATHENE.inkMuted,
              position: 'relative',
              textDecoration: 'none',
            }}>
              {it.label}
              {active === it.k && (
                <span style={{
                  position: 'absolute', left: 0, right: 0, bottom: -22, height: 2,
                  background: ATHENE.sky, borderRadius: 2,
                }} />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="https://calendly.com/saksham-atheneai/30min" target="_blank" rel="noreferrer" className="btn-hover" style={{
            background: ATHENE.navy, color: '#fff',
            border: 'none', padding: '10px 18px', borderRadius: 10,
            fontSize: 13.5, fontWeight: 700, letterSpacing: -0.1,
            boxShadow: '0 8px 20px -8px rgba(23,37,84,0.4)',
            cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
          }}>Book a demo →</Link>
        </div>

        {/* Hamburger button — visible only on mobile via CSS */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            alignItems: 'center', justifyContent: 'center',
            width: 40, height: 40, borderRadius: 10,
            border: `1px solid ${ATHENE.hair}`,
            background: 'rgba(255,255,255,0.8)',
            cursor: 'pointer', fontSize: 18, color: ATHENE.navy,
            flexShrink: 0,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 65, left: 0, right: 0, zIndex: 49,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${ATHENE.hair}`,
          padding: '8px 20px 20px',
          display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: '0 16px 48px -16px rgba(23,37,84,0.18)',
        }}>
          {items.map(it => (
            <Link
              key={it.k}
              href={it.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 16, fontWeight: 600,
                color: active === it.k ? ATHENE.navy : ATHENE.inkMuted,
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: `1px solid ${ATHENE.hair}`,
                display: 'block',
              }}
            >
              {it.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/saksham-atheneai/30min"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 12,
              background: ATHENE.navy, color: '#fff',
              padding: '14px 20px', borderRadius: 12,
              fontSize: 14, fontWeight: 700,
              textDecoration: 'none', textAlign: 'center',
              display: 'block',
            }}
          >
            Book a demo →
          </Link>
        </div>
      )}
    </>
  );
}
