import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "./Menu";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

function renderComponent() {
  render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );

  const logo = screen.getByRole("img", { name: /logo/i });
  const dahboardButton = screen.getByRole("button", { name: /dashboard/i });
  const estoqueButton = screen.queryByRole("button", { name: /estoque/i });
  const armazemButton = screen.queryByRole("button", { name: /cadastro armazenammento/i });

  return { logo, dahboardButton, estoqueButton, armazemButton };
}

describe("Menu", () => {
  test("se o componente é renderizado corretamente: com logo e 3 botões/links", () => {
    const { logo, dahboardButton, estoqueButton, armazemButton } =
      renderComponent();

    expect(logo).toBeInTheDocument();
    expect(dahboardButton).toBeInTheDocument();
    expect(estoqueButton).toBeInTheDocument();
    expect(armazemButton).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("se o botão da rota default inicia selecionado e os demais não selecionados", () => {
    const { dahboardButton, estoqueButton, armazemButton } =
      renderComponent();

    expect(dahboardButton).not.toHaveClass("selected");
    expect(estoqueButton).not.toHaveClass("selected");
    expect(armazemButton).not.toHaveClass("selected");
  });

  test("se a rota é alterada corretamente quando clica em algum botão", async () => {
    const user = userEvent.setup();
    const { dahboardButton, estoqueButton, armazemButton } =
      renderComponent();

    await user.click(estoqueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/estoque");

    await user.click(armazemButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/armazem");

    await user.click(dahboardButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/dashboard");
  });

  test("se a rota é alterada para a default quando clica no logo", async () => {
    const user = userEvent.setup();
    const { logo } = renderComponent();

    await user.click(logo);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
