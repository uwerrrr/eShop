import { useContext } from "react";

import { PaintingsContext } from "../context/PaintingsContext";

import ProductList from "../components/ProductList/ProductList";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  const { paintings } = useContext(PaintingsContext);

  return (
    <>
      <Carousel products={paintings} />
      <ProductList products={paintings} filter="all" />;
    </>
  );
};

export default HomePage;
