import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./Components/Header";
import Driwer from "./Components/Driwer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  console.log("this" + favorites);
  useEffect(() => {
    axios
      .get("https://658ee9962871a9866e7a066b.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://658ee9962871a9866e7a066b.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const addToServerCart = (obj) => {
    axios.post("https://658ee9962871a9866e7a066b.mockapi.io/cart", obj);
    setCartItems((oldItemsCart) => [...oldItemsCart, obj]);
  };

  const onAddToCart = (obj) => {
    let isInCart = true;
    cartItems.forEach((el) => {
      if (el.name === obj.name) {
        isInCart = false;
      }
    });
    isInCart && addToServerCart(obj); //fac o functie ca sa fac cu axios si sa adaug in cart
  };
  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://658ee9962871a9866e7a066b.mockapi.io/cart/${id}`);
    setCartItems((oldItemsCart) =>
      oldItemsCart.filter((item) => item.id !== id)
    );
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToFavorite = (obj) => {
    console.log(obj);
    let isFavorite = true;
    favorites.forEach((item) => {
      if (item.id === obj.id) {
        setFavorites((items) => items.filter((item) => item.id !== obj.id));
        isFavorite = false;
      }
    })
    isFavorite && setFavorites((prev) => [...prev, obj]);
  }
  console.log(favorites);
  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Driwer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              items={items}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          }
        ></Route>
        <Route
          path="/Favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
