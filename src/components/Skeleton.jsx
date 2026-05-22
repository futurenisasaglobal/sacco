// src/components/Skeleton.jsx
export default function Skeleton({ width = '100%', height = '20px', count = 1 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            width,
            height,
            background: 'var(--border)',
            borderRadius: 'var(--radius-sm)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      ))}
    </div>
  );
}