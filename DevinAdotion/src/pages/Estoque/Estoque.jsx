import { useState, useEffect } from "react";
import { Container, ListaProduto, RegistraProduto } from "../../components";

export default function Estoque(){
  const [openForm, setOpenForm] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(undefined);
  
  const [armazens, setArmazens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/armazem/ar")
      .then((response) => response.json())
      .then((data) => setArmazens(data))
      .catch((error) => console.log(error));
  }, []);
  
  return(
   <Container title="Estoque">
     {openForm === false && (
      <ListaProduto
      setOpenForm={setOpenForm}
      setProdutoSelecionado={setProdutoSelecionado}
      />
     )}

     {openForm === true && (
      <RegistraProduto
      setOpenForm={setOpenForm}
      produtoSelecionado={produtoSelecionado}
      setProdutoSelecionado={setProdutoSelecionado}
      armazens={armazens}
      />
     )}
   </Container>
);
}