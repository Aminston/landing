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
        Bienestar Orgánico Desde Nuestro Hogar Hasta el Tuyo
      </h2>
      <p style={{ margin: '1rem 0', fontSize: '1.2rem', maxWidth: '800px', marginInline: 'auto' }}>
        En YOSANO, madre e hija crean productos naturales hechos a mano en un rancho familiar al norte de México. 
        Creados con amor, cultivados con conciencia.
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
        Comprar Ahora
      </a>
    </section>
  );
}

export default Hero;
