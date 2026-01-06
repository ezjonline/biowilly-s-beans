"use client";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        {/* Placeholder for Video */}
        {/* Background Video */}
        <div className="hero-video-placeholder">
          <iframe
            className="hero-video-iframe"
            src="https://www.youtube.com/embed/LTrWlYWoaL0?autoplay=1&mute=1&controls=0&loop=1&playlist=LTrWlYWoaL0&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
            title="Hero Background Video"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        <div className="container hero-content">
          <div className="hero-text-wrapper text-reveal">
            <h1 className="hero-title">Sustainable. Eco-friendly. Damn tasty.</h1>
            <p className="hero-tagline">Small-batch coffee, roasted with intention in Seattle.</p>
            <a href="mailto:biowilly@gmail.com" className="button hero-button">Place an Order</a>
          </div>
        </div>
      </section>

      {/* 2. About / Story Section */}
      <section id="story" className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-placeholder">
              <div className="media-box">
                {/* Image Placeholder */}
                <img src="/bio-willy-story-cropped.jpg" alt="Bill Levin roasting coffee" className="story-image" />
              </div>
            </div>
            <div className="story-content">
              <h2 className="section-title">Biowilly's story</h2>
              <div className="story-text">
                <p>
                  Born out of Bill Levin’s love of coffee and the Seattle coffee culture, Biowilly's Beans began as a nano-roaster, and expanded to provide artisan coffee to local businesses, family and friends.
                </p>
                <p>
                  Bill perfects each small batch roast, bringing out the coffee’s origin flavors and aromas.
                </p>
                <p>
                  Guided by a commitment to sustainability, the roasterie is partially run on solar power. The brand’s Instagram and Facebook pages echo Biowilly's mantra: “Sustainable. Eco-friendly. Damn tasty.”
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="https://www.youtube.com/watch?v=LTrWlYWoaL0" target="_blank" rel="noopener noreferrer" className="video-link">Click here to watch our how it's made video</a>
                <a href="mailto:biowilly@gmail.com" className="button story-button" style={{ marginTop: 0 }}>Place an Order</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Offering Section */}
      <section id="offerings" className="offerings-section">
        <div className="container">
          <div className="offerings-header">
            <h2 className="section-title text-center">Choose Your Roast</h2>
            <p className="section-subtitle text-center">Seasonal selections, roasted to order.</p>
          </div>

          <div className="offerings-grid">
            <OfferingItem
              title="Golden Decaf"
              imageSrc="/roast-golden-decaf.png"
            />
            <OfferingItem
              title="Wedding Blend"
              imageSrc="/roast-wedding-blend.png"
            />
          </div>
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <a href="mailto:biowilly@gmail.com" className="button roast-button">Place an Order</a>
          </div>
        </div>
      </section>

      {/* New Kogi Tribe Section */}
      <section className="kogi-section">
        <div className="container">
          <div className="kogi-grid">
            <div className="kogi-image-wrapper">
              <img src="/kogi-coffee.jpg" alt="Coffee cherries in hand" className="kogi-image" />
            </div>
            <div className="kogi-content">
              <h2 className="section-title text-white">Coffee with a <span className="serif-italic">Heart</span></h2>
              <p className="section-subtitle text-accent">PROUDLY SUPPORTING THE KOGI TRIBE</p>
              <div className="kogi-text">
                <p>
                  We are honored to partner with <strong>Paraisocafé</strong> to bring you beans cultivated by the <strong>Kogi people</strong> in the Sierra Nevada Mountains of Colombia.
                </p>
                <p>
                  Grown in harmony with the earth and hand-harvested from untouched rainforests, this coffee delivers unmatched flavor while supporting the tribe's mission to protect their land and culture. Every cup celebrates resilience, authenticity, and a deep respect for nature.
                </p>
              </div>
              <a href="https://www.upperlimitcoffee.com/" target="_blank" rel="noopener noreferrer" className="button hero-button" style={{ marginTop: '1rem' }}>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-content">
              <h2 className="cta-title">Ready for a <span className="serif-italic">Better</span> Brew?</h2>
              <p className="cta-description">We ship fresh roasts weekly. Experience the pinnacle of Seattle's coffee craft.</p>
              <a href="mailto:biowilly@gmail.com" className="button cta-button">Place an Order</a>
            </div>
            <div className="cta-image-wrapper">
              <img src="/better-brew.jpg" alt="Pouring coffee" className="cta-image" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          overflow: hidden;
          background-color: #000;
          padding: 0;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6));
          z-index: 2;
        }
        .hero-video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }
        .hero-video-iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 56.25vw; /* 16:9 aspect ratio */
          min-height: 100vh;
          min-width: 177.77vh; /* 16:9 aspect ratio */
          transform: translate(-50%, -50%);
          pointer-events: none;
          border: none;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
        }
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .serif-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
        }
        .hero-tagline {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          font-weight: 300;
          letter-spacing: 0.05em;
        }
        .hero-button {
          background-color: #fff;
          color: #000;
          border-radius: 0;
          border: 1px solid #fff;
        }
        .hero-button:hover {
          background-color: #000;
          color: #fff;
          border-color: #000;
        }

        /* Story Section */
        .story-section {
          background-color: var(--bg-primary);
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .media-box {
          aspect-ratio: 4/5;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }
        .story-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .media-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.3;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          color: var(--text-secondary);
        }
        .video-link {
          font-size: 0.9rem;
          text-decoration: underline;
          color: var(--text-primary);
          font-style: italic;
          transition: var(--transition-smooth);
        }
        .video-link:hover {
          color: var(--accent-color);
        }
        .story-button {
          background-color: #fff;
          color: #000;
          border: 1px solid #000;
          margin-top: 1rem;
        }
        .story-button:hover {
          background-color: #000;
          color: #fff;
        }

        /* Offerings Section */

        .offerings-header {
          margin-bottom: 5rem;
        }
        .offerings-section {
          background-color: #fff;
          color: #000;
          padding: 5rem 0;
        }
        .offerings-header {
          margin-bottom: 3rem;
        }
        .section-subtitle {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.6;
          margin-top: 1rem;
          color: #000;
        }
        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .text-center { text-align: center; }

        /* Kogi Section */
        .kogi-section {
          background-color: #111;
          color: #fff;
          padding: 8rem 0;
        }
        .kogi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .kogi-image-wrapper {
          aspect-ratio: 4/5;
          overflow: hidden;
          position: relative;
        }
        .kogi-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .text-white { color: #fff; }
        .text-accent { color: var(--accent-color); }
        .kogi-text p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
        }
        
        /* Final CTA */
        .final-cta {
          padding: 10rem 0;
          background-color: var(--bg-primary);
        }
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .cta-content {
          text-align: left;
        }
        .cta-image-wrapper {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .cta-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cta-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .cta-description {
          font-size: 1.125rem;
          margin-bottom: 3rem;
          opacity: 0.7;
          max-width: 450px;
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 3.5rem; }
          .story-grid { grid-template-columns: 1fr; gap: 3rem; }
          .offerings-grid { grid-template-columns: 1fr 1fr; }
          .cta-grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .cta-content { text-align: center; }
          .cta-description { margin-left: auto; margin-right: auto; }
        }

        .roast-button {
          background-color: #000;
          color: #fff;
          border: 1px solid #000;
        }
        .roast-button:hover {
          background-color: #fff;
          color: #000;
        }
        .cta-button {
          background-color: #fff;
          color: #000;
          border: 1px solid #fff;
        }
        .cta-button:hover {
          background-color: #000;
          color: #fff;
          border-color: #000;
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .offerings-grid { grid-template-columns: 1fr; }
          section { padding: 5rem 0; }
        }
      `}</style>
    </div>
  );
}

function OfferingItem({ title, imageSrc }: { title: string, imageSrc: string }) {
  return (
    <div className="offering-item">
      <div className="offering-media">
        <div className="media-box-small">
          <img src={imageSrc} alt={title} className="offering-image" />
        </div>
      </div>
      <div className="offering-info">
        <h3 className="offering-title">{title}</h3>
      </div>
      <style jsx>{`
        .offering-item {
          text-align: left;
        }
        .media-box-small {
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          height: 350px;
          overflow: hidden;
        }
        .offering-image {
          width: auto;
          height: 100%;
          object-fit: contain;
          max-width: 100%;
        }
        .offering-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .offering-origin {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .offering-notes {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
