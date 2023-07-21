import style from "./ProductList.module.scss";
import { useContext, useEffect, useState } from "react";

import { PaintingsContext } from "../../context/PaintingsContext";

import ProductCard from "./ProductCard/ProductCard";

const ProductList = () => {
  const { paintings } = useContext(PaintingsContext);
  console.log(paintings);

  return (
    <div className={style.product_list_wrapper}>
      <div className={style.product_list}>
        {paintings.map((painting, index) => (
          <ProductCard key={index} painting={painting} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
