import { Routes, Route } from "react-router-dom";
import App from "../App";
import Contato from "../pages/Contato";
import CadastroCliente from "../pages/CadastroCliente";
import PageNotFound from "../pages/PageNotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
