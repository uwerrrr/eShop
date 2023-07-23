import style from "./Carousel.module.scss";
import { getFavProducts } from "../../scripts/productsFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretRight,
  faSquareCaretLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ products }) => {
  const productsFav = getFavProducts(products);

  return (
    <div className={style.carousel}>
      {/* left arrow */}
      <FontAwesomeIcon
        className={`${style.arrow} ${style.arrow__left}`}
        icon={faSquareCaretLeft}
        size="2xl"
      />

      {/* slides */}
      {productsFav.map((painting, index) => {
        return (
          <div className={style.slide}>
            <img
              key={index}
              src={painting.imageURL}
              alt={painting.name}
              className={style.slide__img}
            ></img>
          </div>
        );
      })}

      {/* right arrow */}
      <FontAwesomeIcon
        className={`${style.arrow} ${style.arrow__right}`}
        icon={faSquareCaretRight}
        size="2xl"
      />

      {/* indicators */}
      <span className={style.indicators}>
        {productsFav.map((painting, index) => {
          return (
            <button
              key={index}
              onClick={null}
              className={style.indicators__btn}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
