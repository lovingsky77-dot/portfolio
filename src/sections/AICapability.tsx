import React from 'react';
import { Bot, Workflow, BarChart3, FileSpreadsheet, GraduationCap, Zap, Users, ShieldCheck } from 'lucide-react';
import { CAPABILITIES } from '../data/capabilitiesData';

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Workflow,
  BarChart3,
  FileSpreadsheet,
  GraduationCap,
  Zap,
  Users,
  ShieldCheck
};

const STEP_COLORS: Record<string, string> = {
  'Problem Def': '#EF4444',
  'Structure': 'var(--color-primary-light)',
  'AI & Automation': 'var(--color-accent-light)',
  'Validation & Scale': 'var(--color-highlight)'
};

export const AICapability: React.FC = () => {
  return (
    <section id="ai-capability" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          CORE COMPETENCIES
        </div>
        <h2 className="section-title">
          4단계 프레임워크로 실행하는 AI 역량
        </h2>
        <p className="section-subtitle">
          AI 도구 단순 조작을 넘어 현업 문제 정의부터 결과 검증 및 조직 확산까지 입증된 8가지 대표 핵심 역량입니다.
        </p>

        {/* 8 Capability Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}
        >
          {CAPABILITIES.map((cap) => {
            const IconComp = ICON_MAP[cap.iconName] || Bot;
            const stepColor = STEP_COLORS[cap.step] || 'var(--color-primary)';

            return (
              <div
                key={cap.id}
                style={{
                  padding: '1.75rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'all var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stepColor
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-bg)',
                      color: stepColor,
                      border: `1px solid ${stepColor}`
                    }}
                  >
                    {cap.step}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {cap.title}
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {cap.titleEn}
                  </div>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                  {cap.description}
                </p>

                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px stroke var(--color-border)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text)',
                    fontWeight: 500,
                    backgroundColor: 'var(--color-bg)',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <strong style={{ color: 'var(--color-accent-light)' }}>실제 적용:</strong> {cap.context}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
