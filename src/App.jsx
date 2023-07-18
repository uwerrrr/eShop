import { useEffect, useState } from "react";
import "./App.css";

import { getAllPaintings } from "./services/paintings-service";

function App() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    // get data from firestore
    getAllPaintings().then((paintingData) => setPaintings(paintingData));
  }, []);

  console.log("paintings: ", paintings);

  return (
    <>
      <p>abc </p>
    </>
  );
}

export default App;
