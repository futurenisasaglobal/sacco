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