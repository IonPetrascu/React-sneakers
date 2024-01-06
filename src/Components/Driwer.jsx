import React from "react";
import EmptyCart from "./EmptyCart";
import AppContext from "../context";
import axios from "axios";
import { useCart } from "../hooks/useCart"; //conect castom hooks
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Driwer({ items = [], onRemoveItem, setOrders }) {
  const { cartItems, setCartItems, totalPrice } = useCart(); //castom hooks

  const [orderId, setOrderId] = React.useState(0);
  const { setCartOpen } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const onClickOrder = async () => {
    setOrders((prev) => [...prev, cartItems].flat());
    setIsOrderComplete(true);
    setCartItems([]);
    setOrderId((prev) => prev + 1);
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete(
        `https://658ee9962871a9866e7a066b.mockapi.io/cart/${item.id}`
      );
      await delay();
    }
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" mb-30 justify-between d-flex">
          Корзина{" "}
          <img
            onClick={() => setCartOpen(false)}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="cardItemImg "
                  ></div>
                  <div className="mr-20 ">
                    <p className="mb-5">{item.name}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemoveItem(item.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>{totalPrice} руб</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>{((totalPrice / 100) * 5).toFixed(2)} руб</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ
                <img src="./img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <EmptyCart
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина Пустая "}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete ? "/img/completeOrder.png" : "/img/emptyCart.png"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Driwer;
