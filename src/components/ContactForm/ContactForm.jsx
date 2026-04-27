// Importamos estilos
import "./ContactForm.css";

// Importamos componentes reutilizables
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

// Formulario de contacto reutilizable
function ContactForm() {
  return (
    <form className="contact-form">

      {/* Campo nombre */}
      <InputField
        label="Name"
        type="text"
        placeholder="Enter your name"
      />

      {/* Campo email */}
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      {/* Campo mensaje */}
      <div className="textarea-group">
        <label>Message</label>
        <textarea placeholder="Write your message"></textarea>
      </div>

      {/* Botón reutilizable */}
      <Button text="Send Message" />

    </form>
  );
}

export default ContactForm;