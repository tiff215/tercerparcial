import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../pages/inicio";
import Contacto from "../pages/contacto";
import Resenas from "../pages/resenas";
import Menu from "../pages/menu";
import Acerca from "../pages/acerca";

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Página principal */}
        <Route path="/" element={<Inicio />} />

        {/* Rutas */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/resenas" element={<Resenas />} />

      </Routes>

    </BrowserRouter>
  );
}
export default AppRouter;