import { useState } from "react";
import styles from "./RegisterPage.module.css";

function PasswordStrength({ password }) {
  if (!password) return null;
  const score = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;
  const colors = ["#dc2626", "#c9a227", "#2f6b3b", "#16311d"];
  const labels = ["Weak", "Fair", "Good", "Strong"];
  return (
    <div className={styles.strength}>
      <div className={styles.strengthBars}>
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className={styles.strengthBar}
            style={{ background: i < score ? colors[score - 1] : undefined }}
          />
        ))}
      </div>
      <span className={styles.strengthLabel}>
        Strength:{" "}
        <span style={{ color: colors[score - 1], fontWeight: 700 }}>
          {labels[score - 1]}
        </span>
      </span>
    </div>
  );
}

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = k => e =>
    setForm(f => ({
      ...f,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim())  e.lastName  = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.password.length < 8)
      e.password = "At least 8 characters required";
    if (form.password !== form.confirm)
      e.confirm = "Passwords don't match";
    if (!form.agree)
      e.agree = "Please accept the terms to continue";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (!Object.keys(e).length) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successScreen}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Welcome aboard! 🎉</h2>
          <p className={styles.successSub}>
            Your account is ready. We've sent a verification link to{" "}
            <strong>{form.email}</strong>.
          </p>
          <button
            className={styles.successBtn}
            onClick={() => setSubmitted(false)}
          >
            Back to register
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.screen}>

      {/* ── Left panel ── */}
      <div className={styles.left}>

        <div className={styles.brand}>
          <div className={styles.brandMark}>
          <img src="/favicon.ico" alt="FutureNiSasa SACCO Logo" />
         </div>
          <span className={styles.brandName}>FUTURENISASA SACCO</span>
        </div>

        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>New member registration</p>
          <h1 className={styles.heroH}>
            Grow smarter,<br /><em>together.</em>
          </h1>
          <p className={styles.heroP}>
            Join thousands of teams who manage, collaborate, and scale —
            all in one beautiful workspace.
          </p>
          <div className={styles.statPills}>
            {["Free 14-day trial", "No credit card", "Cancel anytime"].map(t => (
              <div className={styles.statPill} key={t}>
                <div className={styles.statPillDot} />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.features}>
          {[
            { icon: "⚡", title: "Instant onboarding",  desc: "Up and running in 2 minutes" },
            { icon: "🔒", title: "Bank-grade security", desc: "256-bit encryption by default" },
            { icon: "🌍", title: "Works everywhere",    desc: "Desktop, mobile, and tablet" },
          ].map(f => (
            <div className={styles.featRow} key={f.title}>
              <div className={styles.featIco}>{f.icon}</div>
              <div className={styles.featText}>
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>

  

      </div>

      {/* ── Right panel ── */}
      <div className={styles.right}>
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
                

          <h2 className={styles.formTitle}>Create your account</h2>
          <p className={styles.formSub}>
            Already a member? <a href="#">Sign in here</a>
          </p>

          {/* Name row */}
          <div className={styles.nameRow}>
            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="firstName">First name</label>
              <div className={styles.fiWrap}>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={set("firstName")}
                  className={[styles.fi, styles.noIcon, errors.firstName ? styles.fiErr : ""].join(" ")}
                />
              </div>
              {errors.firstName && (
                <span className={styles.fieldErr}>{errors.firstName}</span>
              )}
            </div>

            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="lastName">Last name</label>
              <div className={styles.fiWrap}>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  value={form.lastName}
                  onChange={set("lastName")}
                  className={[styles.fi, styles.noIcon, errors.lastName ? styles.fiErr : ""].join(" ")}
                />
              </div>
              {errors.lastName && (
                <span className={styles.fieldErr}>{errors.lastName}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className={styles.fg}>
            <label className={styles.fl} htmlFor="email">Email address</label>
            <div className={styles.fiWrap}>
              <span className={styles.fiIcon}>✉</span>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={set("email")}
                className={[styles.fi, errors.email ? styles.fiErr : ""].join(" ")}
              />
            </div>
            {errors.email && (
              <span className={styles.fieldErr}>{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className={styles.fg}>
            <label className={styles.fl} htmlFor="password">Password</label>
            <div className={styles.fiWrap}>
              <span className={styles.fiIcon}>🔒</span>
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={set("password")}
                className={[styles.fi, styles.fiHasRight, errors.password ? styles.fiErr : ""].join(" ")}
              />
              <button
                className={styles.eyeBtn}
                type="button"
                onClick={() => setShowPwd(p => !p)}
                aria-label={showPwd ? "Hide password" : "Show password"}
              >
                {showPwd ? "🙈" : "👁"}
              </button>
            </div>
            {errors.password && (
              <span className={styles.fieldErr}>{errors.password}</span>
            )}
            <PasswordStrength password={form.password} />
          </div>

          {/* Confirm password */}
          <div className={styles.fg}>
            <label className={styles.fl} htmlFor="confirm">Confirm password</label>
            <div className={styles.fiWrap}>
              <span className={styles.fiIcon}>🔑</span>
              <input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
                value={form.confirm}
                onChange={set("confirm")}
                className={[styles.fi, styles.fiHasRight, errors.confirm ? styles.fiErr : ""].join(" ")}
              />
              <button
                className={styles.eyeBtn}
                type="button"
                onClick={() => setShowConfirm(p => !p)}
                aria-label={showConfirm ? "Hide" : "Show"}
              >
                {showConfirm ? "🙈" : "👁"}
              </button>
            </div>
            {errors.confirm && (
              <span className={styles.fieldErr}>{errors.confirm}</span>
            )}
          </div>

          {/* Terms */}
          <div className={styles.terms}>
            <input
              type="checkbox"
              id="agree"
              checked={form.agree}
              onChange={set("agree")}
            />
            <label htmlFor="agree" className={styles.termsText}>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          {errors.agree && (
            <span
              className={styles.fieldErr}
              style={{ display: "block", marginTop: "-8px", marginBottom: "12px", paddingLeft: "24px" }}
            >
              {errors.agree}
            </span>
          )}

          {/* Submit */}
          <button
            className={styles.btnSubmit}
            type="button"
            onClick={handleSubmit}
          >
            Create my account →
          </button>
{/* 
          Divider
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            or sign up with
            <div className={styles.dividerLine} />
          </div> */}

          {/* OAuth */}
          {/* <div className={styles.oauthRow}>
            {[{ label: "Google", badge: "G" }, { label: "GitHub", badge: "GH" }].map(p => (
              <button key={p.label} className={styles.btnOauth} type="button">
                <div className={styles.oauthBadge}>{p.badge}</div>
                {p.label}
              </button>
            ))}
          </div> */}

          {/* <p className={styles.footnote}>
            🔒 Protected by 256-bit encryption. We never share your data.
          </p> */}

        </div>
      </div>

    </div>
  );
}