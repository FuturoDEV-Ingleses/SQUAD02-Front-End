import "./CadastraArmazem.css";
import React, { useState } from "react";
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
    
    const [form, setForm] = useState(armazemSelecionado || emptyState);

    const criaArmazem = () => {
        fetch("http://localhost:3333/armazem", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
    };

    const editaArmazem = () => {
      console.log(form)

        fetch(`http://localhost:3333/armazem/${armazemSelecionado.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
    };

    const handleSaveArmazem = (event) => {
      event.preventDefault();
      armazemSelecionado ? editaArmazem() : criaArmazem();
      setArmazemSelecionado(emptyState);
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
                  value={ nome || form[campo]}
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
                  value={ animal || form[campo]}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [campo]: e.target.value
                    });
                  }}
                >
                  <option value=""></option>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                </select>
              ) : campo === "ativo" ? (
                <select
                  name={campo}
                  id={campo}
                  value={ativo || form[campo]}
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