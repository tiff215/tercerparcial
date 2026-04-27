import "./HeroBanner.css";
import Button from "../Button/Button";

function HeroBanner() {
  return (
    <section className="hero">

      <h2>Fresh Coffee Every Day</h2>

      <p>Enjoy premium coffee and delicious desserts.</p>

      <Button text="Order Now" />

    </section>
  );
}

export default HeroBanner;