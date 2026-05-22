// src/pages/public/PromotionsPage.jsx

import {
  Gift,
  Percent,
  Wallet,
  Trophy,
  Sparkles,
  ArrowRight,
  Clock3,
  BadgePercent,
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './PublicPages.module.css';

export default function PromotionsPage() {
  const promotions = [
    {
      badge: 'NEW',
      icon: <Percent size={28} />,
      title: 'School Fees Loan Discount',
      text: 'Get reduced processing fees on all school fees loans this month and enjoy faster approvals.',
      highlight: 'Save up to 30%',
    },
    {
      badge: 'HOT',
      icon: <Trophy size={28} />,
      title: 'Save & Win Campaign',
      text: 'Save consistently for 6 months and stand a chance to win exciting rewards and shopping vouchers.',
      highlight: 'Monthly Rewards',
    },
    {
      badge: 'LIMITED',
      icon: <Wallet size={28} />,
      title: 'Zero Registration Fee',
      text: 'Join FutureNISASA SACCO today with zero onboarding fees for a limited period only.',
      highlight: '100% Free Signup',
    },
  ];

  const perks = [
    'Fast loan approvals',
    'Flexible repayment plans',
    'Exclusive member rewards',
    'Seasonal savings campaigns',
  ];

  return (
    <div className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>

              <h1>Exclusive Rewards & Financial Benefits For Members</h1>

              <p>
                Enjoy limited-time SACCO promotions designed to help you save
                more, borrow smarter, and unlock exciting financial rewards with
                FutureNISASA SACCO.
              </p>

              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>
                  View Promotions
                </button>

                <button className={styles.secondaryButton}>
                  Become A Member
                </button>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.heroBadge}>Special Offers</div>

              <div className={styles.heroCardTop}>
                <Gift size={42} />

                <div>
                  <h3>Member Promotions</h3>
                  <p>Unlock savings, discounts & rewards</p>
                </div>
              </div>

              <div className={styles.heroFeatures}>
                {perks.map((perk) => (
                  <div key={perk}>
                    <ArrowRight size={18} />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.smallTitle}>
              Current Promotions
            </span>

            <h2>Special Offers For FutureNISASA Members</h2>

            <p>
              Take advantage of our latest campaigns, loan offers, and savings
              incentives tailored to support your financial growth.
            </p>
          </div>

          <div className={styles.cards}>
            {promotions.map((promo) => (
              <div key={promo.title} className={styles.promoCardModern}>
                <span className={styles.badge}>{promo.badge}</span>

                <div className={styles.promoIcon}>
                  {promo.icon}
                </div>

                <div className={styles.promoHighlight}>
                  <BadgePercent size={15} />
                  {promo.highlight}
                </div>

                <h3>{promo.title}</h3>

                <p>{promo.text}</p>

                <div className={styles.promoFooter}>
                  <div className={styles.promoTime}>
                    <Clock3 size={16} />
                    Limited Time Offer
                  </div>

                  <button className={styles.linkButton}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Don’t Miss Out On Our Member Promotions</h2>

            <p>
              Join FutureNISASA SACCO today and enjoy affordable loans,
              rewarding savings opportunities, and exclusive financial benefits.
            </p>

            <button className={styles.primaryButton}>
              Join FutureNISASA
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}