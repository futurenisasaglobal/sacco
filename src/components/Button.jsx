// src/components/Button.jsx
export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props
}) {
  const variants = {
    gold: 'background: var(--gold); color: #000;',
    outline: 'background: transparent; border: 1px solid var(--border2); color: var(--txt);',
    ghost: 'background: transparent; color: var(--txt2);',
    danger: 'background: var(--red-dim); color: var(--red);',
    success: 'background: var(--green-dim); color: var(--green);',
  };

  const sizes = {
    sm: 'padding: 6px 14px; font-size: 12px;',
    md: 'padding: 9px 18px; font-size: 13px;',
    lg: 'padding: 12px 28px; font-size: 15px;',
  };

  return (
    <button
      style={{
        ...variants[variant] ? {} : {},
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {loading ? '⟳ Loading...' : children}
    </button>
  );
}