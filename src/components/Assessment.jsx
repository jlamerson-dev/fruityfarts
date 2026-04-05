import React, { useState } from 'react';

const questions = [
  {
    id: 'goal',
    title: 'What is your primary health focus?',
    options: ['Muscle Recovery & Growth', 'Cognitive Function & Focus', 'Anti-Aging & Cellular Health', 'Energy & Stamina']
  },
  {
    id: 'activity',
    title: 'How active is your lifestyle?',
    options: ['Sedentary', 'Moderately Active', 'Highly Active', 'Professional Athlete']
  },
  {
    id: 'stress',
    title: 'What is your typical stress level?',
    options: ['Low', 'Moderate', 'High', 'Extremely High']
  }
];

export default function Assessment({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (option) => {
    const q = questions[currentStep];
    const nextAnswers = { ...answers, [q.id]: option };
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Simulate analyzing delays
      setTimeout(() => onComplete(nextAnswers), 1500);
    }
  };

  const q = questions[currentStep];

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--bg-dark)' }}>
      <div className="container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--primary-cyan)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '1px' }}>
            STEP {currentStep + 1} OF {questions.length}
          </p>
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>{q.title}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {q.options.map((option, i) => (
              <button 
                key={i} 
                onClick={() => handleSelect(option)}
                className="btn-secondary"
                style={{
                  textAlign: 'left',
                  padding: '1.5rem 2rem',
                  fontSize: '1.2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {option}
                <span style={{ color: 'var(--primary-cyan)' }}>→</span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: '3rem', width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ 
              width: `${((currentStep + 1) / questions.length) * 100}%`, 
              height: '100%', 
              background: 'var(--primary-cyan)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
