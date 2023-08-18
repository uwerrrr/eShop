import ProductList from "../components/ProductList/ProductList";
import { useContext } from "react";

import { PaintingsContext } from "../context/PaintingsContext";

const FavouritesPage = () => {
  const { paintings } = useContext(PaintingsContext);

  return (
    <>
      <ProductList products={paintings} filter="favourites" />
    </>
  );
};

export default FavouritesPage;
