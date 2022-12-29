# O que é o objeto `screen` em testes de componentes React?

`screen` é um objeto fornecido pelo pacote `@testing-library/react` que permite acessar elementos renderizados pelo componente em testes de componentes React. Ele é retornado pela função render quando um componente é renderizado na memória durante um teste.

O objeto `screen` possui uma série de métodos que permitem acessar elementos renderizados pelo componente de acordo com seus papéis e rótulos. Alguns exemplos de métodos comuns são:

* `getByRole`: busca um elemento com um determinado papel, como "button", "input", etc.
* `getByLabelText`: busca um elemento com um rótulo igual ou similar ao texto especificado.
* `getByText`: busca um elemento com um texto igual ou similar ao texto especificado.

Exemplo de uso:

```
import { render } from '@testing-library/react';

const component = (
  <div>
    <button aria-label="Adicionar item">+</button>
    <input type="text" aria-label="Nome do item" />
  </div>
);

// Renderiza o componente na memória
const { getByRole, getByLabelText } = render(component);

// Busca o botão pelo papel "button"
const button = getByRole('button');
// Verifica se o botão está presente no componente renderizado
expect(button).toBeInTheDocument();

// Busca o input pelo rótulo "Nome do item"
const input = getByLabelText('Nome do item');
// Verifica se o input está presente no componente renderizado
expect(input).toBeInTheDocument();
```
