import style from "./ProductCard.module.scss";
import { useContext, useEffect, useState } from "react";

const ProductCard = ({ painting }) => {
  return (
    <div>
      <p>ProductCard</p>
      <p>{painting.name}</p>
    </div>
  );
};

export default ProductCard;
