import React, { useState } from 'react'
import Hero from './components/Hero'
import Assessment from './components/Assessment'
import Dashboard from './components/Dashboard'
import Science from './components/Science'
import About from './components/About'

function App() {
  const [view, setView] = useState('hero'); // 'hero', 'assessment', 'dashboard'
  const [answers, setAnswers] = useState(null);

  const startAssessment = () => setView('assessment');
  const completeAssessment = (answers) => {
    setAnswers(answers);
    setView('dashboard');
  };
  const goHome = () => setView('hero');

  return (
    <>
      <header>
        <div className="logo" onClick={goHome} style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          Precision<span>Therapeutics</span>
        </div>
        <nav>
          <a href="#" onClick={goHome}>Home</a>
          <a href="#science">The Science</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        {view === 'hero' && (
          <div onClick={(e) => {
            // Very simple way to intercept the hero button without drilling props down
            if (e.target.tagName === 'BUTTON' && e.target.innerText.includes('Start')) {
              startAssessment();
            }
          }}>
            <Hero />
            <Science />
            <About />
          </div>
        )}
        
        {view === 'assessment' && <Assessment onComplete={completeAssessment} />}
        
        {view === 'dashboard' && <Dashboard answers={answers} />}
      </main>
    </>
  )
}

export default App
