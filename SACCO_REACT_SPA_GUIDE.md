# FutureSacco React SPA - Complete Implementation Guide

## 📁 Project Structure

```
sacco-web/
├── src/
│   ├── App.jsx                          # Main app component with routing
│   ├── main.jsx                         # React entry point
│   │
│   ├── components/                      # Reusable UI components
│   │   ├── Button.jsx                   # Button component
│   │   ├── Badge.jsx                    # Badge component
│   │   ├── StatCard.jsx                 # Statistics card
│   │   ├── Modal.jsx                    # Modal dialog
│   │   ├── Tabs.jsx                     # Tab switcher
│   │   ├── Toast.jsx                    # Toast notifications
│   │   ├── Loader.jsx                   # Loading spinner
│   │   ├── ProgressBar.jsx              # Progress bar
│   │   ├── Card.jsx                     # Card container
│   │   └── Form/
│   │       ├── Input.jsx                # Text input
│   │       ├── Select.jsx               # Dropdown select
│   │       ├── Checkbox.jsx             # Checkbox
│   │       └── FormGroup.jsx            # Form group wrapper
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx               # Main app layout
│   │   ├── AuthLayout.jsx               # Auth pages layout
│   │   ├── MainLayout.module.css        # Styles for main layout
│   │   └── AuthLayout.module.css
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── LoginPage.module.css
│   │   │
│   │   └── app/
│   │       ├── DashboardPage.jsx        # Home dashboard
│   │       ├── LoansPage.jsx            # Loan management
│   │       ├── PaymentsPage.jsx         # Payment transactions
│   │       ├── SavingsPage.jsx          # Savings accounts
│   │       ├── DownloadsPage.jsx        # Resource downloads
│   │       ├── ReportsPage.jsx          # Statements & reports
│   │       ├── ProfilePage.jsx          # User profile
│   │       ├── SettingsPage.jsx         # Settings
│   │       └── *.module.css             # Page styles
│   │
│   ├── stores/
│   │   ├── authStore.ts                 # Auth state (Zustand)
│   │   ├── notificationStore.ts         # Toast notifications
│   │   └── userStore.ts                 # User data cache
│   │
│   ├── services/
│   │   ├── authService.ts               # Auth API calls
│   │   ├── memberService.ts             # Member operations
│   │   ├── loanService.ts               # Loan operations
│   │   ├── paymentService.ts            # Payment operations
│   │   └── downloadService.ts           # Download operations
│   │
│   ├── hooks/
│   │   ├── useAuth.ts                   # Auth hook
│   │   ├── useForm.ts                   # Form handling
│   │   ├── useFetch.ts                  # Data fetching
│   │   └── usePagination.ts             # Pagination
│   │
│   ├── styles/
│   │   ├── globals.css                  # Global styles
│   │   ├── variables.css                # CSS variables (theme)
│   │   └── animations.css               # Animations
│   │
│   ├── types/
│   │   ├── api.ts                       # API response types
│   │   ├── models.ts                    # Data models
│   │   └── common.ts                    # Common types
│   │
│   ├── utils/
│   │   ├── api.ts                       # Axios instance
│   │   ├── format.ts                    # Formatting helpers
│   │   ├── validation.ts                # Form validation
│   │   └── constants.ts                 # Constants
│   │
│   └── env.d.ts                         # Environment types
│
├── public/
│   └── index.html                       # HTML template
│
├── package.json
├── vite.config.js
├── tsconfig.json
├── .env.example
└── README.md
```

## 🚀 Setup Instructions

### 1. Create Project

```bash
npm create vite@latest sacco-web -- --template react
cd sacco-web
```

### 2. Install Dependencies

```bash
npm install
npm install -D typescript @types/react @types/react-dom @types/node
npm install zustand @tanstack/react-query react-hook-form zod @hookform/resolvers
npm install recharts react-pdf axios
```

### 3. Environment Setup

