import { createContext, useState, useEffect } from "react";
import { getPaintingsSubscription } from "../services/paintings-service";
export const PaintingsContext = createContext();

const PaintingsContextProvider = ({ children }) => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    // live monitor to collection database
    // and set paintings state
    const unsubFunc = getPaintingsSubscription(getPaintings);
    
    return () => unsubFunc();
  }, []);

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
