# SACCO React SPA - Components Cheat Sheet

Quick copy-paste code for all essential components.

---

## 🔘 Button Component

```jsx
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
```

---

## 📊 StatCard Component

```jsx
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
```

---

## 🎫 Badge Component

```jsx
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
```

---

## 📦 Card Component

```jsx
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
```

---

## 📝 Form Input Component

```jsx
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
```

---

## 🪟 Modal Component

```jsx
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
```

---

## 📋 Tab Component

```jsx
// src/components/Tabs.jsx
import { useState } from 'react';

export default function Tabs({ tabs, defaultTab = 0 }) {
  const [active, setActive] = useState(defaultTab);

  return (
    <>
      <div style={{
        display: 'flex',
        gap: '4px',
        background: 'var(--bg3)',
        padding: '4px',
        borderRadius: '10px',
        marginBottom: '24px',
      }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '9px 16px',
              borderRadius: '7px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              border: 'none',
              background: active === i ? 'var(--card)' : 'transparent',
              color: active === i ? 'var(--txt)' : 'var(--txt2)',
              transition: 'all .2s',
              boxShadow: active === i ? 'var(--shadow)' : 'none',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs[active]?.content}
    </>
  );
}
```

---

## 📊 Progress Bar Component

```jsx
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
```

---

## 🎯 Form Group Component

```jsx
// src/components/Form/FormGroup.jsx
export default function FormGroup({ children, columns = 1 }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '16px',
      marginBottom: '20px',
    }}>
      {children}
    </div>
  );
}
```

---

## 🔔 Toast Notification Component

```jsx
// src/components/Toast.jsx
import { useNotificationStore } from '../stores/notificationStore';

export default function Toast() {
  const notifications = useNotificationStore((state) => state.notifications);

  const typeStyles = {
    success: { icon: '✓', bg: 'var(--green-dim)', color: 'var(--green)' },
    error: { icon: '✕', bg: 'var(--red-dim)', color: 'var(--red)' },
    info: { icon: 'ℹ', bg: 'rgba(59,130,246,.12)', color: 'var(--blue)' },
    warning: { icon: '⚠', bg: 'rgba(245,158,11,.12)', color: 'var(--amber)' },
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      {notifications.map((notif) => {
        const style = typeStyles[notif.type] || typeStyles.info;
        return (
          <div
            key={notif.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 16px',
              background: style.bg,
              border: `1px solid ${style.color}33`,
              borderRadius: 'var(--radius-sm)',
              color: style.color,
              fontSize: '14px',
              animation: 'slideUp .3s ease',
              minWidth: '300px',
            }}
          >
            <span style={{ fontSize: '18px' }}>{style.icon}</span>
            <span>{notif.message}</span>
          </div>
        );
      })}
    </div>
  );
}
```

---

## 📱 Responsive Grid

```jsx
// Usage examples
const Grid1 = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
    {/* Cards */}
  </div>
);

const Grid2 = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
    {/* 2 columns */}
  </div>
);

// Mobile: single column
@media (max-width: 900px) {
  gridTemplateColumns: 1fr;
}
```

---

## ⏳ Loading Skeleton

```jsx
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
```

---

## 🌍 Format Utilities

```ts
// src/utils/format.ts
export const fmt = (num: number) => 
  'KES ' + Number(num).toLocaleString();

export const fmtDate = (date: string) =>
  new Date(date).toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const fmtPhone = (phone: string) =>
  phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');

export const fmtCurrency = (num: number, currency = 'KES') =>
  new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency,
  }).format(num);
```

---

## 🎨 CSS Variables (Copy to globals.css)

```css
:root {
  --bg: #0a0f1e;
  --bg2: #0f1729;
  --bg3: #141f35;
  --card: #111827;
  --card2: #162035;
  --border: #1e2d4a;
  --border2: #243252;
  --gold: #c9a84c;
  --gold2: #e8c96a;
  --gold-dim: rgba(201,168,76,0.12);
  --teal: #2dd4bf;
  --teal-dim: rgba(45,212,191,0.1);
  --red: #ef4444;
  --red-dim: rgba(239,68,68,0.12);
  --green: #22c55e;
  --green-dim: rgba(34,197,94,0.12);
  --amber: #f59e0b;
  --blue: #3b82f6;
  --txt: #e8eaf0;
  --txt2: #8b9ab8;
  --txt3: #4a5a78;
  --font-head: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --radius: 14px;
  --radius-sm: 8px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
}
```

---

**Copy & paste as needed! All components follow the SACCO design system.** 🎨
