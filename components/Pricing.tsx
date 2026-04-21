'use client';

import React from 'react';
import Link from 'next/link';
import { ATHENE } from '@/lib/theme';
import { Shell, Nav, Footer, Pill, BtnPrimary, BtnGhost, Card, AnimatedSection } from '@/components/ui';

export default function Pricing() {
  return (
    <Shell>
      <Nav />

      <section className="r-section" style={{ padding: '96px 56px 48px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: '-40px -10% 40% -10%', pointerEvents: 'none',
          background: 'radial-gradient(40% 60% at 50% 30%, rgba(14,165,233,0.12), transparent 70%), radial-gradient(40% 60% at 50% 70%, rgba(251,113,133,0.1), transparent 70%)',
          filter: 'blur(40px)',
        }} />
        <div className="hero-entrance hero-entrance-d1" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Pill tone="sky">Plans — coming soon</Pill>
          <h1 className="r-h1" style={{
            fontSize: 64, lineHeight: 1, letterSpacing: -2.2,
            fontWeight: 600, margin: '20px 0 18px', color: ATHENE.ink,
            fontFamily: `"Fraunces", Georgia, serif`, maxWidth: 780,
          }}>
            Three plans.<br/>
            <em className="gradient-text-animated" style={{
              fontStyle: 'italic',
              background: `linear-gradient(110deg, ${ATHENE.skyDeep} 0%, ${ATHENE.rose} 50%, ${ATHENE.skyDeep} 100%)`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>One promise.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: ATHENE.inkMuted, maxWidth: 640, fontWeight: 450 }}>
            We&apos;re finalizing pricing with our earliest users. Here&apos;s a preview of the three plans
            we&apos;re building and what you&apos;ll unlock in each. Every plan will let you bring your own
            model key, and every plan keeps your records on your servers.
          </p>
          <div className="hero-entrance hero-entrance-d3" style={{ marginTop: 28, display: 'flex', gap: 12 }}>
            <BtnPrimary href="/pricing">Join the waitlist →</BtnPrimary>
            <BtnGhost href="/team">Talk to a founder</BtnGhost>
          </div>
        </div>
      </section>

      {/* THREE TIERS */}
      <section className="r-section" style={{ padding: '32px 56px 64px' }}>
        <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1240, margin: '0 auto' }}>
          {/* Personal */}
          <AnimatedSection className="anim-fade-up" delay={0}>
            <Card style={{ padding: 32 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: ATHENE.ink }}>Personal</div>
              <p style={{ fontSize: 13.5, color: ATHENE.inkMuted, marginTop: 6, marginBottom: 22, lineHeight: 1.5 }}>
                For solo operators and analysts connecting their own tools.
              </p>
              <div style={{
                padding: '18px 20px', borderRadius: 12,
                background: 'rgba(23,37,84,0.035)', border: `1px dashed rgba(23,37,84,0.2)`,
                marginBottom: 22,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint, marginBottom: 4 }}>PRICING</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: ATHENE.ink, fontFamily: `"Fraunces", Georgia, serif`, letterSpacing: -0.3 }}>
                  Monthly flat rate
                </div>
                <div style={{ fontSize: 12, color: ATHENE.inkMuted, marginTop: 2 }}>Pricing will be announced at GA</div>
              </div>
              <BtnGhost style={{ width: '100%' }} href="https://calendly.com/saksham-atheneai/30min">Join waitlist</BtnGhost>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${ATHENE.hair}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint, marginBottom: 14 }}>WHAT YOU&apos;LL GET</div>
                <FeatureList items={[
                  'Single-user workspace',
                  'Connect your core tools (CRM, docs, chat)',
                  'Personal knowledge graph',
                  'Bring your own model key (BYOK)',
                  'Natural-language chat + quick actions',
                  'Community + email support',
                ]} />
              </div>
            </Card>
          </AnimatedSection>

          {/* Team */}
          <AnimatedSection className="anim-fade-up" delay={0.12}>
            <Card accent style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 16, right: 16 }}><Pill tone="sky">Most anticipated</Pill></div>
              <div style={{ fontSize: 17, fontWeight: 700, color: ATHENE.ink }}>Team</div>
              <p style={{ fontSize: 13.5, color: ATHENE.inkMuted, marginTop: 6, marginBottom: 22, lineHeight: 1.5 }}>
                For teams running AI across shared tools with proper permissioning.
              </p>
              <div style={{
                padding: '18px 20px', borderRadius: 12,
                background: 'rgba(14,165,233,0.08)', border: `1px dashed rgba(14,165,233,0.35)`,
                marginBottom: 22,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.skyDeep, marginBottom: 4 }}>PRICING</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: ATHENE.ink, fontFamily: `"Fraunces", Georgia, serif`, letterSpacing: -0.3 }}>
                  Per-seat, billed monthly
                </div>
                <div style={{ fontSize: 12, color: ATHENE.inkMuted, marginTop: 2 }}>Early-access pricing for design partners</div>
              </div>
              <BtnPrimary style={{ width: '100%' }} href="https://calendly.com/saksham-atheneai/30min">Apply for early access →</BtnPrimary>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${ATHENE.hair}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint, marginBottom: 14 }}>EVERYTHING IN PERSONAL, PLUS</div>
                <FeatureList items={[
                  'Multi-seat workspace',
                  '30+ OAuth connectors',
                  'Shared organization knowledge graph',
                  'Teams, roles & IdP-synced RBAC',
                  'Supervisor + multi-agent routing',
                  'BYOK with shared billing',
                  'Workflow automations & scheduled runs',
                  'Audit log',
                  'Priority email support',
                ]} accent />
              </div>
            </Card>
          </AnimatedSection>

          {/* Enterprise */}
          <AnimatedSection className="anim-fade-up" delay={0.24}>
            <Card style={{ padding: 32 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: ATHENE.ink }}>Enterprise</div>
              <p style={{ fontSize: 13.5, color: ATHENE.inkMuted, marginTop: 6, marginBottom: 22, lineHeight: 1.5 }}>
                For larger orgs that need custom access, SCIM, and procurement-ready terms.
              </p>
              <div style={{
                padding: '18px 20px', borderRadius: 12,
                background: 'rgba(23,37,84,0.035)', border: `1px dashed rgba(23,37,84,0.2)`,
                marginBottom: 22,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint, marginBottom: 4 }}>PRICING</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: ATHENE.ink, fontFamily: `"Fraunces", Georgia, serif`, letterSpacing: -0.3 }}>
                  Custom · let&apos;s talk
                </div>
                <div style={{ fontSize: 12, color: ATHENE.inkMuted, marginTop: 2 }}>Scoped to seats, usage, and controls</div>
              </div>
              <BtnPrimary style={{ width: '100%', background: ATHENE.skyDeep, boxShadow: '0 10px 24px -10px rgba(2,132,199,0.45)' }} href="/team">Contact sales →</BtnPrimary>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${ATHENE.hair}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint, marginBottom: 14 }}>EVERYTHING IN TEAM, PLUS</div>
                <FeatureList items={[
                  'Custom access management',
                  'Super-user / cross-team scopes',
                  'SCIM provisioning',
                  'Row / column masking + DLP',
                  'SIEM export (Splunk, Datadog, Sumo)',
                  'Custom connectors & actions',
                  'Expanded data residency regions',
                  'Named CSM + SLA-backed support',
                  'BYOK with negotiated volume rates',
                ]} />
              </div>
            </Card>
          </AnimatedSection>
        </div>
        <p style={{ textAlign: 'center', marginTop: 28, fontSize: 13, color: ATHENE.inkFaint, fontWeight: 500 }}>
          Final pricing will be announced at GA. Early-access customers lock in founder-friendly rates.
        </p>
      </section>

      {/* Custom Access Management callout */}
      <section className="r-section" style={{ padding: '32px 56px 72px' }}>
        <AnimatedSection className="anim-scale">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <Card hover={false} style={{ padding: 48 }}>
              <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'center' }}>
                <AnimatedSection className="anim-slide-left" delay={0.1}>
                  <div>
                    <Pill tone="rose">Enterprise-only</Pill>
                    <h2 style={{
                      fontSize: 34, letterSpacing: -1, fontWeight: 600, margin: '14px 0 12px',
                      fontFamily: `"Fraunces", Georgia, serif`, color: ATHENE.ink,
                    }}>
                      Custom access for the people who need to{' '}
                      <em style={{ color: ATHENE.skyDeep }}>see across the org.</em>
                    </h2>
                    <p style={{ fontSize: 15, lineHeight: 1.55, color: ATHENE.inkMuted, fontWeight: 450 }}>
                      Leaders and BI analysts don&apos;t fit a single role. Enterprise lets you define
                      super-user scopes — any combination of departments, data sources, and masking
                      rules — so decision-makers get the signal without breaking least-privilege
                      for everyone else.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection className="anim-slide-right" delay={0.2}>
                  <Card tight style={{ padding: 20, background: '#fff' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint, marginBottom: 12 }}>SUPER-USER SCOPE · CFO</div>
                    <div style={{ display: 'grid', gap: 8 }}>
                      {([
                        ['Finance DB',  'full',     ATHENE.sky],
                        ['CRM',         'read',     ATHENE.sky],
                        ['Board docs',  'full',     ATHENE.sky],
                        ['Eng repo',    'metadata', '#94a3b8'],
                        ['HR records',  'masked',   ATHENE.rose],
                      ] as [string, string, string][]).map(([src, level, c]) => (
                        <div key={src} className="tool-chip" style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '10px 14px', borderRadius: 8, background: 'rgba(23,37,84,0.03)',
                          border: `1px solid ${ATHENE.hair}`, cursor: 'default',
                        }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: ATHENE.ink }}>{src}</span>
                          <span style={{ fontSize: 11, fontWeight: 700, color: c, textTransform: 'uppercase', letterSpacing: 0.8 }}>{level}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="r-section" style={{ padding: '32px 56px 96px' }}>
        <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56, maxWidth: 1100, margin: '0 auto' }}>
          <AnimatedSection className="anim-slide-left">
            <div>
              <Pill tone="rose">FAQ</Pill>
              <h2 style={{ fontSize: 32, letterSpacing: -1, fontWeight: 600, margin: '14px 0 12px', fontFamily: `"Fraunces", Georgia, serif`, color: ATHENE.ink }}>Common questions.</h2>
              <p style={{ fontSize: 14.5, color: ATHENE.inkMuted, lineHeight: 1.5 }}>
                Still something missing? Write to <b>info@atheneai.co</b> — a real founder answers.
              </p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {([
              ['When will pricing be announced?',   "Soon. We're finalizing with our earliest users. Waitlist members hear first, and early-access customers lock in founder-friendly rates before GA."],
              ['What do you actually store?',       'Metadata only — connector configs, user/role mappings, and a per-organization knowledge graph of relationships between entities (deals, docs, tickets, people). Your actual records live in your source systems and are fetched at query time.'],
              ['Do you offer BYOK?',                'Yes, on every plan. Bring your own API key for Anthropic, OpenAI, Google, or self-hosted models. You only pay us for the orchestration layer.'],
              ["What's the knowledge graph?",       "As you use Athene, we build a graph of your organization: which people work on which deals, which docs relate to which tickets, which dashboards are owned by whom. The graph is metadata about relationships — never the content of the records themselves."],
              ['How do I get early access?',        "Join the waitlist or book a call. We're onboarding a small set of design partners first and expanding from there."],
            ] as [string, string][]).map(([q, a], i) => (
              <AnimatedSection key={i} className="anim-fade-up" delay={i * 0.08}>
                <Card tight>
                  <div style={{ fontSize: 15, fontWeight: 700, color: ATHENE.ink, marginBottom: 6 }}>{q}</div>
                  <div style={{ fontSize: 13.5, color: ATHENE.inkMuted, lineHeight: 1.55, fontWeight: 450 }}>{a}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Shell>
  );
}

function FeatureList({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map(it => (
        <li key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: ATHENE.ink, fontWeight: 500, lineHeight: 1.4 }}>
          <span style={{
            width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
            background: accent ? ATHENE.sky : 'rgba(14,165,233,0.12)',
            color: accent ? '#fff' : ATHENE.skyDeep,
            fontSize: 11, fontWeight: 800,
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
          }}>✓</span>
          {it}
        </li>
      ))}
    </ul>
  );
}

