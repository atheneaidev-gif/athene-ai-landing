'use client';

import React from 'react';
import Link from 'next/link';
import {
  siSnowflake, siNotion, siJira, siLinear,
  siGithub, siHubspot, siGoogledrive, siGmail, siZendesk,
} from 'simple-icons';
import { ATHENE } from '@/lib/theme';
import { Shell, Nav, Footer, Pill, BtnPrimary, BtnGhost, Card, AnimatedSection } from '@/components/ui';

export default function Landing() {
  return (
    <Shell>
      <Nav />

      {/* HERO */}
      <section className="r-section" style={{ padding: '96px 56px 72px', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: '-60px -20% 20% -20%', pointerEvents: 'none',
          background: 'radial-gradient(60% 50% at 30% 30%, rgba(14,165,233,0.18), transparent 70%), radial-gradient(40% 40% at 85% 40%, rgba(251,113,133,0.18), transparent 70%)',
          filter: 'blur(40px)',
        }} />

        <div className="r-grid-hero" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center', maxWidth: 1328, margin: '0 auto' }}>
          <div>
            <div className="hero-entrance hero-entrance-d1" style={{ marginBottom: 24 }}>
              <Pill tone="sky">Now in private beta · SOC 2 Type II</Pill>
            </div>
            <h1 className="hero-entrance hero-entrance-d2 r-h1" style={{
              fontSize: 76, lineHeight: 0.98, letterSpacing: -2.4,
              fontWeight: 600, margin: 0, color: ATHENE.ink,
              fontFamily: `"Fraunces", "Tiempos", Georgia, serif`,
            }}>
              Where Data Becomes Yours<br />
              <em className="gradient-text-animated" style={{
                fontStyle: 'italic', fontWeight: 500,
                background: `linear-gradient(110deg, ${ATHENE.skyDeep} 0%, ${ATHENE.rose} 50%, ${ATHENE.skyDeep} 100%)`,
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Intelligence.</em>
            </h1>
            <p className="hero-entrance hero-entrance-d3" style={{
              marginTop: 28, fontSize: 19, lineHeight: 1.5,
              color: ATHENE.inkMuted, maxWidth: 520, fontWeight: 450,
            }}>
              Athene connects to the tools your team already uses and deploys supervised
              agents that respect your permissions, your data residency, and your org chart.
              Zero migration. Full audit trail.
            </p>
            <div className="hero-entrance hero-entrance-d4" style={{ marginTop: 36, display: 'flex', gap: 12 }}>
              <BtnPrimary href="https://calendly.com/saksham-atheneai/30min">Book a demo →</BtnPrimary>
              <BtnGhost href="/features">See how it works</BtnGhost>
            </div>

            <div className="hero-entrance hero-entrance-d5" style={{ marginTop: 56, display: 'flex', gap: 28, flexWrap: 'wrap' }}>
              {[
                ['Metadata only',  'Your records never leave your source systems.'],
                ['BYOK, any plan', 'Anthropic, OpenAI, Google, self-hosted.'],
                ['SSO + RBAC',     'Inherits from Okta, Google, Entra.'],
              ].map(([t, d]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, maxWidth: 220 }}>
                  <span style={{ color: ATHENE.skyDeep, fontWeight: 800, fontSize: 14, marginTop: 2 }}>✓</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: ATHENE.ink }}>{t}</div>
                    <div style={{ fontSize: 12.5, color: ATHENE.inkMuted, lineHeight: 1.4, fontWeight: 450 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — product peek */}
          <div className="hero-product-peek">
            <HeroProductPeek />
          </div>
        </div>
      </section>

      {/* INTEGRATIONS STRIP */}
      <AnimatedSection>
        <IntegrationsStrip />
      </AnimatedSection>

      {/* PILLARS */}
      <section className="r-section" style={{ padding: '96px 56px', maxWidth: 1440, margin: '0 auto' }}>
        <AnimatedSection>
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <Pill tone="navy">The platform</Pill>
            <h2 style={{
              fontSize: 44, lineHeight: 1.05, letterSpacing: -1.4,
              fontWeight: 600, margin: '20px 0 16px', color: ATHENE.ink,
              fontFamily: `"Fraunces", Georgia, serif`,
            }}>
              Three primitives. One intelligence layer.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: ATHENE.inkMuted, fontWeight: 450 }}>
              Most AI platforms ask you to move your data. Athene meets your data where it lives —
              and gives every query the same permissions the requester already has.
            </p>
          </div>
        </AnimatedSection>

        <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <AnimatedSection className="anim-fade-up" delay={0}>
            <PillarCard num="01" title="Zero-copy integration" body="Connect via OAuth to Salesforce, Snowflake, Drive, Slack, Jira, and 30+ more. Nothing is copied, cached, or trained on." viz={<VizZeroCopy />} />
          </AnimatedSection>
          <AnimatedSection className="anim-fade-up" delay={0.12}>
            <PillarCard num="02" title="AI across your stack" body="A single natural-language surface routes every question to the right agent. Your team learns no new tool." viz={<VizRouter />} accent />
          </AnimatedSection>
          <AnimatedSection className="anim-fade-up" delay={0.24}>
            <PillarCard num="03" title="Permissions, preserved" body="Every query inherits the user's exact role and file-level access from your IdP. Athene cannot surface what you cannot see." viz={<VizRBAC />} />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <BtnGhost href="/features">Explore all features →</BtnGhost>
          </div>
        </AnimatedSection>
      </section>

      {/* KNOWLEDGE GRAPH SECTION */}
      <section className="r-section" style={{ padding: '40px 56px 96px', maxWidth: 1440, margin: '0 auto' }}>
        <AnimatedSection className="anim-scale">
          <Card hover={false} className="r-card-pad" style={{ padding: 56 }}>
            <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
              <AnimatedSection className="anim-slide-left" delay={0.15}>
                <div>
                  <Pill tone="rose">What we store</Pill>
                  <h2 style={{
                    fontSize: 36, lineHeight: 1.1, letterSpacing: -1.2,
                    fontWeight: 600, margin: '16px 0 14px', color: ATHENE.ink,
                    fontFamily: `"Fraunces", Georgia, serif`,
                  }}>
                    Metadata, not your data. A <em style={{ color: ATHENE.skyDeep }}>knowledge graph</em> per organization.
                  </h2>
                  <p style={{ fontSize: 15.5, lineHeight: 1.55, color: ATHENE.inkMuted, fontWeight: 450, margin: 0 }}>
                    Your records stay in Salesforce, Drive, Snowflake — wherever they already live.
                    Athene builds a per-org graph of relationships between entities (deals, docs, tickets,
                    people) so queries land in the right place, fast.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {['Relationships, not records', 'Per-organization isolation', 'Never used to train any model'].map(x => (
                      <li key={x} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: ATHENE.ink, fontWeight: 500 }}>
                        <span style={{ color: ATHENE.skyDeep }}>✓</span> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection className="anim-slide-right" delay={0.25}>
                <VizKnowledgeGraph />
              </AnimatedSection>
            </div>
          </Card>
        </AnimatedSection>
      </section>

       {/* HOW IT WORKS */}
             <section className="r-section" style={{ padding: '0 56px 96px' }}>
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
      

      {/* CTA */}
      <section className="r-section" style={{ padding: '0 56px 120px', maxWidth: 1440, margin: '0 auto' }}>
        <AnimatedSection className="anim-scale">
          <div className="cta-gradient" style={{
            position: 'relative', overflow: 'hidden',
            background: `linear-gradient(135deg, ${ATHENE.navy} 0%, #0b1a42 40%, #172554 100%)`,
            backgroundSize: '200% 200%',
            borderRadius: 28, padding: '80px 64px', color: '#fff',
          }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(60% 100% at 80% 50%, rgba(14,165,233,0.35), transparent 70%), radial-gradient(50% 100% at 20% 100%, rgba(251,113,133,0.25), transparent 70%)',
            }} />
            <div style={{ position: 'relative', maxWidth: 720 }}>
              <AnimatedSection className="anim-fade-up" delay={0.1}>
                <div style={{ marginBottom: 20 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '6px 12px', borderRadius: 999,
                    background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)',
                    fontSize: 12, fontWeight: 700, letterSpacing: 0.2,
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}>Ready in production</span>
                </div>
              </AnimatedSection>
              <AnimatedSection className="anim-fade-up" delay={0.2}>
                <h2 style={{
                  fontSize: 56, lineHeight: 1.03, letterSpacing: -1.8,
                  fontWeight: 600, margin: 0,
                  fontFamily: `"Fraunces", Georgia, serif`,
                }}>
                  Give your team the same intelligence<br />as your best operator.
                </h2>
              </AnimatedSection>
              <AnimatedSection className="anim-fade-up" delay={0.3}>
                <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
                  <Link href="https://calendly.com/saksham-atheneai/30min" target="_blank" rel="noreferrer" className="btn-hover" style={{
                    background: '#fff', color: ATHENE.navy, border: 'none',
                    padding: '14px 22px', borderRadius: 12,
                    fontSize: 14, fontWeight: 700, cursor: 'pointer',
                    textDecoration: 'none', display: 'inline-block',
                  }}>Book a demo →</Link>
                 
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </Shell>
  );
}

