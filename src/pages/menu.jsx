import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import ProductCard from "../components/ProductCard/ProductCard";

import "./Menu.css";

import cafe1 from "../assets/cafe1.jpeg";
import cafe2 from "../assets/cafe1.jpeg";
import cafe3 from "../assets/cafe3.jpeg";

import cold1 from "../assets/cold1.jpeg";
import cold2 from "../assets/cold2.jpeg";

import dessert1 from "../assets/dessert1.jpeg";
import dessert2 from "../assets/dessert2.jpeg";

function Menu() {
  return (
    <>
      <Navbar />

      <div className="menu-page">

        {/* TÍTULO */}  
        <SectionTitle 
          title="Nuestro Menú"
          subtitle="Descubre nuestras bebidas y postres"
        />

        {/* CAFÉS CALIENTES */}
        <section className="menu-section">
          <h2 className="menu-category">Cafés Calientes</h2>

          <ProductGrid>
            <ProductCard image={cafe1} name="Latte" price="45" />
            <ProductCard image={cafe2} name="Cappuccino" price="60" />
            <ProductCard image={cafe3} name="Mocha" price="55" />
          </ProductGrid>
        </section>

        {/* BEBIDAS FRÍAS */}
        <section className="menu-section">
          <h2 className="menu-category">Bebidas Frías</h2>

          <ProductGrid>
            <ProductCard image={cold1} name="Frappé" price="70" />
            <ProductCard image={cold2} name="Cold Brew" price="65" />
          </ProductGrid>
        </section>

        {/* POSTRES */}
        <section className="menu-section">
          <h2 className="menu-category">Postres</h2>

          <ProductGrid>
            <ProductCard image={dessert1} name="Cheesecake" price="80" />
            <ProductCard image={dessert2} name="Brownie" price="50" />
          </ProductGrid>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default Menu;