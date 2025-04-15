function Hero() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '600' }}>
        Naturally Clean. Truly Pure.
      </h2>
      <p style={{ margin: '1rem 0', fontSize: '1.2rem', maxWidth: '800px', marginInline: 'auto' }}>
        Our organic shampoo is crafted with botanical ingredients to give your hair the love it deserves.
      </p>
      <a
        href="https://www.yosanoorganics.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#4CAF50',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '1.5rem',
        }}
      >
        Shop Now
      </a>
    </section>
  );
}

export default Hero;
