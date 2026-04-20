'use client';

import React from 'react';
import { ATHENE } from '@/lib/theme';
import { Shell, Nav, Footer, Pill, Card, AnimatedSection } from '@/components/ui';

export default function Features() {
  return (
    <Shell>
      <Nav />

      <section style={{ padding: '96px 56px 48px', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: '-40px -10% 40% -10%', pointerEvents: 'none',
          background: 'radial-gradient(50% 50% at 70% 30%, rgba(14,165,233,0.14), transparent 70%)',
          filter: 'blur(40px)',
        }} />
        <div className="hero-entrance hero-entrance-d1" style={{ position: 'relative', maxWidth: 780 }}>
          <Pill tone="sky">Platform</Pill>
          <h1 style={{
            fontSize: 64, lineHeight: 1, letterSpacing: -2.2,
            fontWeight: 600, margin: '20px 0 20px', color: ATHENE.ink,
            fontFamily: `"Fraunces", Georgia, serif`,
          }}>
            Everything you need<br/>to ship AI, <em style={{ fontStyle: 'italic', color: ATHENE.skyDeep }}>responsibly.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: ATHENE.inkMuted, maxWidth: 620, fontWeight: 450 }}>
            Athene is built around three non-negotiables: don&apos;t move data, don&apos;t break permissions,
            and don&apos;t leave the auditor guessing. Here&apos;s how that works.
          </p>
        </div>
      </section>

      <AnimatedSection className="anim-fade-up" delay={0}>
        <FeatureRow
          num="01" eyebrow="Zero-copy integration" title="Your data stays where it is."
          body="Connect to Salesforce, Snowflake, Postgres, Drive, SharePoint, Notion, Slack, Jira, GitHub and more with OAuth. Athene issues scoped reads at query time — there is no warehouse, no vector dump, no shadow copy of your IP. Nothing is used to train any model, ever."
          bullets={['OAuth-based, revocable in one click', 'Ephemeral context — purged per-turn', 'Deploy in your VPC or use our SOC 2 cloud']}
          viz={<FeatZeroCopy />}
        />
      </AnimatedSection>
      <AnimatedSection className="anim-fade-up">
        <FeatureRow
          num="02" eyebrow="AI across your existing tools" title="One surface. Every system."
          body="Your team shouldn't have to learn a new app. An AE asks about a deal; Athene routes to Salesforce, Slack, Drive, and Gmail in parallel, reconciles the answer, and can file the next step back into Jira. No migration. No retraining your people."
          bullets={['30+ first-party connectors, extensible SDK', 'Multi-agent orchestration with a supervisor model', 'Actions, not just answers — draft, file, schedule, reply']}
          viz={<FeatRouter />}
          reverse
        />
      </AnimatedSection>
      <AnimatedSection className="anim-fade-up">
        <FeatureRow
          num="03" eyebrow="Permissions-aware" title="Secure by your existing access control."
          body="Athene reads your identity provider — Okta, Entra, Google Workspace — and respects the exact role, group, and file-level permissions your user already has. If Finance can't see Eng's repo, neither can Finance's agent. Every query is scoped, logged, and attributable."
          bullets={['IdP-synced RBAC — no shadow role system', 'Row- and column-level masking on connected DBs', 'Immutable audit log streamed to SIEM']}
          viz={<FeatRBAC />}
        />
      </AnimatedSection>

      {/* Capabilities matrix */}
      <section style={{ padding: '32px 56px 96px' }}>
        <AnimatedSection>
          <div style={{ maxWidth: 680, marginBottom: 40 }}>
            <Pill tone="navy">Capabilities</Pill>
            <h2 style={{
              fontSize: 40, lineHeight: 1.05, letterSpacing: -1.2,
              fontWeight: 600, margin: '18px 0 12px', color: ATHENE.ink,
              fontFamily: `"Fraunces", Georgia, serif`,
            }}>The rest of the platform.</h2>
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            ['Supervisor model',    'A routing agent that decomposes queries, picks sub-agents, and verifies outputs.'],
            ['Action framework',    'Typed actions for writes — draft email, file ticket, schedule event. Every action reviewable.'],
            ['Audit & eval',        'Every token logged to your SIEM. Golden-set evals run nightly per connector.'],
            ['Data masking',        'Column-level redaction applied before the model sees a row. Configurable per role.'],
            ['Admin controls',      'Quota by team, rate limits by connector, red-team mode, kill switch — all from one console.'],
            ['SDK & webhooks',      "TS/Python SDK. Build bespoke agents that inherit the platform's RBAC and audit."],
            ['On-prem option',      'Deploy the control plane in your VPC. Models via your AWS Bedrock / Azure OpenAI account.'],
            ['Residency',           'US, EU, APAC regions. Customer-managed keys. BYO KMS.'],
            ['SSO / SCIM',          'Okta, Entra, Google, Ping. SCIM 2.0 for auto-provisioning and de-provisioning.'],
          ].map(([t, b], i) => (
            <AnimatedSection key={t} className="anim-fade-up" delay={i * 0.06}>
              <Card tight>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: ATHENE.ink, marginBottom: 6 }}>{t}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: ATHENE.inkMuted, fontWeight: 450 }}>{b}</div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </Shell>
  );
}

