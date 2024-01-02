import React from "react";
import Card from "../Components/Card";

function Favorites({ onAddToFavorite, items }) {
  console.log(items);
  return (
    <div className="content p-40">
      <h1>Favorites</h1>
      <div className="d-flex flex-wrap">
        {items.map((el, index) => (
          <Card
            key={index}
            {...el}
            Favorited={true}
            onFavorite={(obj) => onAddToFavorite(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
