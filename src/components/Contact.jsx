function Contact() {
    return (
      <section id="contact" className="section section-light">
        <div className="section-center">
          <h2 className="section-title">Contacto</h2>
          <p className="section-text">
            ¿Tienes dudas o comentarios? Escríbenos y te responderemos lo antes posible.
          </p>
  
          <a
            href="mailto:ventas@yosano.com?subject=Consulta%20sobre%20productos&body=Hola%20YOSANO..."
            className="btn-primary"
            style={{ marginTop: '2rem', display: 'inline-block' }}
          >
            Enviar Correo
          </a>
        </div>
      </section>
    );
  }
  
  export default Contact;
  