// ── Sub-components ──

function VizKnowledgeGraph() {
  const nodes = [
    { id: 'deal',    x: 180, y: 90,  label: 'Deal · Apex',   c: ATHENE.sky,     r: 26 },
    { id: 'doc',     x: 60,  y: 50,  label: 'Pitch v4',      c: ATHENE.rose,    r: 18 },
    { id: 'ticket',  x: 60,  y: 150, label: 'APX-214',       c: ATHENE.navy,    r: 18 },
    { id: 'person1', x: 310, y: 50,  label: 'AE · Jordan',   c: ATHENE.sky,     r: 18 },
    { id: 'person2', x: 310, y: 150, label: 'CSM · Maya',    c: ATHENE.rose,    r: 18 },
    { id: 'slack',   x: 180, y: 210, label: '#deal-apex',    c: ATHENE.navy,    r: 16 },
    { id: 'sf',      x: 180, y: -20, label: 'Salesforce',    c: ATHENE.skyDeep, r: 14 },
  ];
  const by = Object.fromEntries(nodes.map(n => [n.id, n]));
  const edges: [string, string][] = [
    ['deal', 'doc'], ['deal', 'ticket'], ['deal', 'person1'],
    ['deal', 'person2'], ['deal', 'slack'], ['deal', 'sf'],
    ['person1', 'slack'], ['ticket', 'person2'],
  ];
  return (
    <div style={{ position: 'relative' }}>
      <svg viewBox="0 0 380 240" style={{ width: '100%', height: 320 }}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={by[a].x} y1={by[a].y} x2={by[b].x} y2={by[b].y}
            stroke={ATHENE.sky} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 3" />
        ))}
        {nodes.map(n => (
          <g key={n.id} className="kg-node" style={{ cursor: 'pointer' }}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="#fff" stroke={n.c} strokeWidth="2" />
            <circle cx={n.x} cy={n.y} r={n.r * 0.45} fill={n.c} opacity="0.18" />
            <text x={n.x} y={n.y + n.r + 14} textAnchor="middle" fontSize="10" fontWeight="700" fill={ATHENE.ink}>{n.label}</text>
          </g>
        ))}
      </svg>
      <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 10, fontWeight: 700, letterSpacing: 1.2, color: ATHENE.inkFaint }}>KNOWLEDGE GRAPH · ACME CORP</div>
    </div>
  );
}