Create `.env` file:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=FutureSacco
VITE_ENVIRONMENT=development
```

### 4. Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

---

## 📝 Key Components Implementation

### Button Component (`src/components/Button.jsx`)

```jsx
export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  ...props
}) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  
  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? '⟳ Loading...' : children}
    </button>
  );
}
```

### StatCard Component (`src/components/StatCard.jsx`)

```jsx
export default function StatCard({
  icon,
  label,
  value,
  change,
  changeDir = 'up',
  color = '#c9a84c',
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ color }}>
        {icon}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {change && (
        <div className={`stat-change ${changeDir}`}>
          <span>{changeDir === 'up' ? '↑' : '↓'}</span>
          {change}
        </div>
      )}
    </div>
  );
}
```

### Modal Component (`src/components/Modal.jsx`)

```jsx
export default function Modal({
  isOpen,
  title,
  children,
  onClose,
  footer,
  size = 'md',
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={`modal modal-${size}`}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
```

---

## 🔐 Authentication Flow

### Login Page Implementation

```jsx
// src/pages/auth/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import Button from '../../components/Button';

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const result = await login(email, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="auth-screen">
      <div className="auth-left">
        <h1 className="auth-headline">Financial Empowerment for All</h1>
        <p className="auth-tagline">Join FutureSacco and start your wealth-building journey</p>
      </div>
      
      <div className="auth-right">
        <h2 className="auth-title">Member Sign In</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email or Member ID</label>
            <input
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@email.com or FS-2024-0047"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          
          <Button type="submit" loading={loading} size="lg">
            Sign In →
          </Button>
        </form>
      </div>
    </div>
  );
}
```

---

## 💳 M-Pesa Payment Integration

### Payment Service

```ts
// src/services/paymentService.ts
import { apiClient } from '../App';

export const paymentService = {
  // Initiate M-Pesa STK push
  initiateMpesaPayment: async (phoneNumber, amount, type) => {
    const response = await apiClient.post('/payments/initiate', {
      phone_number: phoneNumber,
      amount,
      payment_type: type,
    });
    return response.data;
  },

  // Check payment status
  checkPaymentStatus: async (reference) => {
    const response = await apiClient.get(`/payments/status/${reference}`);
    return response.data;
  },

  // Get payment history
  getPaymentHistory: async (filters = {}) => {
    const response = await apiClient.get('/payments/history', { params: filters });
    return response.data;
  },

  // Webhook callback handler (Laravel backend)
  handleMpesaCallback: async (callbackData) => {
    return apiClient.post('/payments/callback', callbackData);
  },
};
```

### Payment Modal Component

```jsx
// Usage in PaymentsPage.jsx
const [showPayment, setShowPayment] = useState(false);
const [paymentStep, setPaymentStep] = useState(0); // 0: form, 1: processing, 2: success

const handleMpesaPayment = async () => {
  setPaymentStep(1);
  try {
    const result = await paymentService.initiateMpesaPayment(
      phone,
      amount,
      'savings'
    );
    // Poll for payment confirmation
    const pollPayment = setInterval(async () => {
      const status = await paymentService.checkPaymentStatus(result.reference);
      if (status.status === 'completed') {
        clearInterval(pollPayment);
        setPaymentStep(2);
      }
    }, 2000);
  } catch (error) {
    toast.error(error.message);
  }
};
```

---

## 📊 Loans Management Page

### Complete Loans Page

```jsx
// src/pages/app/LoansPage.jsx
import { useState, useEffect } from 'react';
import { apiClient } from '../../App';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

export default function LoansPage() {
  const [loans, setLoans] = useState([]);
  const [showApply, setShowApply] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: '',
    amount: '',
    tenure: '12',
    purpose: '',
  });
  const [calculatedRepayment, setCalculatedRepayment] = useState(null);

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await apiClient.get('/loans');
      setLoans(response.data);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  const calculateRepayment = () => {
    const amount = parseFloat(formData.amount) || 0;
    const monthlyRate = 0.12 / 12; // 12% annual rate
    const months = parseInt(formData.tenure);
    
    const monthly = amount * 
      (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    
    setCalculatedRepayment({
      monthly: Math.round(monthly),
      total: Math.round(monthly * months),
      interest: Math.round(monthly * months - amount),
    });
  };

  const handleSubmitLoan = async () => {
    try {
      await apiClient.post('/loans/apply', formData);
      setShowApply(false);
      fetchLoans();
      // Show success message
    } catch (error) {
      console.error('Error applying for loan:', error);
    }
  };

  return (
    <div>
      <div className="section-header">
        <div>
          <h2 className="section-title">Loan Products</h2>
          <p className="section-sub">Manage your loans and applications</p>
        </div>
        <Button onClick={() => { setShowApply(true); setStep(1); }}>
          + Apply for Loan
        </Button>
      </div>

      {/* Loan Products Grid */}
      <div className="grid-3">
        {[
          { icon: '🏠', name: 'Mortgage Loan', rate: '10%', max: 'KES 10M' },
          { icon: '💼', name: 'Business Loan', rate: '12%', max: 'KES 3M' },
          { icon: '⚡', name: 'Emergency Loan', rate: '8%', max: 'KES 100K' },
        ].map((product) => (
          <div key={product.name} className="card" style={{ cursor: 'pointer' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{product.icon}</div>
            <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>
              {product.name}
            </h3>
            <p>Rate: {product.rate}</p>
            <p>Max: {product.max}</p>
            <Button variant="outline" onClick={() => setShowApply(true)}>
              Apply Now
            </Button>
          </div>
        ))}
      </div>

      {/* My Loans Table */}
      <div className="card" style={{ marginTop: '24px' }}>
        <h2 className="section-title">My Loans</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance</th>
                <th>Monthly</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id}>
                  <td><code>{loan.id}</code></td>
                  <td>{loan.type}</td>
                  <td>KES {loan.amount.toLocaleString()}</td>
                  <td style={{ color: 'var(--red)' }}>
                    KES {loan.balance.toLocaleString()}
                  </td>
                  <td>KES {loan.monthly.toLocaleString()}</td>
                  <td>
                    <span className={`badge badge-${loan.status === 'active' ? 'gold' : 'green'}`}>
                      {loan.status}
                    </span>
                  </td>
                  <td>
                    {loan.status === 'active' && (
                      <Button variant="outline" size="sm">Pay Now</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Loan Application Modal */}
      <Modal
        isOpen={showApply}
        title="Apply for a Loan"
        onClose={() => setShowApply(false)}
        size="lg"
        footer={
          <>
            {step === 2 && (
              <Button variant="outline" onClick={() => setStep(1)}>
                ← Back
              </Button>
            )}
            <Button
              onClick={step === 1 ? () => setStep(2) : handleSubmitLoan}
              disabled={!formData.amount}
            >
              {step === 1 ? 'Next →' : '✓ Submit'}
            </Button>
          </>
        }
      >
        {step === 1 ? (
          <div>
            <div className="form-group">
              <label className="form-label">Loan Type</label>
              <select
                className="form-input"
                value={formData.loanType}
                onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
              >
                <option>Select loan type</option>
                <option value="personal">Personal Loan</option>
                <option value="business">Business Loan</option>
                <option value="emergency">Emergency Loan</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Loan Amount (KES)</label>
                <input
                  className="form-input"
                  type="number"
                  placeholder="150000"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tenure (Months)</label>
                <select
                  className="form-input"
                  value={formData.tenure}
                  onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
                >
                  {[6, 12, 18, 24, 36].map((m) => (
                    <option key={m} value={m}>{m} months</option>
                  ))}
                </select>
              </div>
            </div>

            <Button onClick={calculateRepayment} style={{ marginBottom: '20px' }}>
              🧮 Calculate Repayment
            </Button>

            {calculatedRepayment && (
              <div className="card" style={{ background: 'var(--gold-dim)' }}>
                <div style={{ marginBottom: '12px', fontWeight: '700', color: 'var(--gold)' }}>
                  REPAYMENT SUMMARY
                </div>
                <div style={{ marginBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monthly Payment</span>
                  <span style={{ fontWeight: '700' }}>
                    KES {calculatedRepayment.monthly.toLocaleString()}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Total Interest</span>
                  <span style={{ color: 'var(--amber)' }}>
                    KES {calculatedRepayment.interest.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Step 2: Personal Details Form */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-label">National ID</label>
              <input className="form-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-label">Monthly Income (KES)</label>
              <input className="form-input" type="number" />
            </div>
            <div className="form-group">
              <label className="form-label">Guarantor 1 Member ID</label>
              <input className="form-input" placeholder="FS-2024-XXXX" />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
```

---

## 📥 Downloads & Resources Page

```jsx
// src/pages/app/DownloadsPage.jsx
import { useState } from 'react';
import Button from '../../components/Button';
import Badge from '../../components/Badge';

export default function DownloadsPage() {
  const [downloaded, setDownloaded] = useState([]);

  const documents = [
    {
      id: 'D01',
      title: 'Annual Report 2025',
      category: 'Financial Reports',
      size: '2.4 MB',
      price: 0,
      memberOnly: true,
      icon: '📊',
      description: 'Full audited financial statements'
    },
    {
      id: 'D02',
      title: 'SACCO Bylaws',
      category: 'Governance',
      size: '1.1 MB',
      price: 500,
      memberOnly: false,
      icon: '⚖️',
      description: 'Complete governance document'
    },
  ];

  const handleDownload = (doc) => {
    if (doc.price > 0 && !downloaded.includes(doc.id)) {
      // Show payment modal
      return;
    }
    // Trigger download
    window.open(`/api/downloads/${doc.id}/file`);
  };

  return (
    <div>
      <h2 className="section-title">Resource Centre</h2>

      <div className="doc-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="card">
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>
              {doc.icon}
            </div>
            <h3 style={{ fontWeight: '600', marginBottom: '4px' }}>
              {doc.title}
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--txt3)', marginBottom: '12px' }}>
              {doc.category} · {doc.size}
            </p>
            <p style={{ fontSize: '12px', marginBottom: '12px' }}>
              {doc.description}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Badge type={doc.price > 0 ? 'amber' : 'green'}>
                {doc.price > 0 ? `KES ${doc.price}` : 'Free'}
              </Badge>
              <Button
                variant={downloaded.includes(doc.id) ? 'success' : 'outline'}
                size="sm"
                onClick={() => handleDownload(doc)}
              >
                ↓ {downloaded.includes(doc.id) ? 'Downloaded' : 'Download'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 🎨 Global Styles

```css
/* src/styles/globals.css */
:root {
  --bg: #0a0f1e;
  --bg2: #0f1729;
  --bg3: #141f35;
  --card: #111827;
  --border: #1e2d4a;
  --gold: #c9a84c;
  --gold2: #e8c96a;
  --teal: #2dd4bf;
  --red: #ef4444;
  --green: #22c55e;
  --blue: #3b82f6;
  --txt: #e8eaf0;
  --txt2: #8b9ab8;
  --txt3: #4a5a78;
  --font-head: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --radius: 14px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--txt);
  font-family: var(--font-body);
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: all 0.2s;
}

.card:hover {
  border-color: var(--border2);
  transform: translateY(-2px);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-body);
}

.btn-gold {
  background: var(--gold);
  color: #000;
}

.btn-gold:hover {
  background: var(--gold2);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--txt);
}

.form-input {
  width: 100%;
  padding: 11px 14px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg3);
  color: var(--txt);
  font-family: var(--font-body);
}

.form-input:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(201,168,76,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 12px 16px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  color: var(--txt3);
  border-bottom: 1px solid var(--border);
  text-transform: uppercase;
}

td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  color: var(--txt2);
}
```

---

## 🔗 API Endpoints Reference

```
AUTH
POST   /auth/login                   # Login
POST   /auth/register                # Register
POST   /auth/logout

MEMBERS
GET    /members/me                   # Get profile
PUT    /members/me                   # Update profile
GET    /members/{id}/savings
GET    /members/{id}/loans

LOANS
GET    /loans                        # List member loans
POST   /loans/apply                  # Apply for loan
GET    /loans/{id}                   # Get loan details
PUT    /loans/{id}/payment           # Make payment

PAYMENTS
POST   /payments/initiate            # Initiate M-Pesa
POST   /payments/callback            # M-Pesa callback
GET    /payments/history
GET    /payments/status/{ref}

DOWNLOADS
GET    /downloads                    # List resources
GET    /downloads/{id}/file          # Download file
POST   /downloads/{id}/purchase      # Purchase resource

REPORTS
GET    /reports/statement            # Account statement
GET    /reports/savings              # Savings summary
GET    /reports/loans                # Loan statement
```

---

## 🧪 Testing

```bash
# Unit tests with Vitest
npm install -D vitest @testing-library/react @testing-library/jest-dom

# E2E tests with Cypress
npm install -D cypress
```

---

## 📦 Build & Deployment

```bash
# Build for production
npm run build

# Output: dist/ folder ready for deployment

# Deploy to Vercel (recommended)
npm i -g vercel
vercel
```

---

## 🎯 Next Steps

1. ✅ Set up the project structure
2. ✅ Create all page components
3. ✅ Implement M-Pesa payment integration
4. ✅ Add form validation
5. ✅ Connect to Laravel API backend
6. ⏳ Add unit & E2E tests
7. ⏳ Deploy to production

---

**Happy coding! 🚀**
