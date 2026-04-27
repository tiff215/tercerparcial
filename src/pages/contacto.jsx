// src/pages/Contacto.jsx
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from '../components/ContactForm/ContactForm';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import SocialIcons from '../components/SocialIcons/SocialIcons';
import './Contacto.css';

const Contacto = () => {
  return (
    <>
      <Navbar />

      <div className="contacto-page">
        <SectionTitle 
          title="Contáctanos" 
          subtitle="Estamos listos para atenderte con el mejor café de Puebla"
        />

        <div className="contacto-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Nuestra Ubicación</h3>
              <p>Av. Reforma 123, Colonia Centro<br />Puebla, Puebla, México</p>
            </div>

            <div className="info-item">
              <h3>Horarios</h3>
              <p>Lunes a Domingo<br />7:00 am - 9:00 pm</p>
            </div>

            <div className="info-item">
              <h3>Teléfono</h3>
              <p>(222) 123-4567</p>
              <p>(222) 987-6543</p>
            </div>

            <div className="info-item">
              <h3>Email</h3>
              <p>hola@cafe-aromas.com</p>
            </div>

            <div className="social-section">
              <h3>Síguenos en redes sociales</h3>
              <SocialIcons />
            </div>
          </div>

          <div className="contact-form-section">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contacto;