function PillarCard({ num, title, body, viz, accent = false }: {
  num: string; title: string; body: string; viz: React.ReactNode; accent?: boolean;
}) {
  return (
    <Card accent={accent} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 200, background: accent ? 'rgba(14,165,233,0.04)' : 'rgba(23,37,84,0.02)', borderBottom: `1px solid ${ATHENE.hair}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {viz}
      </div>
      <div style={{ padding: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, color: ATHENE.inkFaint, marginBottom: 12 }}>{num}</div>
        <h3 style={{
          fontSize: 22, fontWeight: 600, letterSpacing: -0.4, margin: 0,
          fontFamily: `"Fraunces", Georgia, serif`, color: ATHENE.ink,
        }}>{title}</h3>
        <p style={{ marginTop: 12, fontSize: 14.5, lineHeight: 1.55, color: ATHENE.inkMuted, fontWeight: 450 }}>{body}</p>
      </div>
    </Card>
  );
}

function HeroProductPeek() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="float-gentle" style={{
        position: 'absolute', top: -12, right: 16, zIndex: 3,
        padding: '6px 10px', borderRadius: 8, background: '#fff',
        border: `1px solid ${ATHENE.hair}`, fontSize: 11, fontWeight: 700,
        color: ATHENE.inkMuted, boxShadow: '0 8px 24px -12px rgba(23,37,84,0.2)',
      }}>
        <span className="pulse-dot" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#10b981', marginRight: 6 }} />
        Live · 1.2s
      </div>

      <Card hover={false} style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{
          padding: '12px 16px', borderBottom: `1px solid ${ATHENE.hair}`,
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.6)',
        }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fca5a5' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fde68a' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#86efac' }} />
          <span style={{
            marginLeft: 12, fontSize: 12, fontWeight: 600,
            color: ATHENE.inkMuted, fontFamily: 'ui-monospace, Menlo, monospace',
          }}>athene · supervisor</span>
        </div>

        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ alignSelf: 'flex-end', maxWidth: '78%' }}>
            <div style={{
              background: ATHENE.navy, color: '#fff',
              padding: '12px 16px', borderRadius: '16px 16px 4px 16px',
              fontSize: 14.5, fontWeight: 500, lineHeight: 1.45,
            }}>
              Brief me on the Apex renewal. Include last week&apos;s Slack and any open tickets.
            </div>
            <div style={{ fontSize: 11, color: ATHENE.inkFaint, textAlign: 'right', marginTop: 4 }}>you · 2:14pm</div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              background: `linear-gradient(135deg, ${ATHENE.sky}, ${ATHENE.rose})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: '#fff',
            }}>A</div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <ToolChip icon="☁" label="Salesforce" note="3 records · stage: Negotiation" tone="sky" />
              <ToolChip icon="✎" label="Drive"      note="Pitch deck v4 · Finance memo" tone="rose" />
              <ToolChip icon="#" label="Slack"      note="#deal-apex · 42 messages" tone="navy" />
              <ToolChip icon="▣" label="Jira"       note="2 blockers · security review" tone="sky" done />

              <div style={{
                marginTop: 8, padding: 14, borderRadius: 12,
                background: 'rgba(14,165,233,0.06)',
                border: '1px solid rgba(14,165,233,0.2)',
                fontSize: 13.5, lineHeight: 1.55, color: ATHENE.ink, fontWeight: 500,
              }}>
                <b>Apex · renewal due Fri.</b> Legal cleared last Tuesday;
                procurement opened ticket APX-214 on SSO scope.
                Their follow-up needs <u>the updated DPA</u>. I can draft it.
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                <MiniBtn>Draft DPA</MiniBtn>
                <MiniBtn>Open APX-214</MiniBtn>
                <MiniBtn>Schedule follow-up</MiniBtn>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="float-gentle" style={{
        position: 'absolute', bottom: -18, left: -24, zIndex: 3,
        padding: '10px 14px', borderRadius: 12, background: '#fff',
        border: `1px solid ${ATHENE.hair}`, fontSize: 12, fontWeight: 600,
        boxShadow: '0 12px 30px -12px rgba(23,37,84,0.18)',
        display: 'flex', alignItems: 'center', gap: 10,
        animationDelay: '1s',
      }}>
        <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
        <div>
          <div style={{ color: ATHENE.ink }}>Scoped to <b>you</b></div>
          <div style={{ color: ATHENE.inkFaint, fontSize: 11 }}>Sales · Enterprise · West</div>
        </div>
      </div>
    </div>
  );
}

