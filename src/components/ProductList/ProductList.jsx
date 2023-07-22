import style from "./ProductList.module.scss";
import { getAllProducts, getFavProducts } from "../../scripts/productsFilter";

import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ products, filter }) => {
  const productsAll = getAllProducts(products);
  const productsFav = getFavProducts(products);

  return (
    <div className={style.product_list_wrapper}>
      <h2 className={style.list_title}>
        {filter === "all" && "All paintings"}
        {filter === "favourites" && "Most favourite paintings"}
      </h2>
      <div className={style.product_list}>
        {/* all */}
        {filter === "all" &&
          productsAll.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}

        {/* favourites */}
        {filter === "favourites" && productsFav.length > 0 ? (
          productsFav.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <>
            <p>There are no favourites</p>
            <p>Please add some favourites</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
