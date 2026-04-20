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

  const items = [
    { k: 'features', label: 'Features', href: '/features' },
    { k: 'pricing',  label: 'Pricing',  href: '/pricing'  },
    { k: 'team',     label: 'Team',     href: '/team'     },
    { k: 'docs',     label: 'Docs',     href: '#'         },
  ];

  const getActive = () => {
    if (pathname === '/features') return 'features';
    if (pathname === '/pricing')  return 'pricing';
    if (pathname === '/team')     return 'team';
    if (pathname === '/privacy')  return 'privacy';
    if (pathname === '/terms')    return 'terms';
    return 'home';
  };

  const active = getActive();

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '16px 56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: `1px solid ${ATHENE.hair}`,
    }}>
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link href="https://calendly.com/saksham-atheneai/30min" target="_blank" rel="noreferrer" className="btn-hover" style={{
          background: ATHENE.navy, color: '#fff',
          border: 'none', padding: '10px 18px', borderRadius: 10,
          fontSize: 13.5, fontWeight: 700, letterSpacing: -0.1,
          boxShadow: '0 8px 20px -8px rgba(23,37,84,0.4)',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
        }}>Book a demo →</Link>
      </div>
    </nav>
  );
}
