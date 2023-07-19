import { createContext, useState } from "react";

export const PaintingsContext = createContext();

const PaintingsContextProvider = ({ children }) => {
  const [paintings, setPaintings] = useState([]);

  const getPaintings = (data) => {
    setPaintings(data);
  };

  return (
    <PaintingsContext.Provider value={{ paintings, getPaintings }}>
      {children}
    </PaintingsContext.Provider>
  );
};

export default PaintingsContextProvider;
