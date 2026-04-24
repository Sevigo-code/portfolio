'use client';

import Link from 'next/link';

type LogoProps = {
  /** Size variant: 'sm' for nav, 'md' for footer, 'lg' for hero */
  size?: 'sm' | 'md' | 'lg';
  /** If true, wraps in Link to home */
  linked?: boolean;
  className?: string;
};

const sizes = {
  sm: { fontSize: '1.1rem', letterSpacing: '-0.02em' },
  md: { fontSize: '1.4rem', letterSpacing: '-0.02em' },
  lg: { fontSize: '2rem', letterSpacing: '-0.03em' },
};

export function Logo({ size = 'sm', linked = true, className = '' }: LogoProps) {
  const sizeStyle = sizes[size];

  const content = (
    <span
      className={`logo-jsx ${className}`}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        ...sizeStyle,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1px',
      }}
      aria-label="Juan Cartagena"
    >
      <span style={{ color: 'var(--color-muted)' }}>&lt;</span>
      <span style={{ color: 'var(--color-accent)' }}>jc</span>
      <span style={{ color: 'var(--color-muted)' }}>/&gt;</span>
    </span>
  );

  if (linked) {
    return (
      <Link href="/" className="logo-link" aria-label="Ir al inicio">
        {content}
      </Link>
    );
  }

  return content;
}
