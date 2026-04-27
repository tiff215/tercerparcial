// Importamos estilos
import "./InputField.css";

// Campo reutilizable para formularios
// Recibe:
// label = nombre del campo
// type = tipo de input
// placeholder = texto interno
function InputField({ label, type, placeholder }) {
  return (
    <div className="input-group">

      {/* Etiqueta del campo */}
      <label>{label}</label>

      {/* Campo de entrada */}
      <input type={type} placeholder={placeholder} />

    </div>
  );
}

export default InputField;