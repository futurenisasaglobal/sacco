// src/components/Form/Input.jsx
import { useState } from 'react';

export default function Input({
  label,
  type = 'text',
  error,
  hint,
  required = false,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ marginBottom: '20px' }}>
      {label && (
        <label style={{
          display: 'block',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--txt3)',
          letterSpacing: '.5px',
          marginBottom: '8px',
        }}>
          {label}
          {required && <span style={{ color: 'var(--red)' }}>*</span>}
        </label>
      )}
      <input
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          background: 'var(--bg3)',
          border: `1px solid ${error ? 'var(--red)' : focused ? 'var(--gold)' : 'var(--border)'}`,
          color: 'var(--txt)',
          borderRadius: 'var(--radius-sm)',
          padding: '11px 14px',
          fontSize: '14px',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          boxShadow: focused && !error ? '0 0 0 3px rgba(201,168,76,0.1)' : 'none',
        }}
        {...props}
      />
      {error && <div style={{ fontSize: '11px', color: 'var(--red)', marginTop: '5px' }}>{error}</div>}
      {hint && <div style={{ fontSize: '11px', color: 'var(--txt3)', marginTop: '5px' }}>{hint}</div>}
    </div>
  );
}