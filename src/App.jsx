import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import FilterSpecies from "./pages/FilterSpecies/FilterSpecies";
import NotFound from "./pages/NotFound/NotFound";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";

function App() {
  return (
    <div>
      <Header />

      {/* Contenido principal - altura mínima para footer fijo */}
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filtros" element={<FilterSpecies />} />
          <Route path="/personaje/:id" element={<CharacterDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
