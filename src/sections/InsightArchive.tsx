import React from 'react';
import { Clock, Tag } from 'lucide-react';
import { INSIGHT_ARTICLES } from '../data/insightsData';

export const InsightArchive: React.FC = () => {
  return (
    <section
      id="insight-archive"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          INSIGHT ARCHIVE & KNOWLEDGE SHARING
        </div>
        <h2 className="section-title">
          인사이트 아카이브 (Insight Archive)
        </h2>
        <p className="section-subtitle">
          AI 업무 적용, HRD 혁신, 데이터 기반 교육 기획에 관한 지식과 노하우를 정기적으로 발행하기 위한 확장 아카이브 영역입니다.
        </p>

        {/* Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem'
          }}
        >
          {INSIGHT_ARTICLES.map((article) => (
            <div
              key={article.id}
              style={{
                padding: '2rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-primary">{article.category}</span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-highlight-bg)',
                    color: 'var(--color-highlight)',
                    border: '1px solid rgba(245, 158, 11, 0.3)'
                  }}
                >
                  <Clock size={12} /> {article.status}
                </span>
              </div>

              <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, lineHeight: 1.4 }}>
                {article.title}
              </h3>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6, flexGrow: 1 }}>
                {article.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.75rem', borderTop: '1px stroke var(--color-border)' }}>
                {article.tags.map((t, idx) => (
                  <span key={idx} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Tag size={10} /> #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
