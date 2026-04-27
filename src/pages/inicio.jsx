import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import ProductCard from "../components/ProductCard/ProductCard";
import Button from "../components/Button/Button";

import "./Inicio.css";

// Imágenes (agrueguen imagenes)
import cafe1 from "../assets/cafe1.jpeg";
import cafe2 from "../assets/cafe2.jpeg";
import cafe3 from "../assets/cafe3.jpeg";

function Inicio() {
  return (
    <>
      <Navbar />

      <div className="inicio-page">

        {/* HERO */}
        <HeroBanner />

        {/* PRODUCTOS DESTACADOS */}
        <section className="featured-section">
          <SectionTitle 
            title="Nuestros Favoritos"
            subtitle="Los cafés más pedidos por nuestros clientes"
          />

          <ProductGrid>
            <ProductCard 
              image={cafe1}
              name="Latte"
              price="55"
            />

            <ProductCard 
              image={cafe2}
              name="Cappuccino"
              price="60"
            />

            <ProductCard 
              image={cafe3}
              name="Mocha"
              price="65"
            />
          </ProductGrid>
        </section>

        {/* SECCIÓN SOBRE NOSOTROS */}
        <section className="about-section">
          <div className="about-content">
            <h2>Sobre Nosotros</h2>
            <p>
              En Coffee House nos apasiona ofrecer café de la más alta calidad, 
              preparado con granos seleccionados y servido en un ambiente cálido 
              y acogedor en el corazón de Puebla.
            </p>
            <Button text="Conócenos más" />
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default Inicio;