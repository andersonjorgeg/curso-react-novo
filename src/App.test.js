import { render, screen } from '@testing-library/react';
import App from './App';

// Define um teste usando a função 'test' do Jest. O teste verifica se o texto 'learn react'
// é renderizado na tela quando o componente App é renderizado
test('renders learn react link', () => {
  // Renderiza o componente App em um elemento de teste
  render(<App />);

  // Busca por um elemento HTML na tela que contenha o texto 'learn react'
  // O '/i' no final da string indica que a pesquisa é case-insensitive
  const linkElement = screen.getByText(/learn react/i);

  // Faz uma asserção sobre o elemento retornado pelo 'getByText', verificando se ele está presente no documento HTML
  expect(linkElement).toBeInTheDocument();
});

