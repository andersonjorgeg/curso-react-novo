# Como usar o método `toHaveAttribute` para verificar atributos em elementos em testes de componentes React?

`toHaveAttribute` é um método de verificação fornecido pelo pacote `@testing-library/react` que permite verificar se um elemento possui um determinado `atributo` e, opcionalmente, se o valor desse atributo é igual a um valor esperado. Ele é um método da interface `TestingLibraryMatchers`, que é um conjunto de métodos de verificação que podem ser usados com a função expect para verificar o estado de um elemento ou componente renderizado.

A assinatura do método `toHaveAttribute` é a seguinte:

```
toHaveAttribute(attr: string, value?: unknown): void
```

* O primeiro parâmetro, `attr`, é uma string com o nome do atributo que se deseja verificar. 
* O segundo parâmetro, `value`, é um valor opcional que especifica o valor esperado para o atributo. Se esse parâmetro for omitido, o método verificará apenas se o atributo está presente no elemento, independentemente do valor.

Exemplo de uso:

```
import { render } from '@testing-library/react';

const component = (
  <div>
    <button disabled>Desativado</button>
    <input type="text" required />
  </div>
);

// Renderiza o componente na memória
const { getByText } = render(component);

// Busca o botão pelo texto "Desativado"
const button = getByText('Desativado');

// Verifica se o botão possui o atributo "disabled"
expect(button).toHaveAttribute('disabled');

// Busca o input pelo papel "input"
const input = getByRole('input');

// Verifica se o input possui o atributo "required" com o valor "true"
expect(input).toHaveAttribute('required', true);
```

`Observação`: o método `toHaveAttribute` verifica apenas atributos HTML padrão, e não atributos personalizados, como os atributos `data-testid` ou `data-test-id`. Para verificar atributos personalizados, é possível usar o método `toHaveAttribute` em conjunto com o método `getByTestId`.
