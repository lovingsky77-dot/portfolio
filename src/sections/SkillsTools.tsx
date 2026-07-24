import React from 'react';
import { Cpu, BarChart3, GraduationCap, MessageSquare, Wrench } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/skillsData';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'AI & Productivity': Cpu,
  'Data & Analytics': BarChart3,
  'HRD & Learning': GraduationCap,
  'Content & Communication': MessageSquare,
  'Development & Collaboration': Wrench
};

export const SkillsTools: React.FC = () => {
  return (
    <section id="skills-tools" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          SKILLS & TOOLSETS
        </div>
        <h2 className="section-title">
          기술 & 도구: 실무 활용 맥락 중심의 스킬셋
        </h2>
        <p className="section-subtitle">
          의미 없는 % 퍼센트 막대그래프 대신, 실제 현업 업무 프로젝트에서 도구를 어떻게 활용하여 가치를 만들었는지 설명합니다.
        </p>

        {/* Categories Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
          {SKILLS_CATEGORIES.map((cat, idx) => {
            const IconComp = CATEGORY_ICONS[cat.category] || Cpu;
            return (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent-light)'
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{cat.category}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{cat.categoryEn}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem'
                  }}
                >
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      style={{
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}
                    >
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>
                        {item.name}
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
