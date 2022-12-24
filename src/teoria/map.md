# Entendendo e utilizando a função map() no JavaScript

A função `map()` é uma função de alta ordem que faz parte do `objeto Array` no JavaScript. Ela permite aplicar uma determinada função a cada elemento de um `array` e retornar um novo array com os resultados.

A sintaxe da função `map()` é a seguinte:

<pre>
<code>
  array.map(function(valorAtual, índice, array) {
    <span style="color: green">// código para aplicar à cada elemento do array</span>
  });
</code>
</pre>

Onde:

* `array` é o array que você quer modificar.
* `function` é a função que será aplicada a cada elemento do array. Essa função tem três argumentos:
  * `valorAtual` é o elemento atual sendo processado no array.
  * `índice` é o índice do elemento atual sendo processado no array.
  * `array` é o próprio array que está sendo processado.

Exemplo:

<pre>
<code>
  const numbers = [1, 2, 3, 4, 5];

  const dobrados = numbers.map(function(number) {
    return number * 2;
  });

  console.log(dobrados); <span style="color: green">// [2, 4, 6, 8, 10]</span>
</code>
</pre>

No exemplo acima, a função `map()` é aplicada ao `array numbers` e, para cada elemento do array, a função multiplica o número por 2 e retorna o resultado. O novo array doubled é então criado com os resultados dessa operação.

Você também pode usar a sintaxe de arrow function para escrever a função de callback de forma mais concisa:

<pre>
<code>
  const dobrados = numbers.map(number => number * 2);
</code>
</pre>

<span style="color: green">É importante notar que a função `map()` não altera o array original, ela retorna um novo array com os resultados da operação aplicada a cada elemento. Se você quiser modificar o array original, pode usar o método `forEach()`, que não retorna um novo array.</span>

Se você quiser usar a sintaxe de `arrow function`, mas não quiser usar chaves para envolver o corpo da função, é possível envolver a expressão que será retornada com parênteses. 

Por exemplo:

<pre>
<code>
<span style="color: green">// Usando a sintaxe de arrow function com parênteses</span>
const numbers = [1, 2, 3, 4, 5];
const dobrados = numbers.map(number => (
number * 2
));
console.log(doubled); <span style="color: green">// [2, 4, 6, 8, 10]</span>
</code>
</pre>
