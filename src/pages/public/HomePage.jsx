// src/pages/home/HomePage.jsx

import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Wallet,
  Landmark,
  Smartphone,
  Users,
  TrendingUp,
} from 'lucide-react';

import Header from '../../components/Header';
import styles from './HomePage.module.css';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* LEFT */}
          <div className={styles.heroText}>
            <h1>
              Build Your Financial
              <br />
              Future Today
            </h1>

            <p>
              Empowering Kenyans with smart savings, affordable loans,
              investment opportunities, and secure digital financial services.
            </p>

            <div className={styles.heroButtons}>
              <Link to="/portal/register" className={styles.btnPrimary}>
                Become a Member
              </Link>

              <Link to="/portal/login" className={styles.btnSecondary}>
                Member Portal
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div>
                <h3>50K+</h3>
                <span>Members</span>
              </div>

              <div>
                <h3>KES 5B+</h3>
                <span>Assets Managed</span>
              </div>

              <div>
                <h3>15+</h3>
                <span>Years Experience</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.heroSlider}>
            <div className={styles.slideTrack}>
              <div className={styles.slideCard}>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                  alt="Members"
                />
              </div>

              <div className={styles.slideCard}>
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                  alt="Financial growth"
                />
              </div>

              <div className={styles.slideCard}>
                <img
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1200&auto=format&fit=crop"
                  alt="Investment"
                />
              </div>
            </div>

            <div className={styles.sliderBadge}>
              Trusted by 50,000+ Members
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className={styles.trustBar}>
        <div>Licensed SACCO Institution</div>
        <div>Secure Digital Banking</div>
        <div>Trusted by 50,000+ Members</div>
        <div>15+ Years Experience</div>
      </section>

      {/* WHY JOIN US */}
<section className={styles.whyJoin}>
  <div className={styles.container}>
    <div className={styles.sectionHeader}>
      <span>WHY JOIN US</span>
      <h2>Built for Kenyans. Trusted by Thousands.</h2>
      <p>FutureSacco delivers secure, affordable financial services designed to help you save, borrow, and grow — on your terms.</p>
    </div>

    <div className={styles.whyGrid}>
      {[
        { icon: <ShieldCheck size={28}/>, stat: "Licensed", label: "Regulated SACCO institution" },
        { icon: <Users size={28}/>, stat: "50,000+", label: "Active members and growing" },
        { icon: <TrendingUp size={28}/>, stat: "KES 5B+", label: "Assets under management" },
        { icon: <Landmark size={28}/>, stat: "15+ Years", label: "Financial empowerment" },
        { icon: <Wallet size={28}/>, stat: "Low Rates", label: "Competitive loan interest" },
        { icon: <Smartphone size={28}/>, stat: "Self-Service", label: "Digital portal & mobile app" },
      ].map((item, i) => (
        <div key={i} className={styles.whyCard}>
          <div className={styles.whyIcon}>{item.icon}</div>
          <h3>{item.stat}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span>WHY CHOOSE US</span>

            <h2>Financial Solutions Built Around You</h2>

            <p>
              Trusted financial services designed to help you grow, save,
              invest, and succeed.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <ShieldCheck size={42} strokeWidth={1.8} />

              <h3>Safe & Secure</h3>

              <p>
                Advanced security systems and encrypted transactions keep your
                money and data protected.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Wallet size={42} strokeWidth={1.8} />

              <h3>Affordable Loans</h3>

              <p>
                Flexible loan products with fast approval and competitive
                interest rates.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Landmark size={42} strokeWidth={1.8} />

              <h3>Savings & Investments</h3>

              <p>
                Grow your financial future with structured savings and
                investment opportunities.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Smartphone size={42} strokeWidth={1.8} />

              <h3>Digital Access</h3>

              <p>
                Access your SACCO account anytime through our secure digital
                platform.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Users size={42} strokeWidth={1.8} />

              <h3>Community Focused</h3>

              <p>
                Join a growing network of members building wealth together.
              </p>
            </div>

            <div className={styles.featureCard}>
              <TrendingUp size={42} strokeWidth={1.8} />

              <h3>Financial Growth</h3>

              <p>
                Smart financial products tailored to support your long-term
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span>OUR PRODUCTS</span>

            <h2>Solutions for Every Financial Goal</h2>

            <p>
              Designed to support your savings, borrowing, and investment
              journey.
            </p>
          </div>

          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Landmark size={70} strokeWidth={1.4} />
              </div>

              <div className={styles.productContent}>
                <h3>Savings Accounts</h3>

                <p>
                  Flexible savings solutions designed to help you build wealth
                  consistently.
                </p>

                <ul>
                  <li>Flexible savings plans</li>
                  <li>Competitive returns</li>
                  <li>Secure digital access</li>
                </ul>

                <Link to="/portal/register" className={styles.productBtn}>
                  Get Started
                </Link>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Wallet size={70} strokeWidth={1.4} />
              </div>

              <div className={styles.productContent}>
                <h3>Loan Products</h3>

                <p>
                  Access affordable personal and business loans with flexible
                  repayment plans.
                </p>

                <ul>
                  <li>Quick approvals</li>
                  <li>Low interest rates</li>
                  <li>Flexible repayment</li>
                </ul>

                <Link to="/portal/register" className={styles.productBtn}>
                  Apply Now
                </Link>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <TrendingUp size={70} strokeWidth={1.4} />
              </div>

              <div className={styles.productContent}>
                <h3>Investment Plans</h3>

                <p>
                  Diversified investment opportunities designed for long-term
                  growth.
                </p>

                <ul>
                  <li>Professional guidance</li>
                  <li>Long-term wealth growth</li>
                  <li>Competitive returns</li>
                </ul>

                <Link to="/portal/register" className={styles.productBtn}>
                  Invest Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statCard}>
            <h2>50,000+</h2>
            <p>Active Members</p>
          </div>

          <div className={styles.statCard}>
            <h2>KES 5B+</h2>
            <p>Assets Managed</p>
          </div>

          <div className={styles.statCard}>
            <h2>99.8%</h2>
            <p>Member Satisfaction</p>
          </div>

          <div className={styles.statCard}>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Ready to Grow Your Financial Future?</h2>

          <p>
            Join thousands of Kenyans already building wealth with
            FutureNISASA SACCO.
          </p>

          <div className={styles.ctaButtons}>
            <Link to="/portal/register" className={styles.btnPrimary}>
              Open Account
            </Link>

            <Link to="/portal/login" className={styles.btnSecondary}>
              Member Login
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}