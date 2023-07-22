import { useContext } from "react";

import { PaintingsContext } from "../context/PaintingsContext";

import ProductList from "../components/ProductList/ProductList";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  const { paintings } = useContext(PaintingsContext);

  // useEffect(() => {
  //   // live monitor to collection database
  //   // and set paintings state
  //   const unsubFunc = getPaintingsSubscription(getPaintings);
  //   return () => unsubFunc();
  // }, []);

  return (
    <>
      <Carousel />
      <ProductList products={paintings} filter="all" />;
    </>
  );
};

export default HomePage;
