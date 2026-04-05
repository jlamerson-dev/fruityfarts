import React from 'react';

export default function Dashboard({ answers }) {
  // Just a conceptual mapping to simulate a custom algorithm result based on answers
  const isCognitive = answers.goal === 'Cognitive Function & Focus';
  
  return (
    <section className="section container" style={{ paddingTop: '100px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>Analysis Complete</h2>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Your Custom Therapeutics Blend</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Left Col: The Vial */}
        <div className="glass-panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', overflow: 'hidden', minHeight: '400px' }}>
          {/* We use the AI generated vial image here */}
          <img 
            src="/vial.png" 
            alt="Custom formulation vial" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.05)' }} 
          />
        </div>

        {/* Right Col: Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Primary Peptides</h3>
            <ul style={{ listStyle: 'none', spaceY: '1rem' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-pure)' }}>{isCognitive ? "Dihexa" : "BPC-157"}</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>{isCognitive ? "Enhances cognitive function and memory formation." : "Accelerates cellular healing and reduces inflammation."}</p>
              </li>
              <li>
                <strong style={{ color: 'var(--text-pure)' }}>CJC-1295 / Ipamorelin</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>Optimizes GH release for recovery and anti-aging properties.</p>
              </li>
            </ul>
          </div>

          <div className="glass-panel">
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Precision Vitamins & Minerals</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <strong style={{ color: 'var(--primary-cyan)' }}>Vitamin D3+K2</strong>
                <p style={{ fontSize: '0.85rem' }}>Immunity & Bone Health</p>
              </div>
              <div>
                <strong style={{ color: 'var(--primary-cyan)' }}>NAD+ Precursors</strong>
                <p style={{ fontSize: '0.85rem' }}>Cellular Energy</p>
              </div>
              <div>
                <strong style={{ color: 'var(--primary-cyan)' }}>Methyl-B12</strong>
                <p style={{ fontSize: '0.85rem' }}>Nervous System</p>
              </div>
              <div>
                <strong style={{ color: 'var(--primary-cyan)' }}>Magnesium Threonate</strong>
                <p style={{ fontSize: '0.85rem' }}>Brain Function</p>
              </div>
            </div>
          </div>

          <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
            Subscribe & Order
          </button>
        </div>
      </div>
    </section>
  );
}
