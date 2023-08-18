import "./App.scss";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaintingsContextProvider from "./context/PaintingsContext";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";
function App() {
  return (
    <>
      <PaintingsContextProvider>
        {/* { paintings, getPaintings } */}
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </BrowserRouter>
      </PaintingsContextProvider>
    </>
  );
}

export default App;
