import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Container from "./components/templates/Container/Container";
import Armazem from "./pages/Armazem/Armazem";
import Dashboard from "./pages/Dashboard/Dashboard";
import Estoque from "./pages/Estoque/Estoque";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/container" element={<Container />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/armazem" element={<Armazem />} />
        <Route path="*" element={<h1>Rota não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
