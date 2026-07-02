import React from 'react';

import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      
      <div className="avatar-glow"></div>

      <div className="container hero-grid">
        {/* Left Side: Copy and Links */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-title text-gradient">Rajshekhar Prasad Saxena</h1>
          <h2 className="hero-subtitle">Data Engineer & Backend Developer</h2>
          <p className="hero-description">
            Building scalable data pipelines and backend systems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-image-wrapper">
              <img src="./assets/Profile1.png" alt="Rajshekhar Saxena" className="avatar-image" />  
            </div>
          </div>

          {/* Floating Badge: Databricks */}
          <div className="floating-badge badge-bricks">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span>Databricks</span>
          </div>

          {/* Floating Badge: Python */}
          <div className="floating-badge badge-python">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 4h6a3 3 0 0 1 3 3v2H9a2 2 0 0 0-2 2v2H4v-3a6 6 0 0 1 6-6z"/>
              <path d="M15 20H9a3 3 0 0 1-3-3v-2h9a2 2 0 0 0 2-2v-2h3v3a6 6 0 0 1-6 6z"/>
              <circle cx="15.5" cy="6.5" r=".5" fill="currentColor"/>
              <circle cx="8.5" cy="17.5" r=".5" fill="currentColor"/>
            </svg>
            <span>Python</span>
          </div>

          {/* Floating Badge: SQL */}
          <div className="floating-badge badge-sql">
            
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="5" rx="8" ry="3"></ellipse>
              <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path>
              <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"></path>
            </svg>
            
            <span>SQL</span>
          </div>

          {/* Floating Badge: Apache Spark */}
          <div className="floating-badge badge-spark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">

            <path d="M12 3L13.2 8.8L19 10L13.2 11.2L12 17L10.8 11.2L5 10L10.8 8.8L12 3"/>

            <path d="M12 1V3"/>
            <path d="M12 17V23"/>
            <path d="M1 10H5"/>
            <path d="M19 10H23"/>

          </svg>
            <span>Apache Spark</span>
          </div>
        </div>
      </div>
    </section>
  );
}
