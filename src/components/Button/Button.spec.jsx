import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./index";

// Inicia a descrição do teste do componente Button
describe("<Button />", () => {
   // Inicia a descrição de um teste específico
  it('should render the button with the text "Carregue mais"', () => {

    //1. Renderiza o componente Button 
    render(<Button text="Carregue mais" />);

    //2. Procura pelo elemento button 
    const button = screen.getByRole("button", { name: /Carregue mais/i });

    //3. Verifica se o elemento está presente no documento
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {

    // Cria uma função "fn" mock com o Jest
    const fn = jest.fn(); 

    //1. Renderiza o componente Button
    render(<Button text="Carregue mais" onClick={fn} />);

    //2. Procura pelo elemento button
    const button = screen.getByRole("button", { name: /Carregue mais/i });

    //3. Simula um clique no elemento button
    userEvent.click(button);

    //4. Verifica se a função "fn" foi chamada uma vez
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    //1. Renderiza o componente Button
    render(<Button text="Carregue mais" disabled={true} />);

    //2. Procura pelo elemento button
    const button = screen.getByRole("button", { name: /Carregue mais/i });

    // Verifica se o elemento está desabilitado
    expect(button).toBeDisabled();
  });

  it("should be disabled when disabled is false", () => {
    //1. Renderiza o componente Button
    render(<Button text="Carregue mais" disabled={false} />);

    //2. Procura pelo elemento button
    const button = screen.getByRole("button", { name: /Carregue mais/i });

    // Verifica se o elemento está habilitado
    expect(button).toBeEnabled();
  });
});