function FeatureRow({ num, eyebrow, title, body, bullets, viz, reverse = false }: {
  num: string; eyebrow: string; title: string; body: string;
  bullets: string[]; viz: React.ReactNode; reverse?: boolean;
}) {
  return (
    <section style={{ padding: '64px 56px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center',
        direction: reverse ? 'rtl' : 'ltr',
      }}>
        <AnimatedSection className={reverse ? 'anim-slide-right' : 'anim-slide-left'}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.8, color: ATHENE.skyDeep, marginBottom: 14 }}>{num} · {eyebrow.toUpperCase()}</div>
            <h2 style={{
              fontSize: 44, lineHeight: 1.05, letterSpacing: -1.4,
              fontWeight: 600, margin: '0 0 18px', color: ATHENE.ink,
              fontFamily: `"Fraunces", Georgia, serif`,
            }}>{title}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: ATHENE.inkMuted, fontWeight: 450 }}>{body}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {bullets.map(b => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, color: ATHENE.ink, fontWeight: 500 }}>
                  <span style={{ color: ATHENE.skyDeep, marginTop: 2 }}>✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection className={reverse ? 'anim-slide-left' : 'anim-slide-right'} delay={0.15}>
          <div style={{ direction: 'ltr' }}>
            <Card style={{ padding: 28 }}>{viz}</Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FeatZeroCopy() {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, color: ATHENE.inkFaint, marginBottom: 16 }}>DATA FLOW</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 14, alignItems: 'center' }}>
        <div style={{ padding: 16, borderRadius: 12, border: `1px solid ${ATHENE.hair}`, background: '#fff' }}>
          <div style={{ fontSize: 11, color: ATHENE.inkFaint, fontWeight: 700 }}>SOURCE</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>Your Snowflake</div>
          <div style={{ marginTop: 12, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {[1,1,1,1,1,1,1,1].map((_, i) => (
              <span key={i} style={{ width: 14, height: 8, borderRadius: 2, background: i < 5 ? ATHENE.sky : ATHENE.hair }} />
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: ATHENE.inkFaint, fontWeight: 700, letterSpacing: 1 }}>POINTER</div>
          <div style={{ height: 2, background: `repeating-linear-gradient(90deg, ${ATHENE.sky} 0 6px, transparent 6px 10px)`, margin: '8px 0' }} />
          <div style={{ fontSize: 10, color: ATHENE.inkFaint, fontWeight: 700, letterSpacing: 1 }}>NOT PAYLOAD</div>
        </div>
        <div style={{ padding: 16, borderRadius: 12, border: `1px solid ${ATHENE.hair}`, background: '#fff' }}>
          <div style={{ fontSize: 11, color: ATHENE.inkFaint, fontWeight: 700 }}>ATHENE</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>Ephemeral context</div>
          <div style={{ fontSize: 12, color: ATHENE.inkMuted, marginTop: 8 }}>purged in &lt; 60s</div>
        </div>
      </div>
      <div style={{ marginTop: 20, padding: 14, borderRadius: 10, background: '#ecfdf5', border: '1px solid #a7f3d0', fontSize: 12.5, color: '#047857', fontWeight: 600 }}>
        ● Zero persistent copies · Zero training on your data
      </div>
    </div>
  );
}

function FeatRouter() {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, color: ATHENE.inkFaint, marginBottom: 16 }}>QUERY · &ldquo;Brief the Apex deal&rdquo;</div>
      <div style={{ padding: 14, borderRadius: 10, background: ATHENE.navy, color: '#fff', fontSize: 13, fontFamily: 'ui-monospace, Menlo, monospace' }}>
        supervisor.route({`{ query, user_ctx }`})
      </div>
      <div style={{ height: 18, width: 2, background: ATHENE.sky, margin: '0 auto' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
        {[['Salesforce', ATHENE.sky], ['Slack', '#7c3aed'], ['Drive', '#eab308'], ['Jira', '#1d4ed8']].map(([n, c]) => (
          <div key={n} className="integration-badge" style={{ padding: 10, borderRadius: 8, background: '#fff', border: `1px solid ${ATHENE.hair}`, textAlign: 'center' }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: c, margin: '0 auto 6px' }} />
            <div style={{ fontSize: 11, fontWeight: 700, color: ATHENE.navy }}>{n}</div>
          </div>
        ))}
      </div>
      <div style={{ height: 18, width: 2, background: ATHENE.sky, margin: '0 auto' }} />
      <div style={{ padding: 12, borderRadius: 10, background: '#e0f2fe', border: '1px solid rgba(14,165,233,0.3)', fontSize: 13, color: ATHENE.skyDeep, fontWeight: 600 }}>
        reconcile · verify · respond + propose actions
      </div>
    </div>
  );
}

function FeatRBAC() {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.8, color: ATHENE.inkFaint, marginBottom: 16 }}>ACCESS MATRIX</div>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 13 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 10px', fontSize: 11, color: ATHENE.inkFaint, fontWeight: 700, letterSpacing: 1 }}></th>
            {['Finance DB','CRM','Eng repo','Board docs'].map(h => (
              <th key={h} style={{ padding: '8px 4px', fontSize: 10, color: ATHENE.inkFaint, fontWeight: 700 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {([
            ['CFO',        [1,1,0,1]],
            ['AE',         [0,1,0,0]],
            ['Engineer',   [0,0,1,0]],
            ['Contractor', [0,1,0,0]],
          ] as [string, number[]][]).map(([role, arr]) => (
            <tr key={role}>
              <td style={{ padding: '10px', fontWeight: 700, color: ATHENE.ink }}>{role}</td>
              {arr.map((a, i) => (
                <td key={i} style={{ padding: 8, textAlign: 'center' }}>
                  <div style={{
                    width: 28, height: 20, margin: '0 auto', borderRadius: 4,
                    background: a ? ATHENE.sky : '#fff',
                    border: `1px solid ${a ? ATHENE.sky : 'rgba(23,37,84,0.18)'}`,
                    color: '#fff', fontSize: 11, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{a ? '✓' : ''}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 14, fontSize: 11.5, color: ATHENE.inkFaint, fontWeight: 500 }}>Synced live from Okta · enforced at query time</div>
    </div>
  );
}
