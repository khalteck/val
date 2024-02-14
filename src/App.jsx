import { useState } from "react";
import "./index.css";
import Home from "./components/Home";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      {page === "home" && <Home setPage={setPage} />}
      {page === "second" && <Second setPage={setPage} />}
      {page === "third" && <Third setPage={setPage} />}
      {page === "fourth" && <Fourth setPage={setPage} />}
      {page === "fifth" && <Fifth setPage={setPage} />}
      {page === "sixth" && <Sixth setPage={setPage} />}
    </>
  );
}

export default App;
