// src/components/StatCard.jsx
export default function StatCard({
  icon,
  label,
  value,
  change,
  changeDir = 'up',
  color = '#c9a84c',
}) {
  return (
    <div style={{
      background: 'var(--card2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '22px',
      transition: 'transform .2s',
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: color + '22',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        marginBottom: '12px',
      }}>
        {icon}
      </div>
      <div style={{ fontSize: '12px', color: 'var(--txt3)', marginBottom: '10px' }}>
        {label}
      </div>
      <div style={{
        fontFamily: 'var(--font-head)',
        fontSize: '28px',
        fontWeight: '700',
        color: 'var(--txt)',
        lineHeight: '1',
      }}>
        {value}
      </div>
      {change && (
        <div style={{
          fontSize: '12px',
          marginTop: '8px',
          color: changeDir === 'up' ? 'var(--green)' : 'var(--red)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span>{changeDir === 'up' ? '↑' : '↓'}</span>
          {change}
        </div>
      )}
    </div>
  );
}