import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Como economizar dinheiro no dia a dia",
        body: "Existem muitas maneiras de economizar dinheiro no dia a dia. Algumas dicas incluem",
      },
      {
        id: 2,
        title: "Como fazer exercícios em casa",
        body: "Fazer exercícios em casa é uma ótima maneira de se manter ativo e saudável, mesmo quando não é possível ir a uma academia. Algumas dicas para começar a exercitar-se em casa incluem",
      },
      {
        id: 3,
        title: "Como criar hábitos saudáveis",
        body: "Criar hábitos saudáveis pode ajudar a melhorar sua saúde e bem-estar geral. Algumas dicas para criar hábitos saudáveis incluem",
      },
    ],
  };

  timeoutUpdate = null;

  componentDidMount() {
    this.HandleTimeout();
  }

  componentDidUpdate() {
    //this.HandleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  HandleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mudou!";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
