import "./ReviewCard.css";

function ReviewCard({ name, comment }) {
  return (
    <div className="review-card">

      <h3>{name}</h3>

      <p>"{comment}"</p>

    </div>
  );
}

export default ReviewCard;