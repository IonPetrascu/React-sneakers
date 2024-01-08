import React from "react";
import Card from "../Components/Card";



function Home({
  onAddToFavorite,
  onAddToCart,
  items,
  onChangeSearchInput,
  setSearchValue,
  searchValue,
  isLoading,
}) {
  
  const renderItems = () => {
    return(
     ( isLoading
      ? [...Array(12)]
      : items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          ))
          .map((el, index) => (
            <Card
              key={index}
              {...el}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              loading={isLoading}
            />
          )))
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        {searchValue ? (
          <h1>Поиск по запросу: {searchValue}</h1>
        ) : (
          <h1>Все кроссовки</h1>
        )}

        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="search-clear"
              src="img/btn-remove.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-center " style={{ gap: "20px" }}>
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