function ToolChip({ icon, label, note, tone, done = false }: {
  icon: string; label: string; note: string; tone: 'sky' | 'rose' | 'navy'; done?: boolean;
}) {
  const tones = {
    sky:  { bg: '#e0f2fe', fg: ATHENE.skyDeep, dot: ATHENE.sky },
    rose: { bg: '#ffe4e6', fg: '#be123c',      dot: ATHENE.rose },
    navy: { bg: 'rgba(23,37,84,0.06)', fg: ATHENE.navy, dot: ATHENE.navy },
  }[tone];
  return (
    <div className="tool-chip" style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 12px', borderRadius: 10,
      background: tones.bg, border: `1px solid ${tones.dot}22`,
      fontSize: 12.5, fontWeight: 600, color: tones.fg,
      width: 'fit-content', cursor: 'default',
    }}>
      <span style={{ width: 18, height: 18, borderRadius: 6, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>{icon}</span>
      <b>{label}</b>
      <span style={{ color: tones.fg, opacity: 0.7, fontWeight: 500 }}>· {note}</span>
      {done && <span style={{ marginLeft: 4, fontSize: 14 }}>✓</span>}
    </div>
  );
}

function MiniBtn({ children }: { children: React.ReactNode }) {
  return (
    <span className="mini-btn" style={{
      fontSize: 12, fontWeight: 600, padding: '6px 10px',
      border: `1px solid ${ATHENE.hair}`, borderRadius: 8,
      background: '#fff', color: ATHENE.navy, cursor: 'pointer',
    }}>{children}</span>
  );
}

