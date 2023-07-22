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
      <FontAwesomeIcon icon={faSquareCaretLeft} size="2xl" />

      <FontAwesomeIcon icon={faSquareCaretRight} size="2xl" />
    </div>
  );
};

export default Carousel;
