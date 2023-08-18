import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import style from "./Product.module.scss";
import { updatePaintingById } from "../../services/paintings-service";

const Product = ({ product }) => {
  const painting = { ...product };
  const {
    id,
    name,
    year,
    painter,
    description,
    imageURL,
    price,
    quantity,
    isFavorite,
  } = painting;

  // name is undefined when first rendered
  const nameCap = name ? name.toUpperCase() : "";

  const [love, setLove] = useState(isFavorite);

  useEffect(() => {
    setLove(isFavorite);
  }, []);

  const toggleLove = () => {
    let currentLove = love; // setter function executed async so we need to set a curr variable for easier control
    setLove(!currentLove);
    updatePaintingById(id, "isFavorite", !currentLove);
  };

  return (
    <section className={style.product_wrapper}>
      <div className={style.header}>
        <Link className={style.header__back} to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </Link>
      </div>

      <div className={style.body}>
        <picture className={style.img_sec}>
          <img src={imageURL} alt={name} className={style.img_sec__img} />
        </picture>

        <div className={style.content}>
          <div className={style.content__text}>
            <h3 className={style.content__name}>
              {" "}
              {nameCap} <span className={style.content__year}>({year})</span>
            </h3>
            <p className={style.content__painter}>{painter}</p>
            {love === true ? (
              <button
                className={`${style.love_btn} ${style.love_btn__loved}`}
                onClick={() => toggleLove()}
              >
                BE LOVED
              </button>
            ) : (
              <button
                className={`${style.love_btn} ${style.love_btn__love}`}
                onClick={() => toggleLove()}
              >
                to love
              </button>
            )}
            <p>{description}</p>
          </div>
          <div className={style.content__bottom}>
            <p className={style.content__price}>{`$ ${price}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
