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