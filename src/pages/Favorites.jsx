import React from "react";
import Card from "../Components/Card";
import AppContext from "../context";

function Favorites({ onAddToFavorite }) {
  const {favorites} = React.useContext(AppContext);
  

  return (
    <div className="content p-40">
      <h1>Мои фавориты</h1>
      <div className="d-flex flex-wrap">
        {favorites.map((el, index) => (
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