type CellVal = string | boolean;
type MatrixRow = [string, string] | [string, CellVal, CellVal, CellVal];

function CompareMatrix() {
  const rows: MatrixRow[] = [
    ['section', 'Workspace'],
    ['Users',                          'Single',          'Multi-seat',          'Multi-seat'],
    ['Connectors',                     'Core set',        '30+ OAuth',           '30+ OAuth + custom'],
    ['Knowledge graph',                'Personal',        'Org-wide',            'Org-wide + cross-team'],
    ['Workflow automations',           false,             true,                  true],
    ['section', 'Access & security'],
    ['SSO',                            false,             'Okta, Google, Entra', '+ SAML, Ping, custom'],
    ['IdP-synced RBAC',                false,             true,                  true],
    ['Custom access management',       false,             false,                 true],
    ['Super-user / cross-team scopes', false,             false,                 true],
    ['SCIM provisioning',              false,             false,                 true],
    ['Row / column masking',           false,             false,                 true],
    ['Audit log',                      'Basic',           'Extended',            'Extended + SIEM export'],
    ['section', 'Model & data'],
    ['BYOK (bring your own key)',      true,              true,                  true],
    ['Data residency',                 'India / US',      'India / US / EU',     'India / US / EU / APAC'],
    ['section', 'Support'],
    ['Support',                        'Community',       'Priority email',      'Named CSM + SLA'],
  ];

  const cell = (v: CellVal) => {
    if (v === true)  return <span style={{ color: ATHENE.skyDeep, fontSize: 16, fontWeight: 700 }}>✓</span>;
    if (v === false) return <span style={{ color: ATHENE.inkFaint, fontSize: 14 }}>—</span>;
    return <span style={{ fontSize: 13, color: ATHENE.ink, fontWeight: 500 }}>{v}</span>;
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
      <thead>
        <tr style={{ background: 'rgba(23,37,84,0.03)' }}>
          <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: ATHENE.inkFaint }}></th>
          <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: 13, fontWeight: 700, color: ATHENE.ink, width: '18%' }}>Personal</th>
          <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: 13, fontWeight: 700, color: ATHENE.skyDeep, width: '22%', background: 'rgba(14,165,233,0.06)' }}>Team</th>
          <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: 13, fontWeight: 700, color: ATHENE.ink, width: '22%' }}>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => {
          if (r[1] !== undefined && r[0] === 'section') {
            return (
              <tr key={i}>
                <td colSpan={4} style={{
                  padding: '20px 24px 10px',
                  fontSize: 11, fontWeight: 700, letterSpacing: 1.8, color: ATHENE.inkFaint, textTransform: 'uppercase',
                  borderTop: i > 0 ? `1px solid ${ATHENE.hair}` : 'none',
                }}>{r[1]}</td>
              </tr>
            );
          }
          const [label, p, t, e] = r as [string, CellVal, CellVal, CellVal];
          return (
            <tr key={i}>
              <td style={{ padding: '10px 24px', fontSize: 13.5, color: ATHENE.ink, fontWeight: 500 }}>{label}</td>
              <td style={{ padding: '10px 20px', textAlign: 'center' }}>{cell(p)}</td>
              <td style={{ padding: '10px 20px', textAlign: 'center', background: 'rgba(14,165,233,0.03)' }}>{cell(t)}</td>
              <td style={{ padding: '10px 20px', textAlign: 'center' }}>{cell(e)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// Suppress unused import warning
void Link;
