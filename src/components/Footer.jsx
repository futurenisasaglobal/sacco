import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top gold rule */}
      <div className={styles.topRule} />

      <div className={styles.container}>
        <div className={styles.footerTop}>

          {/* Brand */}
          <div className={styles.brandCol}>
            <h3 className={styles.brandName}>FutureNISASA SACCO</h3>
            <p className={styles.brandTag}>Licensed Financial Cooperative</p>
            <p className={styles.brandDesc}>
              Your trusted financial partner helping Kenyans achieve financial
              independence through savings, affordable loans, and investment solutions.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>SASRA Regulated</span>
              <span className={styles.badge}>Est. 2008</span>
              <span className={styles.badge}>50,000+ Members</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className={styles.colTitle}>Navigate</p>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/promotions">Promotions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/portal">Member Portal</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className={styles.colTitle}>Products</p>
            <ul className={styles.links}>
              <li><span>Savings Accounts</span></li>
              <li><span>Development Loans</span></li>
              <li><span>Emergency Loans</span></li>
              <li><span>Investment Plans</span></li>
              <li><span>Member Deposits</span></li>
              <li><span>School Fees Loans</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={styles.colTitle}>Get in Touch</p>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div className={styles.contactText}>
                <strong>Location</strong>
                Nairobi, Kenya
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <div className={styles.contactText}>
                <strong>Email</strong>
                info@futurensisasacco.co.ke
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div className={styles.contactText}>
                <strong>Phone</strong>
                +254 700 000 000
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕐</span>
              <div className={styles.contactText}>
                <strong>Hours</strong>
                Mon – Fri, 8:00 AM – 5:00 PM
              </div>
            </div>
          </div>

        </div>

        <div className={styles.divider} />

        <div className={styles.footerBottom}>
          <p className={styles.copy}>
            © 2026 <span className={styles.copyAccent}>FutureNISASA SACCO</span>. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <span className={styles.sep} />
            <Link to="/terms">Terms of Service</Link>
            <span className={styles.sep} />
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>

        <div className={styles.sasra}>
          <span className={styles.sasraDot} />
          Regulated by SASRA — Sacco Societies Regulatory Authority
        </div>
      </div>
    </footer>
  );
}