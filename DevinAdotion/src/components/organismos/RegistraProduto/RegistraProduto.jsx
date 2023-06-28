import "./RegistraProduto.css";
import { useEffect, useState } from "react";
import { Button, Input } from "../../index";

export default function RegistraProduto({
  setOpenForm,
  produtoSelecionado,
  setProdutoSelecionado,
  armazens,
}) {
  const emptyState = {
    armazem: "",
    produto: "",
    quantidade: "",
    animal: "",
    categoria: "",
  };

  // const [form, setForm] = useState(produtoSelecionado ? produtoSelecionado : emptyState);

  const [form, setForm] = useState(produtoSelecionado || emptyState);
  // const [dadosEmEstoque, setDadosEmEstoque] = useState({})

  // useEffect(() => {
  //   const carregar = async() => {
  //     fetch(`http://localhost:3333/armazem`, {
  //       method: "GET"
  //     }).then((response) => response.json())
  //     .then((data) => setDadosEmEstoque(data));
  //   }
  //   carregar()
  // },[])

  // const handleChange = (campo, valor) => {
  //   setForm({
  //     ...form,
  //     [campo]: valor
  //   });
  // };

  const alterarFormAnimal = (campo, evento) => {
    setForm({
      ...form,
      [campo]: evento.target.value,
      animal: armazens.find((dados) => dados.nome === evento.target.value).animal
    })
  }

  const criaProduto = () => {
    fetch("http://localhost:3333/estoque", {
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
    // criaProduto();

    produtoSelecionado ? editaProduto() : criaProduto();

    setProdutoSelecionado(emptyState);
    setOpenForm(false);
  };

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
                  value={form.armazem}
                  onChange={(e) => {
                    alterarFormAnimal(campo, e)
                  }}
                >
                  <option value="Selecione uma opção" disabled={form.armazem}> 
                    Selecione uma opção
                  </option>
                  {armazens.map((armazem) => (
                    <option key={armazem.id} value={armazem.nome}>
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
                  <option value="Ração">Ração</option>
                  <option value="Antiparasitário">Antiparasitário</option>
                  <option value="Antipulgas">Antipulgas</option>
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
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
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
                  <option value="Adulto">Adulto</option>
                  <option value="Filhote">Filhote</option>
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
