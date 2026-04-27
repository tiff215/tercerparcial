import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import Button from "../components/Button/Button";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import "./Resenas.css";

function Resenas() {
  return (
    <>
      <Navbar />

      <div className="resenas-page">

        <SectionTitle 
          title="Reseñas de Clientes"
          subtitle="Lo que nuestros clientes dicen sobre nosotros"
        />

        <div className="reviews-container">

          <ReviewCard 
            name="Ana Martínez"
            comment="El mejor café que he probado en Puebla, el ambiente es increíble."
          />

          <ReviewCard 
            name="Carlos Ramírez"
            comment="Excelente servicio y los postres están deliciosos."
          />

          <ReviewCard 
            name="María López"
            comment="Me encanta venir a trabajar aquí, el café es perfecto."
          />

          <ReviewCard 
            name="Luis Hernández"
            comment="Muy buena atención y precios accesibles."
          />

          <ReviewCard 
            name="Fernanda Torres"
            comment="El lugar es súper acogedor, recomendado al 100%."
          />

          <ReviewCard 
            name="Jorge Castillo"
            comment="Gran variedad de bebidas y excelente calidad."
          />

        </div>

        <div className="resenas-cta">
          <h3>¿Ya nos visitaste?</h3>
          <p>Déjanos tu opinión y ayúdanos a mejorar</p>
          <Button text="Escribir reseña" />

           <SocialIcons/>
        </div>

      </div>

      <Footer />
     
    </>
  );
}

export default Resenas;