'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ATHENE } from '@/lib/theme';
import { Shell, Nav, Footer, Pill, Card, AnimatedSection } from '@/components/ui';

export default function Team() {
  return (
    <Shell>
      <Nav />

      {/* MEET THE TEAM */}
      <section style={{ padding: '24px 56px 96px' }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: ATHENE.skyDeep, marginBottom: 8 }}>TEAM</div>
            <h2 style={{
              fontSize: 44, letterSpacing: -1.4, fontWeight: 600, margin: 0,
              fontFamily: `"Fraunces", Georgia, serif`, color: ATHENE.ink,
            }}>Meet the team</h2>
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1200, margin: '0 auto' }}>
          <AnimatedSection className="anim-fade-up" delay={0}>
            <PersonCard
              name="Saksham Sharma"
              degree="B.Tech CSE @ Christ University"
              role="Co-Founder"
              photo="/saksham.png"
              bullets={[
                'Co-Founded @Onestop Dev Pvt Ltd',
                'Former CTO of Sarie — tech infra & Ordrio collaborations',
                'Engineered the foundation @Bolds AI SaaS',
                'Architected DeptDocs, AI workflow tool for Dept of ADSE, Christ University',
              ]}
            />
          </AnimatedSection>
          <AnimatedSection className="anim-fade-up" delay={0.12}>
            <PersonCard
              name="Mudassir N"
              degree="B.Tech AIML @ Christ University"
              role="Co-Founder"
              photo="/alam.jpg"
              bullets={[
                'Co-Founded Onestop Dev Pvt Ltd',
                '2x Intern @Intel — Machine Learning & Computer Vision',
                'Published at SICS 2026 with a GNN framework',
                'Quant ML Intern with Melih Abdulhayoglu',
              ]}
            />
          </AnimatedSection>
          <AnimatedSection className="anim-fade-up" delay={0.24}>
            <PersonCard
              name="Claude Code"
              degree="Member of Agentic Staff"
              role="AI Engineer"
              photo="claude"
              bullets={[
                'Writes code, ships connectors, fixes bugs',
                'Pairs with founders on orchestration layer',
                'Built and maintains this marketing site',
                'Will work for tokens',
              ]}
            />
          </AnimatedSection>
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: ATHENE.inkFaint, fontWeight: 500 }}>
          Founding team of two humans and one AI engineer. Shipping every week.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '0 56px 96px' }}>
        <AnimatedSection>
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <Pill tone="sky">How it works</Pill>
            <h2 style={{
              fontSize: 40, lineHeight: 1.05, letterSpacing: -1.2, fontWeight: 600,
              margin: '18px 0 14px', color: ATHENE.ink,
              fontFamily: `"Fraunces", Georgia, serif`,
            }}>From sign-up to insight — in six steps.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: ATHENE.inkMuted, fontWeight: 450 }}>
              No migration. No data warehouse. Just OAuth your existing tools, set up your org, and let
              Athene route every question to the right sub-agent.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection className="anim-fade-up" delay={0.1}>
          <ProcessSteps />
        </AnimatedSection>
      </section>

      {/* Values */}
      <section style={{ padding: '0 56px 96px' }}>
        <AnimatedSection>
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <Pill tone="navy">What we believe</Pill>
            <h2 style={{
              fontSize: 40, lineHeight: 1.05, letterSpacing: -1.2, fontWeight: 600,
              margin: '18px 0 14px', color: ATHENE.ink,
              fontFamily: `"Fraunces", Georgia, serif`,
            }}>Four commitments that pre-date our first line of code.</h2>
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {([
            ['Your data is yours.',       'We store metadata and a knowledge graph — never your records. Nothing trains any model.'],
            ["Don't break permissions.", 'If your IdP says no, our agents say no. Every time.'],
            ['Ship measurable AI.',       'Every feature has an eval. Regressions block releases.'],
            ['Serve the admin.',          'Procurement and security are users too. We design for them first.'],
          ] as [string, string][]).map(([t, b], i) => (
            <AnimatedSection key={t} className="anim-fade-up" delay={i * 0.08}>
              <Card tight>
                <div style={{ fontSize: 11, fontWeight: 700, color: ATHENE.inkFaint, letterSpacing: 1.4, marginBottom: 10 }}>0{i + 1}</div>
                <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.2, color: ATHENE.ink, fontFamily: `"Fraunces", Georgia, serif`, marginBottom: 8, letterSpacing: -0.3 }}>{t}</div>
                <div style={{ fontSize: 13.5, color: ATHENE.inkMuted, lineHeight: 1.5, fontWeight: 450 }}>{b}</div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '0 56px 120px' }}>
        <AnimatedSection className="anim-scale">
          <div className="cta-gradient" style={{
            borderRadius: 28, padding: '56px 64px', position: 'relative', overflow: 'hidden',
            background: `linear-gradient(135deg, ${ATHENE.navy} 0%, #0b1a42 40%, #172554 100%)`,
            backgroundSize: '200% 200%', color: '#fff',
          }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(50% 100% at 80% 50%, rgba(14,165,233,0.35), transparent 70%)',
            }} />
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: 36, letterSpacing: -1, fontWeight: 600, margin: '0 0 12px', fontFamily: `"Fraunces", Georgia, serif` }}>Want to talk?</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', maxWidth: 440, margin: 0 }}>
                  We&apos;re early, we&apos;re transparent, and we read every email.
                  Founders on <b>info@atheneai.co</b>.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                <Link href="https://calendly.com/saksham-atheneai/30min" target="_blank" rel="noreferrer" className="btn-hover" style={{ background: '#fff', color: ATHENE.navy, border: 'none', padding: '14px 22px', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>Book a demo →</Link>
                <a href="mailto:info@atheneai.co" className="btn-hover" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '14px 22px', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>Email us</a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </Shell>
  );
}

