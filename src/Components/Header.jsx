import React from "react";
import {Link} from "react-router-dom";

function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to='/' className="d-flex align-center">
          <img width="40" height="40" src="/img/logo.png" />
        <div className="ml-15">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="d-flex mr-30 align-center cu-p">
          <img className="mr-10" width="18" height="18" src="/img/Cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li className="d-flex mr-30 align-center cu-p">
         <Link to='/favorites'>
             <img className="mr-10" width="18" height="18" src="/img/heart.svg" />
             <span>Закладки</span>
         </Link>
        </li>
        <li>
          <img width="18" height="18" src="/img/User.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
