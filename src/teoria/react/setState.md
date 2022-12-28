# "Entendendo o método `setState` do React

O método `setState` é um método presente em componentes React que permite atualizar o estado do componente. Ele recebe como primeiro parâmetro uma variável que representa o novo estado do componente, que pode ser do tipo `string`, `number` ou `symbol`. Ele também pode receber como segundo parâmetro uma função de callback, que é uma função que será executada após o estado do componente ser atualizado. O setState é uma forma de atualizar o estado de um componente de maneira síncrona ou assíncrona, e é importante para a reatividade do React, pois permite que o componente se atualize automaticamente quando o estado muda.

Por exemplo, imagine que você tem um componente que exibe uma lista de itens e deseja adicionar um novo item à lista. Você pode fazer isso usando o `setState` da seguinte maneira:

```
class MyComponent extends React.Component {
  state = {
    items: ['item 1', 'item 2', 'item 3']
  };

  addItem = () => {
    this.setState({
      items: [...this.state.items, 'novo item']
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addItem}>Adicionar item</button>
        <ul>
          {this.state.items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

Ao clicar no botão, a função addItem é chamada e o setState é usado para atualizar o estado do componente, adicionando um novo item à lista. Isso faz com que o componente seja renderizado novamente, exibindo a nova lista de itens para o usuário.
