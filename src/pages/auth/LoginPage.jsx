// src/pages/auth/LoginPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Users,
  CircleDollarSign,
  TrendingUp,
  Zap,
  LineChart,
  ShieldCheck,
  Info,
  AlertCircle,
} from 'lucide-react';
import styles from './LoginPage.module.css';

// ── swap for your real store ──────────────────────────────
// import { useAuthStore } from '../../stores/authStore';
function useMockAuth() {
  return async (identifier, password) => {
    await new Promise((r) => setTimeout(r, 1400));
    if (!identifier || !password) return { success: false, error: 'Please fill in all fields.' };
    if (password.length < 6) return { success: false, error: 'Invalid email or password.' };
    return { success: true };
  };
}

const STAT_PILLS = [
  { icon: <Users size={13} />, label: '50,000+ members' },
  { icon: <CircleDollarSign size={13} />, label: 'KES 5B+ assets' },
  { icon: <TrendingUp size={13} />, label: '15+ years' },
];

const FEATURES = [
  { icon: <Zap size={17} />, title: 'Instant loan approvals', desc: 'Approved in under 24 hours' },
  { icon: <LineChart size={17} />, title: 'Real-time tracking', desc: 'Watch your savings grow live' },
  { icon: <ShieldCheck size={17} />, title: 'Fully licensed', desc: 'Regulated by SASRA Kenya' },
];

export default function LoginPage() {
  // const login = useAuthStore((s) => s.login);
  const login    = useMockAuth();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password,   setPassword]   = useState('');
  const [showPwd,    setShowPwd]    = useState(false);
  const [remember,   setRemember]   = useState(false);
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError('');
    const result = await login(identifier, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.screen}>

      {/* ── LEFT PANEL ────────────────────────────────────── */}
      <aside className={styles.left}>

        {/* Brand */}
         <div className={styles.brand}>
          <div className={styles.brandMark}>
          <img src="/favicon.ico" alt="FutureNiSasa SACCO Logo" />
        </div>
          <span className={styles.brandName}>FUTURENISASA SACCO</span>
        </div>

        {/* Hero copy */}
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Member portal</p>
          <h1 className={styles.heroH}>
            Financial<br />
            <em>empowerment</em><br />
            for all
          </h1>
          <p className={styles.heroP}>
            Join FutureSacco and start building lasting wealth with Kenya's
            most trusted SACCO.
          </p>

          <div className={styles.statPills}>
            {STAT_PILLS.map((s) => (
              <div key={s.label} className={styles.statPill}>
                {s.icon}
                {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* Feature rows */}
        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featRow}>
              <div className={styles.featIco}>{f.icon}</div>
              <div className={styles.featText}>
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>

    
      </aside>

      {/* ── RIGHT PANEL ───────────────────────────────────── */}
      <main className={styles.right}>
        <div className={styles.formWrap}>

           {/* Mobile brand */}
          <div className={styles.mobileBrand}>
            <div className={styles.mobileBrandMark}>
              <img src="/favicon.ico" alt="FutureNiSasa SACCO Logo" />
            </div>
  
            <span className={styles.mobileBrandName}>
              FUTURENISASA SACCO
            </span>
          </div>

          <h2 className={styles.formTitle}>Welcome back</h2>
          <p className={styles.formSub}>
            Not a member?{' '}
            <Link to="/portal/register">Join FutureSacco →</Link>
          </p>

          {/* Error banner */}
          {error && (
            <div className={styles.errBox} role="alert">
              <AlertCircle size={16} />
              <span className={styles.errText}>{error}</span>
            </div>
          )}

          {/* Member ID hint */}
          <div className={styles.hintBox}>
            <Info size={15} className={styles.hintIcon} />
            <span className={styles.hintText}>
              Sign in with your <strong>email address</strong> or{' '}
              <strong>Member ID</strong> (e.g. FS-2024-0047)
            </span>
          </div>

          <form onSubmit={handleSubmit} noValidate>

            {/* Identifier */}
            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="identifier">
                Email or Member ID
              </label>
              <div className={styles.fiWrap}>
                <Mail size={15} className={styles.fiIcon} aria-hidden="true" />
                <input
                  id="identifier"
                  className={styles.fi}
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="john@email.com or FS-2024-0047"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password */}
            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="password">
                Password
              </label>
              <div className={styles.fiWrap}>
                <Lock size={15} className={styles.fiIcon} aria-hidden="true" />
                <input
                  id="password"
                  className={`${styles.fi} ${styles.fiHasRight}`}
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPwd((p) => !p)}
                  aria-label={showPwd ? 'Hide password' : 'Show password'}
                >
                  {showPwd ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className={styles.formRowBetween}>
              <label className={styles.remember}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Keep me signed in
              </label>
              <Link to="/forgot-password" className={styles.forgot}>
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className={styles.spin} />
                  Signing in…
                </>
              ) : (
                <>
                  Sign in <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>
      
        </div>
      </main>
    </div>
  );
}