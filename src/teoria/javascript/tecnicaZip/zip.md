# Combinando matrizes em uma única matriz usando a técnica 'zip' em JavaScript

A técnica `"zip"` em JavaScript se refere ao processo de combinar duas ou mais matrizes em uma única matriz, de modo que os elementos correspondentes nas matrizes sejam agrupados em pares. Por exemplo, se você tiver duas matrizes:

```
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
```

Você pode usar a técnica "zip" para combiná-las em uma única matriz como a seguinte:

```
const zipped = [['a', 1], ['b', 2], ['c', 3]];
```

Para implementar a técnica `"zip"` em JavaScript, você pode usar o método `map()`. O método map() permite aplicar uma função a cada elemento de uma matriz e retornar uma nova matriz com os resultados da função aplicada.

Aqui está um exemplo de como usar a técnica "zip" em JavaScript:

```
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

const zipped = array1.map((x, i) => [x, array2[i]]);
// zipped é [['a', 1], ['b', 2], ['c', 3]]
```


