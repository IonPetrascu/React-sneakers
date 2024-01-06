import React from "react";
import Card from "../Components/Card";


function Orders({orders = []}) {
  
  console.log(orders);
  return (
    <div className="content p-40">
      <h1>Мои заказы</h1>
      <div className="d-flex flex-wrap justify-center">
        {orders.length > 0 ? orders.map((el, index) => (
          <Card
            key={index}
            {...el}
          />
        )) : <p >Вы ещё ничего не заказали</p> }
      </div>
    </div>
  );
}

export default Orders;
