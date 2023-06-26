import { render, screen } from "@testing-library/react";
import ListaArmazem from "./ListaArmazem";
import { BrowserRouter } from "react-router-dom";

function renderComponent() {
    render(<ListaArmazem />, { wrapper:BrowserRouter })
}

describe("ListaArmazem", () => {
    test("se o componente é renderizado corretamente com título Locais de Armazenamento Cadastrados", async () => {
        renderComponent() 
        const titulo = await screen.findByRole("heading", {
            name: "Locais de Armazenamento Cadastrados",
        })

    expect(titulo).toBeInTheDocument()
    })
})

test("se a tabela é renderizada com o cabeçalho correto", async () => {
    renderComponent()
    const cabecalho = await screen.findByRole("row", {
        name:"ID Nome Animal Situação"
    })

    expect(cabecalho).toBeInTheDocument()
})