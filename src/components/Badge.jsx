// src/components/Badge.jsx
export default function Badge({ type = 'gold', children }) {
  const types = {
    gold: { bg: 'var(--gold-dim)', color: 'var(--gold2)', border: 'rgba(201,168,76,.2)' },
    green: { bg: 'var(--green-dim)', color: 'var(--green)', border: 'rgba(34,197,94,.25)' },
    red: { bg: 'var(--red-dim)', color: 'var(--red)', border: 'rgba(239,68,68,.25)' },
    blue: { bg: 'rgba(59,130,246,.12)', color: 'var(--blue)', border: 'rgba(59,130,246,.25)' },
    amber: { bg: 'rgba(245,158,11,.12)', color: 'var(--amber)', border: 'rgba(245,158,11,.25)' },
    teal: { bg: 'var(--teal-dim)', color: 'var(--teal)', border: 'rgba(45,212,191,.2)' },
  };

  const style = types[type] || types.gold;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '3px 10px',
      borderRadius: '99px',
      fontSize: '11px',
      fontWeight: '600',
      background: style.bg,
      color: style.color,
      border: `1px solid ${style.border}`,
    }}>
      {children}
    </span>
  );
}