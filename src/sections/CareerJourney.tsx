import React from 'react';
import { Building2, Calendar, ArrowUpRight, Check } from 'lucide-react';
import { CAREER_JOURNEY } from '../data/experienceData';

export const CareerJourney: React.FC = () => {
  return (
    <section
      id="career-journey"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          CAREER GROWTH TRAJECTORY
        </div>
        <h2 className="section-title">
          경력 여정: 전문성의 연속적 성장과 확장
        </h2>
        <p className="section-subtitle">
          단순한 직무 나열이 아닌, 각 조직에서 해결한 비즈니스 문제, 만들어낸 실행적 변화, 축적된 차세대 AI 역량의 연결 궤적입니다.
        </p>

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '3rem', position: 'relative' }}>
          {CAREER_JOURNEY.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                padding: '2.25rem 2rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left Header */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={20} style={{ color: 'var(--color-primary-light)' }} />
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 800 }}>{item.company}</h3>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>({item.companyEn})</span>
                </div>

                <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-accent-light)' }}>
                  {item.role}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                  <Calendar size={16} /> {item.period} ({item.duration})
                </div>

                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-surface)', padding: '0.625rem 0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  {item.companyMeta}
                </p>

                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    주요 담당 실무:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.875rem' }}>
                    {item.keyResponsibilities.map((resp, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.375rem', color: 'var(--color-text-muted)' }}>
                        <Check size={14} style={{ color: 'var(--color-accent-light)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Growth & Problem Grid */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#EF4444', marginBottom: '0.25rem' }}>
                    1. 해결한 핵심 문제 (Problem Solved)
                  </div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{item.problemSolved}</p>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent-light)', marginBottom: '0.25rem' }}>
                    2. 직접 만든 변화 (Change Created)
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)' }}>{item.changeCreated}</p>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-light)', marginBottom: '0.25rem' }}>
                    3. 축적한 역량 (Capabilities Gained)
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{item.capabilitiesGained}</p>
                </div>

                <div style={{ paddingTop: '0.5rem', borderTop: '1px stroke var(--color-border)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-highlight)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <ArrowUpRight size={14} /> 차세대 단계로의 연결 (Next Step)
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{item.nextStepConnection}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
