import React from 'react';
import { Mail, Users, Presentation, Briefcase, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/profileData';

const CONTACT_TOPICS = [
  {
    icon: Briefcase,
    title: '프로젝트 & 업무혁신 문의',
    desc: '인사/복지 프로세스 AI 챗봇 제작 및 반복 업무 자동화 컨설팅'
  },
  {
    icon: Presentation,
    title: 'AI · HRD 강의 & 워크숍',
    desc: '현업 AI 활용, GenZ 소통 매뉴얼 및 데이터 기반 교육 기획 강연'
  },
  {
    icon: Users,
    title: '전문가 네트워킹',
    desc: 'HRD Transformation 및 생성형 AI 실무 적용 사례 공유 및 교류'
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textTransform: 'uppercase', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent-light)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          GET IN TOUCH
        </div>
        <h2 className="section-title">
          일하는 방식을 함께 바꿀 준비가 되셨나요?
        </h2>
        <p className="section-subtitle">
          AI 활용, HRD 혁신, 데이터 기반 인사기획 및 조직문화 제반 문의를 편하게 이메일로 보내주세요.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginTop: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Topics Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              주요 소통 & 협업 주제
            </h3>

            {CONTACT_TOPICS.map((topic, idx) => {
              const IconComp = topic.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent-light)',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{topic.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{topic.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Direct Email Action Card */}
          <div
            style={{
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-surface)',
              border: '2px solid var(--color-accent-light)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-accent-bg)',
                color: 'var(--color-accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Mail size={32} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                직접 문의 보내기
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', maxWidth: '380px', margin: '0 auto' }}>
                검증된 이메일로 메일을 보내주시면 24시간 내에 회신해 드립니다.
              </p>
            </div>

            <a
              href={`mailto:${PROFILE.email}`}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1.125rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
            >
              <Mail size={20} /> {PROFILE.email}
            </a>

            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--color-accent-light)' }} />
              <span>정적 호스팅 안정성을 위해 검증된 direct mail 모듈로 연결됩니다.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
