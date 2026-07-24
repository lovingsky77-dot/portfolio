import React from 'react';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/beforeAfterData';

export const BeforeAfter: React.FC = () => {
  return (
    <section id="before-after" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          WORK PROCESS TRANSFORMATION
        </div>
        <h2 className="section-title">
          Before & After: 일하는 방식의 근본적 패러다임 변화
        </h2>
        <p className="section-subtitle">
          단순 수작업과 담당자 경험 의존 방식에서, 생성형 AI 및 데이터 기반의 재사용 가능한 업무 프로세스로 전환된 시각적 대조입니다.
        </p>

        {/* Comparison Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2.5rem' }}>
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Category Bar */}
              <div
                style={{
                  padding: '0.875rem 1.5rem',
                  backgroundColor: 'var(--color-bg)',
                  borderBottom: '1px solid var(--color-border)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Sparkles size={16} style={{ color: 'var(--color-accent-light)' }} />
                <span>{item.category}</span>
              </div>

              {/* Before vs After Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0'
                }}
              >
                {/* Before Box */}
                <div
                  style={{
                    padding: '1.5rem',
                    borderRight: '1px solid var(--color-border)',
                    backgroundColor: 'rgba(239, 68, 68, 0.03)'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: '#EF4444',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    <XCircle size={16} /> Traditional Approach (Before)
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {item.before}
                  </p>
                </div>

                {/* After Box */}
                <div
                  style={{
                    padding: '1.5rem',
                    backgroundColor: 'rgba(34, 197, 94, 0.03)'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--color-accent-light)',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    <CheckCircle2 size={16} /> AI & Data Innovation (After)
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text)', fontWeight: 500, lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {item.after}
                  </p>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--color-accent-light)',
                      backgroundColor: 'var(--color-accent-bg)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    핵심 가치: {item.benefit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
