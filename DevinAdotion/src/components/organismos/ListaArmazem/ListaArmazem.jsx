import { useState, useEffect } from "react";
import { Button, CadastraArmazem } from "../../index";
import "./ListaArmazem.css";

export default function ListaArmazem() {
  const [armazem, setArmazem] = useState([]);
  const [armazemSelecionado, setArmazemSelecionado] = useState({
    armazemId: "", 
    armazemNome: "",  
    armazemAnimal: "",
    armazemAtivo: ""
  });

  const getData = () => {
    fetch("http://localhost:3333/armazem")
      .then((response) => response.json())
      .then((data) => setArmazem(data));
  };

  useEffect(() => {
    getData("armazem", setArmazem);
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:3333/armazem/${id}`, {
      method: "DELETE",
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
    console.log(armazem)
    setArmazemSelecionado({
      armazemId, 
      armazemNome,  
      armazemAnimal,
      armazemAtivo
    });
  };
  // const handleEdit = (armazem) => {
  //   setArmazemSelecionado((armazem));
  //   fetch(`http://localhost:3333/armazem/${armazem.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then(() => {
  //       getData();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
        setArmazemSelecionado={setArmazemSelecionado} 
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
