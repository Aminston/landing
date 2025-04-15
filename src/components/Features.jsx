function Features() {
    return (
      <section
        id="features"
        style={{
          backgroundColor: '#f4f4f5',
          padding: '4rem 2rem',
          textAlign: 'center',
          width: '100vw',
          boxSizing: 'border-box',
          color: '#333',
        }}
      >
        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <FeatureCard
            icon="🧩"
            title="Customizable templates"
            text="Free website designs to launch your store quickly and easily."
          />
          <FeatureCard
            icon="📦"
            title="All in one"
            text="Everything from marketing to shipping is handled for you."
          />
          <FeatureCard
            icon="🔒"
            title="Secure platform"
            text="Millions trust us to manage their online store safely."
          />
        </div>
  
        {/* Testimonial */}
        <div
          style={{
            marginTop: '4rem',
            maxWidth: '800px',
            marginInline: 'auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '2rem',
              fontWeight: '500',
              marginBottom: '1rem',
              color: '#111',
            }}
          >
            "PureGlow is better than any shampoo brand we’ve tried—and we’ve tried them all."
          </p>
          <p style={{ fontSize: '1rem', color: '#555' }}>
            — Satisfied Customer, Organic Enthusiast
          </p>
        </div>
      </section>
    );
  }
  
  function FeatureCard({ icon, title, text }) {
    return (
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            backgroundColor: '#bbf7d0',
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            margin: '0 auto 1rem auto',
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            color: '#111',
            fontWeight: '600',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: '#555',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            padding: '0 0.5rem',
          }}
        >
          {text}
        </p>
      </div>
    );
  }
  
  export default Features;
  