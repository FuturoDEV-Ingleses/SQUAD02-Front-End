import "./CadastraArmazem.css";
import React, { useEffect, useState } from "react";
import { Button, Input } from "../../index";

export default function CadastraArmazem({
  nome,
  animal,
  ativo,
  id,
  armazemSelecionado, setArmazemSelecionado
}){
    const emptyState = {
        nome:"",
        animal:""
    };
    
    const [form, setForm] = useState(emptyState);
    
    useEffect(() => {
      const carregar = () => {
        setForm( {
          ...form,
          nome,
          animal,
          ativo
      })
      }
      carregar();
    },[nome, animal, ativo])
    
    const criaArmazem = () => {
      console.log(JSON.stringify);

        fetch("http://localhost:8080/armazem/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
    };

    const editaArmazem = () => {
      console.log(form)

        fetch(`http://localhost:8080/armazem/editar/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
          setArmazemSelecionado(false)
    };

    const handleSaveArmazem = (event) => {
      event.preventDefault();
      armazemSelecionado ? editaArmazem() : criaArmazem();
      // setArmazemSelecionado(emptyState);
      window.location.reload(); // Recarrega a página
    };

      return(
      <section className="cadastra-armazem">

        <form onSubmit={handleSaveArmazem}>
            {["nome", "animal", "ativo"].map((campo) => (
            <div key={campo}>
              <label htmlFor={campo}>
                {campo.charAt(0).toUpperCase() + campo.slice(1)}
              </label>
              {campo === "nome" ? (
                <Input
                  required
                  type="text"
                  name={campo}
                  id={campo}
                  value={form[campo]}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value
                    });
                  }}
                />
                
              ) : campo === "animal" ? (
                <select
                  name={campo}
                  id={campo}
                  value={form[campo]}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value
                    });
                  }}
                >
                  <option value=""></option>
                  <option value="CACHORRO">Cachorro</option>
                  <option value="GATO">Gato</option>
                </select>
              ) : campo === "ativo" ? (
                <select
                  name={campo}
                  id={campo}
                  value={form[campo]}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value
                    });
                  }}
                >
                <option ></option>
                <option value={true}>Ativo</option>
                <option value={false}>Inativo</option>
              </select>
            ) : undefined}
            </div>
            ))}

        <Button classStyle="secondary" type="submit">
            {id === '' ? 'Cadastrar' : 'Editar'}
        </Button> 
        </form>
      </section>
      );
}