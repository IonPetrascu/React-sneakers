import styles from "./Card.module.css";
import { useState } from "react";

function Card({
  id,
  name,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  Favorited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(Favorited);

  const onClickPlus = () => {
    onPlus({ id, name, price, imageUrl });
    console.log({ name, id, price, imageUrl });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5 className="mb-15 mt-15">{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price}руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-nochecked.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
