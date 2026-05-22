// src/components/Card.jsx
export default function Card({ children, className = '', hover = true, style = {} }) {
  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '24px',
        transition: hover ? 'all .2s' : 'none',
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
