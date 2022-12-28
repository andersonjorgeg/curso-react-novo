import "../Home/styles.css";
import { Component } from "react";

export class HomeClass extends Component {
  state = {
    counter: 0,
  };

  // Essa é uma função de callback que é chamada quando o botão é clicado.
  handleClick = () => {
    // Aqui, estamos usando o método setState do React para atualizar o estado do componente.
    this.setState(
      // O primeiro argumento é uma função que recebe o estado anterior e as propriedades anteriores como argumentos.
      (prevState, prevProps) => {
        // A função deve retornar um objeto que representa as alterações no estado.
        // Nesse caso, estamos incrementando o contador atual com o número que foi passado como propriedade para o componente.
        return { counter: prevState.counter + prevProps.numberToIncrement };
      },
      // O segundo argumento é uma função de callback que é chamada após o estado ser atualizado.
      () => {
        // Aqui, estamos imprimindo o valor atualizado do contador no console.
        console.log(this.state.counter);
      }
    );
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="container">
        <h1>{counter}</h1>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}
