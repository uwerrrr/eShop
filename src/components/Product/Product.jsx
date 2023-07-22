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

  const nameCap = name ? name.toUpperCase() : "a";
  console.log(nameCap);

  const [love, setLove] = useState(null);

  const toggleLove = () => {
    love == false ? setLove(true) : setLove(false);
  };

  useEffect(() => {
    setLove(isFavorite);
  }, []);

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
            <h3 className={style.content__name}> {nameCap}</h3>
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
