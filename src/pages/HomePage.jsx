import { useEffect, useContext } from "react";

import { PaintingsContext } from "../context/PaintingsContext";
import { getPaintingsSubscription } from "../services/paintings-service";

import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  const { getPaintings } = useContext(PaintingsContext);
  
  useEffect(() => {
    // live monitor to collection database
    // and set paintings state
    const unsubFunc = getPaintingsSubscription(getPaintings);
    return () => unsubFunc();
  }, []);

  return <ProductList />;
};

export default HomePage;
