import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Armazem from "./Armazem";

function renderComponent() {
    render (<Armazem />, { wrapper:BrowserRouter })
}

describe ("Armazem", () => {
    test("se o componente é renderizado corretamente com título Cadastro de Armazenamento", async () => {
        renderComponent()
        const title = await screen.findByRole("heading", { name: "Cadastro de Armazenamento" })
        expect(title).toBeInTheDocument()
    })

    test("ao entrar na página deve renderiza a lista de armazem", async () => {
        renderComponent()
        const title = screen.getByRole("heading", { name: "Locais de Armazenamento Cadastrados" })
        expect(title).toBeInTheDocument()
    })
})