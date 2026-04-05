import React, { Component } from 'react';
import Ballpit from '../Ballpit';

class BallpitErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Ballpit crashed", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: '#ff3366', background: 'rgba(255,50,100,0.1)', fontFamily: 'monospace', zIndex: 9999, position: 'relative' }}>
          <h3>Ballpit Render Error (Please screenshot this):</h3>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      
      {/* Background Ballpit Animation */}
      <div style={{ position: 'absolute', overflow: 'hidden', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'auto' }}>
        <BallpitErrorBoundary>
          <Ballpit
            count={100}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            colors={[0x00e5ff, 0x8a2be2, 0xa200ff, 0x4169e1, 0x0A32FD, 0xffffff, 0xe6e6fa]}
          />
        </BallpitErrorBoundary>
      </div>

      {/* Hero Content Overlay */}
      <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '700px', textAlign: 'center' }} className="glass-panel">
          <h1>Precision Health,<br/>Formulated for You.</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            Unlock your potential with custom-blended peptides and vitamins, precisely tailored to your unique biology. Move past generic supplements.
          </p>
          <div style={{ pointerEvents: 'auto' }}>
            <button className="btn-primary" style={{ marginRight: '1rem' }}>
              Start Assessment
            </button>
            <a href="#science" className="btn-secondary">
              Learn the Science
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
