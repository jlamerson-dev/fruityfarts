import React from 'react';

export default function About() {
  return (
    <section id="about" className="section container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="glass-panel" style={{ maxWidth: '1000px', margin: '0 auto', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center' }}>
          About Us
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-cyan)', marginBottom: '0.5rem', lineHeight: '1.4' }}>
            Precision Therapeutics was founded on a simple belief: your health should be treated with the same level of precision as your ambition.
          </h3>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--text-pure)' }}>
            In a world saturated with generic solutions, we offer something fundamentally different—an approach rooted in individuality, guided by data and refined through science. Every formulation we create is designed to reflect the nuances of your biology, not the averages of a population.
          </p>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-pure)' }}>
            We operate at the intersection of advanced diagnostics, targeted nutrition and peptide innovation. By combining these disciplines, we create bespoke therapeutic protocols that support how you think, perform and live at the highest level.
          </p>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-pure)' }}>
            Our philosophy is not reactive. It is proactive, intentional and deeply personalized. We focus on optimizing function before dysfunction arises—enhancing energy, clarity, resilience and longevity through precision-designed interventions.
          </p>

          <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--primary-cyan)' }}>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-pure)', fontWeight: 'bold', fontStyle: 'italic', margin: 0 }}>
              This is not supplementation. This is a new standard of care.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
