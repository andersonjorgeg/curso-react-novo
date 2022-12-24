# O que é o método `componentDidUpdate` e como usar os argumentos `prevProps` e `prevState` em uma aplicação React

O método `componentDidUpdate` é um método do ciclo de vida de um componente em uma aplicação React. Ele é chamado imediatamente após a atualização de um componente. Esse método pode ser chamado com três argumentos:

* `prevProps`: as propriedades que o componente tinha antes da atualização.
* `prevState`: o estado que o componente tinha antes da atualização.
* `snapshot`: um valor opcional que pode ser passado como um terceiro argumento para o método componentDidUpdate. Esse valor é retornado pelo método getSnapshotBeforeUpdate, que é chamado imediatamente antes de componentDidUpdate.

Aqui está um exemplo de como os argumentos `prevProps` e `prevState` podem ser usados no método componentDidUpdate:

```
class MyComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // Verifique se a propriedade user mudou desde a última atualização
    if (prevProps.user !== this.props.user) {
      // Atualize o estado do componente com o novo usuário
      this.setState({ user: this.props.user });
    }

    // Verifique se o estado do componente mudou desde a última atualização
    if (prevState.count !== this.state.count) {
      // Atualize a propriedade value com o novo valor do estado count
      this.setState({ value: this.state.count });
    }
    render() {
      return (
        <div>
          <div>{this.state.user.name}</div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Incrementar
          </button>
          <div>{this.state.value}</div>
        </div>
      );
    }
  }
}
```

Neste exemplo, o método `componentDidUpdate` verifica se a propriedade `user` ou o estado `count` mudaram desde a última atualização do componente. Se a propriedade `user` tiver mudado, o método `setState` é chamado para atualizar o estado do componente com o novo usuário. Se o estado `count` tiver mudado, o método `setState` é chamado para atualizar a propriedade value com o novo valor do estado count.
