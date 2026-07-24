import React from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '3rem 0 2rem',
        marginTop: '5rem'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--color-border)'
          }}
        >
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
              {PROFILE.name}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              {PROFILE.title}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={`mailto:${PROFILE.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-accent-light)',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--color-bg)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)'
              }}
            >
              <Mail size={16} /> {PROFILE.email}
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved. Powered by GitHub Pages.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={14} style={{ color: 'var(--color-accent-light)' }} />
            <span>AI-Driven Work Process Innovation Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
