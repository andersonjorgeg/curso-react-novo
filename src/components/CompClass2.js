import { Component } from "react";

class App2 extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'Anderson Jorge'
    };

  }

  handlePClick() {
    const { name } = this.state;
    console.log(`Clicou em ${name} `);
  }

  render() {
    const { name } = this.state;

    return <h1 onClick={this.handlePClick}>OLA {name}</h1>;
  }
}

export default App2;
