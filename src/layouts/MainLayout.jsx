import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import styles from './MainLayout.module.css';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '⊞', path: '/dashboard' },
    { id: 'savings', label: 'Savings', icon: '💰', path: '/savings' },
    { id: 'loans', label: 'Loans', icon: '💳', path: '/loans', badge: '1' },
    { id: 'payments', label: 'Payments', icon: '📲', path: '/payments' },
    { id: 'downloads', label: 'Downloads', icon: '📁', path: '/downloads' },
    { id: 'reports', label: 'Reports', icon: '📊', path: '/reports' },
  ];

  const accountItems = [
    { id: 'profile', label: 'My Profile', icon: '👤', path: '/profile' },
    { id: 'settings', label: 'Settings', icon: '⚙', path: '/settings' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarLogo}>
        <div className={styles.logoMark}>
          <span>F</span>
          <div>FutureSacco</div>
        </div>
        <div className={styles.logoSub}>MEMBERS PORTAL</div>
      </div>

      <nav className={styles.sidebarNav}>
        <div className={styles.navSection}>
          <div className={styles.navSectionLabel}>Services</div>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
              onClick={() => handleNavClick(item.path)}
            >
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              {item.label}
              {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
            </div>
          ))}
        </div>

        <div className={styles.navSection}>
          <div className={styles.navSectionLabel}>Account</div>
          {accountItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
              onClick={() => handleNavClick(item.path)}
            >
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        <div
          className={styles.navItem}
          style={{ color: 'var(--red)', marginTop: '8px' }}
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          <span>→</span> Sign Out
        </div>
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.userCard} onClick={() => handleNavClick('/profile')}>
          <div className={styles.avatar}>
            {user?.name
              ?.split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <div>
            <div className={styles.userName}>{user?.name?.split(' ')[0]}</div>
            <div className={styles.userRole}>{user?.id}</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Topbar = ({ onMenuClick }) => {
  const { user } = useAuthStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: 'Loan payment due in 3 days', time: '2 hours ago', read: false },
    { id: 2, title: 'Dividend of KES 12,400 credited', time: '15 Mar 2026', read: false },
    { id: 3, title: 'Your loan application was approved', time: '1 Mar 2026', read: true },
  ];

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className={styles.topbar}>
      <div className={styles.topbarLeft}>
        <button className={styles.topbarMenuBtn} onClick={onMenuClick}>
          ☰
        </button>
        <h1 className={styles.pageTitle}>Dashboard</h1>
      </div>
      <div className={styles.topbarRight}>
        <span className={styles.memberId}>{user?.id}</span>
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button
            className={styles.topbarBtn}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            🔔
            {unread > 0 && <span className={styles.notifDot}></span>}
          </button>
          {showNotifications && (
            <div className={styles.notifPanel}>
              <div className={styles.notifHeader}>
                Notifications
                <span style={{ fontSize: '11px', color: 'var(--txt3)' }}>{unread} unread</span>
              </div>
              {notifications.map((n) => (
                <div key={n.id} className={styles.notifItem}>
                  <div
                    className={styles.notifDot2}
                    style={{ background: n.read ? 'var(--txt3)' : 'var(--gold)' }}
                  ></div>
                  <div>
                    <div className={styles.notifTitle} style={{ fontWeight: n.read ? 400 : 600 }}>
                      {n.title}
                    </div>
                    <div className={styles.notifTime}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.app}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className={styles.main}>
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
