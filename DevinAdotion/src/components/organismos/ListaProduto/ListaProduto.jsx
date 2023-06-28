import { useState, useEffect } from "react";
import { Button } from "../../index";
import "./ListaProduto.css"

export default function ListaProduto({setOpenForm, setProdutoSelecionado}){
    const [produtos, setProdutos] = useState([]);
    

    const getData = () => {
      fetch("http://localhost:8080/estoque/listar")
        .then((response) => response.json())
        .then((data) => setProdutos(data));
    }

    useEffect(() => {
        getData("produtos", setProdutos);
      }, []);

      const handleDelete = (id) =>{
        // console.log(id);
        fetch(`http://localhost:8080/estoque/remover/${id}`, {
            method: "DELETE",
      }).then(() => {
        getData("produtos", setProdutos);
          });
          
      };

      const handleEdit = (produto) =>{
        setProdutoSelecionado(produto);
        setOpenForm(true)
      };

      return(
        <section className="lista-produto">
            <h2> Lista de Produtos</h2>
         
            <table>
                <thead>
                    <tr>
                      <th>ID</th>  
                      <th>Armazenamento</th>  
                      <th>Produto</th>  
                      <th>Quantidade</th>  
                      <th>Categoria</th>  
                      <th></th>
                      <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.armazenado}</td>
                        <td>{produto.produto}</td>
                        <td>{produto.produto === "Ração" ? produto.quantidade +" "+"Kg": produto.quantidade}</td>
                        <td>{produto.categoria}</td>
                        <td>
                        <Button onClick={() => handleEdit(produto)}classStyle='green'>Editar</Button> 
                        </td>
                        <td>
                        <Button onClick={() => handleDelete(produto.id)} classStyle='danger'>Remover</Button> 
                        </td>
                    </tr>    
                    ))}
                </tbody>
                </table>
                <Button id="new-unit"classStyle='secondary' onClick={() => setOpenForm(true)}>Novo Produto</Button>
           
        </section>
      )

}