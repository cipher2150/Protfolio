import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="logo text-gradient-burgundy">
            Rajshekhar<span className="logo-dot"></span>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      ></div>

      {/* Mobile Side Drawer Navigation */}
      <ul className={`mobile-nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.label} className="mobile-nav-item">
            <a href={item.href} onClick={handleLinkClick}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
