import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getPaintingById } from "../services/paintings-service";
import { PaintingsContext } from "../context/PaintingsContext";
import Product from "../components/Product/Product";

const ProductPage = () => {
  const { id } = useParams();
  const [painting, setPainting] = useState({});

  const [errMess, setErrMess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setErrMess("");
    setLoading(true);

    getPaintingById(id)
      .then((painting) => setPainting(painting))
      .catch((err) => setErrMess(err.message))
      .finally(() => setLoading(false));
  }, []);

  return <>{loading === false && <Product product={painting} />}</>;
};

export default ProductPage;
