# Utilizando o evento `onClick` em React

A sintaxe para o evento `onClick em React` em português seria algo como:

```
< elemento onClick={suaFuncao} > 
```

Isso significa que, quando o elemento for clicado pelo usuário, a função especificada será executada.

Por exemplo:

```
import React from 'react';

function MeuComponente() {
  function handleClick() {
    console.log('O elemento foi clicado');
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

Neste exemplo, quando o usuário clicar no botão, a função handleClick será chamada e o texto "O elemento foi clicado" será impresso no console.
