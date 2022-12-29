# O que é o método `toBeInTheDocument` e como usá-lo em testes de componentes React?

`toBeInTheDocument` é um método de verificação fornecido pelo pacote `@testing-library/react` que permite verificar se um elemento está presente na página atual. Ele é um método da interface `TestingLibraryMatchers`, que é um conjunto de métodos de verificação que podem ser usados com a função `expect` para verificar o estado de um elemento ou componente renderizado.

A assinatura do método toBeInTheDocument é a seguinte:

```
toBeInTheDocument(): void
```

Ele não possui parâmetros e retorna `void`, ou seja, não retorna nenhum valor.

Exemplo de uso:

```
import { render } from '@testing-library/react';

const component = <div>Meu componente</div>;

// Renderiza o componente na memória
const { getByText } = render(component);

// Busca o elemento com o texto "Meu componente"
const element = getByText('Meu componente');

// Verifica se o elemento está presente na página
expect(element).toBeInTheDocument();
```

`Observação`: o método toBeInTheDocument verifica se o elemento está presente no DOM da página atual. Isso significa que ele pode retornar falso caso o elemento tenha sido renderizado na memória, mas ainda não tenha sido inserido no DOM da página. Para verificar se um elemento está presente na representação em memória do componente renderizado, é possível usar o método toBeInTheDocument do objeto container retornado pela função render.
