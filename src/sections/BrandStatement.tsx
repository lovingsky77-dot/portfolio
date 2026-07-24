import React from 'react';
import { AlertCircle, Cpu, RefreshCw, Award } from 'lucide-react';

const STATEMENT_STEPS = [
  {
    step: '01',
    title: '기존 업무의 문제',
    subtitle: 'Legacy Problem',
    icon: AlertCircle,
    color: '#EF4444',
    content: '파편화된 사내 인사 규정과 반복적인 유선/메일 문의로 담당자의 전략 업무 집중도가 저하되고, 채용 및 직원 만족도 데이터가 직관에 의존해 관리되는 한계가 있었습니다.'
  },
  {
    step: '02',
    title: 'AI 적용 방식',
    titleEn: 'AI & Data Integration',
    icon: Cpu,
    color: 'var(--color-primary-light)',
    content: '규정 문서를 지식 기반 프롬프트와 Chatbot으로 변환하고, 채용/만족도 수치를 계량화 및 상관분석 매트릭스로 정제하여 AI 및 데이터 중심 구조로 재설계합니다.'
  },
  {
    step: '03',
    title: '변화된 일하는 방식',
    titleEn: 'Work Transformation',
    icon: RefreshCw,
    color: 'var(--color-accent-light)',
    content: '단순 수작업 답변과 수동 데이터 집계를 24시간 자동 응대 및 시각화 시스템으로 전환하고, 담당자는 고차원적 교육 기획과 조직 변화 관리에 집중합니다.'
  },
  {
    step: '04',
    title: '조직에 발생한 가치',
    titleEn: 'Organizational Value',
    icon: Award,
    color: 'var(--color-highlight)',
    content: '인사 문의 30% 감축, 공정채용 경진대회 교육부장관상 수상, ESI 상관분석을 통한 객관적 의사결정 체계 확보로 조직 전체의 생산성이 동반 상승합니다.'
  }
];

export const BrandStatement: React.FC = () => {
  return (
    <section
      id="brand-statement"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          BRAND POSITIONING STATEMENT
        </div>
        <h2 className="section-title">
          문제 정의에서 실질적 조직 가치 창출까지
        </h2>
        <p className="section-subtitle">
          기술 자랑이 아닌, 현업의 문제를 명확히 발견하고 AI 및 프로세스 혁신을 통해 실제로 만들어낸 4단계 변화 메커니즘입니다.
        </p>

        {/* 4-Step Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}
        >
          {STATEMENT_STEPS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  padding: '2rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 900, color: item.color, opacity: 0.8 }}>
                    {item.step}
                  </span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    {item.subtitle}
                  </div>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
