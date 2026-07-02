import React from 'react';
import './Stats.css';

export default function Stats() {
  const statsData = [
    {
      value: '500+',
      label: 'LeetCode Problems',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">

            <polyline points="9 18 3 12 9 6"/>
            <polyline points="15 6 21 12 15 18"/>

        </svg>
      )
    },
    {
      value: '3+',
      label: 'Data and Backend Projects',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">

            <ellipse cx="12" cy="5" rx="7" ry="3"/>
            <path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/>
            <path d="M12 8v8"/>
            <path d="M9 12h6"/>

        </svg>
      )
    },
    {
      value: '9.26',
      label: 'CGPA',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">

            <path d="M2 9l10-5 10 5-10 5-10-5z"/>
            <path d="M6 11v4c0 2 3 4 6 4s6-2 6-4v-4"/>
            <path d="M22 9v6"/>

        </svg>
      )
    },
    {
      value: '75%',
      label: 'Merit Scholarship',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">

            <circle cx="12" cy="8" r="4"/>
            <path d="M10 12l-2 9 4-2 4 2-2-9"/>

        </svg>
      )
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="glass-panel stats-bar">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value text-gradient-burgundy">
                {stat.icon}
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
