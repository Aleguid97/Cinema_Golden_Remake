import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Prossimamente from "./pages/Prossimamente";
import Cineclub from "./pages/Cineclub";
import Sale from "./pages/Sale";
import Storia from "./pages/Storia";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prossimamente" element={<Prossimamente />} />
        <Route path="/cineclub" element={<Cineclub />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/storia" element={<Storia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
