// src/pages/public/ContactPage.jsx

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './ContactPage.module.css';

const contactInfo = [
  {
    icon: <Mail size={22} />,
    title: 'Email Address',
    value: 'info@futurensisasa.co.ke',
  },
  {
    icon: <Phone size={22} />,
    title: 'Phone Number',
    value: '+254 700 000 000',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Office Location',
    value: 'Nairobi, Kenya',
  },
  {
    icon: <Clock3 size={22} />,
    title: 'Working Hours',
    value: 'Mon - Fri | 8:00 AM - 5:00 PM',
  },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.grid} />
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Contact FutureNISASA
            </span>

            <h1 className={styles.heroTitle}>
              We’re Ready
              <br />
              To Help You
            </h1>

            <p className={styles.heroSub}>
              Reach out to FutureNISASA SACCO for support,
              inquiries, partnership opportunities, or guidance
              on our financial products and services.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* CONTACT INFO */}
            <div className={styles.infoPanel}>
              <div className={styles.infoHeader}>
                <span className={styles.sectionTag}>
                  Get In Touch
                </span>

                <h2>
                  Let’s Start
                  <br />
                  A Conversation
                </h2>

                <p>
                  Our team is always available to assist you
                  with your SACCO needs and financial goals.
                </p>
              </div>

              <div className={styles.infoCards}>
                {contactInfo.map((item) => (
                  <div
                    className={styles.infoCard}
                    key={item.title}
                  >
                    <div className={styles.infoIcon}>
                      {item.icon}
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.supportCard}>
                <div className={styles.supportIcon}>
                  <MessageSquare size={26} />
                </div>

                <div>
                  <h3>Need Quick Assistance?</h3>

                  <p>
                    Contact our support team for immediate help
                    with loans, savings, or account inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <span className={styles.sectionTag}>
                  Send Message
                </span>

                <h2>Talk To Us</h2>

                <p>
                  Fill out the form below and our team will
                  respond shortly.
                </p>
              </div>

              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Subject</label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Message</label>

                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}