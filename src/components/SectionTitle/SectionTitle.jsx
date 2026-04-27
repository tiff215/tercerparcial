// Importamos los estilos del componente
import "./SectionTitle.css";

// Componente reutilizable para títulos de secciones
// Recibe una prop llamada text
function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title-container">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;