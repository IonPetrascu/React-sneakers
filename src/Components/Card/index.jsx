import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import styles from "./Card.module.css";
import { useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import React from "react";

function Card({
  id,
  name,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  Favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(Favorited);

  const onClickPlus = () => {
    onPlus({parentId:id, id, name, price, imageUrl });
  };
  const onClickFavorite = () => {
    onFavorite({parentId:id, id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="115" rx="0" ry="0" width="150" height="15" />
          <rect x="0" y="136" rx="0" ry="0" width="93" height="15" />
          <rect x="0" y="170" rx="8" ry="8" width="80" height="24" />
          <rect x="113" y="162" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {" "}
          <div className={styles.favorite}>
            {onFavorite && (
              <img
                onClick={onClickFavorite}
                src={
                  isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"
                }
                alt="unliked"
              />
            )}
          </div>
          <img
            className={styles.cardImg}
            width={133}
            height={112}
            src={imageUrl}
            alt="Sneakers"
          />
          <h5 className="mb-15 mt-15">{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{price}руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id)
                    ? "img/btn-checked.svg"
                    : "img/btn-nochecked.svg"
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
