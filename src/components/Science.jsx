import React from 'react';

export default function Science() {
  return (
    <section id="science" className="section container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="glass-panel" style={{ maxWidth: '1000px', margin: '0 auto', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
          The Science of Precision
        </h1>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-pure)' }}>
            True optimization begins with understanding that no two bodies are alike. Your biology is shaped by a complex interplay of genetics, lifestyle, environment and time. Precision Therapeutics is built on the belief that health solutions should reflect that individuality with intention and accuracy.
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '4rem', color: 'var(--text-pure)' }}>
            Rather than relying on standardized supplementation, we apply the principles of precision medicine to design formulations that are distinctly yours. Every recommendation is guided by data, refined by science and delivered with purpose.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <div>
            <div style={{ width: '40px', height: '4px', background: 'var(--primary-cyan)', marginBottom: '1rem', borderRadius: '2px' }}></div>
            <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.4rem' }}>Intelligent Personalization</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              We analyze key biomarkers to uncover subtle imbalances and inefficiencies within your system. This allows us to move beyond surface-level symptoms and address the underlying drivers of performance, energy and resilience.
            </p>
          </div>
          <div>
            <div style={{ width: '40px', height: '4px', background: 'var(--primary-cyan)', marginBottom: '1rem', borderRadius: '2px' }}></div>
            <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.4rem' }}>Refined Nutrient Design</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Vitamins and micronutrients are foundational to every cellular process. When precisely calibrated to your biology, they support optimal function at a deeper level—enhancing energy production, cognitive clarity and overall vitality with elegance and precision.
            </p>
          </div>
          <div>
            <div style={{ width: '40px', height: '4px', background: 'var(--primary-cyan)', marginBottom: '1rem', borderRadius: '2px' }}></div>
            <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.4rem' }}>Advanced Peptide Signaling</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Peptides act as the body’s internal messengers, orchestrating processes such as repair, regeneration and metabolic balance. When introduced with precision, they help guide the body back toward its natural state of alignment and performance.
            </p>
          </div>
          <div>
            <div style={{ width: '40px', height: '4px', background: 'var(--primary-cyan)', marginBottom: '1rem', borderRadius: '2px' }}></div>
            <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.4rem' }}>Synergy by Design</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Each formulation is thoughtfully composed to ensure every element works in harmony. The result is not a collection of ingredients, but a cohesive system designed to elevate how your body performs, adapts and thrives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
