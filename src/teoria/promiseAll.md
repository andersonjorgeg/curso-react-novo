# Como utilizar a função `Promise.all` para aguardar o término de múltiplas promises no JavaScript

`Promise.all` é uma função presente na biblioteca de Promises do JavaScript que permite aguardar o término de uma lista de promises. Quando todas as promises da lista forem concluídas (sejam elas resolvidas ou rejeitadas), a promise retornada por Promise.all será resolvida com um array que contém o resultado de cada uma dessas promises.

Por exemplo, imagine que você quer fazer duas requisições HTTP assíncronas para duas URLs diferentes e, quando ambas forem concluídas, quiser processar os resultados. Você pode fazer isso da seguinte maneira:

```
const request1 = fetch('https://example.com/api/endpoint1');
const request2 = fetch('https://example.com/api/endpoint2');

Promise.all([request1, request2])
  .then(results => {
    // results é um array que contém os resultados de request1 e request2
    // você pode processar os resultados aqui
  })
  .catch(error => {
    // um erro ocorreu em pelo menos uma das promises da lista
  });
```

Se qualquer uma das promises da lista for rejeitada, a promise retornada por Promise.all será imediatamente rejeitada com o mesmo valor de reject da primeira promise rejeitada na lista. Isso permite tratar erros de maneira mais fácil quando há várias promises sendo executadas em paralelo.
