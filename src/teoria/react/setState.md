# O que é o método setState em React e como ele é utilizado?

`setState` é um método utilizado em aplicações React para atualizar o estado de um componente. O método recebe dois parâmetros:

* `state`: um objeto que representa as novas propriedades do estado do componente.
* `callback (opcional)`: uma função que é chamada depois que o estado é atualizado.

O método `setState` é usado para atualizar o estado do componente de maneira síncrona ou assíncrona. Quando o método é chamado, ele atualiza o estado do componente e, em seguida, chama a função de retorno de chamada (se fornecida). Isso permite que você execute alguma lógica após o estado ser atualizado.

Exemplo de uso:

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log('O novo contador é', this.state.count);
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Clique aqui para aumentar o contador
      </button>
    );
  }
}
```

Neste exemplo, quando o botão é clicado, o método `handleClick` é chamado. Dentro do método, o método `setState` é chamado para atualizar o estado do componente, incrementando o valor do contador em 1. Depois que o estado é atualizado, a função de retorno de chamada é chamada e exibe o novo valor do contador no console.
