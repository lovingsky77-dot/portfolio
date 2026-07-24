import React, { useEffect } from 'react';
import { X, AlertCircle, Sparkles, TrendingUp, BookOpen, Layers } from 'lucide-react';
import { ProjectCase } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectCase | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          padding: '2.5rem 2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="모달 닫기"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            padding: '0.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            transition: 'all var(--transition-fast)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '2rem', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge">{project.badge}</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{project.company} | {project.period}</span>
          </div>
          <h2 id="modal-title" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-accent-light)', fontWeight: 600 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Roles & Tools */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            padding: '1.25rem',
            backgroundColor: 'var(--color-bg)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
              나의 역할 & 기여
            </div>
            <div style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{project.role}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
              활용 도구 & 기술
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {project.tools.map((t, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', padding: '0.125rem 0.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Problem -> Approach -> Execution -> Outcome -> Learning Flow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* 1. Problem */}
          <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #EF4444', backgroundColor: 'var(--color-bg)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#EF4444' }}>
              <AlertCircle size={18} /> 1. Problem (기존 문제 & 원인)
            </h3>
            <p style={{ fontSize: '0.9375rem', marginBottom: '0.5rem' }}><strong>문제:</strong> {project.problem}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}><strong>원인:</strong> {project.cause}</p>
          </div>

          {/* 2. Approach */}
          <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)', backgroundColor: 'var(--color-bg)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-primary-light)' }}>
              <Sparkles size={18} /> 2. Approach (AI 및 프로세스 해결 방식)
            </h3>
            <p style={{ fontSize: '0.9375rem' }}>{project.aiApproach}</p>
          </div>

          {/* 3. Execution */}
          <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent-light)', backgroundColor: 'var(--color-bg)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--color-accent-light)' }}>
              <Layers size={18} /> 3. Execution (구체적 수행 내용)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.execution.map((step, idx) => (
                <li key={idx} style={{ fontSize: '0.9375rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent-light)', fontWeight: 700 }}>•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Outcome */}
          <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-highlight)', backgroundColor: 'var(--color-bg)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--color-highlight)' }}>
              <TrendingUp size={18} /> 4. Outcome (정량적 & 정성적 성과)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '0.875rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', marginBottom: '0.25rem' }}>정량적 성과</div>
                <div style={{ fontSize: '1rem', fontWeight: 700 }}>{project.quantitativeOutcome}</div>
              </div>
              <div style={{ padding: '0.875rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-light)', marginBottom: '0.25rem' }}>정성적 변화</div>
                <div style={{ fontSize: '0.9375rem' }}>{project.qualitativeOutcome}</div>
              </div>
            </div>
          </div>

          {/* 5. Learning & Scalability */}
          <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #8B5CF6', backgroundColor: 'var(--color-bg)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#8B5CF6' }}>
              <BookOpen size={18} /> 5. Learning & Scalability (학습 및 확장성)
            </h3>
            <p style={{ fontSize: '0.9375rem', marginBottom: '0.5rem' }}><strong>시행착오 및 배운 점:</strong> {project.learnings}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}><strong>다른 업무로의 확장 가능성:</strong> {project.scalability}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
