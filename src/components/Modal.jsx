// src/components/Modal.jsx
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}) {
  if (!isOpen) return null;

  const sizes = {
    sm: '400px',
    md: '520px',
    lg: '720px',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
        backdropFilter: 'blur(4px)',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border2)',
          borderRadius: 'var(--radius)',
          width: '100%',
          maxWidth: sizes[size],
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'slideUp .2s ease',
        }}
      >
        <div style={{
          padding: '24px 28px 20px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontSize: '18px',
            color: 'var(--txt)',
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              color: 'var(--txt2)',
              fontSize: '18px',
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '24px 28px' }}>
          {children}
        </div>

        {footer && (
          <div style={{
            padding: '16px 28px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}