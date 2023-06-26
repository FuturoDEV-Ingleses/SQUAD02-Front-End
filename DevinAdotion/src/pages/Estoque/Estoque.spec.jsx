import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Estoque from "./Estoque";
import userEvent from "@testing-library/user-event";

function renderComponent() {
    render (<Estoque />, { wrapper:BrowserRouter })
}

describe ("Estoque", () => {
    test("se o componente é renderizado corretamente com título Estoque", async () => {
        renderComponent()
        const title = await screen.findByRole("heading", { name: "Estoque" })
        expect(title).toBeInTheDocument()
    })

    test("ao entrar na página deve renderiza a lista de produtos", async () => {
        renderComponent()
        const title = screen.getByRole("heading", { name: "Lista de Produtos" })
        expect(title).toBeInTheDocument()
    })
    
    test("ao clicar no botão “Novo Produto” deve renderizar o cadastro de produtos", async () => {
        renderComponent()
        const user = userEvent.setup()
        const button = screen.getByRole("button", { name: "Novo Produto" })
        await user.click(button)

        const title = screen.getByRole("heading", { name: "Cadastro de produtos" })
        expect(title).toBeInTheDocument()
    })
})