function PersonCard({ name, degree, role, photo, bullets }: {
  name: string; degree: string; role: string; photo: string; bullets: string[];
}) {
  const isAgent = photo === 'claude';
  return (
    <Card style={{ padding: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <div style={{
          width: 72, height: 72, borderRadius: 16, flexShrink: 0, overflow: 'hidden',
          background: isAgent ? 'linear-gradient(135deg, #cc785c 0%, #a05a3a 100%)' : ATHENE.hair,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 20px -8px rgba(23,37,84,0.2)',
        }}>
          {isAgent ? (
            <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
              <path d="M 30 75 Q 15 55 25 35 Q 35 15 50 20 Q 65 15 75 35 Q 85 55 70 75 Q 60 85 50 82 Q 40 85 30 75 Z" fill="#fff" opacity="0.15"/>
              <ellipse cx="38" cy="50" rx="7" ry="10" fill="#fff" opacity="0.9"/>
              <ellipse cx="62" cy="50" rx="7" ry="10" fill="#fff" opacity="0.9"/>
              <path d="M 38 62 Q 50 70 62 62" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8"/>
            </svg>
          ) : (
            <Image src={photo} alt={name} width={72} height={72} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          )}
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: ATHENE.ink, lineHeight: 1.2 }}>{name}</div>
          <div style={{ fontSize: 12, color: ATHENE.inkMuted, marginTop: 2, fontWeight: 450 }}>{degree}</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: ATHENE.skyDeep, marginTop: 4, letterSpacing: 0.2 }}>{role}</div>
        </div>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: ATHENE.inkMuted, lineHeight: 1.45, fontWeight: 450 }}>
            <span style={{ color: ATHENE.skyDeep, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
            {b}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ProcessSteps() {
  const steps = [
    { n: '01', t: 'Sign up',               d: 'Email + SSO. No credit card for the trial.', icon: '→' },
    { n: '02', t: 'Create your org',       d: 'Name it, pick your data residency region, done.', icon: '◎' },
    { n: '03', t: 'Invite your users',     d: 'Bulk-invite by email or sync from Okta / Google Workspace.', icon: '☺' },
    { n: '04', t: 'Create teams',          d: 'Mirror your org chart — Sales, Finance, Eng, BI, etc.', icon: '▦' },
    { n: '05', t: 'Assign users to teams', d: 'Each team gets scoped access. Super-users get custom scopes.', icon: '✓' },
    { n: '06', t: 'Automate & get insight',d: 'Ask anything. Athene routes, answers, and executes work.', icon: '✦' },
  ];
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 44, left: '8%', right: '8%', height: 2,
        background: `repeating-linear-gradient(90deg, ${ATHENE.sky} 0 6px, transparent 6px 10px)`,
        opacity: 0.5,
      }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ textAlign: 'center' }}>
            <div className="card-hover" style={{
              width: 56, height: 56, borderRadius: 16, margin: '0 auto 16px',
              background: i === 5 ? ATHENE.navy : '#fff',
              color:      i === 5 ? '#fff'      : ATHENE.navy,
              border: `1px solid ${i === 5 ? ATHENE.navy : ATHENE.hair}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, fontWeight: 700,
              boxShadow: '0 8px 22px -12px rgba(23,37,84,0.2)', cursor: 'default',
            }}>
              {s.icon}
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint, marginBottom: 6 }}>{s.n}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: ATHENE.ink, marginBottom: 6, fontFamily: `"Fraunces", Georgia, serif`, letterSpacing: -0.2 }}>{s.t}</div>
            <div style={{ fontSize: 12.5, color: ATHENE.inkMuted, lineHeight: 1.45, fontWeight: 450, maxWidth: 160, margin: '0 auto' }}>{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
