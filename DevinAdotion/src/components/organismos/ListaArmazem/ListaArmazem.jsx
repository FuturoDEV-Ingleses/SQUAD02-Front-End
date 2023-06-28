import { useState, useEffect } from "react";
import { Button, CadastraArmazem } from "../../index";
import "./ListaArmazem.css";

export default function ListaArmazem() {
  const [armazem, setArmazem] = useState([]);
  const [verificarSelecionado, setVerificarSelecionado] = useState(false);
  const [armazemSelecionado, setArmazemSelecionado] = useState({
    armazemId: "", 
    armazemNome: "",  
    armazemAnimal: "",
    armazemAtivo: ""
  });

  const getData = () => {
    fetch("http://localhost:8080/armazem/ar")
      .then((response) => response.json())
      .then((data) => setArmazem(data));
  };

  useEffect(() => {
    getData("armazem", setArmazem);
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:8080/armazem/desativar/${id}`, {
      method: "PUT",
    }).then(() => {
      getData();
    });
  };

  const handleEdit = (
    armazemId, 
    armazemNome,  
    armazemAnimal,
    armazemAtivo
    ) => {
    setVerificarSelecionado(true)
    setArmazemSelecionado({
      armazemId, 
      armazemNome,  
      armazemAnimal,
      armazemAtivo
    });
  };

  const renderizarStatus = (status) => {
    return status ? "Ativo" : "Inativo";
  };

  return (
    <>
      <CadastraArmazem 
        nome={armazemSelecionado.armazemNome}
        animal={armazemSelecionado.armazemAnimal}
        ativo={armazemSelecionado.armazemAtivo}
        id={armazemSelecionado.armazemId}
        setArmazemSelecionado={setVerificarSelecionado}
        armazemSelecionado={verificarSelecionado} 
      />

      <section className="lista-armazem">
        <h2>Locais de Armazenamento Cadastrados</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Animal</th>
              <th>Situação</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {armazem.map((armazem) => (
              <tr key={armazem.id}>
                <td>{armazem.id}</td>
                <td>{armazem.nome}</td>
                <td>{armazem.animal}</td>
                <td>{renderizarStatus(armazem.ativo)}</td>
                <td>
                  <Button
                    onClick={() => handleEdit(
                      armazem.id, 
                      armazem.nome, 
                      armazem.animal,
                      armazem.ativo
                    )}
                    classStyle="green"
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => handleDelete(armazem.id)}
                    classStyle="danger"
                  >
                    Remover
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
