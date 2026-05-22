// src/pages/public/AboutPage.jsx

import {
  ShieldCheck,
  Lightbulb,
  Users,
  Target,
  Globe,
  ArrowRight,
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './AboutPage.module.css';

const stats = [
  { value: '12K+', label: 'Active Members' },
  { value: 'KSh 2B+', label: 'Savings Mobilized' },
  { value: '98%', label: 'Loan Repayment Rate' },
  { value: '14 yrs', label: 'Serving Kenya' },
];

const values = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Integrity',
    desc: 'Every transaction and decision is guided by transparency, accountability, and trust.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Innovation',
    desc: 'We embrace digital-first solutions that make SACCO services simpler and smarter.',
  },
  {
    icon: <Users size={24} />,
    title: 'Community',
    desc: 'We believe shared prosperity creates stronger families, businesses, and communities.',
  },
];

const team = [
  {
    name: 'Grace Muthoni',
    role: 'CEO & Founder',
    initials: 'GM',
  },
  {
    name: 'David Kamau',
    role: 'Head of Finance',
    initials: 'DK',
  },
  {
    name: 'Amina Odhiambo',
    role: 'Member Relations',
    initials: 'AO',
  },
  {
    name: 'Brian Njoroge',
    role: 'Digital Products',
    initials: 'BN',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.grid} />
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>

            <h1 className={styles.heroTitle}>
              Building Financial
              <br />
              <em>Confidence</em> Together
            </h1>

            <p className={styles.heroSub}>
              FutureNISASA SACCO empowers Kenyans through accessible
              savings, affordable credit, and community-driven financial
              growth solutions built for the modern economy.
            </p>

            <div className={styles.statsRow}>
              {stats.map((s) => (
                <div className={styles.statItem} key={s.label}>
                  <span className={styles.statValue}>
                    {s.value}
                  </span>

                  <span className={styles.statLabel}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitLayout}>
            <div className={styles.splitText}>
              <span className={styles.sectionTag}>
                Our Story
              </span>

              <h2 className={styles.sectionTitle}>
                A SACCO Built For
                <br />
                Modern Kenya
              </h2>

              <p className={styles.sectionText}>
                FutureNISASA was founded on the belief that every
                Kenyan deserves access to fair, transparent, and
                reliable financial services.
              </p>

              <p className={styles.sectionText}>
                By combining trusted cooperative values with modern
                technology, we empower members to save confidently,
                access affordable credit, and achieve long-term
                financial growth.
              </p>
            </div>

            <div className={styles.missionVisionStack}>
              <div className={styles.mvCard}>
                <div className={styles.mvIcon}>
                  <Target size={24} />
                </div>

                <div>
                  <h3>Our Mission</h3>

                  <p>
                    To provide reliable, transparent, and innovative
                    financial services that uplift every member
                    economically.
                  </p>
                </div>
              </div>

              <div
                className={`${styles.mvCard} ${styles.mvCardAlt}`}
              >
                <div className={styles.mvIcon}>
                  <Globe size={24} />
                </div>

                <div>
                  <h3>Our Vision</h3>

                  <p>
                    To become the leading member-owned digital SACCO
                    in East Africa by 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.centeredHeader}>
            <span className={styles.sectionTag}>
              What Drives Us
            </span>

            <h2>Core Values</h2>

            <p>
              Principles that guide every service, interaction, and
              decision we make.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div
                className={styles.valueCard}
                key={value.title}
              >
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.centeredHeader}>
            <span className={styles.sectionTag}>
              Leadership
            </span>

            <h2>Meet The Team</h2>

            <p>
              Experienced professionals committed to helping members
              build stronger financial futures.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div
                className={styles.teamCard}
                key={member.name}
              >
                <div className={styles.avatar}>
                  {member.initials}
                </div>

                <h4>{member.name}</h4>

                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaContent}>
              <h2>
                Ready to join 12,000+ members?
              </h2>

              <p>
                Start saving, borrowing, and building your financial
                future with FutureNISASA SACCO today.
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <a
                href="/register"
                className={styles.btnPrimary}
              >
                Open An Account
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className={styles.btnOutline}
              >
                Talk To Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}