import { useState } from "react";
import { Container, ListaArmazem, CadastraArmazem } from "../../components";

export default function Armazem(){    
  return(
   <Container title="Cadastro de Armazenamento">
      <ListaArmazem />
   </Container>
);
}