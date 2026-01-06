"use client";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>BIOWILLY'S BEANS</h2>
            <p>Seattle, WA</p>
          </div>
          <div className="footer-meta">
            <p>&copy; {new Date().getFullYear()} Biowilly's Beans. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 4rem 0;
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }
        .footer-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .footer-brand h2 {
          font-size: 1rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .footer-brand p {
          font-size: 0.875rem;
          opacity: 0.6;
        }
        .footer-meta p {
          font-size: 0.75rem;
          opacity: 0.4;
        }
        @media (max-width: 768px) {
          .footer-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
