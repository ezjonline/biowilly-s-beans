"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-wrapper">
          <Image
            src="/logo.png"
            alt="Bio Willy's Beans Logo"
            width={60}
            height={60}
            className="logo-img"
          />
          <h1 className="logo-text">BIO WILLY'S BEANS</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#story">Story</a></li>
            <li><a href="#offerings">Offerings</a></li>
            <li><a href="mailto:biowilly@gmail.com" className="nav-cta">Place an Order</a></li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          display: flex;
          align-items: center;
          z-index: 1000;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .logo-text {
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          margin: 0;
          font-family: 'Courier Prime', monospace;
          font-weight: 700;
          color: #000000;
        }
        .logo-img {
          object-fit: contain;
        }
        nav ul {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        nav a {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 500;
          color: #000000;
          opacity: 0.8;
        }
        nav a:hover {
          opacity: 1;
          color: var(--accent-color);
        }
        .nav-cta {
          padding: 0.6rem 1.2rem;
          border: 1px solid #000000;
          transition: var(--transition-smooth);
        }
        .nav-cta:hover {
          background-color: #000000;
          color: #ffffff !important;
        }
        @media (max-width: 768px) {
          nav { display: none; }
          .logo-text { font-size: 0.9rem; }
        }
      `}</style>
    </header>
  );
}
