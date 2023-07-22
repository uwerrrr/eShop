export const getAllProducts = (products) => {
  return [...products];
};

export const getFavProducts = (products) => {
  return products.filter((product) => product["isFavorite"] === true);
};
