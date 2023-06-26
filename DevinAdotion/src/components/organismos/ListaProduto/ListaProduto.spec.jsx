import { render, screen } from "@testing-library/react";
import ListaProduto from "./ListaProduto";
import { BrowserRouter } from "react-router-dom";

function renderComponent() {
    render(<ListaProduto />, { wrapper:BrowserRouter })
}

describe("ListaProduto", () => {
    test("se o componente é renderizado corretamente com título Lista de Produtos", async () => {
        renderComponent() 
        const titulo = await screen.findByRole("heading", {
            name: "Lista de Produtos",
        })

    expect(titulo).toBeInTheDocument()
    })
})

test("se a tabela é renderizada com o cabeçalho correto", async () => {
    renderComponent()
    const cabecalho = await screen.findByRole("row", {
        name:"ID Armazenamento Produto Quantidade Categoria"
    })

    expect(cabecalho).toBeInTheDocument()
})

test("se a primeira linha da tabela é renderizada corretamente (com os dados da mock API)", async () => {
    renderComponent()
    const name = await screen.findByText("123")
   
    expect(name).toBeInTheDocument()
})