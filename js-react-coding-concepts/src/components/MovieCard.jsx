import { useState } from "react";

function MovieCard({ title, year, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div>
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <p>Rating:⭐ {rating}</p>

      <button
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
      >
        {" "}
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}{" "}
      </button>
    </div>
  );
}
export default MovieCard;