function SiIcon({ icon, size = 22 }: { icon: { path: string; hex: string }; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={`#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}

function SlackIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#4A154B"/>
    </svg>
  );
}

function SalesforceIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 42" width={size} height={Math.round(size * 42 / 64)} fill="#00A1E0">
      <path d="M26.4 4.2C29.1 1.6 32.7 0 36.7 0c5.8 0 10.9 3.2 13.7 8C52.6 7 54.8 6.4 57 6.4 61 6.4 64 9.4 64 13.4c0 1.4-.4 2.7-1.1 3.8 1.6 1.3 2.6 3.3 2.6 5.5 0 3.9-3.2 7.1-7.1 7.1-.5 0-1 0-1.5-.1C55.5 33 50.5 36 44.8 36c-1.4 0-2.8-.2-4.1-.6C38.8 38.4 36 40 32.9 40c-2.7 0-5.2-1-7-2.7C24.6 38.4 22.8 39 20.8 39c-3 0-5.7-1.4-7.4-3.7-1.1.4-2.3.6-3.6.6C4.4 35.9 0 31.5 0 26.1c0-3.2 1.5-6.1 3.8-8-0.1-.6-.2-1.2-.2-1.9C3.6 7.6 9.2 2 16.1 2c3.9 0 7.4 1.7 9.8 4.4C25.5 5.7 25.9 4.9 26.4 4.2z"/>
    </svg>
  );
}

function SharePointIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <rect x="0" y="3" width="15" height="15" rx="2" fill="#0078D4"/>
      <rect x="4" y="7" width="15" height="13" rx="2" fill="#1A9FE0"/>
      <rect x="9" y="11" width="15" height="10" rx="2" fill="#50D9FF"/>
    </svg>
  );
}

function IntegrationsStrip() {
  const tools: { n: string; icon: React.ReactNode }[] = [
    { n: 'Salesforce', icon: <SalesforceIcon /> },
    { n: 'Snowflake',  icon: <SiIcon icon={siSnowflake} /> },
    { n: 'Slack',      icon: <SlackIcon /> },
    { n: 'Notion',     icon: <SiIcon icon={siNotion} /> },
    { n: 'Jira',       icon: <SiIcon icon={siJira} /> },
    { n: 'Linear',     icon: <SiIcon icon={siLinear} /> },
    { n: 'GitHub',     icon: <SiIcon icon={siGithub} /> },
    { n: 'HubSpot',    icon: <SiIcon icon={siHubspot} /> },
    { n: 'Drive',      icon: <SiIcon icon={siGoogledrive} /> },
    { n: 'Gmail',      icon: <SiIcon icon={siGmail} /> },
    { n: 'Zendesk',    icon: <SiIcon icon={siZendesk} /> },
    { n: 'SharePoint', icon: <SharePointIcon /> },
  ];
  return (
    <section className="r-section" style={{
      padding: '32px 56px',
      borderTop: `1px solid ${ATHENE.hair}`, borderBottom: `1px solid ${ATHENE.hair}`,
      background: 'rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 1.8, textAlign: 'center',
        color: ATHENE.inkFaint, textTransform: 'uppercase', marginBottom: 20,
      }}>Connects to 30+ systems · OAuth in minutes · Read your permissions, not your data</div>
      <div className="r-grid-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12 }}>
        {tools.map((t, i) => (
          <div key={t.n} className="integration-badge" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, justifyContent: 'center',
            padding: '12px 8px', borderRadius: 10,
            background: '#fff', border: `1px solid ${ATHENE.hair}`,
            fontSize: 11, fontWeight: 700, color: ATHENE.navy,
            cursor: 'default',
            animationDelay: `${i * 0.05}s`,
          }}>
            {t.icon}
            {t.n}
          </div>
        ))}
      </div>
    </section>
  );
}

function VizZeroCopy() {
  return (
    <svg width="260" height="140" viewBox="0 0 260 140">
      <rect x="10" y="40" width="70" height="60" rx="10" fill="#fff" stroke="rgba(23,37,84,0.15)" />
      <text x="45" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill={ATHENE.inkMuted}>YOUR DB</text>
      <rect x="180" y="40" width="70" height="60" rx="10" fill="#fff" stroke="rgba(23,37,84,0.15)" />
      <text x="215" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill={ATHENE.inkMuted}>ATHENE</text>
      <path d="M80 70 Q 130 40 180 70" stroke={ATHENE.sky} strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      <circle cx="130" cy="52" r="14" fill="#fff" stroke={ATHENE.sky} strokeWidth="1.5" />
      <text x="130" y="56" textAnchor="middle" fontSize="14" fill={ATHENE.skyDeep}>⤢</text>
      <text x="130" y="122" textAnchor="middle" fontSize="10" fontWeight="600" fill={ATHENE.inkFaint}>pointer, not payload</text>
    </svg>
  );
}

function VizRouter() {
  return (
    <svg width="260" height="140" viewBox="0 0 260 140">
      <circle cx="130" cy="70" r="24" fill={ATHENE.navy} />
      <text x="130" y="75" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">ROUTE</text>
      {[
        { x: 30,  y: 30,  l: 'CRM'  },
        { x: 30,  y: 110, l: 'Docs' },
        { x: 230, y: 30,  l: 'Chat' },
        { x: 230, y: 110, l: 'Tix'  },
      ].map((n, i) => (
        <g key={i}>
          <line x1={n.x} y1={n.y} x2="130" y2="70" stroke={ATHENE.sky} strokeWidth="1.5" opacity="0.6" />
          <circle cx={n.x} cy={n.y} r="14" fill="#fff" stroke="rgba(23,37,84,0.2)" />
          <text x={n.x} y={n.y + 3} textAnchor="middle" fontSize="9" fontWeight="700" fill={ATHENE.navy}>{n.l}</text>
        </g>
      ))}
    </svg>
  );
}

function VizRBAC() {
  return (
    <svg width="260" height="140" viewBox="0 0 260 140">
      {[
        { y: 32, label: 'Finance', color: ATHENE.sky,  allow: [1,1,0,0] },
        { y: 62, label: 'Sales',   color: ATHENE.rose, allow: [0,1,1,0] },
        { y: 92, label: 'Eng',     color: ATHENE.navy, allow: [0,0,1,1] },
      ].map((r, i) => (
        <g key={i}>
          <text x="16" y={r.y + 4} fontSize="11" fontWeight="700" fill={ATHENE.inkMuted}>{r.label}</text>
          {r.allow.map((a, j) => (
            <rect key={j} x={82 + j * 40} y={r.y - 10} width="30" height="20" rx="4"
              fill={a ? r.color : '#fff'} stroke={a ? r.color : 'rgba(23,37,84,0.2)'} />
          ))}
        </g>
      ))}
      <text x="180" y="128" textAnchor="end" fontSize="9" fontWeight="600" fill={ATHENE.inkFaint}>scope inherited from IdP</text>
    </svg>
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
      <div className="r-step-line" style={{
        position: 'absolute', top: 44, left: '8%', right: '8%', height: 2,
        background: `repeating-linear-gradient(90deg, ${ATHENE.sky} 0 6px, transparent 6px 10px)`,
        opacity: 0.5,
      }} />
      <div className="r-grid-6" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
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