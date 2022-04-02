import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import DetailsPokemon from "./pages/DetailsPokemon";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<DetailsPokemon />} />
      </Routes>
    </div>
  );
}
export default App;
