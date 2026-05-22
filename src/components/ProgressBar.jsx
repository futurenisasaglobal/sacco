// src/components/ProgressBar.jsx
export default function ProgressBar({ value, max = 100, color = '#c9a84c', height = 6 }) {
  const percentage = (value / max) * 100;

  return (
    <div style={{
      background: 'var(--border)',
      borderRadius: '99px',
      height: `${height}px`,
      overflow: 'hidden',
      marginTop: '8px',
    }}>
      <div
        style={{
          height: '100%',
          borderRadius: '99px',
          background: color,
          width: `${percentage}%`,
          transition: 'width .6s ease',
        }}
      />
    </div>
  );
}