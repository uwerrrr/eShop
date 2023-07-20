import style from "./ProductCard.module.scss";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ painting }) => {
  const { id, name, year, painter, imageURL, price } = painting;
  return (
    <div className={style.card}>
      <Link className={style.card_link} to={`products/${id}`}>
        {/* /products/:id */}
        <div className={style.card__head}>
          <p>ProductCard</p>
          <img src={imageURL} alt={name} className={style.card__img} />
        </div>
        <div className={style.card__body}>
          <h4 className={style.card__name}>{name}</h4>
          {/* <h5 className={style.card__painter}>{painter}</h5> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
