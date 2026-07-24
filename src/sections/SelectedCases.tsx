import React, { useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { ProjectCase } from '../types/portfolio';
import { ProjectModal } from '../components/ProjectModal';

export const SelectedCases: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);

  return (
    <section
      id="selected-cases"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          FEATURED INNOVATION CASES
        </div>
        <h2 className="section-title">
          대표 업무혁신 프로젝트 (Selected Innovation Cases)
        </h2>
        <p className="section-subtitle">
          비즈니스 문제와 기존의 한계를 정의하고, AI 및 데이터 중심 접근으로 실제 만든 성과와 변화 기록입니다.
        </p>

        {/* Projects Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              style={{
                padding: '2.25rem 2rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge">{project.badge}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {project.company} | {project.period}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.4375rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    0{index + 1}. {project.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--color-accent-light)', fontWeight: 600 }}>
                    {project.subtitle}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9375rem' }}>
                  <div style={{ color: 'var(--color-text-muted)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>기존 문제:</strong> {project.problem}
                  </div>
                  <div style={{ color: 'var(--color-text-muted)' }}>
                    <strong style={{ color: 'var(--color-text)' }}>AI 적용:</strong> {project.aiApproach}
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.5rem' }}>
                  {project.tools.map((t, idx) => (
                    <span key={idx} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Outcome Box & Action Button */}
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <TrendingUp size={16} /> 핵심 검증 성과
                  </div>
                  <div style={{ fontSize: '1.1875rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                    {project.quantitativeOutcome}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    {project.qualitativeOutcome}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFF',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                >
                  상세 수행 과정 & 스토리 보기 (Problem ➔ Learning) <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
