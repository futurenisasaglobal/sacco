// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* ================= TOP HEADER ================= */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          {/* Top Navigation */}
          <nav className={`${styles.topNav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.topLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.topLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              ABOUT US
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${styles.topLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              PRODUCTS
            </NavLink>

            <NavLink
              to="/promotions"
              className={({ isActive }) =>
                `${styles.topLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              PROMOTIONS
            </NavLink>

            <Link
              to="/portal/login"
              className={styles.memberPortalBtn}
              onClick={closeMenu}
            >
              MEMBER PORTAL
            </Link>
          </nav>

          {/* Social Icons */}
          <div className={styles.topSocials}>
            <a href="#" className={styles.socialIcon}>f</a>
            <a href="#" className={styles.socialIcon}>𝕏</a>
            <a href="#" className={styles.socialIcon}>📷</a>
            <a href="#" className={styles.socialIcon}>in</a>
            <a href="#" className={styles.socialIcon}>▶</a>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>

          {/* Logo */}
          <div className={styles.logo}>
            <Link to="/" className={styles.logoLink}>
              <div className={styles.logoIcon}>FN</div>

              <div className={styles.logoBrand}>
                <span className={styles.brandName}>FutureNISASA</span>
                <span className={styles.brandSub}>SACCO</span>
              </div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>

          {/* Main Navigation */}
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Products
            </NavLink>

            <NavLink
              to="/promotions"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Promotions
            </NavLink>

            <NavLink
              to="/app/downloads"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Downloads
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            {/* Search */}
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />

              <button className={styles.searchBtn}>
                🔍
              </button>
            </div>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <Link to="/portal/login" className={styles.btnLogin}>
              Login
            </Link>

            <Link to="/portal/register" className={styles.btnSignup}>
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}