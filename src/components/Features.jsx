export function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="section section-gray">
      <div className="section-center">

        {/* Top Image */}
        <img
          src="/features-banner.png"
          alt="Ilustración de productos naturales"
          className="feature-banner"
        />

        <div className="feature-grid">
          <FeatureCard
            icon="🌿"
            title="Ingredientes 100% Orgánicos"
            text="Nuestros productos están elaborados con plantas cultivadas en nuestro propio huerto, sin químicos ni aditivos sintéticos."
          />
          <FeatureCard
            icon="♻️"
            title="Filosofía Circular"
            text="Creamos pensando en el ciclo natural de la vida, usando empaques sostenibles y procesos respetuosos con la tierra."
          />
          <FeatureCard
            icon="👐"
            title="Hecho a Mano con Amor"
            text="Cada fórmula es preparada artesanalmente por madre e hija, cuidando cada detalle desde la raíz hasta el empaque."
          />
          <FeatureCard
            icon="🧘‍♀️"
            title="Bienestar Holístico"
            text="Nuestros aceites esenciales, shampoos y acondicionadores están diseñados para nutrir cuerpo, mente y espíritu."
          />
        </div>

        <div className="testimonial">
          <p className="testimonial-quote">
           “YOSANO no es solo una marca, es un ritual de bienestar que comienza en la tierra y termina en tu piel.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
