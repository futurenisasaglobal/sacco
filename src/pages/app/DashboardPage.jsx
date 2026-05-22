import React, { useEffect, useState } from 'react';
import {
  Wallet,
  Landmark,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Download,
  CircleDollarSign,
} from 'lucide-react';

import { useAuthStore } from '../../stores/authStore';
import { apiClient } from '../../App';

import styles from './DashboardPage.module.css';

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  const [loading, setLoading] = useState(false);

  const [dashboardData] = useState({
    savings: 48500,
    shares: 125000,
    loanBalance: 87000,
    loanLimit: 375000,

    activeLoan: {
      amount: 150000,
      balance: 87000,
      paid: 63000,
      monthly: 7200,
      rate: 12,
    },
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);

    try {
      await apiClient.get('/members/me');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const { savings, shares, activeLoan } = dashboardData;

  const loanPaidPct = Math.round(
    (activeLoan.paid / activeLoan.amount) * 100
  );

  return (
    <div className={styles.dashboard}>
      {/* HERO */}

      <section className={styles.hero}>
        <div>
          <span className={styles.welcome}>
            Welcome Back
          </span>

          <h1>{user?.name}</h1>

          <p>
            Manage your savings, loans, shares,
            and financial growth from one place.
          </p>

          <div className={styles.memberMeta}>
            <span>Member ID: #{user?.id}</span>

            <span className={styles.verified}>
              <ShieldCheck size={16} />
              Verified Member
            </span>
          </div>
        </div>

        <div className={styles.heroActions}>
          <button className={styles.primaryBtn}>
            <CircleDollarSign size={18} />
            Pay via M-Pesa
          </button>

          <button className={styles.secondaryBtn}>
            <CreditCard size={18} />
            Apply Loan
          </button>

          <button className={styles.secondaryBtn}>
            <Download size={18} />
            Statement
          </button>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIconGreen}>
            <Wallet size={24} />
          </div>

          <div>
            <span>Total Savings</span>

            <h3>KES {savings.toLocaleString()}</h3>

            <p className={styles.positive}>
              <ArrowUpRight size={16} />
              +KES 5,000 this month
            </p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconYellow}>
            <Landmark size={24} />
          </div>

          <div>
            <span>Share Capital</span>

            <h3>KES {shares.toLocaleString()}</h3>

            <p className={styles.positive}>
              <ArrowUpRight size={16} />
              +KES 10,000 this month
            </p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconRed}>
            <CreditCard size={24} />
          </div>

          <div>
            <span>Loan Balance</span>

            <h3>
              KES {activeLoan.balance.toLocaleString()}
            </h3>

            <p className={styles.negative}>
              <ArrowDownRight size={16} />
              Due 1 June 2026
            </p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconBlue}>
            <TrendingUp size={24} />
          </div>

          <div>
            <span>Loan Limit</span>

            <h3>
              KES {(shares * 3).toLocaleString()}
            </h3>

            <p className={styles.neutral}>
              Based on shares × 3
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}

      <section className={styles.mainGrid}>
        {/* LOAN */}

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>Active Loan</h3>
              <span>Personal Development Loan</span>
            </div>

            <div className={styles.activeBadge}>
              Active
            </div>
          </div>

          <div className={styles.loanAmounts}>
            <div>
              <small>Loan Amount</small>

              <h2>
                KES {activeLoan.amount.toLocaleString()}
              </h2>
            </div>

            <div>
              <small>Balance</small>

              <h2 className={styles.red}>
                KES {activeLoan.balance.toLocaleString()}
              </h2>
            </div>
          </div>

          <div className={styles.progressMeta}>
            <span>{loanPaidPct}% paid</span>

            <span>
              KES {activeLoan.paid.toLocaleString()}
            </span>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${loanPaidPct}%` }}
            />
          </div>

          <div className={styles.loanGrid}>
            <div>
              <small>Monthly Payment</small>
              <strong>
                KES {activeLoan.monthly.toLocaleString()}
              </strong>
            </div>

            <div>
              <small>Interest Rate</small>
              <strong>{activeLoan.rate}% p.a.</strong>
            </div>

            <div>
              <small>Tenure</small>
              <strong>24 Months</strong>
            </div>

            <div>
              <small>Next Payment</small>
              <strong>1 June 2026</strong>
            </div>
          </div>
        </div>

        {/* ACTIVITY */}

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>Savings Activity</h3>
              <span>Monthly Performance</span>
            </div>
          </div>

          <div className={styles.chartPlaceholder}>
            <TrendingUp size={50} />

            <p>
              Savings analytics chart will appear here
            </p>
          </div>
        </div>
      </section>

      {/* TRANSACTIONS */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3>Recent Transactions</h3>
            <span>Latest account activities</span>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Reference</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  date: '2026-04-30',
                  desc: 'Monthly Contribution',
                  ref: 'DEP-9823',
                  amount: 5000,
                },

                {
                  date: '2026-04-28',
                  desc: 'Loan Repayment',
                  ref: 'PAY-4421',
                  amount: -7200,
                },

                {
                  date: '2026-04-15',
                  desc: 'Share Purchase',
                  ref: 'DEP-9712',
                  amount: 10000,
                },
              ].map((t) => (
                <tr key={t.ref}>
                  <td>
                    {new Date(t.date).toLocaleDateString()}
                  </td>

                  <td className={styles.transactionTitle}>
                    {t.desc}
                  </td>

                  <td>
                    <code>{t.ref}</code>
                  </td>

                  <td
                    className={
                      t.amount > 0
                        ? styles.amountPositive
                        : styles.amountNegative
                    }
                  >
                    {t.amount > 0 ? '+' : '-'}
                    KES {Math.abs(t.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}