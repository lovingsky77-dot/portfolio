import React from 'react';
import { ArrowDown, Sparkles, Mail, Briefcase, Award } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '90vh',
        paddingTop: 'calc(var(--header-height) + 3rem)',
        paddingBottom: '5rem',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Hero Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span className="badge">
                <Sparkles size={14} /> {PROFILE.currentRole}
              </span>
              <span className="badge badge-primary">
                <Briefcase size={14} /> 총 경력 {PROFILE.yearsOfExperience}
              </span>
            </div>

            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                  letterSpacing: '-0.03em'
                }}
              >
                {PROFILE.heroMainCopy}
              </h1>

              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--color-accent-light)',
                  marginBottom: '1rem',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid var(--color-accent-light)'
                }}
              >
                “{PROFILE.brandSentence}”
              </div>

              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {PROFILE.heroSubCopy}
              </p>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text)', lineHeight: 1.6, backgroundColor: 'var(--color-surface)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              {PROFILE.shortBio}
            </p>

            {/* Quick Awards highlight */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              <Award size={18} style={{ color: 'var(--color-highlight)', flexShrink: 0, marginTop: '2px' }} />
              <span><strong>주요 성과:</strong> 2020년 공정채용/블라인드채용 부총리 겸 교육부장관상 수상 · 대동 AI Chatbot(문의 30% 감축)</span>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href="#selected-cases"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                대표 혁신 사례 보기
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface)'}
              >
                <Mail size={18} /> 문의 및 협업 제안
              </a>
            </div>
          </div>

          {/* AI x Human Interactive Abstract SVG Art */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1/1',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-lg)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* SVG Graphic Symbolizing Human x AI Architecture */}
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                {/* Background Grid Lines */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-border)" strokeWidth="1" opacity="0.4" />
                </pattern>
                <rect width="400" height="400" fill="url(#grid)" />

                {/* Outer Flow Circles */}
                <circle cx="200" cy="200" r="140" stroke="var(--color-primary-light)" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
                <circle cx="200" cy="200" r="100" stroke="var(--color-accent-light)" strokeWidth="2" opacity="0.4" />

                {/* Connecting Nodes (Data & Workflow) */}
                <line x1="100" y1="140" x2="200" y2="200" stroke="var(--color-primary)" strokeWidth="3" />
                <line x1="300" y1="140" x2="200" y2="200" stroke="var(--color-accent-light)" strokeWidth="3" />
                <line x1="200" y1="200" x2="200" y2="300" stroke="var(--color-highlight)" strokeWidth="3" />

                {/* Human Intelligence Node */}
                <g transform="translate(100, 140)">
                  <circle r="30" fill="var(--color-primary)" />
                  <text x="0" y="5" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Human</text>
                </g>

                {/* AI Technology Node */}
                <g transform="translate(300, 140)">
                  <circle r="30" fill="var(--color-accent-light)" />
                  <text x="0" y="5" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">AI Agent</text>
                </g>

                {/* Core Transformation Node */}
                <g transform="translate(200, 200)">
                  <circle r="40" fill="var(--color-surface)" stroke="var(--color-highlight)" strokeWidth="4" />
                  <text x="0" y="-5" textAnchor="middle" fill="var(--color-text)" fontSize="11" fontWeight="bold">WORK</text>
                  <text x="0" y="12" textAnchor="middle" fill="var(--color-accent-light)" fontSize="10" fontWeight="bold">INNOVATION</text>
                </g>

                {/* Outcome Node */}
                <g transform="translate(200, 300)">
                  <rect x="-60" y="-20" width="120" height="40" rx="20" fill="var(--color-primary-dark)" />
                  <text x="0" y="5" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="bold">HRD Value</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem'
          }}
        >
          <a
            href="#brand-statement"
            aria-label="아래 섹션으로 스크롤"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-text-muted)',
              fontSize: '0.8125rem',
              fontWeight: 600
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={18} style={{ animation: 'bounce 2s infinite' }} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
