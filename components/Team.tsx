'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
              name="Saksham Sharma" role="Co-founder"
              bio="Product & GTM at Athene. Previously built and deployed AI systems across startups; ex-Onestop Dev. Obsessed with shipping fast and scaling real-world products."
              gradient={['#0ea5e9', '#1e40af']} kind="human" image="/saksham.png" linkedin="https://linkedin.com/in/saksham-sharma-292ba51bb"
            />
          </AnimatedSection>
          <AnimatedSection className="anim-fade-up" delay={0.12}>
            <PersonCard
              name="Mudassir Alam" role="Co-founder"
              bio="Leads AI at Athene. Ex-Intel ML, published GNN researcher. Focused on building intelligent systems that actually work in production."
              gradient={['#fb7185', '#be185d']} kind="human" image="/alam.jpg" linkedin="https://www.linkedin.com/in/mudxssir/"
            />
          </AnimatedSection>
          <AnimatedSection className="anim-fade-up" delay={0.24}>
            <PersonCard
              name="Claude Code" role="Member of Agentic Staff"
              bio="Writes code, ships connectors, fixes bugs. Pairs with the founders on everything from the orchestration layer to this marketing site. Will work for tokens."
              gradient={['#ea580c', '#f59e0b']} kind="agent" image="/claude.png"
            />
          </AnimatedSection>
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: ATHENE.inkFaint, fontWeight: 500 }}>
          Founding team of two humans and one AI engineer. Shipping every week.
        </p>
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
          {[
            ['Your data is yours.',       'We store metadata and a knowledge graph — never your records. Nothing trains any model.'],
            ['Don\'t break permissions.', 'If your IdP says no, our agents say no. Every time.'],
            ['Ship measurable AI.',       'Every feature has an eval. Regressions block releases.'],
            ['Serve the admin.',          'Procurement and security are users too. We design for them first.'],
          ].map(([t, b], i) => (
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
                <Link href="https://calendly.com/saksham-atheneai/30min" className="btn-hover" style={{ background: '#fff', color: ATHENE.navy, border: 'none', padding: '14px 22px', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>Book a demo →</Link>
                <Link href="mailto:info@atheneai.co" className="btn-hover" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '14px 22px', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>Email us</Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </Shell>
  );
}

function PersonCard({ name, role, bio, gradient, kind, image, linkedin }: {
  name: string; role: string; bio: string; gradient: [string, string]; kind: 'human' | 'agent'; image?: string; linkedin?: string;
}) {
  return (
    <Card style={{ padding: 32, textAlign: 'center' }}>
      <div style={{
        width: 96, height: 96, borderRadius: 20, margin: '0 auto 20px',
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', boxShadow: '0 10px 30px -12px rgba(23,37,84,0.25)',
        overflow: 'hidden',
      }}>
        {image ? (
          <Image src={image} alt={name} fill style={{ objectFit: 'cover', borderRadius: 20 }} />
        ) : kind === 'agent' ? (
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="6" width="14" height="12" rx="2" fill="#fff" />
            <rect x="8"  y="10" width="3" height="3" fill={gradient[1]} />
            <rect x="13" y="10" width="3" height="3" fill={gradient[1]} />
            <rect x="9"  y="14" width="6" height="2" fill={gradient[1]} />
            <rect x="11" y="3" width="2" height="3" fill="#fff" />
          </svg>
        ) : null}
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: ATHENE.ink, marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: ATHENE.skyDeep, marginBottom: 14 }}>{role}</div>
      <p style={{ fontSize: 13.5, color: ATHENE.inkMuted, lineHeight: 1.55, fontWeight: 450, margin: 0, maxWidth: 260, marginLeft: 'auto', marginRight: 'auto' }}>{bio}</p>
      {linkedin && (
        <div style={{ marginTop: 20, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="nav-link-hover" style={{ fontSize: 11, fontWeight: 700, color: ATHENE.inkFaint, letterSpacing: 1, textTransform: 'uppercase', textDecoration: 'none' }}>LinkedIn</Link>
        </div>
      )}
    </Card>
  );
}

