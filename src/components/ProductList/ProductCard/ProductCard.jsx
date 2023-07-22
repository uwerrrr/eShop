import style from "./ProductCard.module.scss";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  const painting = { ...product };
  const { id, name, year, painter, imageURL, price } = painting;

  return (
    <Link className={style.link_wrapper} to={`/products/${id}`}>
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

            <div className={style.content__bottom}>
              <p className={style.content__price}>{`$ ${price}`}</p>
              {/* <button className={style.btn}>
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className={style.btn__icon}
                />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
