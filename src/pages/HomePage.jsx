import { useContext } from "react";

import { PaintingsContext } from "../context/PaintingsContext";

import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  const { paintings } = useContext(PaintingsContext);

  // useEffect(() => {
  //   // live monitor to collection database
  //   // and set paintings state
  //   const unsubFunc = getPaintingsSubscription(getPaintings);
  //   return () => unsubFunc();
  // }, []);

  return <ProductList products={paintings} filter="all" />;
};

export default HomePage;
