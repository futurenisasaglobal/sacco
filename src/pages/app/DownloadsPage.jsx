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