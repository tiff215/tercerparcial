import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Button from "../components/Button/Button";
import SocialIcons from "../components/SocialIcons/SocialIcons";

import "./Acerca.css";

// Imagen (puedes cambiarla)
import cafeAbout from "../assets/cafe-about.png";

function Acerca() {
  return (
    <>
      <Navbar />

      <div className="acerca-page">

        <SectionTitle 
          title="Sobre Nosotros"
          subtitle="Conoce la historia detrás de nuestro café"
        />

        {/* HISTORIA */}
        <section className="about-section">
          <div className="about-text">w
            <h2>Nuestra Historia</h2>
            <p>
              Coffee House nació con la idea de crear un espacio donde las personas
              pudieran disfrutar de un excelente café en un ambiente acogedor.
              Desde nuestros inicios en Puebla, nos hemos enfocado en ofrecer
              productos de alta calidad y una experiencia única para cada cliente.
            </p>

            <p>
              Trabajamos con granos seleccionados y cuidamos cada detalle en la
              preparación de nuestras bebidas, para que cada taza sea especial.
            </p>

            <Button text="Ver Menú" />
          </div>

          <div className="about-image">
            <img src={cafeAbout} alt="Café" />
          </div>
        </section>

        {/* MISIÓN Y VISIÓN */}
        <section className="values-section">

          <div className="value-card">
            <h3>Misión</h3>
            <p>
              Brindar café de alta calidad acompañado de un servicio excepcional,
              creando momentos únicos para nuestros clientes.
            </p>
          </div>

          <div className="value-card">
            <h3>Visión</h3>
            <p>
              Ser una cafetería reconocida en Puebla por nuestro sabor, ambiente
              y atención al cliente.
            </p>
          </div>

          <div className="value-card">
            <h3>Valores</h3>
            <p>
              Calidad, pasión, compromiso y calidez en cada taza que servimos.
            </p>
          </div>

        </section>

        {/* REDES */}
        <section className="social-section">
          <h2>Síguenos</h2>
          <p>Forma parte de nuestra comunidad</p>
          <SocialIcons />
        </section>

      </div>

      <Footer />
    </>
  );
}

export default Acerca;