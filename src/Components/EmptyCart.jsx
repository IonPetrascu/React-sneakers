import React from "react";
import AppContext from "../context";

function EmptyCart({ image, title, description }) {
  const { setCartOpen } = React.useContext(AppContext);
  return (
    <div className="empty-cart">
      <img src={image} alt="cart" />
      <h3>{title}</h3>
      <p style={{textAlign:'center'}}>{description}</p>
      <button onClick={() => setCartOpen(false)} className="greenButton">
        Вернуться обратно
      </button>
    </div>
  );
}

export default EmptyCart;
