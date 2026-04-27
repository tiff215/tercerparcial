import "./ProductCard.css";
import Button from "../Button/Button";

function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>${price}</p>

      <Button text="Buy Now" />

    </div>
  );
}

export default ProductCard;