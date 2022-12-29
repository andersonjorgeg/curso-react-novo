# Como usar o método `getByRole` para acessar elementos pelo papel em testes de componentes React?

`getByRole` é um método do objeto `screen` fornecido pelo pacote `@testing-library/react` que permite acessar elementos renderizados pelo componente em testes de componentes React de acordo com seus papéis. Ele é um método genérico, o que significa que pode ser utilizado para buscar elementos de qualquer tipo de elemento HTML, desde que o papel correspondente seja especificado.

A assinatura do método getByRole é a seguinte:

```
getByRole<HTMLElement>(role: ByRoleMatcher, options?: ByRoleOptions | undefined): HTMLElement
```

O primeiro parâmetro, `role`, é um matcher de papel que especifica o papel do elemento que se deseja buscar. Ele pode ser uma string com o nome do papel exato, ou uma expressão regular que será usada para comparar o papel do elemento.

O segundo parâmetro, `options`, é um objeto com opções adicionais que podem ser usadas para ajustar a busca pelo elemento. Algumas das opções disponíveis são:

* `name`: especifica um nome ou uma expressão regular que deve ser comparada com o rótulo do elemento.
* `exact`: indica se o papel e o nome devem ser comparados de maneira exata ou se uma correspondência parcial é suficiente.

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
const { getByRole } = render(component);

// Busca o botão pelo papel "button" e pelo rótulo "Adicionar item"
const button = getByRole('button', { name: 'Adicionar item' });
// Verifica se o botão está presente no componente renderizado
expect(button).toBeInTheDocument();

// Busca o input pelo papel "input" e pelo rótulo "Nome do item"
const input = getByRole('input', { name: 'Nome do item' });
// Verifica se o input está presente no componente renderizado
expect(input).toBeInTheDocument();
```
