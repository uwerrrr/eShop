import style from "./ProductCard.module.scss";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ painting }) => {
  const { id, name, year, painter, imageURL, price } = painting;

  return (
    <Link className={style.link_wrapper} to={`products/${id}`}>
      <div className={style.card}>
        <div className={style.background}>
          <div
            className={style.background__img}
            style={{ backgroundImage: `url(${imageURL})` }}
          />
        </div>

        <div className={style.content_wrapper}>
          <div className={style.content}>
            <h3 className={style.content__name}>{name}</h3>
            <p className={style.content__painter}>{`${painter}`}</p>
            <p className={style.content__price}>{`$ ${price}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
