// Importamos estilos
import "./ProductGrid.css";

// Contenedor para mostrar varias cards
function ProductGrid({ children }) {
  return (
    <div className="product-grid">

      {/* Aquí se insertan las ProductCard */}
      {children}

    </div>
  );
}

export default ProductGrid;