import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const focusAreas = [
    {
      title: 'Data Engineering',
      desc: 'Designing scalable batch and real-time data pipelines, building lakehouse architectures, and transforming raw data into reliable analytics ready datasets.',
      icon: (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <ellipse cx="6" cy="5" rx="3" ry="2"></ellipse>
            <path d="M3 5v6c0 1.1 1.3 2 3 2s3-.9 3-2V5"></path>

            <ellipse cx="18" cy="19" rx="3" ry="2"></ellipse>
            <path d="M15 19v-2"></path>

            <path d="M9 8h4"></path>
            <path d="M13 8v4h5"></path>
            <path d="M18 12v5"></path>
        </svg>
      )
    },
    {
      title: 'Multi-Cloud Platform',
      desc: 'Building a unified storage platform that integrates multiple cloud providers into a single, secure data management experience.',
      icon: (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M7 18a4 4 0 1 1 .6-7.95A5 5 0 0 1 17 8a4 4 0 1 1 .5 8H7z"></path>

            <circle cx="6" cy="18" r="1"></circle>
            <circle cx="12" cy="21" r="1"></circle>
            <circle cx="18" cy="18" r="1"></circle>

            <path d="M6 17v-2"></path>
            <path d="M12 20v-4"></path>
            <path d="M18 17v-2"></path>

            <path d="M6 15h12"></path>
        </svg>
      )
    },
    {
      title: 'Finance & Geopolitics',
      desc: 'Exploring how global economic events, geopolitical developments, and market trends shape financial data and influence intelligent data-driven systems.',
      icon: (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <circle cx="12" cy="12" r="8"></circle>

            <path d="M4 12h16"></path>
            <path d="M12 4a12 12 0 0 1 0 16"></path>
            <path d="M12 4a12 12 0 0 0 0 16"></path>

            <polyline points="15 7 18 7 18 10"></polyline>
            <path d="M18 7l-4 4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <p className="about-lead">
              I am a Data Engineer passionate about building scalable data platforms that transform raw data into reliable, real-time insights. Currently, I am pursuing a Specialization in Big Data along with a Minor in Finance, combining modern data engineering practices with a strong understanding of financial systems and analytics.
            </p>
            <p className="about-text">
              I am currently building a multi-cloud management platform that enables users to securely integrate and manage multiple cloud storage accounts through a unified interface, simplifying file organization and cloud storage management.
            </p>

            {/* Expandable Story Container */}
            <div className={`about-extended-wrapper ${isOpen ? 'open' : ''}`}>
              <div className="about-extended">
                <p>
                  During my Summer Research Internship, I contributed to developing a predictive model that estimated CIBIL scores using alternative data sources for underbanked individuals. Working with financial datasets strengthened my understanding of data preprocessing, feature engineering, and predictive analytics, while sparking my interest in financial data engineering.
                </p>
                <p>
                  Beyond technology, I have a strong interest in finance and geopolitics because both shape global markets and influence how data-driven systems are designed. I enjoy exploring how economic trends, public policy, and global events translate into measurable data that can support better financial decisions.
                </p>
              </div>
            </div>

            <button className="btn btn-secondary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Right Column: Highlight Focus Areas */}
          <div className="about-focus">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="glass-panel focus-card">
                <div className="focus-icon-wrapper">
                  {area.icon}
                </div>
                <div className="focus-info">
                  <h3 className="focus-title">{area.title}</h3>
                  <p className="focus-desc">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
