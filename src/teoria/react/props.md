# Como passar `props` para um componente filho como argumento usando o operador de desestruturação em React

Em React, as `props` (abreviação de "properties") são uma forma de passar dados de um componente pai para um componente filho. Elas são declaradas como atributos do elemento do componente filho e podem ser acessadas dentro do componente filho por meio da propriedade props.

É possível passar as props para o componente filho diretamente como um argumento na chamada do componente, usando o operador de `desestruturação` (...) para desmembrar os valores das props e passá-los como argumentos individuais para o componente filho.

Por exemplo, considere o seguinte código, que tem um componente `pai App` e um componente `filho Greeting`:

```
import React from 'react';

//Componente Filho
function Greeting({ name, age }) {
  return <p>Olá, meu nome é {name} e tenho {age} anos.</p>;
}

//Componente Pai
function App() {
  return (
    <div>
      <Greeting name="João" age={30} />
    </div>
  );
}
```

Neste exemplo, o componente `pai App` passa as props name e age para o componente `filho Greeting` como atributos do elemento `Greeting`. Dentro do componente filho, essas props são desmembradas usando o operador de desestruturação e passadas como argumentos para a função Greeting. Isso permite que o componente filho acesse os valores dessas props diretamente, como mostrado na linha de retorno da função Greeting.
