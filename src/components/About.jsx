function About() {
    return (
      <section
        id="about"
        style={{
          backgroundColor: '#f9f9f9',
          padding: '5rem 2rem',
          color: '#333', // Ensures default text is readable
          width: '100vw',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              fontWeight: '600',
              color: '#111', // Very dark heading
            }}
          >
            Why We Created PureGlow
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto',
              color: '#444', // Body text: dark gray
            }}
          >
            At PureGlow, we believe your hair deserves better—free from harsh chemicals, sulfates, and synthetic fragrances.
            Our mission is simple: to bring you clean, organic hair care that nourishes from root to tip.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  