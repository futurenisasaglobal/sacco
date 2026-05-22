// src/components/Form/FormGroup.jsx
export default function FormGroup({ children, columns = 1 }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '16px',
      marginBottom: '20px',
    }}>
      {children}
    </div>
  );
}