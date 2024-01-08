import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./Components/Header";
import Driwer from "./Components/Driwer";
import AppContext from "./context";
import Orders from "./pages/Order";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://658ee9962871a9866e7a066b.mockapi.io/items"
      );
      const cartItemsResponse = await axios.get(
        "https://658ee9962871a9866e7a066b.mockapi.io/cart"
      );
      setIsLoading(false);
      setItems(itemsResponse.data);
      setCartItems(cartItemsResponse.data);
    }
    fetchData();
  }, []);
  const addToServerCart = async (obj) => {
    setCartItems((prev) => [...prev,obj] );
   const {data} = await axios.post("https://658ee9962871a9866e7a066b.mockapi.io/cart", obj);
    setCartItems((prev) => prev.map(item => {
      if(item.parentId === data.parentId){
        return {
          ...item,
          id:data.id
        }
      }
      return item
    }) );
  };
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
       await axios.delete(
          `https://658ee9962871a9866e7a066b.mockapi.io/cart/${findItem.id}`
        );
      } else {
        addToServerCart(obj);
      }
    } catch (error) {
      alert("Не получилось добавить в корзину :(");
    }
  };
  const onRemoveItem = (id) => {
    console.log(orders, cartItems);
    axios.delete(`https://658ee9962871a9866e7a066b.mockapi.io/cart/${id}`);
    setCartItems((oldItemsCart) =>
      oldItemsCart.filter((item) => Number(item.id) !== Number(id))
    );
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToFavorite = (obj) => {
    let isFavorite = true;
    favorites.forEach((item) => {
      if (item.id === obj.id) {
        setFavorites((items) => items.filter((item) => item.id !== obj.id));
        isFavorite = false;
      }
    });
    isFavorite && setFavorites((prev) => [...prev, obj]);
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        setCartOpen,
        setCartItems,
      }}
    >
      {" "}
      <div className="wrapper clear">
        {cartOpen && (
          <Driwer
            items={cartItems}
            setOrders={setOrders}
            onRemoveItem={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpen(true)} />
        <Routes>
          <Route
            path="react-sneakers"
            element={
              <Home
                cartItems={cartItems}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                items={items}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route
            path="react-sneakers/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          ></Route>
          <Route path="react-sneakers/orders" element={<Orders orders={orders} />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
