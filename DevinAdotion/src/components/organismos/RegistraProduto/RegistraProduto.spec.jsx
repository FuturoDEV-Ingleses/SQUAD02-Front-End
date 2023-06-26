import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistraProduto from "./RegistraProduto";

function renderComponent() {
    render(<RegistraProduto />, { wrapper:BrowserRouter })
}

describe("RegistraProduto", () => {
    test("se o componente é renderizado corretamente com título Cadastro de produtos", async () => {
        renderComponent() 
        const titulo = await screen.findByRole("heading", {
            name: "Cadastro de produtos",
        })

    expect(titulo).toBeInTheDocument()
    })
})

test("se o formulário e renderizado com as opções de produto corretas", async () => {
    renderComponent()
    const racao = await screen.findByText("Ração")
    const antiparasitario = await screen.findByText("Antiparasitário")
    const antipulgas = await screen.findByText("Antipulgas")

    expect(racao).toBeInTheDocument()
    expect(antiparasitario).toBeInTheDocument()
    expect(antipulgas).toBeInTheDocument()
})