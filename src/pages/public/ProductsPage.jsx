// src/pages/public/ProductsPage.jsx

import {
  PiggyBank,
  Landmark,
  Wallet,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './PublicPages.module.css';

export default function ProductsPage() {
  const products = [
    {
      icon: <PiggyBank size={30} />,
      title: 'Savings Accounts',
      desc: 'Flexible savings plans with attractive returns and secure growth opportunities for members.',
      feature: 'High Returns',
    },
    {
      icon: <Landmark size={30} />,
      title: 'Development Loans',
      desc: 'Affordable financing solutions for business expansion, projects, and personal development.',
      feature: 'Low Interest',
    },
    {
      icon: <Wallet size={30} />,
      title: 'Emergency Loans',
      desc: 'Quick and convenient emergency financing with fast approvals and flexible repayment.',
      feature: 'Fast Approval',
    },
    {
      icon: <ShieldCheck size={30} />,
      title: 'Share Capital',
      desc: 'Build long-term financial security while increasing your SACCO ownership and borrowing power.',
      feature: 'Member Ownership',
    },
    {
      icon: <TrendingUp size={30} />,
      title: 'Investment Plans',
      desc: 'Strategic investment opportunities designed to help members grow wealth sustainably.',
      feature: 'Future Growth',
    },
    {
      icon: <GraduationCap size={30} />,
      title: 'Junior Savings',
      desc: 'Smart savings solutions that help parents plan for education and future financial stability.',
      feature: 'Education Support',
    },
  ];

  const highlights = [
    'Affordable loan rates',
    'Secure member savings',
    'Fast digital services',
    'Flexible repayment plans',
  ];

  return (
    <div className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
    

              <h1>Smart Financial Solutions Designed For Every Member</h1>

              <p>
                Discover savings accounts, affordable loans, investment plans,
                and wealth-building opportunities tailored to support your
                financial journey with FutureNISASA SACCO.
              </p>

              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>
                  Explore Products
                </button>

                <button className={styles.secondaryButton}>
                  Join FutureNISASA
                </button>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.heroBadge}>Trusted Solutions</div>

              <div className={styles.heroCardTop}>
                <Landmark size={42} />

                <div>
                  <h3>Financial Empowerment</h3>
                  <p>Helping members save, grow & succeed</p>
                </div>
              </div>

              <div className={styles.heroFeatures}>
                {highlights.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.smallTitle}>
              Our Products
            </span>

            <h2>Financial Products That Work For You</h2>

            <p>
              FutureNISASA SACCO offers modern financial products designed to
              support savings, borrowing, investment, and long-term financial
              growth.
            </p>
          </div>

          <div className={styles.cards}>
            {products.map((item) => (
              <div key={item.title} className={styles.productCard}>
                <div className={styles.productTop}>
                  <div className={styles.productIcon}>
                    {item.icon}
                  </div>

                  <span className={styles.productBadge}>
                    {item.feature}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <button className={styles.productButton}>
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Start Building Your Financial Future Today</h2>

            <p>
              Join FutureNISASA SACCO and access innovative financial products,
              affordable loans, and secure savings opportunities built for your
              success.
            </p>

            <button className={styles.primaryButton}>
              Become A Member
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}