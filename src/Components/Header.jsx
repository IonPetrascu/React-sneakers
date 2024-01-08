import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart"; //co

function Header({ onClickCart }) {
  const { totalPrice } = useCart(); //castom hooks

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="react-snikers" className="d-flex align-center">
        <img width="40" height="40" src="img/logo.png" />
        <div className="ml-15">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="d-flex mr-30 align-center cu-p">
          <img className="mr-10" width="18" height="18" src="img/Cart.svg" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="d-flex mr-30 align-center cu-p">
          <Link to="favorites">
            <img
              className="mr-10"
              width="18"
              height="18"
              src="img/heart.svg"
            />
            <span>Закладки</span>
          </Link>
        </li>
        <li>
          <Link to="orders">
            <img width="18" height="18" src="img/User.svg" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
