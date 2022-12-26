# Como usar o evento `onChange` no React

A sintaxe básica para usar o `evento onChange` em um componente do React é a seguinte:

```
<input type="text" value={this.state.text} onChange={this.handleChange} />
```

Neste exemplo, o onChange está sendo atribuído a um elemento de input do tipo texto. O valor do atributo onChange é uma função chamada `handleChange`, que é responsável por atualizar o estado do componente com o texto digitado pelo usuário.

A função handleChange deve ser declarada no componente e deve receber um parâmetro chamado `event`, que representa o evento ocorrido. A função pode ser escrita da seguinte maneira:

```
handleChange(event) {
  this.setState({text: event.target.value});
}
```

Neste exemplo, a função handleChange atualiza o estado do componente com o valor atual do elemento de input, que pode ser acessado através do objeto `event.target.value`.

É importante lembrar que o onChange só é disparado quando o usuário altera o valor do elemento de formulário, então é necessário usar outros eventos, como o `onSubmit`, para realizar ações quando o formulário é enviado.


