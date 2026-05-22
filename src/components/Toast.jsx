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