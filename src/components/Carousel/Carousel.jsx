import style from "./Carousel.module.scss";
import { getFavProducts } from "../../scripts/productsFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretRight,
  faSquareCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carousel = ({ products }) => {
  const productsFav = getFavProducts(products);

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === productsFav.length - 1 ? 0 : slide + 1);
    // last slide -> go to first slide
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? productsFav.length - 1 : slide - 1);
    // first slide -> go to last slide
  };

  const selectSlide = (slideIndex) => {
    setSlide(slideIndex);
  };

  return (
    <div className={style.carousel}>
      {/* left arrow */}
      <FontAwesomeIcon
        className={`${style.arrow} ${style.arrow__left}`}
        icon={faSquareCaretLeft}
        size="2xl"
        onClick={prevSlide}
      />

      {/* slides */}
      {productsFav.map((painting, index) => {
        return (
          //   className={slide === idx ? "slide" : "slide slide-hidden"}
          <div
            key={index}
            className={
              slide === index
                ? style.slide
                : `${style.slide} ${style.slide__hidden}`
            }
          >
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
        onClick={nextSlide}
      />

      {/* indicators */}
      <span className={style.indicators}>
        {productsFav.map((painting, index) => {
          return (
            <button
              key={index}
              onClick={() => selectSlide(index)}
              className={
                slide === index
                  ? style.indicators__btn
                  : `${style.indicators__btn} ${style["indicators__btn--inactive"]} `
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
