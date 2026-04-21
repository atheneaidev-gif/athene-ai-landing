'use client';

import React from 'react';
import Link from 'next/link';
import { ATHENE } from '@/lib/theme';

export { Logo, Nav } from '@/components/Navbar';
export { Footer } from '@/components/Footer';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-enter" style={{
      width: '100%', minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 45%, #ffe4e6 100%)',
      color: ATHENE.ink,
      fontFamily: ATHENE.font,
      fontFeatureSettings: '"cv11", "ss01"',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

export function Pill({ children, tone = 'sky' }: { children: React.ReactNode; tone?: 'sky' | 'rose' | 'navy' }) {
  const tones = {
    sky:  { bg: '#e0f2fe', fg: ATHENE.skyDeep, dot: ATHENE.sky  },
    rose: { bg: '#ffe4e6', fg: '#be123c',      dot: ATHENE.rose },
    navy: { bg: 'rgba(23,37,84,0.06)', fg: ATHENE.navy, dot: ATHENE.navy },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 12px', borderRadius: 999,
      background: t.bg, color: t.fg,
      fontSize: 12, fontWeight: 700, letterSpacing: 0.2,
    }}>
      <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot }} />
      {children}
    </span>
  );
}

export function BtnPrimary({ children, style = {}, href }: { children: React.ReactNode; style?: React.CSSProperties; href?: string }) {
  const btnStyle: React.CSSProperties = {
    background: ATHENE.navy, color: '#fff',
    border: 'none', padding: '14px 22px', borderRadius: 12,
    fontSize: 14, fontWeight: 700, letterSpacing: -0.1,
    boxShadow: '0 10px 24px -10px rgba(23,37,84,0.45)',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
    ...style,
  };
  if (href) return <Link href={href} className="btn-hover" style={btnStyle}>{children}</Link>;
  return <button className="btn-hover" style={btnStyle}>{children}</button>;
}

export function BtnGhost({ children, style = {}, href }: { children: React.ReactNode; style?: React.CSSProperties; href?: string }) {
  const btnStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.7)',
    border: `1px solid ${ATHENE.hair}`,
    color: ATHENE.navy,
    padding: '14px 22px', borderRadius: 12,
    fontSize: 14, fontWeight: 700,
    cursor: 'pointer',
    backdropFilter: 'blur(8px)',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
    ...style,
  };
  if (href) return <Link href={href} className="btn-hover" style={btnStyle}>{children}</Link>;
  return <button className="btn-hover" style={btnStyle}>{children}</button>;
}

export function Card({ children, style = {}, className = '', accent = false, tight = false, hover = true }: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  accent?: boolean;
  tight?: boolean;
  hover?: boolean;
}) {
  return (
    <div className={[hover ? 'card-hover' : '', className].filter(Boolean).join(' ')} style={{
      background: accent ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: `1px solid ${accent ? 'rgba(14,165,233,0.35)' : 'rgba(255,255,255,0.9)'}`,
      borderRadius: 20,
      padding: tight ? 20 : 28,
      boxShadow: accent
        ? '0 20px 60px -30px rgba(14,165,233,0.25), 0 2px 6px rgba(255,255,255,0.9) inset'
        : '0 1px 2px rgba(23,37,84,0.04), 0 14px 40px -24px rgba(23,37,84,0.12)',
      ...style,
    }}>{children}</div>
  );
}

export function AnimatedSection({ children, className = 'anim-fade-up', delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className}${visible ? ' in-view' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
