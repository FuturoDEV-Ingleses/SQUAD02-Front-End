import "./RegistraProduto.css";
import { useEffect, useState } from "react";
import { Button, Input } from "../../index";

export default function RegistraProduto({
  getData,
  setOpenForm,
  produtoSelecionado,
  setProdutoSelecionado,
  armazens,
}) {
  const emptyState = {

    armazemId:"",
    armazenado: "",
    produto: "",
    quantidade: "",
    animal: "",
    categoria: "",
  };

  const [form, setForm] = useState(produtoSelecionado || emptyState);

console.log(produtoSelecionado);
  const alterarFormAnimal = (campo, evento) => { 

   const armazemEncontrado = armazens.find((dados) => dados.id == evento.target.value)
    
   setForm({
      ...form,
      [campo]: evento.target.value,
      animal: armazemEncontrado.animal,
      armazenado: armazemEncontrado.armazenado
    })
  }

  const criaProduto = () => {
    fetch("http://localhost:8080/estoque/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  };

  const editaProduto = () => {
    fetch(`http://localhost:8080/estoque/editar/${produtoSelecionado.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then(() => {
      setProdutoSelecionado(undefined);
      getData();
    })
  };

  const handleSave = (event) => {
    event.preventDefault();
    produtoSelecionado ? editaProduto() : criaProduto();
    setOpenForm(false);
    window.location.reload();
  };
console.log(form);
  return (
    <section className="registra-produto">
      <h2>Cadastro de produtos</h2>
      <form onSubmit={handleSave}>
        {["armazem", "produto", "quantidade", "animal", "categoria"].map(
          (campo) => (
            <div key={campo}>
              <label htmlFor={campo}>
                {campo.charAt(0).toUpperCase() + campo.slice(1)}
              </label>
              {campo === "armazem" ? (
                <select
                  name={campo}
                  id={campo}
                  value={+form.armazemId}
                  onChange={(e) => {
                    alterarFormAnimal("armazemId", e)
                  }}
                >
                  <option value="Selecione uma opção" disabled={form.armazemId}> 
                    Selecione uma opção
                  </option>
                  {armazens.map((armazem) => (
                    <option key={armazem.id} value={armazem.id}>
                      {armazem.nome}
                    </option>
                  ))}
                </select>
              ) : campo === "produto" ? (
                <select
                  name={campo}
                  id={campo}
                  value={form[campo]}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value,
                    });
                  }}
                >
                  <option value="Selecione uma opção" disabled={form.produto}> 
                    Selecione uma opção
                  </option>
                  <option value="RACAO">Ração</option>
                  <option value="ANTIPARASITARIO">Antiparasitário</option>
                  <option value="ANTIPULGAS">Antipulgas</option>
                </select>
              ) : campo === "animal" ? (
                <select
                  name={campo}
                  id={campo}
                  value={form[campo]}
                  disabled
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value,
                    });
                  }}
                >
                  <option value="Selecione uma opção" disabled={form.animal}> 
                    Selecione uma opção
                  </option>
                  <option value="CACHORRO">Cachorro</option>
                  <option value="GATO">Gato</option>
                </select>
              ) : campo === "categoria" ? (
                <select
                  name={campo}
                  id={campo}
                  value={form[campo]}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value,
                    });
                  }}
                >
                  <option value="Selecione uma opção" disabled={form.categoria}> 
                    Selecione uma opção
                  </option>
                  <option value="ADULTO">Adulto</option>
                  <option value="FILHOTE">Filhote</option>
                </select>
              ) : (
                <Input
                  required
                  type="text"
                  name={campo}
                  id={campo}
                  value={form[campo]}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value,
                    });
                  }}
                />
              )}
            </div>
          )
        )}

        <Button classStyle="secondary" type="submit">
          Salvar
        </Button>
      </form>
    </section>
  );
}
